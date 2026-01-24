import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-white/10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="Midnight Dev Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        <div className="absolute inset-0 border-grid opacity-20"></div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-8 md:pt-0">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary font-mono text-xs uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Online v2.0
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] md:leading-[0.9]">
            BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">THE FUTURE</span> <br />
            <span className="text-primary">AT NIGHT.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-light leading-relaxed">
            We are a dual-service agency delivering enterprise SaaS architecture and AI-powered local marketing solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-mono h-14 px-8 text-base"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Terminal className="mr-2 h-4 w-4" />
              VIEW SERVICES
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto rounded-none border-white/20 hover:bg-white/5 text-foreground font-mono h-14 px-8 text-base group"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              OUR WORK
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Verified On Trust Badges */}
          <div className="pt-12 border-t border-white/10 mt-8 w-full">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">Verified On Authority Nodes</p>
            <div className="flex flex-wrap gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
              
              <div className="flex items-center gap-2 group">
                <div className="w-5 h-5 bg-[#0477FF] rounded flex items-center justify-center font-bold text-white text-[10px]">cb</div>
                <span className="font-bold text-sm text-white">Crunchbase</span>
                <div className="text-[9px] font-mono text-muted-foreground border border-white/10 px-1 py-px rounded bg-black/40 ml-1">
                  DA: <span className="text-[#0477FF]">91</span>
                </div>
              </div>

              <div className="flex items-center gap-2 group">
                <div className="w-5 h-5 bg-[#FF3D00] rounded-full flex items-center justify-center font-bold text-white text-[8px]">C</div>
                <span className="font-bold text-sm text-white">Clutch</span>
                <div className="text-[9px] font-mono text-muted-foreground border border-white/10 px-1 py-px rounded bg-black/40 ml-1">
                  DA: <span className="text-[#FF3D00]">88</span>
                </div>
              </div>

              <div className="flex items-center gap-2 group">
                <div className="w-5 h-5 bg-[#FF492C] flex items-center justify-center font-bold text-white text-[10px] skew-x-[-10deg]">G2</div>
                <span className="font-bold text-sm text-white">G2</span>
                <div className="text-[9px] font-mono text-muted-foreground border border-white/10 px-1 py-px rounded bg-black/40 ml-1">
                  DA: <span className="text-[#FF492C]">92</span>
                </div>
              </div>

              <div className="flex items-center gap-2 group">
                <div className="w-5 h-5 bg-[#0A66C2] rounded flex items-center justify-center font-bold text-white text-[10px]">in</div>
                <span className="font-bold text-sm text-white">LinkedIn</span>
                <div className="text-[9px] font-mono text-muted-foreground border border-white/10 px-1 py-px rounded bg-black/40 ml-1">
                  DA: <span className="text-[#0A66C2]">99</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Abstract decorative element for right side */}
        <div className="hidden lg:block relative h-full min-h-[500px] border-l border-white/10 pl-12 flex flex-col justify-center">
          <div className="space-y-12">
            <div className="relative">
              <h3 className="text-sm font-mono text-muted-foreground mb-2">01 // ENTERPRISE_SAAS</h3>
              <p className="text-2xl font-light border-l-2 border-primary pl-4">
                Scalable architectures for high-growth companies.
              </p>
            </div>
            
            <div className="relative">
              <h3 className="text-sm font-mono text-muted-foreground mb-2">02 // LOCAL_AI_MARKETING</h3>
              <p className="text-2xl font-light border-l-2 border-white/20 pl-4 text-muted-foreground">
                Dominating local search with autonomous agents.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll_Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
}
