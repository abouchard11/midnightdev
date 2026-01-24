import { useState, useEffect } from "react";
import { Bot, FileText, MessageSquare, Search, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AiWorkflow() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const sequence = [
      { node: 0, msg: "Scanning market data..." },
      { node: 1, msg: "Identifying opportunities..." },
      { node: 2, msg: "Generating content..." },
      { node: 3, msg: "Engaging leads..." },
    ];

    let currentIndex = 0;

    const interval = setInterval(() => {
      setActiveNode(sequence[currentIndex].node);
      setMessages(prev => [sequence[currentIndex].msg, ...prev].slice(0, 3));
      
      currentIndex = (currentIndex + 1) % sequence.length;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Define positions based on screen size
  // Mobile: Vertical Stack
  // Desktop: Diamond/Flow shape
  const nodes = isMobile ? [
    { id: 0, label: "Input", icon: Search, x: "50%", y: "15%" },
    { id: 1, label: "Analysis", icon: Bot, x: "50%", y: "40%" },
    { id: 2, label: "Generation", icon: Sparkles, x: "50%", y: "65%" },
    { id: 3, label: "Action", icon: Send, x: "50%", y: "90%" },
  ] : [
    { id: 0, label: "Input", icon: Search, x: "50%", y: "10%" },
    { id: 1, label: "Analysis", icon: Bot, x: "50%", y: "40%" },
    { id: 2, label: "Generation", icon: Sparkles, x: "20%", y: "80%" },
    { id: 3, label: "Action", icon: Send, x: "80%", y: "80%" },
  ];

  return (
    <div className="w-full h-[500px] md:h-[400px] border border-white/10 bg-black/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 border-grid opacity-20"></div>

      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {isMobile ? (
          // Mobile Vertical Lines
          <>
            <line x1="50%" y1="15%" x2="50%" y2="40%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <line x1="50%" y1="40%" x2="50%" y2="65%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <line x1="50%" y1="65%" x2="50%" y2="90%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            
            {activeNode === 0 && <circle cx="50%" cy="27.5%" r="3" fill="#8B5CF6" className="animate-ping" />}
            {activeNode === 1 && <circle cx="50%" cy="52.5%" r="3" fill="#8B5CF6" className="animate-ping" />}
            {activeNode === 2 && <circle cx="50%" cy="77.5%" r="3" fill="#8B5CF6" className="animate-ping" />}
          </>
        ) : (
          // Desktop Branching Lines
          <>
            <line x1="50%" y1="10%" x2="50%" y2="40%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <line x1="50%" y1="40%" x2="20%" y2="80%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <line x1="50%" y1="40%" x2="80%" y2="80%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            
            {activeNode === 0 && <circle cx="50%" cy="25%" r="3" fill="#8B5CF6" className="animate-ping" />}
            {activeNode === 1 && <circle cx="35%" cy="60%" r="3" fill="#8B5CF6" className="animate-ping" />}
            {activeNode === 1 && <circle cx="65%" cy="60%" r="3" fill="#8B5CF6" className="animate-ping" />}
          </>
        )}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => {
        const isActive = activeNode === node.id;
        return (
          <div
            key={node.id}
            className={cn(
              "absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 transition-all duration-500",
              isActive ? "scale-110 z-20" : "scale-100 z-10 opacity-70"
            )}
            style={{ left: node.x, top: node.y }}
          >
            <div className={cn(
              "h-12 w-12 rounded-full border-2 flex items-center justify-center bg-background transition-colors duration-300",
              isActive ? "border-primary text-primary shadow-[0_0_15px_var(--color-primary)]" : "border-white/20 text-muted-foreground"
            )}>
              <node.icon className="h-5 w-5" />
            </div>
            <span className={cn(
              "text-xs font-mono uppercase tracking-widest bg-background px-2 py-1 border border-white/10",
              isActive ? "text-primary border-primary/50" : "text-muted-foreground"
            )}>
              {node.label}
            </span>
          </div>
        );
      })}

      {/* Console Log Output - Repositioned for Mobile */}
      <div className={cn(
        "absolute border border-white/10 bg-black/80 p-3 font-mono text-xs overflow-hidden transition-all duration-300",
        isMobile ? "bottom-2 left-2 right-2 h-20 text-[10px]" : "bottom-4 left-4 right-4 h-24"
      )}>
        <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-1">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-muted-foreground">AGENT_LOG_STREAM</span>
        </div>
        <div className="space-y-1">
          {messages.map((msg, i) => (
            <div key={i} className={cn(
              "flex items-center gap-2",
              i === 0 ? "text-primary" : "text-muted-foreground opacity-50"
            )}>
              <span className="text-[10px] opacity-50">{new Date().toLocaleTimeString()} &gt;</span>
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
