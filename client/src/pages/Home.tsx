import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEO 
        title="Midnight Dev | Enterprise SaaS & AI Marketing"
        description="We are a dual-service agency delivering enterprise SaaS architecture and AI-powered local marketing solutions. Building the future at night."
        url="/"
      />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Work />
      </main>
      <Footer />
    </div>
  );
}
