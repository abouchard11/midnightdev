import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Midnight Dev",
    "url": "https://midnightdev.dev",
    "logo": "https://midnightdev.dev/logo.png",
    "description": "A dual-service agency delivering enterprise SaaS architecture and AI-powered local marketing solutions.",
    "sameAs": [
      "https://github.com/midnightdev",
      "https://twitter.com/midnightdev"
    ]
  };
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEO 
        title="Midnight Dev | Enterprise SaaS & AI Marketing"
        description="We are a dual-service agency delivering enterprise SaaS architecture and AI-powered local marketing solutions. Building the future at night."
        url="/"
      />
      <StructuredData data={schema} />
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
