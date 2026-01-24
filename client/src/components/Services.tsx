import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Database, Globe, Search } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 border-b border-white/10 bg-background relative">
      <div className="container">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tighter">
            MULTI_CORE <span className="text-primary">OPERATIONS</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            We operate on three distinct frequencies. Enterprise-grade software, local market dominance, and next-gen AI search optimization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Service 1: SaaS Development */}
          <div className="group relative border border-white/10 bg-card hover:border-primary/50 transition-colors duration-500">
            <div className="aspect-video w-full overflow-hidden border-b border-white/10">
              <img 
                src="/images/saas-service.png" 
                alt="SaaS Development" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-6">
                <Badge variant="outline" className="rounded-none border-primary text-primary font-mono">ENTERPRISE</Badge>
                <Database className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">SaaS Development</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Full-cycle development for scalable web applications. We build robust, secure, and high-performance platforms using Next.js and React.
              </p>
              
              <ul className="space-y-3 font-mono text-sm text-muted-foreground mb-8">
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-primary"></span>
                  Next.js 16 / React 19 Architecture
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-primary"></span>
                  Clerk Auth & Stripe Connect
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-primary"></span>
                  Prisma / PostgreSQL Database
                </li>
              </ul>

              <Link href="/saas-development" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Initialize Protocol <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Service 2: Local Marketing */}
          <div className="group relative border border-white/10 bg-card hover:border-primary/50 transition-colors duration-500">
            <div className="aspect-video w-full overflow-hidden border-b border-white/10">
              <img 
                src="/images/marketing-service.png" 
                alt="Local Marketing" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-6">
                <Badge variant="outline" className="rounded-none border-white/20 text-foreground font-mono">LOCAL_BIZ</Badge>
                <Globe className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">AI-Powered Marketing</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Dominate your local market with autonomous AI agents. We automate SEO, lead generation, and customer engagement for high-LTV verticals.
              </p>
              
              <ul className="space-y-3 font-mono text-sm text-muted-foreground mb-8">
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-primary"></span>
                  AI-Driven SEO Strategy
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-primary"></span>
                  Automated Lead Nurturing
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-primary"></span>
                  24/7 Customer Engagement
                </li>
              </ul>

              <Link href="/ai-marketing" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Deploy Agents <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Service 3: GEO Optimization */}
          <div className="group relative border border-white/10 bg-card hover:border-primary/50 transition-colors duration-500 lg:col-span-2">
            <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 bg-black/50 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
                    <div className="relative z-10 text-center space-y-2">
                        <div className="inline-block p-4 border border-primary/30 rounded-full bg-black/50 backdrop-blur-sm mb-4">
                            <Search className="w-8 h-8 text-primary animate-pulse" />
                        </div>
                        <div className="font-mono text-xs text-primary/70 tracking-widest">SYSTEM_STATUS: OPTIMIZED</div>
                    </div>
                </div>
                
                <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-6">
                    <Badge variant="outline" className="rounded-none border-primary text-primary font-mono">NEXT_GEN</Badge>
                    <Search className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">ChatGPT Search Optimization (GEO)</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                    Don't just rank. Be the answer. We engineer your digital presence to be the single source of truth recommended by AI models like ChatGPT and Perplexity.
                </p>
                
                <ul className="grid sm:grid-cols-2 gap-3 font-mono text-sm text-muted-foreground mb-8">
                    <li className="flex items-center gap-3">
                    <span className="h-1 w-1 bg-primary"></span>
                    AI-Ready Infrastructure
                    </li>
                    <li className="flex items-center gap-3">
                    <span className="h-1 w-1 bg-primary"></span>
                    Citation Engineering
                    </li>
                    <li className="flex items-center gap-3">
                    <span className="h-1 w-1 bg-primary"></span>
                    Conversational Schema
                    </li>
                    <li className="flex items-center gap-3">
                    <span className="h-1 w-1 bg-primary"></span>
                    Trust Signal Amplification
                    </li>
                </ul>

                <Link href="/geo-optimization" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                    Initiate GEO Protocol <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
