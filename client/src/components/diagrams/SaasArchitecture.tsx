import { useState, useEffect } from "react";
import { Database, Globe, Server, Shield, Smartphone, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SaasArchitecture() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { id: 0, label: "Client Request", icon: Smartphone, color: "text-blue-400" },
    { id: 1, label: "Edge Network", icon: Globe, color: "text-purple-400" },
    { id: 2, label: "Server Logic", icon: Server, color: "text-pink-400" },
    { id: 3, label: "Database", icon: Database, color: "text-green-400" },
  ];

  return (
    <div className="w-full p-8 border border-white/10 bg-black/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 border-grid opacity-20"></div>
      
      {/* Connection Lines */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
      
      {/* Animated Data Packet */}
      <div 
        className="absolute top-1/2 h-2 w-2 bg-primary rounded-full shadow-[0_0_10px_var(--color-primary)] z-10 transition-all duration-500 ease-linear"
        style={{ 
          left: `${(activeStep * 25) + 12.5}%`,
          opacity: 1,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>

      <div className="relative z-20 grid grid-cols-4 gap-4">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isPast = index < activeStep;
          
          return (
            <div key={step.id} className="flex flex-col items-center gap-4">
              <div 
                className={cn(
                  "h-16 w-16 border-2 flex items-center justify-center transition-all duration-500 bg-background",
                  isActive ? `border-primary scale-110 shadow-[0_0_20px_rgba(139,92,246,0.3)]` : "border-white/10 opacity-50",
                  isPast && "border-primary/50 text-primary"
                )}
              >
                <step.icon className={cn("h-6 w-6 transition-colors duration-300", isActive ? "text-primary" : "text-muted-foreground")} />
              </div>
              
              <div className="text-center">
                <p className={cn(
                  "font-mono text-xs uppercase tracking-widest transition-colors duration-300",
                  isActive ? "text-primary font-bold" : "text-muted-foreground"
                )}>
                  {step.label}
                </p>
                
                {isActive && (
                  <div className="absolute top-24 left-0 w-full text-center mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <span className="inline-block bg-primary/10 border border-primary/20 px-3 py-1 text-xs text-primary font-mono">
                      Processing...
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-green-500" />
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase">Security</p>
            <p className="text-sm font-bold">End-to-End Encrypted</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Zap className="h-5 w-5 text-yellow-500" />
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase">Latency</p>
            <p className="text-sm font-bold">&lt; 50ms Global</p>
          </div>
        </div>
      </div>
    </div>
  );
}
