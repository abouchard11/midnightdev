import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Copy, Check, Terminal, Code, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

type SchemaType = 'Organization' | 'LocalBusiness' | 'SaaS';

export default function SchemaBuilder() {
  const [schemaType, setSchemaType] = useState<SchemaType>('Organization');
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    logo: "",
    description: "",
    sameAs: "", // comma separated links
  });
  const [copied, setCopied] = useState(false);

  const generateSchema = () => {
    const base = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": formData.name || "Your Organization Name",
      "url": formData.url || "https://example.com",
      "logo": formData.logo || "https://example.com/logo.png",
      "description": formData.description || "A brief description of your organization.",
      "sameAs": formData.sameAs ? formData.sameAs.split(',').map(s => s.trim()) : []
    };

    return JSON.stringify(base, null, 2);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateSchema());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEO 
        title="Free JSON-LD Schema Generator | Midnight Dev"
        description="Generate valid Schema.org markup for your SaaS or Local Business. Prepare your site for AI Search engines like SearchGPT and Perplexity."
        keywords={["Schema Generator", "JSON-LD Builder", "SEO Tool", "AI Search Optimization"]}
        url="/schema-builder"
      />
      <Navigation />

      <main className="pt-24 pb-24">
        <div className="container px-4 md:px-6">
          
          {/* Header */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary font-mono text-xs uppercase tracking-widest mb-6">
              <Code className="h-3 w-3" />
              FREE_DEV_TOOL
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              SCHEMA <span className="text-primary">ARCHITECT</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AI models speak Structured Data. Use this tool to generate the foundational JSON-LD markup needed for ChatGPT and Perplexity to correctly identify your entity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            
            {/* Input Form */}
            <div className="border border-white/10 bg-white/5 p-8 rounded-lg">
              <h3 className="text-lg font-mono font-bold mb-6 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                CONFIGURATION
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Entity Type</label>
                  <div className="flex gap-2">
                    {['Organization', 'LocalBusiness', 'SaaS'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setSchemaType(type as SchemaType)}
                        className={`px-4 py-2 text-sm font-mono border transition-colors ${schemaType === type ? 'border-primary bg-primary/10 text-primary' : 'border-white/10 hover:border-white/30 text-muted-foreground'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black border border-white/20 p-3 text-sm focus:border-primary outline-none transition-colors"
                      placeholder="Acme Corp"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">URL</label>
                    <input 
                      type="text" 
                      className="w-full bg-black border border-white/20 p-3 text-sm focus:border-primary outline-none transition-colors"
                      placeholder="https://acme.com"
                      value={formData.url}
                      onChange={(e) => setFormData({...formData, url: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Logo URL</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border border-white/20 p-3 text-sm focus:border-primary outline-none transition-colors"
                    placeholder="https://acme.com/logo.png"
                    value={formData.logo}
                    onChange={(e) => setFormData({...formData, logo: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Description</label>
                  <textarea 
                    className="w-full bg-black border border-white/20 p-3 text-sm focus:border-primary outline-none transition-colors h-24"
                    placeholder="A brief description of what your company does..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Social Profiles (Comma Separated)</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border border-white/20 p-3 text-sm focus:border-primary outline-none transition-colors"
                    placeholder="https://twitter.com/acme, https://linkedin.com/company/acme"
                    value={formData.sameAs}
                    onChange={(e) => setFormData({...formData, sameAs: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Code Output */}
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-primary/20 blur-2xl rounded-full pointer-events-none" />
              
              <div className="border border-white/10 bg-[#0d0d0d] rounded-lg overflow-hidden shadow-2xl">
                <div className="bg-[#1a1a1a] p-3 border-b border-white/5 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">schema.jsonld</div>
                </div>
                
                <div className="relative group">
                  <pre className="p-6 text-sm font-mono text-gray-300 overflow-x-auto">
                    <code>{generateSchema()}</code>
                  </pre>
                  
                  <button 
                    onClick={handleCopy}
                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-primary hover:text-black rounded transition-all opacity-0 group-hover:opacity-100"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="mt-6 p-4 border border-blue-500/20 bg-blue-500/5 rounded flex gap-3 items-start">
                <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-200/80 leading-relaxed">
                  <strong>Installation:</strong> Copy this code and paste it inside the <code>&lt;head&gt;</code> tag of your website wrapped in a <code>&lt;script type="application/ld+json"&gt;</code> tag.
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
