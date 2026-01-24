import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bot, Target, BarChart3, Globe, Cpu, Network, MessageSquare } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import AiWorkflow from "@/components/diagrams/AiWorkflow";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

export default function AiMarketing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Marketing Agents",
    "provider": {
      "@type": "Organization",
      "name": "Midnight Dev"
    },
    "description": "Autonomous AI agents for local search domination, content generation, and automated lead qualification.",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automated Content Generation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Lead Qualification Bot"
          }
        }
      ]
    }
  };
  const agents = [
    { name: "Content Generator", desc: "Automated SEO blog posts & copy" },
    { name: "Lead Qualifier", desc: "24/7 Chatbot & CRM entry" },
    { name: "Outreach Bot", desc: "Cold email & LinkedIn automation" },
    { name: "Review Manager", desc: "Auto-response & sentiment analysis" },
  ];

  const metrics = [
    { label: "Lead Increase", value: "+340%" },
    { label: "Cost Reduction", value: "-60%" },
    { label: "Response Time", value: "< 2min" },
    { label: "ROI Average", value: "12x" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEO 
        title="AI Marketing Agents | Autonomous Local SEO & Automation"
        description="Dominate local search with autonomous AI agents. Our systems automate content generation, lead qualification, and outreach for maximum ROI."
        url="/ai-marketing"
        image="/images/marketing-service.png"
        keywords={[
          "AI Marketing Automation",
          "Local SEO Services",
          "Autonomous Marketing Agents",
          "AI Search Optimization",
          "Google Maps Ranking",
          "Local Business Growth",
          "Marketing Technology"
        ]}
      />
      <StructuredData data={schema} />
      <Navigation />
      
      <main className="pt-24">
        {/* Header */}
        <section className="relative py-24 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
             <div className="absolute inset-0 border-grid opacity-10"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary font-mono text-xs uppercase tracking-widest mb-6">
              <Bot className="h-3 w-3" />
              Service Protocol: AI_OPS
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              AUTONOMOUS <br />
              <span className="text-primary">MARKETING AGENTS</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Dominate your local market with an army of AI agents. We automate SEO, lead generation, and customer engagement so you can focus on closing deals.
            </p>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="py-12 border-b border-white/10 bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-3xl md:text-5xl font-bold text-primary mb-2 tracking-tighter">{metric.value}</div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent Capabilities */}
        <section className="py-24 border-b border-white/10">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">
                  THE <span className="text-primary">SWARM</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We deploy specialized AI agents that work 24/7 to grow your business. They never sleep, never miss a lead, and constantly optimize for better results.
                </p>
                
                <div className="space-y-6">
                  {agents.map((agent) => (
                    <div key={agent.name} className="flex items-center gap-4 p-4 border border-white/10 bg-card hover:border-primary/50 transition-colors">
                      <div className="h-10 w-10 bg-primary/20 flex items-center justify-center text-primary">
                        <Cpu className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold">{agent.name}</h3>
                        <p className="text-sm text-muted-foreground">{agent.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative h-full min-h-[400px]">
                <AiWorkflow />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
              READY TO DOMINATE?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Deploy your AI agent swarm today and start capturing leads while you sleep.
            </p>
            <ContactDialog 
              triggerText="START PROJECT" 
              service="AI Marketing Agents"
              className="rounded-none font-mono h-14 px-8 text-base"
              variant="secondary"
              size="lg"
            />
          </div>
        </section>

        {/* Strategy */}
        <section className="py-24 bg-background">
          <div className="container">
            <h2 className="text-2xl font-mono font-bold mb-16 flex items-center gap-4">
              <span className="text-primary">//</span> DEPLOYMENT_STRATEGY
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors group">
                <Globe className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">1. Local SEO Dominance</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We optimize your Google Business Profile and website structure to rank #1 for high-intent local searches.
                </p>
              </div>
              <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors group">
                <Network className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">2. Multi-Channel Automation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our agents engage leads across SMS, Email, and Social Media instantly, ensuring no opportunity is lost.
                </p>
              </div>
              <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors group">
                <BarChart3 className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">3. Data-Driven Growth</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Real-time analytics dashboards show you exactly what's working, allowing for rapid iteration and scaling.
                </p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <ContactDialog 
                triggerText="DEPLOY AGENTS NOW" 
                service="AI Marketing Agents"
                className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-mono h-14 px-8 text-base"
                size="lg"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
