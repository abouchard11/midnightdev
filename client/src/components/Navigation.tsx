import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine if a nav item is active based on current route
  const isActive = (href: string) => {
    // For non-hash routes, check exact match
    if (!href.includes("#")) {
      return location === href;
    }
    // Hash links are only "active" context when on home page
    return false; // Don't highlight hash links as active
  };

  const navItems = [
    { name: "Services", href: "/#services" },
    { name: "GEO Protocol", href: "/geo-optimization" },
    { name: "Pricing", href: "/pricing" },
    { name: "Audit", href: "/audit" },
    { name: "Insights", href: "/insights" },
    { name: "Work", href: "/#work" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between relative">
          <Link
            href="/"
            className="text-2xl font-mono font-bold tracking-tighter hover:text-primary transition-colors z-50"
          >
            MIDNIGHT<span className="text-primary">_DEV</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={e => scrollToSection(e, item.href)}
                className={cn(
                  "text-sm font-medium font-mono uppercase tracking-widest transition-colors relative",
                  isActive(item.href)
                    ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              START PROJECT_
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-50 p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Completely outside header element */}
      <div
        className={cn(
          "fixed top-20 left-0 right-0 h-[calc(100vh-5rem)] bg-[#0a0a0a] z-40 flex flex-col items-start pt-8 transition-all duration-300 lg:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 border-grid opacity-10 pointer-events-none"></div>

        <nav className="flex flex-col items-start gap-4 w-full px-6 overflow-y-auto">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={e => scrollToSection(e, item.href)}
              className={cn(
                "text-xl font-bold tracking-tighter font-mono uppercase w-full text-left border-b border-white/10 pb-4 transition-colors",
                isActive(item.href)
                  ? "text-primary border-l-2 border-l-primary pl-3"
                  : "hover:text-primary"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-primary text-sm mr-3">0{index + 1} //</span>
              {item.name}
            </a>
          ))}

          <Button
            size="lg"
            className="mt-6 w-full rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-mono h-12 text-base"
            onClick={() => {
              setIsMobileMenuOpen(false);
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            START PROJECT_
          </Button>
        </nav>
      </div>
    </>
  );
}
