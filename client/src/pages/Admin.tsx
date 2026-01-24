import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  LogOut
} from "lucide-react";
import { getLoginUrl } from "@/const";
import { format } from "date-fns";

function StatusBadge({ status }: { status: string }) {
  const variants: Record<string, { color: string; icon: React.ReactNode }> = {
    new: { color: "bg-blue-500/20 text-blue-400 border-blue-500/30", icon: <AlertCircle className="w-3 h-3" /> },
    contacted: { color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", icon: <Clock className="w-3 h-3" /> },
    converted: { color: "bg-green-500/20 text-green-400 border-green-500/30", icon: <CheckCircle2 className="w-3 h-3" /> },
    closed: { color: "bg-gray-500/20 text-gray-400 border-gray-500/30", icon: <XCircle className="w-3 h-3" /> },
    pending: { color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", icon: <Clock className="w-3 h-3" /> },
    completed: { color: "bg-green-500/20 text-green-400 border-green-500/30", icon: <CheckCircle2 className="w-3 h-3" /> },
    failed: { color: "bg-red-500/20 text-red-400 border-red-500/30", icon: <XCircle className="w-3 h-3" /> },
  };

  const variant = variants[status] || variants.new;

  return (
    <Badge className={`${variant.color} border font-mono text-xs uppercase flex items-center gap-1`}>
      {variant.icon}
      {status}
    </Badge>
  );
}

export default function Admin() {
  const { user, loading, isAuthenticated, logout } = useAuth();
  const utils = trpc.useUtils();

  // Fetch data
  const { data: leads, isLoading: leadsLoading } = trpc.audit.list.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
  });
  const { data: contacts, isLoading: contactsLoading } = trpc.contact.list.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
  });
  const { data: payments, isLoading: paymentsLoading } = trpc.stripe.listPayments.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
  });

  // Mutations
  const updateLeadStatus = trpc.audit.updateStatus.useMutation({
    onSuccess: () => utils.audit.list.invalidate(),
  });
  const updateContactStatus = trpc.contact.updateStatus.useMutation({
    onSuccess: () => utils.contact.list.invalidate(),
  });

  // Loading state
  if (loading) {
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
  if (!isAuthenticated) {
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
            <Button 
              onClick={() => window.location.href = getLoginUrl()}
              className="w-full bg-primary hover:bg-primary/90 text-black font-mono"
            >
              AUTHENTICATE_
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Not admin
  if (user?.role !== "admin") {
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
              Logged in as: {user?.email}
            </p>
            <Button 
              onClick={() => logout()}
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
            <span className="text-sm text-muted-foreground font-mono">{user?.email}</span>
            <Button 
              onClick={() => logout()} 
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
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
                  <p className="text-xs text-muted-foreground font-mono uppercase">Contact Requests</p>
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
                    ${payments?.filter(p => p.status === "completed").reduce((sum, p) => sum + (p.amount || 0), 0) || 0}
                  </p>
                </div>
                <CreditCard className="w-8 h-8 text-yellow-500 opacity-50" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="leads" className="space-y-4">
          <TabsList className="bg-white/5 border border-white/10">
            <TabsTrigger value="leads" className="font-mono data-[state=active]:bg-primary data-[state=active]:text-black">
              AUDIT_LEADS_
            </TabsTrigger>
            <TabsTrigger value="contacts" className="font-mono data-[state=active]:bg-primary data-[state=active]:text-black">
              CONTACTS_
            </TabsTrigger>
            <TabsTrigger value="payments" className="font-mono data-[state=active]:bg-primary data-[state=active]:text-black">
              PAYMENTS_
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
        </Tabs>
      </main>
    </div>
  );
}
