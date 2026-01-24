import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Search, BarChart3, Zap, Code, Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { trpc } from "@/lib/trpc";

export default function Audit() {
  const [formData, setFormData] = useState({
    businessName: "",
    websiteUrl: "",
    industry: "",
    serviceArea: "",
    email: "",
    aiRecommendationGoal: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.audit.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: (error) => {
      alert("Error submitting audit request: " + error.message);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.industry) {
      alert("Please select an industry");
      return;
    }
    submitMutation.mutate(formData);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <SEO 
          title="Audit Request Received | Midnight Dev"
          description="Your AI Visibility Audit request has been submitted successfully."
          url="/audit"
        />
        <Navigation />
        <main className="pt-32 pb-24">
          <div className="container max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse" />
                <CheckCircle className="w-24 h-24 text-green-500 relative z-10" strokeWidth={1.5} />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
                REQUEST_RECEIVED_
              </h1>
              
              <div className="inline-block bg-green-500/10 border border-green-500/20 px-4 py-2 rounded mb-8">
                <span className="text-green-500 font-mono text-sm tracking-widest uppercase">
                  Audit Initiated
                </span>
              </div>
              
              <p className="text-gray-400 font-mono text-lg mb-8 max-w-md mx-auto">
                Your AI Visibility Audit is being prepared. Our engineers will deliver your personalized report within 24 hours.
              </p>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
                <h3 className="text-purple-400 font-mono font-bold mb-2">WHAT_HAPPENS_NEXT_</h3>
                <ul className="text-gray-400 font-mono text-sm space-y-2">
                  <li>1. Confirmation email sent to {formData.email}</li>
                  <li>2. Our team analyzes your AI visibility</li>
                  <li>3. Full report delivered within 24 hours</li>
                  <li>4. Optional: Upgrade to paid audit for strategy call</li>
                </ul>
              </div>

              <a href="/" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-purple-400 transition-colors duration-300">
                Return to Homepage
              </a>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEO 
        title="AI Visibility Audit | Midnight Dev"
        description="Is ChatGPT recommending your competitors? Get a free visibility report and citation gap analysis."
        keywords={["AI Audit", "ChatGPT Visibility", "SEO Audit", "Competitor Analysis"]}
        url="/audit"
      />
      <Navigation />

      <main className="pt-24 pb-24">
        <div className="container px-4 md:px-6">
          
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary font-mono text-xs uppercase tracking-widest mb-6">
              <Search className="h-3 w-3" />
              VISIBILITY_DIAGNOSTIC
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
              IS CHATGPT RECOMMENDING <br />
              <span className="text-primary">YOUR COMPETITORS?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get a personalized report showing where your business appears (or doesn't) in ChatGPT, Perplexity, and SearchGPT — plus the 3 highest-impact fixes to start getting recommended.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            
            {/* What's Included */}
            <div className="space-y-8">
              <div className="border border-white/10 bg-white/5 p-8">
                <h3 className="text-2xl font-mono font-bold mb-8">WHAT'S IN THE REPORT</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">AI Visibility Score</h4>
                      <p className="text-muted-foreground text-sm">A 0-100 rating of your brand's presence in Large Language Models.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Search className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Competitor Comparison</h4>
                      <p className="text-muted-foreground text-sm">See exactly how you stack up against 2-3 of your top rivals in AI-generated answers.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">3 Quick Wins</h4>
                      <p className="text-muted-foreground text-sm">Actionable, high-impact fixes you can implement immediately to boost visibility.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Custom Schema Snippet</h4>
                      <p className="text-muted-foreground text-sm">Ready-to-deploy JSON-LD code to instantly improve your entity recognition.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-dashed border-white/20 text-center">
                <p className="text-sm font-mono text-muted-foreground">
                  "This report revealed that Perplexity didn't even know we offered Enterprise plans. Fixed in 48 hours."
                </p>
                <div className="mt-4 font-bold text-white">- CEO, FinTech SaaS</div>
              </div>
            </div>

            {/* Audit Form */}
            <div className="border border-white/10 bg-black p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Business Name *</label>
                  <Input 
                    required 
                    className="bg-white/5 border-white/10 focus:border-primary"
                    placeholder="Acme Corp"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Website URL *</label>
                  <Input 
                    required 
                    type="url"
                    className="bg-white/5 border-white/10 focus:border-primary"
                    placeholder="https://acme.com"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Industry *</label>
                    <Select onValueChange={(val) => setFormData({...formData, industry: val})}>
                      <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="saas">SaaS / Tech</SelectItem>
                        <SelectItem value="legal">Legal</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Primary Service Area</label>
                    <Input 
                      className="bg-white/5 border-white/10 focus:border-primary"
                      placeholder="e.g. Austin, TX or Global"
                      value={formData.serviceArea}
                      onChange={(e) => setFormData({...formData, serviceArea: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email Address *</label>
                  <Input 
                    required 
                    type="email"
                    className="bg-white/5 border-white/10 focus:border-primary"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">What would you most like AI to recommend you for?</label>
                  <Textarea 
                    className="bg-white/5 border-white/10 focus:border-primary min-h-[100px]"
                    placeholder="e.g. 'Best enterprise CRM for real estate' or 'Top personal injury lawyer in Miami'"
                    value={formData.aiRecommendationGoal}
                    onChange={(e) => setFormData({...formData, aiRecommendationGoal: e.target.value})}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-black font-mono font-bold h-14 uppercase tracking-widest text-lg"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      PROCESSING_
                    </>
                  ) : (
                    "AUDIT_MY_VISIBILITY_"
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Report generated manually by our engineers. Delivered within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
