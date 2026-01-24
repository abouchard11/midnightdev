import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/ContactDialog";
import SEO from "@/components/SEO";
import { ArrowLeft, CheckCircle2, ShieldCheck, Network, Globe } from "lucide-react";
import { Link } from "wouter";

export default function CitationEngineering() {
  return (
    <>
      <SEO 
        title="Citation Engineering | Build Trust Rank for AI"
        description="Build the 'Trust Rank' AI models require. Systematic placement on authoritative industry indexes to ensure your brand is the cited answer."
        url="/citation-engineering"
        keywords={[
          "Citation Engineering",
          "Brand Trust Rank",
          "AI Authority Building",
          "Digital PR for AI",
          "Knowledge Graph Optimization",
          "Entity Authority",
          "Corporate Citations"
        ]}
      />

      <div className="min-h-screen pt-24 pb-12">
        {/* Navigation Back */}
        <div className="container px-4 md:px-6 mb-12">
          <Link href="/geo-optimization">
            <Button variant="ghost" className="font-mono text-muted-foreground hover:text-primary pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              BACK_TO_GEO_PROTOCOL
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="container px-4 md:px-6 mb-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary text-xs font-mono tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>ENTITY_VERIFICATION_PROTOCOL</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tighter leading-tight">
              TEACH THE AI TO <br />
              <span className="text-primary">TRUST YOU</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              AI models don't just guess; they verify. <span className="text-foreground font-semibold">Citation Engineering</span> systematically plants your brand in the "ground truth" datasets that ChatGPT, Claude, and Perplexity rely on.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <ContactDialog 
                trigger={
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono rounded-none px-8 h-14 text-lg w-full sm:w-auto">
                    BUILD_MY_TRUST_RANK_
                  </Button>
                }
                service="Citation Engineering"
              />
            </div>
          </div>
        </div>

        {/* The Logic Section */}
        <section className="container px-4 md:px-6 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl" />
              <div className="relative border border-white/10 bg-black/50 p-8 backdrop-blur-sm">
                <div className="font-mono text-xs text-muted-foreground mb-4">// KNOWLEDGE_GRAPH_VISUALIZATION</div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-bold">
                      YOU
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-white/10"></div>
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 text-xs">
                      Site A
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pl-12">
                    <div className="w-px h-12 bg-primary/30"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 text-xs">
                      LLM
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-primary/50"></div>
                    <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-bold">
                      YOU
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-white/5 border border-white/10 text-sm font-mono text-muted-foreground">
                    <span className="text-primary">Status:</span> Entity Verified via 14 Authority Nodes.
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-mono font-bold leading-tight">
                IT'S NOT ABOUT LINKS.<br />IT'S ABOUT <span className="text-primary">VALIDATION</span>.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Traditional SEO builds links to pass "juice." Citation Engineering builds a consistent digital footprint (NAP+W) across the specific databases that Large Language Models treat as factual sources.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Consistency across Data Aggregators",
                  "Industry-Specific Directory Verification",
                  "Knowledge Graph Entity Claiming",
                  "Sentiment-Aligned Brand Mentions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-mono text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Verified Data Sources */}
        <section className="container px-4 md:px-6 mb-24">
          <div className="border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-mono font-bold mb-4">VERIFIED DATA SOURCES</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We secure your presence on the high-authority indexes that serve as the training data for modern AI models.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
              {/* Crunchbase Style Badge */}
              <a href="https://www.crunchbase.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#0477FF] rounded flex items-center justify-center font-bold text-white text-lg">cb</div>
                  <span className="font-bold text-xl text-white group-hover:text-[#0477FF] transition-colors">Crunchbase</span>
                </div>
                <div className="text-[10px] font-mono text-muted-foreground border border-white/10 px-1.5 py-0.5 rounded bg-black/40">
                  DA: <span className="text-[#0477FF]">91</span>
                </div>
              </a>

              {/* Clutch Style Badge */}
              <a href="https://clutch.co" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#FF3D00] rounded-full flex items-center justify-center font-bold text-white text-xs">C</div>
                  <span className="font-bold text-xl text-white group-hover:text-[#FF3D00] transition-colors">Clutch</span>
                </div>
                <div className="text-[10px] font-mono text-muted-foreground border border-white/10 px-1.5 py-0.5 rounded bg-black/40">
                  DA: <span className="text-[#FF3D00]">88</span>
                </div>
              </a>

              {/* G2 Style Badge */}
              <a href="https://www.g2.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#FF492C] flex items-center justify-center font-bold text-white text-lg skew-x-[-10deg]">G2</div>
                  <span className="font-bold text-xl text-white group-hover:text-[#FF492C] transition-colors">G2 Crowd</span>
                </div>
                <div className="text-[10px] font-mono text-muted-foreground border border-white/10 px-1.5 py-0.5 rounded bg-black/40">
                  DA: <span className="text-[#FF492C]">92</span>
                </div>
              </a>

              {/* LinkedIn Style Badge */}
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#0A66C2] rounded flex items-center justify-center font-bold text-white text-lg">in</div>
                  <span className="font-bold text-xl text-white group-hover:text-[#0A66C2] transition-colors">LinkedIn</span>
                </div>
                <div className="text-[10px] font-mono text-muted-foreground border border-white/10 px-1.5 py-0.5 rounded bg-black/40">
                  DA: <span className="text-[#0A66C2]">99</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container px-4 md:px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-mono font-bold mb-4">THE ENGINEERING PROCESS</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 bg-white/5 p-8 hover:border-primary/50 transition-all duration-300 group">
              <Globe className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-mono mb-4">Data Synchronization</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We push your verified entity data (Name, Address, Phone, Website, Service Schema) to the core data aggregators that feed Bing, Google, and Apple Maps.
              </p>
            </div>

            <div className="border border-white/10 bg-white/5 p-8 hover:border-primary/50 transition-all duration-300 group">
              <Network className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-mono mb-4">Niche Authority</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We identify and secure placements on the specific high-trust domains relevant to your industry—the ones AI models are trained to respect.
              </p>
            </div>

            <div className="border border-white/10 bg-white/5 p-8 hover:border-primary/50 transition-all duration-300 group">
              <ShieldCheck className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-mono mb-4">Sentiment Shield</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We monitor and manage the context of your brand mentions, ensuring the "sentiment vectors" associated with your name are positive and professional.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="container px-4 md:px-6">
          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-mono font-bold text-white mb-2">BECOME A TRUSTED ENTITY</h3>
              <p className="text-muted-foreground">Stop being a "maybe" and start being a "fact."</p>
            </div>
            <ContactDialog 
              trigger={
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono">
                  START CITATION AUDIT_
                </Button>
              }
              service="Citation Audit Request"
            />
          </div>
        </section>
      </div>
    </>
  );
}
