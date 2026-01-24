import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/ContactDialog";
import SEO from "@/components/SEO";
import { ArrowLeft, CheckCircle2, Search, BarChart3, TrendingUp, Share2, ExternalLink } from "lucide-react";
import { Link, useRoute } from "wouter";
import { caseStudies } from "@/data/caseStudies";
import NotFound from "./NotFound";

export default function CaseStudyTemplate() {
  const [match, params] = useRoute("/case-study/:slug");
  const slug = params?.slug;
  const study = slug ? caseStudies[slug] : null;

  if (!study) return <NotFound />;

  return (
    <>
      <SEO 
        title={`${study.client} Case Study | Midnight Dev`}
        description={`How we helped a ${study.industry} company achieve ${study.metric} ${study.metricLabel} using GEO strategies.`}
        url={`/case-study/${slug}`}
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

        {/* Hero Header */}
        <div className="container px-4 md:px-6 mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary text-xs font-mono tracking-wider mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span>CASE_LOG_VERIFIED</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tighter leading-tight mb-6">
              {study.client}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm font-mono text-muted-foreground">
              <span className="border border-white/10 px-3 py-1 bg-white/5">{study.industry}</span>
              {study.tags.map(tag => (
                <span key={tag} className="border border-white/10 px-3 py-1 bg-white/5 text-primary/80">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="container px-4 md:px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-primary/20 bg-primary/5 p-8">
              <div className="text-5xl font-mono font-bold text-primary mb-2">{study.metric}</div>
              <div className="text-xs font-mono tracking-widest text-muted-foreground uppercase">{study.metricLabel}</div>
            </div>
            <div className="border border-white/10 bg-white/5 p-8">
              <div className="text-5xl font-mono font-bold text-white mb-2">3.5x</div>
              <div className="text-xs font-mono tracking-widest text-muted-foreground uppercase">CONVERSION_LIFT</div>
            </div>
            <div className="border border-white/10 bg-white/5 p-8">
              <div className="text-5xl font-mono font-bold text-white mb-2">100%</div>
              <div className="text-xs font-mono tracking-widest text-muted-foreground uppercase">ENTITY_VERIFIED</div>
            </div>
          </div>
        </div>

        {/* Main Content & Visual Proof */}
        <div className="container px-4 md:px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Narrative */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-mono font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">01</span>
                  THE CHALLENGE
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg border-l-2 border-white/10 pl-6">
                  {study.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-mono font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">02</span>
                  THE EXECUTION
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg border-l-2 border-primary/30 pl-6">
                  {study.solution}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-mono font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">03</span>
                  THE OUTCOME
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg border-l-2 border-white/10 pl-6">
                  {study.outcome}
                </p>
              </div>
            </div>

            {/* Visual Proof - Simulated AI Search */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="font-mono text-xs text-muted-foreground mb-4 text-center">// SIMULATED_PERPLEXITY_OUTPUT</div>
                
                <div className="border border-white/10 bg-[#111] rounded-lg overflow-hidden shadow-2xl">
                  {/* Fake Browser Header */}
                  <div className="bg-[#1a1a1a] p-3 flex items-center gap-2 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                    </div>
                    <div className="flex-1 bg-[#000] rounded px-3 py-1 text-[10px] font-mono text-muted-foreground text-center">
                      perplexity.ai/search
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                    {/* User Query */}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0"></div>
                      <div className="font-mono text-lg text-white">
                        "{study.aiQuery}"
                      </div>
                    </div>

                    {/* AI Answer */}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold text-xs">AI</div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xs font-mono text-primary/70">
                          <Search className="w-3 h-3" />
                          <span>SEARCHING_KNOWLEDGE_BASE...</span>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: study.aiResponse.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-bold bg-primary/20 px-1 rounded">$1</span>') }} />

                        {/* Citations */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {study.sources.map((source, i) => (
                            <div key={i} className="flex items-center gap-1 text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-muted-foreground hover:bg-white/10 cursor-default transition-colors">
                              <span>{i + 1}. {source.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Footer */}
        <section className="container px-4 md:px-6">
          <div className="border-t border-white/10 pt-12 text-center">
            <h3 className="text-2xl font-mono font-bold text-white mb-6">READY TO BE THE ANSWER?</h3>
            <ContactDialog 
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono px-8 h-14 text-lg">
                  START_OPTIMIZATION_
                </Button>
              }
              service={`Case Study Inquiry: ${study.client}`}
            />
          </div>
        </section>
      </div>
    </>
  );
}
