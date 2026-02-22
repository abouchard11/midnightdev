import { useAuth, useUser, useClerk, SignInButton } from "@clerk/clerk-react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Shield,
  Users,
  Mail,
  CreditCard,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ExternalLink,
  RefreshCw,
  LogOut,
  FileText,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff
} from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { toast } from "sonner";

function StatusBadge({ status }: { status: string }) {
  const variants: Record<string, { color: string; icon: React.ReactNode }> = {
    new: { color: "bg-blue-500/20 text-blue-400 border-blue-500/30", icon: <AlertCircle className="w-3 h-3" /> },
    contacted: { color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", icon: <Clock className="w-3 h-3" /> },
    converted: { color: "bg-green-500/20 text-green-400 border-green-500/30", icon: <CheckCircle2 className="w-3 h-3" /> },
    closed: { color: "bg-gray-500/20 text-gray-400 border-gray-500/30", icon: <XCircle className="w-3 h-3" /> },
    pending: { color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", icon: <Clock className="w-3 h-3" /> },
    completed: { color: "bg-green-500/20 text-green-400 border-green-500/30", icon: <CheckCircle2 className="w-3 h-3" /> },
    failed: { color: "bg-red-500/20 text-red-400 border-red-500/30", icon: <XCircle className="w-3 h-3" /> },
    draft: { color: "bg-gray-500/20 text-gray-400 border-gray-500/30", icon: <EyeOff className="w-3 h-3" /> },
    published: { color: "bg-green-500/20 text-green-400 border-green-500/30", icon: <Eye className="w-3 h-3" /> },
  };

  const variant = variants[status] || variants.new;

  return (
    <Badge className={`${variant.color} border font-mono text-xs uppercase flex items-center gap-1`}>
      {variant.icon}
      {status}
    </Badge>
  );
}

interface BlogPostForm {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string;
  readTime: string;
  authorName: string;
  authorRole: string;
  published: boolean;
  featuredImage: string;
}

const emptyPostForm: BlogPostForm = {
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  category: "GEO",
  tags: "",
  readTime: "5 min read",
  authorName: "Midnight Dev Team",
  authorRole: "Engineering",
  published: false,
  featuredImage: "",
};

export default function Admin() {
  const { isSignedIn, isLoaded } = useAuth();
  const { user: clerkUser } = useUser();
  const { signOut } = useClerk();
  const utils = trpc.useUtils();

  // Get DB user for role check
  const { data: dbUser, isLoading: dbUserLoading } = trpc.auth.me.useQuery(undefined, {
    enabled: isSignedIn,
  });

  // Blog post form state
  const [postForm, setPostForm] = useState<BlogPostForm>(emptyPostForm);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [isPostDialogOpen, setIsPostDialogOpen] = useState(false);

  const isAuthenticated = !!(isSignedIn && dbUser);
  const isAdmin = dbUser?.role === "admin";

  // Fetch data
  const { data: leads, isLoading: leadsLoading } = trpc.audit.list.useQuery(undefined, {
    enabled: isAuthenticated && isAdmin,
  });
  const { data: contacts, isLoading: contactsLoading } = trpc.contact.list.useQuery(undefined, {
    enabled: isAuthenticated && isAdmin,
  });
  const { data: payments, isLoading: paymentsLoading } = trpc.stripe.listPayments.useQuery(undefined, {
    enabled: isAuthenticated && isAdmin,
  });
  const { data: blogPosts, isLoading: postsLoading } = trpc.blog.all.useQuery(undefined, {
    enabled: isAuthenticated && isAdmin,
  });

  // Mutations
  const updateLeadStatus = trpc.audit.updateStatus.useMutation({
    onSuccess: () => utils.audit.list.invalidate(),
  });
  const updateContactStatus = trpc.contact.updateStatus.useMutation({
    onSuccess: () => utils.contact.list.invalidate(),
  });
  const createPost = trpc.blog.create.useMutation({
    onSuccess: () => {
      utils.blog.all.invalidate();
      setIsPostDialogOpen(false);
      setPostForm(emptyPostForm);
      toast.success("Blog post created!");
    },
    onError: (error) => toast.error(error.message),
  });
  const updatePost = trpc.blog.update.useMutation({
    onSuccess: () => {
      utils.blog.all.invalidate();
      setIsPostDialogOpen(false);
      setPostForm(emptyPostForm);
      setEditingPostId(null);
      toast.success("Blog post updated!");
    },
    onError: (error) => toast.error(error.message),
  });
  const deletePost = trpc.blog.delete.useMutation({
    onSuccess: () => {
      utils.blog.all.invalidate();
      toast.success("Blog post deleted!");
    },
    onError: (error) => toast.error(error.message),
  });

  const handleCreatePost = () => {
    setEditingPostId(null);
    setPostForm(emptyPostForm);
    setIsPostDialogOpen(true);
  };

  const handleEditPost = (post: any) => {
    setEditingPostId(post.id);
    setPostForm({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags || "",
      readTime: post.readTime || "5 min read",
      authorName: post.authorName || "Midnight Dev Team",
      authorRole: post.authorRole || "Engineering",
      published: post.published,
      featuredImage: post.featuredImage || "",
    });
    setIsPostDialogOpen(true);
  };

  const handleSubmitPost = () => {
    if (editingPostId) {
      updatePost.mutate({ id: editingPostId, ...postForm });
    } else {
      createPost.mutate(postForm);
    }
  };

  const handleDeletePost = (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      deletePost.mutate({ id });
    }
  };

  // Loading state
  if (!isLoaded || dbUserLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 text-primary animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground font-mono">AUTHENTICATING_</p>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <Card className="max-w-md w-full bg-black border-white/10">
          <CardHeader className="text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <CardTitle className="font-mono text-2xl">ACCESS_DENIED_</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Authentication required to access the admin dashboard.
            </p>
            <SignInButton mode="modal">
              <Button className="w-full bg-primary hover:bg-primary/90 text-black font-mono">
                AUTHENTICATE_
              </Button>
            </SignInButton>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Not admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <Card className="max-w-md w-full bg-black border-red-500/30">
          <CardHeader className="text-center">
            <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <CardTitle className="font-mono text-2xl text-red-500">FORBIDDEN_</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              You do not have administrator privileges.
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              Logged in as: {clerkUser?.primaryEmailAddress?.emailAddress}
            </p>
            <Button
              onClick={() => signOut()}
              variant="outline"
              className="w-full font-mono"
            >
              <LogOut className="w-4 h-4 mr-2" />
              LOGOUT_
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-mono font-bold">ADMIN_CONSOLE_</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground font-mono">
              {clerkUser?.primaryEmailAddress?.emailAddress}
            </span>
            <Button
              onClick={() => signOut()}
              variant="ghost"
              size="sm"
              className="font-mono"
            >
              <LogOut className="w-4 h-4 mr-2" />
              LOGOUT_
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 px-4">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <Card className="bg-black border-white/10">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase">Audit Leads</p>
                  <p className="text-3xl font-bold">{leads?.length || 0}</p>
                </div>
                <Users className="w-8 h-8 text-primary opacity-50" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black border-white/10">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase">Contacts</p>
                  <p className="text-3xl font-bold">{contacts?.length || 0}</p>
                </div>
                <Mail className="w-8 h-8 text-blue-500 opacity-50" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black border-white/10">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase">Payments</p>
                  <p className="text-3xl font-bold">{payments?.length || 0}</p>
                </div>
                <CreditCard className="w-8 h-8 text-green-500 opacity-50" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black border-white/10">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase">Revenue</p>
                  <p className="text-3xl font-bold">
                    ${payments?.reduce((sum, p) => p.status === "completed" ? sum + (p.amount || 0) : sum, 0) || 0}
                  </p>
                </div>
                <CreditCard className="w-8 h-8 text-yellow-500 opacity-50" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black border-white/10">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase">Blog Posts</p>
                  <p className="text-3xl font-bold">{blogPosts?.length || 0}</p>
                </div>
                <FileText className="w-8 h-8 text-purple-500 opacity-50" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="leads" className="space-y-4">
          <TabsList className="bg-white/5 border border-white/10">
            <TabsTrigger value="leads" className="font-mono data-[state=active]:bg-primary data-[state=active]:text-black">
              LEADS_
            </TabsTrigger>
            <TabsTrigger value="contacts" className="font-mono data-[state=active]:bg-primary data-[state=active]:text-black">
              CONTACTS_
            </TabsTrigger>
            <TabsTrigger value="payments" className="font-mono data-[state=active]:bg-primary data-[state=active]:text-black">
              PAYMENTS_
            </TabsTrigger>
            <TabsTrigger value="blog" className="font-mono data-[state=active]:bg-primary data-[state=active]:text-black">
              BLOG_CMS_
            </TabsTrigger>
          </TabsList>

          {/* Audit Leads Tab */}
          <TabsContent value="leads">
            <Card className="bg-black border-white/10">
              <CardHeader>
                <CardTitle className="font-mono flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  AI Visibility Audit Leads
                </CardTitle>
              </CardHeader>
              <CardContent>
                {leadsLoading ? (
                  <div className="text-center py-8">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
                  </div>
                ) : leads?.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No audit leads yet.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {leads?.map((lead) => (
                      <div key={lead.id} className="border border-white/10 p-4 hover:border-primary/30 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold">{lead.businessName}</h4>
                              <StatusBadge status={lead.status} />
                            </div>
                            <p className="text-sm text-muted-foreground">{lead.email}</p>
                            <a
                              href={lead.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline flex items-center gap-1"
                            >
                              {lead.websiteUrl} <ExternalLink className="w-3 h-3" />
                            </a>
                            <p className="text-xs text-muted-foreground">
                              {lead.industry} • {lead.serviceArea || "No location"}
                            </p>
                            {lead.aiRecommendationGoal && (
                              <p className="text-xs text-muted-foreground italic mt-2">
                                "{lead.aiRecommendationGoal}"
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <Select
                              value={lead.status}
                              onValueChange={(value) => updateLeadStatus.mutate({ id: lead.id, status: value as any })}
                            >
                              <SelectTrigger className="w-32 bg-white/5 border-white/10">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="contacted">Contacted</SelectItem>
                                <SelectItem value="converted">Converted</SelectItem>
                                <SelectItem value="closed">Closed</SelectItem>
                              </SelectContent>
                            </Select>
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(lead.createdAt), "MMM d, yyyy")}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts">
            <Card className="bg-black border-white/10">
              <CardHeader>
                <CardTitle className="font-mono flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-500" />
                  Contact Submissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {contactsLoading ? (
                  <div className="text-center py-8">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
                  </div>
                ) : contacts?.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No contact submissions yet.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {contacts?.map((contact) => (
                      <div key={contact.id} className="border border-white/10 p-4 hover:border-blue-500/30 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold">{contact.name}</h4>
                              <StatusBadge status={contact.status} />
                            </div>
                            <p className="text-sm text-muted-foreground">{contact.email}</p>
                            {contact.company && (
                              <p className="text-sm text-muted-foreground">{contact.company}</p>
                            )}
                            {contact.service && (
                              <Badge variant="outline" className="text-xs">{contact.service}</Badge>
                            )}
                            <p className="text-sm mt-2 bg-white/5 p-3 rounded border border-white/5">
                              {contact.message}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Select
                              value={contact.status}
                              onValueChange={(value) => updateContactStatus.mutate({ id: contact.id, status: value as any })}
                            >
                              <SelectTrigger className="w-32 bg-white/5 border-white/10">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="contacted">Contacted</SelectItem>
                                <SelectItem value="converted">Converted</SelectItem>
                                <SelectItem value="closed">Closed</SelectItem>
                              </SelectContent>
                            </Select>
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(contact.createdAt), "MMM d, yyyy")}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments">
            <Card className="bg-black border-white/10">
              <CardHeader>
                <CardTitle className="font-mono flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-green-500" />
                  Payment History
                </CardTitle>
              </CardHeader>
              <CardContent>
                {paymentsLoading ? (
                  <div className="text-center py-8">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
                  </div>
                ) : payments?.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No payments yet.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {payments?.map((payment) => (
                      <div key={payment.id} className="border border-white/10 p-4 hover:border-green-500/30 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold">{payment.customerEmail}</h4>
                              <StatusBadge status={payment.status} />
                            </div>
                            <p className="text-sm text-muted-foreground font-mono">
                              {payment.productType?.toUpperCase().replace("_", " ")}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Session: {payment.stripeSessionId?.slice(0, 20)}...
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-green-500">${payment.amount}</p>
                            <p className="text-xs text-muted-foreground">
                              {format(new Date(payment.createdAt), "MMM d, yyyy h:mm a")}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blog CMS Tab */}
          <TabsContent value="blog">
            <Card className="bg-black border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-mono flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-500" />
                  Blog Content Management
                </CardTitle>
                <Dialog open={isPostDialogOpen} onOpenChange={setIsPostDialogOpen}>
                  <DialogTrigger asChild>
                    <Button onClick={handleCreatePost} className="bg-primary hover:bg-primary/90 text-black font-mono">
                      <Plus className="w-4 h-4 mr-2" />
                      NEW_POST_
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-black border-white/10 max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="font-mono">
                        {editingPostId ? "EDIT_POST_" : "CREATE_POST_"}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="title">Title</Label>
                          <Input
                            id="title"
                            value={postForm.title}
                            onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                            className="bg-white/5 border-white/10"
                            placeholder="Post title..."
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="slug">Slug</Label>
                          <Input
                            id="slug"
                            value={postForm.slug}
                            onChange={(e) => setPostForm({ ...postForm, slug: e.target.value })}
                            className="bg-white/5 border-white/10"
                            placeholder="url-friendly-slug"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea
                          id="excerpt"
                          value={postForm.excerpt}
                          onChange={(e) => setPostForm({ ...postForm, excerpt: e.target.value })}
                          className="bg-white/5 border-white/10"
                          placeholder="Brief description..."
                          rows={2}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="content">Content (Markdown)</Label>
                        <Textarea
                          id="content"
                          value={postForm.content}
                          onChange={(e) => setPostForm({ ...postForm, content: e.target.value })}
                          className="bg-white/5 border-white/10 font-mono text-sm"
                          placeholder="Write your post content in Markdown..."
                          rows={10}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Select
                            value={postForm.category}
                            onValueChange={(value) => setPostForm({ ...postForm, category: value })}
                          >
                            <SelectTrigger className="bg-white/5 border-white/10">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="GEO">GEO</SelectItem>
                              <SelectItem value="SaaS">SaaS</SelectItem>
                              <SelectItem value="AI">AI</SelectItem>
                              <SelectItem value="Engineering">Engineering</SelectItem>
                              <SelectItem value="Strategy">Strategy</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="tags">Tags (comma-separated)</Label>
                          <Input
                            id="tags"
                            value={postForm.tags}
                            onChange={(e) => setPostForm({ ...postForm, tags: e.target.value })}
                            className="bg-white/5 border-white/10"
                            placeholder="seo, ai, marketing"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="authorName">Author Name</Label>
                          <Input
                            id="authorName"
                            value={postForm.authorName}
                            onChange={(e) => setPostForm({ ...postForm, authorName: e.target.value })}
                            className="bg-white/5 border-white/10"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="readTime">Read Time</Label>
                          <Input
                            id="readTime"
                            value={postForm.readTime}
                            onChange={(e) => setPostForm({ ...postForm, readTime: e.target.value })}
                            className="bg-white/5 border-white/10"
                            placeholder="5 min read"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="featuredImage">Featured Image URL</Label>
                        <Input
                          id="featuredImage"
                          value={postForm.featuredImage}
                          onChange={(e) => setPostForm({ ...postForm, featuredImage: e.target.value })}
                          className="bg-white/5 border-white/10"
                          placeholder="https://..."
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="published"
                          checked={postForm.published}
                          onCheckedChange={(checked) => setPostForm({ ...postForm, published: checked })}
                        />
                        <Label htmlFor="published">Publish immediately</Label>
                      </div>
                      <Button
                        onClick={handleSubmitPost}
                        className="w-full bg-primary hover:bg-primary/90 text-black font-mono"
                        disabled={createPost.isPending || updatePost.isPending}
                      >
                        {createPost.isPending || updatePost.isPending ? (
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        ) : null}
                        {editingPostId ? "UPDATE_POST_" : "CREATE_POST_"}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {postsLoading ? (
                  <div className="text-center py-8">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
                  </div>
                ) : blogPosts?.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No blog posts yet. Create your first post!
                  </div>
                ) : (
                  <div className="space-y-4">
                    {blogPosts?.map((post) => (
                      <div key={post.id} className="border border-white/10 p-4 hover:border-purple-500/30 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold">{post.title}</h4>
                              <StatusBadge status={post.published ? "published" : "draft"} />
                              <Badge variant="outline" className="text-xs">{post.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                            <p className="text-xs text-muted-foreground">
                              /{post.slug} • {post.readTime} • {post.authorName}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEditPost(post)}
                              className="text-blue-400 hover:text-blue-300"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeletePost(post.id)}
                              className="text-red-400 hover:text-red-300"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                            <a
                              href={`/insights/${post.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-white"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(post.createdAt), "MMM d")}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
