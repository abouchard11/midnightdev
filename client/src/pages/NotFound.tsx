import { Link } from "wouter";
import { AlertTriangle, Home, WifiOff } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <SEO
        title="404 | Signal Lost"
        description="The requested resource could not be found."
        url="/404"
      />

      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      {/* Glitch effect container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-md w-full text-center"
      >
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full animate-pulse" />
            <WifiOff
              className="w-24 h-24 text-purple-500 relative z-10"
              strokeWidth={1}
            />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tighter font-mono">
          404
        </h1>

        <div className="inline-block bg-red-500/10 border border-red-500/20 px-3 py-1 rounded mb-6">
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
            <AlertTriangle className="w-3 h-3" />
            Signal Lost
          </span>
        </div>

        <p className="text-gray-400 mb-8 font-mono text-sm md:text-base leading-relaxed">
          The requested frequency could not be established. The target
          coordinates may have been redacted or decomissioned.
        </p>

        <Link href="/">
          <a className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-purple-400 transition-colors duration-300">
            <Home className="w-4 h-4" />
            Return to Base
          </a>
        </Link>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-8 text-[10px] font-mono text-gray-600">
        ERR_CODE: ID_10_T
      </div>
      <div className="absolute bottom-8 right-8 text-[10px] font-mono text-gray-600">
        SYS_STATUS: OFFLINE
      </div>
    </div>
  );
}
