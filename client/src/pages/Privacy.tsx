import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <SEO
        title="Privacy Policy | Midnight Dev"
        description="Privacy Policy for Midnight Dev LLC. Learn how we collect, use, and protect your information."
        url="/privacy"
      />

      <main className="pt-24 pb-24">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-mono text-primary mb-4 uppercase tracking-widest">
              // LEGAL_PROTOCOL
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              PRIVACY <span className="text-primary">POLICY</span>
            </h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="border-l-2 border-primary/30 pl-6">
              <h2 className="text-2xl font-mono font-bold mb-4">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Contact information (name, email address, company name)</li>
                <li>Communications you send to us</li>
                <li>
                  Information provided through our contact forms and audit
                  requests
                </li>
              </ul>
            </section>

            <section className="border-l-2 border-primary/30 pl-6">
              <h2 className="text-2xl font-mono font-bold mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate about products, services, and events</li>
              </ul>
            </section>

            <section className="border-l-2 border-primary/30 pl-6">
              <h2 className="text-2xl font-mono font-bold mb-4">
                3. Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties. This does not include trusted
                third parties who assist us in operating our website, conducting
                our business, or servicing you, so long as those parties agree
                to keep this information confidential.
              </p>
            </section>

            <section className="border-l-2 border-primary/30 pl-6">
              <h2 className="text-2xl font-mono font-bold mb-4">
                4. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the Internet is 100%
                secure.
              </p>
            </section>

            <section className="border-l-2 border-primary/30 pl-6">
              <h2 className="text-2xl font-mono font-bold mb-4">
                5. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track
                activity on our website and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>
            </section>

            <section className="border-l-2 border-primary/30 pl-6">
              <h2 className="text-2xl font-mono font-bold mb-4">
                6. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="border-l-2 border-primary/30 pl-6">
              <h2 className="text-2xl font-mono font-bold mb-4">
                7. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at:{" "}
                <a
                  href="mailto:contact@midnightdev.dev"
                  className="text-primary hover:underline"
                >
                  contact@midnightdev.dev
                </a>
              </p>
            </section>

            <section className="border-t border-white/10 pt-8 mt-12">
              <p className="text-sm text-muted-foreground/60 font-mono">
                MIDNIGHT DEV LLC | Austin, Texas | Effective Date: January 1,
                2025
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
