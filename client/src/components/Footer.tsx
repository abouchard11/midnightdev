import { Button } from "@/components/ui/button";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
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
            
            <Button size="lg" className="w-full sm:w-auto h-16 px-8 text-lg rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-mono">
              <Mail className="mr-3 h-5 w-5" />
              HELLO@MIDNIGHT.DEV
            </Button>
          </div>
          
          <div className="flex flex-col justify-between pt-12 lg:pt-0">
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="font-mono text-sm text-primary mb-4 uppercase tracking-widest">Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="hover:text-foreground transition-colors cursor-pointer">SaaS Development</li>
                  <li className="hover:text-foreground transition-colors cursor-pointer">AI Automation</li>
                  <li className="hover:text-foreground transition-colors cursor-pointer">Local SEO</li>
                  <li className="hover:text-foreground transition-colors cursor-pointer">Consulting</li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-sm text-primary mb-4 uppercase tracking-widest">Company</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="hover:text-foreground transition-colors cursor-pointer">About</li>
                  <li className="hover:text-foreground transition-colors cursor-pointer">Work</li>
                  <li className="hover:text-foreground transition-colors cursor-pointer">Careers</li>
                  <li className="hover:text-foreground transition-colors cursor-pointer">Legal</li>
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
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
