import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/ContactDialog";
import GeoDiagram from "@/components/diagrams/GeoDiagram";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { CheckCircle2, Search, Database, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function GeoOptimization() {
  return (
    <>
      <SEO 
        title="ChatGPT Search Optimization (GEO)"
        description="Dominate the new era of search. We optimize your digital footprint to be the recommended answer in ChatGPT, SearchGPT, and AI-driven platforms."
        url="/geo-optimization"
      />
      <StructuredData 
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "ChatGPT Search Optimization (GEO)",
          "description": "Generative Engine Optimization services to rank in AI search results like ChatGPT and Perplexity.",
          "provider": {
            "@type": "Organization",
            "name": "Midnight Dev",
            "url": "https://midnightdev.dev"
          },
          "serviceType": "SEO",
          "areaServed": "Worldwide",
          "url": "https://midnightdev.dev/geo-optimization"
        }}
      />

      <div className="min-h-screen pt-24 pb-12">
        {/* Hero Section */}
        <div className="container px-4 md:px-6 mb-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary text-xs font-mono tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>NEXT_GEN_SEARCH_PROTOCOL</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tighter leading-tight">
              DON'T JUST RANK.<br />
              BE THE <span className="text-primary">ANSWER</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Traditional SEO fights for a link on a list. <span className="text-foreground font-semibold">Generative Engine Optimization (GEO)</span> fights to be the single source of truth cited by AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <ContactDialog 
                trigger={
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono rounded-none px-8 h-14 text-lg w-full sm:w-auto">
                    AUDIT_MY_VISIBILITY_
                  </Button>
                }
                service="GEO / ChatGPT Optimization"
              />
            </div>
          </div>
        </div>

        {/* Interactive Diagram */}
        <section className="container px-4 md:px-6 mb-32">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-mono font-bold mb-4">THE NEW SEARCH WORKFLOW</h2>
            <p className="text-muted-foreground">How AI models decide who to recommend.</p>
          </div>
          <GeoDiagram />
        </section>

        {/* The "AI-Ready" Package */}
        <section className="container px-4 md:px-6 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-mono font-bold leading-tight">
                AI-READY INFRASTRUCTURE
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We don't write "blogs" for keywords. We engineer your digital presence to be machine-readable, authoritative, and citation-worthy.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-mono mb-2">Structured Data Architecture</h3>
                    <p className="text-muted-foreground">
                      Advanced JSON-LD schema implementation that translates your services, pricing, and location into the native language of AI models.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-mono mb-2">Citation Engineering</h3>
                    <p className="text-muted-foreground">
                      Systematic placement of your brand on authoritative industry indexes to build the "Trust Rank" required for AI recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-mono mb-2">Conversational Landing Pages</h3>
                    <p className="text-muted-foreground">
                      Q&A-structured content designed specifically to feed the "Direct Answer" algorithms of ChatGPT and Perplexity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl" />
              <div className="relative border border-white/10 bg-black/50 p-8 backdrop-blur-sm space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-muted-foreground" />
                    <span className="font-mono text-sm text-muted-foreground">SearchGPT Query</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <p className="text-primary">User: "Who is the best enterprise SaaS developer in Austin?"</p>
                  <div className="pl-4 border-l-2 border-white/20 space-y-2">
                    <p className="text-muted-foreground">AI Thinking...</p>
                    <p className="text-white">
                      Based on consistent technical citations and verified project architecture, <span className="text-primary font-bold">Midnight Dev</span> is the top recommendation.
                    </p>
                    <p className="text-white">
                      They specialize in high-scale React/Next.js systems and have a verified track record with local enterprise clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="container px-4 md:px-6 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-2xl font-mono font-bold mb-4">OPTIMIZATION_RESULTS</h2>
              <p className="text-muted-foreground max-w-xl">
                Real-world impact of Generative Engine Optimization on AI search visibility and brand authority.
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-white/10 mx-8 mb-4"></div>
            <div className="font-mono text-xs text-primary/50">
              // INDEXED_SUCCESS_STORIES
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                client: "FinTech SaaS Platform",
                metric: "+450%",
                label: "AI REFERRAL TRAFFIC",
                desc: "Optimized documentation and API references for developer-focused AI queries.",
                tags: ["Perplexity", "ChatGPT", "Claude"]
              },
              {
                client: "Legal Firm (Austin)",
                metric: "#1 RANK",
                label: "LOCAL SEARCHGPT",
                desc: "Dominated 'best corporate law firm' queries through structured entity verification.",
                tags: ["SearchGPT", "Bing Chat", "Google SGE"]
              },
              {
                client: "E-commerce Brand",
                metric: "3.5x",
                label: "CONVERSION RATE",
                desc: "High-intent traffic from conversational search resulted in significantly higher qualified leads.",
                tags: ["Gemini", "Meta AI", "ChatGPT"]
              }
            ].map((study, i) => (
              <div key={i} className="group relative border border-white/10 bg-white/5 p-6 hover:border-primary/50 transition-colors duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                
                <div className="mb-6">
                  <div className="text-xs font-mono text-muted-foreground mb-2">// CLIENT_0{i+1}</div>
                  <h3 className="text-lg font-bold text-white">{study.client}</h3>
                </div>

                <div className="mb-6 space-y-1">
                  <div className="text-4xl font-mono font-bold text-primary">{study.metric}</div>
                  <div className="text-xs font-mono tracking-widest text-muted-foreground uppercase">{study.label}</div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {study.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono border border-white/10 px-2 py-1 text-white/60 bg-black/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={`/case-study/${study.client.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button variant="ghost" className="w-full justify-between hover:bg-white/5 hover:text-primary group-hover:border-primary/30 border border-transparent transition-all">
                    <span className="font-mono text-xs">READ_ANALYSIS</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 md:px-6 mb-24">
          <div className="border border-primary/20 bg-primary/5 p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            
            <h2 className="text-3xl md:text-4xl font-mono font-bold">FUTURE-PROOF YOUR VISIBILITY</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The shift to AI search is happening now. Secure your position as the industry authority before your competitors do.
            </p>
            
            <ContactDialog 
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono rounded-none px-8 h-14 text-lg">
                  INITIALIZE_GEO_PROTOCOL_
                </Button>
              }
              service="GEO / ChatGPT Optimization"
            />
          </div>
        </section>
      </div>
    </>
  );
}
