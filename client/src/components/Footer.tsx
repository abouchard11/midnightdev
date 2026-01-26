import { Button } from "@/components/ui/button";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-background border-t border-white/10 pt-16 md:pt-24 pb-12">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tighter leading-none">
              READY TO <br />
              <span className="text-primary">GO DARK?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-8">
              Whether you need enterprise scale or local dominance, we're ready to deploy.
            </p>

            <a href="mailto:contact@midnightdev.dev">
              <Button size="lg" className="w-full sm:w-auto h-16 px-8 text-lg rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-mono">
                <Mail className="mr-3 h-5 w-5" />
                CONTACT@MIDNIGHTDEV.DEV
              </Button>
            </a>
          </div>

          <div className="flex flex-col justify-between pt-12 lg:pt-0">
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="font-mono text-sm text-primary mb-4 uppercase tracking-widest">Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li><Link href="/saas-development" className="hover:text-foreground transition-colors">SaaS Development</Link></li>
                  <li><Link href="/ai-marketing" className="hover:text-foreground transition-colors">AI Automation</Link></li>
                  <li><Link href="/geo-optimization" className="hover:text-foreground transition-colors">Local SEO</Link></li>
                  <li><button onClick={() => scrollToSection('contact')} className="hover:text-foreground transition-colors text-left">Consulting</button></li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-sm text-primary mb-4 uppercase tracking-widest">Company</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li><button onClick={() => scrollToSection('services')} className="hover:text-foreground transition-colors text-left">About</button></li>
                  <li><button onClick={() => scrollToSection('work')} className="hover:text-foreground transition-colors text-left">Work</button></li>
                  <li><Link href="/pricing" className="hover:text-foreground transition-colors">Careers</Link></li>
                  <li><Link href="/privacy" className="hover:text-foreground transition-colors">Legal</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 border border-white/10 bg-card/50 backdrop-blur-sm">
              <p className="font-mono text-sm text-muted-foreground mb-2">CURRENT_STATUS:</p>
              <div className="flex items-center gap-2 text-green-500 font-bold tracking-tight">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                ACCEPTING NEW PROJECTS FOR Q2 2026
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground font-mono">
            © 2026 MIDNIGHT DEV LLC. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex gap-6">
            <a href="https://github.com/midnightdev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/midnightdev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/company/midnightdev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
