import { useRoute } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Link } from "wouter";

export default function BlogPostTemplate() {
  const [match, params] = useRoute("/insights/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  if (!match || !post) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEO 
        title={`${post.title} | Midnight Dev Insights`}
        description={post.excerpt}
        url={`/insights/${post.slug}`}
        image={post.image}
        type="article"
      />
      <Navigation />
      
      <main className="pt-24">
        <article>
          {/* Header */}
          <header className="relative py-24 border-b border-white/10 overflow-hidden">
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
               <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
               <div className="absolute inset-0 border-grid opacity-10"></div>
            </div>
            
            <div className="container relative z-10 max-w-4xl">
              <Link href="/insights">
                <a className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors font-mono text-xs uppercase tracking-widest">
                  <ArrowLeft className="mr-2 h-3 w-3" /> Back to Insights
                </a>
              </Link>
              
              <div className="flex flex-wrap gap-4 mb-6 font-mono text-xs text-primary uppercase tracking-widest">
                <span className="flex items-center gap-2 bg-primary/10 px-3 py-1 border border-primary/20">
                  <Tag className="h-3 w-3" /> {post.category}
                </span>
                <span className="flex items-center gap-2 px-3 py-1 border border-white/10 text-muted-foreground">
                  <Calendar className="h-3 w-3" /> {post.date}
                </span>
                <span className="flex items-center gap-2 px-3 py-1 border border-white/10 text-muted-foreground">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed border-l-2 border-primary pl-6">
                {post.excerpt}
              </p>
            </div>
          </header>

          {/* Content */}
          <div className="container max-w-3xl py-16">
            <div 
              className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-none prose-img:border prose-img:border-white/10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
