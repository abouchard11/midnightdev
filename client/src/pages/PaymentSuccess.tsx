import { useEffect, useState } from "react";
import { Link, useSearch } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Loader2, XCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PaymentSuccess() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const sessionId = params.get("session_id");
  
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [paymentDetails, setPaymentDetails] = useState<{
    email: string | null;
    amount: number | null;
  } | null>(null);

  const { data, error, isLoading } = trpc.stripe.verifyPayment.useQuery(
    { sessionId: sessionId || '' },
    { 
      enabled: !!sessionId,
      retry: 3,
      retryDelay: 1000,
    }
  );

  useEffect(() => {
    if (data) {
      if (data.status === 'paid') {
        setVerificationStatus('success');
        setPaymentDetails({
          email: data.customerEmail,
          amount: data.amountTotal,
        });
      } else {
        setVerificationStatus('error');
      }
    }
    if (error) {
      setVerificationStatus('error');
    }
  }, [data, error]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Payment Successful | Midnight Dev"
        description="Your payment has been processed successfully."
        url="/payment-success"
      />
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container max-w-2xl">
          {isLoading || verificationStatus === 'loading' ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <Loader2 className="w-16 h-16 mx-auto text-purple-500 animate-spin mb-6" />
              <h1 className="text-2xl font-mono font-bold text-white mb-4">
                VERIFYING_PAYMENT_
              </h1>
              <p className="text-gray-400 font-mono">
                Please wait while we confirm your transaction...
              </p>
            </motion.div>
          ) : verificationStatus === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse" />
                <CheckCircle className="w-24 h-24 text-green-500 relative z-10" strokeWidth={1.5} />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
                PAYMENT_CONFIRMED_
              </h1>
              
              <div className="inline-block bg-green-500/10 border border-green-500/20 px-4 py-2 rounded mb-8">
                <span className="text-green-500 font-mono text-sm tracking-widest uppercase">
                  Transaction Successful
                </span>
              </div>
              
              <p className="text-gray-400 font-mono text-lg mb-8 max-w-md mx-auto">
                Thank you for your purchase. Your AI Visibility Audit has been initiated.
              </p>

              {paymentDetails && (
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8 text-left">
                  <h3 className="text-white font-mono font-bold mb-4">ORDER_DETAILS_</h3>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Confirmation sent to:</span>
                      <span className="text-white">{paymentDetails.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Amount paid:</span>
                      <span className="text-green-500">${((paymentDetails.amount || 0) / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Product:</span>
                      <span className="text-white">SIGNAL_CHECK_ Audit</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6 mb-8">
                <h3 className="text-purple-400 font-mono font-bold mb-2">WHAT_HAPPENS_NEXT_</h3>
                <ul className="text-gray-400 font-mono text-sm space-y-2 text-left">
                  <li>1. You'll receive a confirmation email within 5 minutes</li>
                  <li>2. Our team will begin your AI visibility analysis</li>
                  <li>3. Your full audit report will be delivered within 48 hours</li>
                  <li>4. We'll schedule your 30-minute strategy call</li>
                </ul>
              </div>

              <Link href="/">
                <a className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-purple-400 transition-colors duration-300">
                  Return to Homepage
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
                <XCircle className="w-24 h-24 text-red-500 relative z-10" strokeWidth={1.5} />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
                VERIFICATION_FAILED_
              </h1>
              
              <p className="text-gray-400 font-mono text-lg mb-8 max-w-md mx-auto">
                We couldn't verify your payment. If you believe this is an error, please contact us.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing">
                  <a className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-purple-400 transition-colors duration-300">
                    Try Again
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-white/5 transition-colors duration-300">
                    Contact Support
                  </a>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
