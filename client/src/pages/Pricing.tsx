import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Check, Zap, Database, Network, Building2, Loader2, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { trpc } from "@/lib/trpc";

const tiers = [
  {
    name: "SIGNAL_CHECK_",
    price: "$497",
    priceNum: 497,
    period: "one-time",
    description: "The diagnostic entry point. Understand your current standing and fix immediate gaps.",
    icon: Zap,
    features: [
      "AI Visibility Audit",
      "Competitor Analysis (3 rivals)",
      "Citation Gap Report",
      "Custom JSON-LD Schema (Homepage)",
      "30-Minute Strategy Call"
    ],
    cta: "BUY_NOW_",
    highlight: false,
    purchasable: true,
    productType: "signal_check" as const
  },
  {
    name: "GEO_FOUNDATION_",
    price: "$2,500",
    priceNum: 2500,
    period: "/month",
    sub: "3-month minimum",
    description: "Build the core infrastructure required for AI visibility and entity recognition.",
    icon: Database,
    features: [
      "Everything in SIGNAL_CHECK_",
      "Full Structured Data Architecture",
      "Citation Engineering: 15 Placements",
      "2 Conversational Landing Pages",
      "Monthly Tracking Report"
    ],
    cta: "INITIALIZE_PROTOCOL_",
    highlight: true,
    purchasable: false
  },
  {
    name: "AI_AUTHORITY_",
    price: "$5,000",
    priceNum: 5000,
    period: "/month",
    sub: "6-month minimum",
    description: "Aggressive authority building for competitive markets and rapid scaling.",
    icon: Network,
    features: [
      "Everything in GEO_FOUNDATION_",
      "30+ Citation Placements",
      "5 Conversational Landing Pages",
      "Quarterly Competitive Analysis",
      "Priority 24-Hour SLA"
    ],
    cta: "INITIALIZE_PROTOCOL_",
    highlight: false,
    purchasable: false
  },
  {
    name: "ENTERPRISE_PROTOCOL_",
    price: "Custom",
    priceNum: 0,
    period: "",
    description: "Full-spectrum AI optimization for multi-location brands and large organizations.",
    icon: Building2,
    features: [
      "Multi-Location Management",
      "Custom API Integrations",
      "Dedicated Account Manager",
      "White-Label Reporting",
      "Custom Strategy Workshops"
    ],
    cta: "CONTACT_SALES_",
    highlight: false,
    purchasable: false
  }
];

export default function Pricing() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<typeof tiers[0] | null>(null);
  const [email, setEmail] = useState("");

  const checkoutMutation = trpc.stripe.createCheckoutSession.useMutation({
    onSuccess: (data) => {
      if (data.url) {
        window.location.href = data.url;
      }
    },
    onError: (error) => {
      alert("Error creating checkout session: " + error.message);
    }
  });

  const handlePurchaseClick = (tier: typeof tiers[0]) => {
    setSelectedTier(tier);
    setCheckoutOpen(true);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTier?.productType) return;
    
    checkoutMutation.mutate({
      email,
      productType: selectedTier.productType,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEO 
        title="Service Protocols & Pricing | Midnight Dev"
        description="Transparent pricing for AI Visibility Audits, GEO Foundation, and Enterprise Authority building."
        keywords={["GEO Pricing", "AI SEO Packages", "SaaS Marketing Pricing", "Midnight Dev Costs"]}
        url="/pricing"
      />
      <Navigation />

      <main className="pt-24 pb-24">
        <div className="container px-4 md:px-6">
          
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary font-mono text-xs uppercase tracking-widest mb-6">
              <Zap className="h-3 w-3" />
              DEPLOYMENT_OPTIONS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
              CHOOSE YOUR <span className="text-primary">PROTOCOL</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From diagnostic audits to full-scale AI authority building. Select the tier that matches your growth velocity.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col p-8 border ${tier.highlight ? 'border-primary bg-primary/5' : 'border-white/10 bg-white/5'} hover:border-primary/50 transition-all duration-300 group`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-mono text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <tier.icon className={`w-10 h-10 mb-6 ${tier.highlight ? 'text-primary' : 'text-muted-foreground group-hover:text-primary transition-colors'}`} />
                  <h3 className="text-lg font-mono font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed h-20">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                    <span className="text-muted-foreground font-mono text-sm">{tier.period}</span>
                  </div>
                  {tier.sub && (
                    <div className="text-xs text-muted-foreground mt-2 font-mono">{tier.sub}</div>
                  )}
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {tier.purchasable ? (
                  <Button 
                    onClick={() => handlePurchaseClick(tier)}
                    className="w-full font-mono font-bold h-12 uppercase tracking-widest bg-green-600 hover:bg-green-500 text-white"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    {tier.cta}
                  </Button>
                ) : (
                  <ContactDialog 
                    trigger={
                      <Button 
                        className={`w-full font-mono font-bold h-12 uppercase tracking-widest ${tier.highlight ? 'bg-primary hover:bg-primary/90 text-black' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                      >
                        {tier.cta}
                      </Button>
                    }
                    service={`Pricing Inquiry: ${tier.name}`}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* FAQ / Trust Section */}
          <div className="mt-24 border-t border-white/10 pt-16 text-center">
            <h3 className="text-2xl font-mono font-bold mb-6">WHY MIDNIGHT DEV?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="font-bold mb-2">Engineering First</h4>
                <p className="text-sm text-muted-foreground">We don't guess. We build. Our strategies are based on reverse-engineering LLM behavior.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Transparent Reporting</h4>
                <p className="text-sm text-muted-foreground">No vanity metrics. We track what matters: Entity recognition, citations, and visibility.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Future Proof</h4>
                <p className="text-sm text-muted-foreground">Traditional SEO is dying. We build infrastructure that survives the AI shift.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Checkout Dialog */}
      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent className="bg-black border border-white/10 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="font-mono text-xl">SECURE_CHECKOUT_</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Complete your purchase of {selectedTier?.name}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleCheckout} className="space-y-6 mt-4">
            <div className="bg-white/5 border border-white/10 p-4 rounded">
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm">{selectedTier?.name}</span>
                <span className="font-bold text-lg">{selectedTier?.price}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                One-time payment • Includes 30-min strategy call
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email Address *</label>
              <Input 
                required 
                type="email"
                className="bg-white/5 border-white/10 focus:border-primary"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-500 text-white font-mono font-bold h-12 uppercase tracking-widest"
              disabled={checkoutMutation.isPending}
            >
              {checkoutMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  PROCESSING_
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4 mr-2" />
                  PAY_{selectedTier?.price}_
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Secure payment powered by Stripe. Your card details are never stored on our servers.
            </p>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
