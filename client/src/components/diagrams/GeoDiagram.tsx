import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GeoDiagram() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      id: 0,
      label: "USER QUERY",
      desc: "Complex, natural language question",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      id: 1,
      label: "AI ANALYSIS",
      desc: "Scanning for trust signals & schema",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      label: "ENTITY VERIFICATION",
      desc: "Validating NAP & Authority",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      label: "GENERATED ANSWER",
      desc: "Your brand cited as the solution",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 border border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
        
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          const isPast = activeStep > index;

          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  borderColor: isActive ? "var(--primary)" : isPast ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
                  backgroundColor: isActive ? "rgba(var(--primary-rgb), 0.1)" : "black"
                }}
                className={`w-16 h-16 border flex items-center justify-center mb-4 transition-colors duration-300 ${isActive ? 'text-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]' : 'text-muted-foreground'}`}
              >
                {step.icon}
              </motion.div>
              
              <div className="space-y-2 bg-black/80 p-2">
                <h4 className={`text-sm font-mono font-bold ${isActive ? 'text-primary' : 'text-foreground'}`}>
                  {step.label}
                </h4>
                <p className="text-xs text-muted-foreground max-w-[150px]">
                  {step.desc}
                </p>
              </div>

              {/* Mobile Connector */}
              {index < steps.length - 1 && (
                <div className="md:hidden w-px h-8 bg-white/10 my-2" />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-4 border border-primary/20 bg-primary/5 font-mono text-xs md:text-sm text-primary/80">
        <span className="mr-2 animate-pulse">●</span>
        SYSTEM_STATUS: {steps[activeStep].label} PROCESSING...
      </div>
    </div>
  );
}
