import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Database, Server, Shield, Zap, Code, Layout } from "lucide-react";
import SaasArchitecture from "@/components/diagrams/SaasArchitecture";

export default function SaasDevelopment() {
  const stack = [
    { name: "Next.js 16", desc: "App Router Architecture" },
    { name: "React 19", desc: "Server Components" },
    { name: "TypeScript", desc: "Strict Type Safety" },
    { name: "PostgreSQL", desc: "Relational Data" },
    { name: "Prisma ORM", desc: "Type-safe Queries" },
    { name: "Stripe Connect", desc: "Marketplace Payments" },
    { name: "Clerk", desc: "Enterprise Auth" },
    { name: "Tailwind 4", desc: "Design System" },
  ];

  const features = [
    {
      title: "Scalable Architecture",
      icon: Server,
      desc: "Built for high-concurrency and massive data throughput. We design systems that grow with your user base, utilizing edge caching and serverless functions."
    },
    {
      title: "Enterprise Security",
      icon: Shield,
      desc: "SOC2-ready infrastructure with role-based access control (RBAC), data encryption at rest/transit, and automated compliance checks."
    },
    {
      title: "High Performance",
      icon: Zap,
      desc: "Sub-100ms load times via static generation and edge delivery. Optimized Core Web Vitals for superior user experience and SEO."
    },
    {
      title: "Clean Codebase",
      icon: Code,
      desc: "Maintainable, documented, and tested code. We follow strict linting rules and CI/CD pipelines to ensure long-term stability."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
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
              <Database className="h-3 w-3" />
              Service Protocol: SAAS_DEV
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              ENTERPRISE <br />
              <span className="text-primary">INFRASTRUCTURE</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We engineer robust, scalable SaaS platforms for high-growth companies. 
              From multi-tenant architectures to complex data visualizations, we build the engine that powers your business.
            </p>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="py-24 border-b border-white/10 bg-card/30">
          <div className="container">
            <h2 className="text-2xl font-mono font-bold mb-12 flex items-center gap-4">
              <span className="text-primary">//</span> TECHNICAL_STACK
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stack.map((item) => (
                <div key={item.name} className="border border-white/10 p-6 hover:border-primary/50 transition-colors bg-background/50 backdrop-blur-sm group">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-sm text-muted-foreground font-mono">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-24 border-b border-white/10">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">
                  SYSTEM <span className="text-primary">CAPABILITIES</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our development philosophy prioritizes stability, security, and speed. We don't just write code; we architect solutions.
                </p>
                
                <div className="mb-12">
                   <SaasArchitecture />
                </div>

                <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-mono h-14 px-8 text-base">
                  INITIATE CONSULTATION
                </Button>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feature) => (
                  <div key={feature.title} className="space-y-4">
                    <div className="h-12 w-12 border border-white/10 bg-white/5 flex items-center justify-center text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process/Timeline */}
        <section className="py-24 bg-background">
          <div className="container">
            <h2 className="text-2xl font-mono font-bold mb-16 flex items-center gap-4">
              <span className="text-primary">//</span> EXECUTION_PROTOCOL
            </h2>
            
            <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-16">
              {[
                { step: "01", title: "Architecture & Discovery", desc: "We map out data models, user flows, and technical requirements before writing a single line of code." },
                { step: "02", title: "Core Development", desc: "Iterative sprints focusing on backend logic, API development, and frontend integration." },
                { step: "03", title: "Quality Assurance", desc: "Rigorous testing including unit tests, integration tests, and security audits." },
                { step: "04", title: "Deployment & Scale", desc: "CI/CD setup, production environment configuration, and post-launch monitoring." }
              ].map((phase) => (
                <div key={phase.step} className="relative pl-12 md:pl-16">
                  <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-primary rounded-full ring-4 ring-background"></div>
                  <span className="text-sm font-mono text-primary mb-2 block">{phase.step} // PHASE</span>
                  <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                  <p className="text-muted-foreground max-w-xl">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
