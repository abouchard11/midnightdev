import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If we're on the home page and the link is a hash, scroll to it
    if (location === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/", "");
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
    // If we're NOT on the home page, let the link behave normally (navigate to /#section)
    else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between relative">
        <Link href="/" className="text-2xl font-mono font-bold tracking-tighter hover:text-primary transition-colors z-50">
          MIDNIGHT<span className="text-primary">_DEV</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            START PROJECT_
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className="absolute inset-0 border-grid opacity-10 pointer-events-none"></div>
          
          <nav className="flex flex-col items-center gap-8 w-full px-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-3xl font-bold tracking-tighter hover:text-primary transition-colors font-mono uppercase w-full text-center border-b border-white/5 pb-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-primary text-sm mr-4 align-top">0{index + 1} //</span>
                {item.name}
              </a>
            ))}
            
            <Button 
              size="lg"
              className="mt-8 w-full rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-mono h-14 text-lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              START PROJECT_
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
