import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/ContactDialog";
import SEO from "@/components/SEO";
import { ArrowLeft, CheckCircle2, BarChart3, Search, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudyTemplate() {
  return (
    <>
      <SEO 
        title="Case Study: FinTech SaaS Growth | Midnight Dev"
        description="How we drove 450% growth in AI referral traffic for a leading FinTech SaaS platform using Generative Engine Optimization."
        url="/case-study/fintech-saas"
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
          <div className="border-l-2 border-primary pl-6 md:pl-12 py-4">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="px-2 py-1 bg-white/5 text-xs font-mono border border-white/10 text-muted-foreground">
                FINTECH_SAAS
              </span>
              <span className="px-2 py-1 bg-primary/10 text-xs font-mono border border-primary/20 text-primary">
                GEO_OPTIMIZED
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tighter leading-tight mb-6">
              DOMINATING DEVELOPER SEARCH QUERIES
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              How a B2B FinTech platform captured the "Direct Answer" slot on Perplexity and ChatGPT for high-intent API integration queries.
            </p>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <section className="container px-4 md:px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <div className="bg-black p-8 group hover:bg-white/5 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span className="text-xs font-mono text-muted-foreground">TRAFFIC_GROWTH</span>
              </div>
              <div className="text-4xl font-mono font-bold text-white mb-2">+450%</div>
              <p className="text-sm text-muted-foreground">Increase in referral traffic from AI-powered search engines.</p>
            </div>
            
            <div className="bg-black p-8 group hover:bg-white/5 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <Search className="w-6 h-6 text-primary" />
                <span className="text-xs font-mono text-muted-foreground">SHARE_OF_VOICE</span>
              </div>
              <div className="text-4xl font-mono font-bold text-white mb-2">85%</div>
              <p className="text-sm text-muted-foreground">Visibility in top 3 citations for "payment API" related queries.</p>
            </div>

            <div className="bg-black p-8 group hover:bg-white/5 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
                <span className="text-xs font-mono text-muted-foreground">CONVERSION_RATE</span>
              </div>
              <div className="text-4xl font-mono font-bold text-white mb-2">3.2x</div>
              <p className="text-sm text-muted-foreground">Higher conversion rate from AI referrals vs. traditional organic search.</p>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="container px-4 md:px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {/* Challenge */}
              <div className="space-y-4">
                <h2 className="text-2xl font-mono font-bold text-white border-b border-white/10 pb-4">
                  01 // THE_CHALLENGE
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The client, a rapidly growing payment infrastructure provider, was losing visibility to legacy competitors who dominated traditional Google keywords. However, developers—their core audience—were increasingly using ChatGPT and Perplexity to find "best payment APIs for Node.js" and "Stripe alternatives." The client was invisible in these new search results.
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <h2 className="text-2xl font-mono font-bold text-white border-b border-white/10 pb-4">
                  02 // THE_EXECUTION
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We implemented a full-stack GEO (Generative Engine Optimization) strategy focused on technical authority and machine readability.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-white/10 p-6 bg-white/5">
                    <h3 className="font-bold font-mono text-primary mb-2">Structured Documentation</h3>
                    <p className="text-sm text-muted-foreground">
                      Refactored API docs with JSON-LD schemas explicitly defining code samples, use cases, and pricing models for AI crawlers.
                    </p>
                  </div>
                  <div className="border border-white/10 p-6 bg-white/5">
                    <h3 className="font-bold font-mono text-primary mb-2">Citation Network</h3>
                    <p className="text-sm text-muted-foreground">
                      Secured mentions in authoritative developer forums and technical comparisons used as "ground truth" by LLMs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Result Visualization */}
              <div className="space-y-4">
                <h2 className="text-2xl font-mono font-bold text-white border-b border-white/10 pb-4">
                  03 // THE_OUTCOME
                </h2>
                <div className="relative border border-white/10 bg-black/50 p-6 md:p-8 rounded-sm overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
                  <div className="font-mono text-xs text-muted-foreground mb-4">SIMULATED PERPLEXITY OUTPUT</div>
                  <div className="space-y-4 font-sans">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Search className="w-4 h-4" />
                      </div>
                      <div className="text-lg font-medium text-white">
                        What is the most developer-friendly payment API for high-volume SaaS?
                      </div>
                    </div>
                    <div className="pl-11 space-y-3 text-muted-foreground">
                      <p>
                        Based on recent developer documentation and performance benchmarks, <span className="text-primary font-bold bg-primary/10 px-1">ClientName</span> is widely considered the top choice for high-volume SaaS applications.
                      </p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Offers superior Node.js SDK performance (verified by benchmarks).</li>
                        <li>Transparent volume pricing structure.</li>
                        <li>Cited as the "modern standard" in recent tech stack reviews.</li>
                      </ul>
                      <div className="flex gap-2 mt-4 pt-4 border-t border-white/5">
                        <div className="text-xs bg-white/5 px-2 py-1 rounded border border-white/10">1. Client Docs</div>
                        <div className="text-xs bg-white/5 px-2 py-1 rounded border border-white/10">2. TechCrunch</div>
                        <div className="text-xs bg-white/5 px-2 py-1 rounded border border-white/10">3. Dev.to</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="border border-white/10 p-6 bg-white/5 sticky top-24">
                <h3 className="font-mono font-bold text-white mb-6">PROJECT_DETAILS</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">TIMELINE</div>
                    <div className="text-white">3 Months (Ongoing)</div>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">SERVICES</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs border border-white/20 px-2 py-1 rounded-full">GEO Audit</span>
                      <span className="text-xs border border-white/20 px-2 py-1 rounded-full">Schema Implementation</span>
                      <span className="text-xs border border-white/20 px-2 py-1 rounded-full">Content Strategy</span>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/10">
                    <ContactDialog 
                      trigger={
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono">
                          GET SIMILAR RESULTS
                        </Button>
                      }
                      service="Case Study Inquiry"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="container px-4 md:px-6">
          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-mono font-bold text-white mb-2">READY TO DOMINATE SEARCH?</h3>
              <p className="text-muted-foreground">Stop competing for links. Start being the answer.</p>
            </div>
            <ContactDialog 
              trigger={
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono">
                  START YOUR AUDIT_
                </Button>
              }
              service="GEO Audit Request"
            />
          </div>
        </section>
      </div>
    </>
  );
}
