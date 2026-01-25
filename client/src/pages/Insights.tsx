import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { insights } from "@/data/insights";
import { Link } from "wouter";
import { ArrowRight, Terminal, ImageOff } from "lucide-react";

export default function Insights() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEO 
        title="Technical Insights | AI & SaaS Engineering Blog"
        description="Deep dives into SearchGPT optimization, enterprise SaaS architecture, and the future of autonomous marketing agents."
        url="/insights"
      />
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
              <Terminal className="h-3 w-3" />
              KNOWLEDGE_BASE
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
              TECHNICAL <span className="text-primary">INSIGHTS</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Engineering logs, strategic analysis, and future-proofing protocols for the AI era.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((post) => (
                <Link key={post.slug} href={`/insights/${post.slug}`} className="group block h-full border border-white/10 bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    {/* Featured Image */}
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      {post.featuredImage ? (
                        <img 
                          src={post.featuredImage} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                          <ImageOff className="w-12 h-12 text-muted-foreground/30" />
                        </div>
                      )}
                      {/* Category overlay */}
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-black/70 backdrop-blur-sm text-primary font-mono text-[10px] uppercase tracking-widest border border-primary/30">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col">
                      <div className="flex items-center gap-4 mb-3 text-xs font-mono text-muted-foreground">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-mono text-xs uppercase tracking-widest group-hover:underline mt-auto">
                        READ_LOG <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
