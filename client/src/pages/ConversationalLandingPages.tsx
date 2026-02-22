import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Bot,
  User,
  Send,
  Sparkles,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: "ai" | "user";
  content: string;
  typing?: boolean;
}

export default function ConversationalLandingPages() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      content:
        "Greetings. I am the Midnight Dev Protocol Agent. I can explain how Conversational Landing Pages turn your static content into active knowledge sources for AI. What would you like to know?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "What is a Conversational Landing Page?",
    "How does this help with SEO?",
    "Can you show me an example?",
    "How do I get started?",
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const response = generateResponse(text);
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "ai", content: response },
      ]);
    }, 1500);
  };

  const generateResponse = (input: string): string => {
    const lower = input.toLowerCase();
    if (lower.includes("what") && lower.includes("conversational")) {
      return "A Conversational Landing Page is structured data wrapped in a narrative interface. Unlike traditional pages designed for visual scanning, these are optimized for Large Language Models (LLMs) to ingest, understand, and re-articulate. We structure your value proposition so AI agents like ChatGPT and Perplexity can perfectly pitch your product to their users.";
    }
    if (lower.includes("seo") || lower.includes("search")) {
      return "Traditional SEO targets keywords. Conversational Optimization targets **Contextual Relevance**. By providing Q&A structured data and semantic markup, we ensure your site achieves 'Reference Status' in AI-generated answers, effectively bypassing the traditional 10 blue links.";
    }
    if (lower.includes("example") || lower.includes("show")) {
      return "You are looking at one right now. This interface isn't just a chatbot; it's a demonstration of how information can be served dynamically. Imagine a potential client asking an AI about your pricing, and getting a precise, verified answer instead of a generic link. That is the power of Conversational Landing Pages.";
    }
    if (lower.includes("start") || lower.includes("get")) {
      return "Initiating a protocol is simple. We audit your current digital footprint, restructure your core data into a Knowledge Graph, and deploy a conversational interface layer. Click the 'Deploy Agent' button below to begin the handshake.";
    }
    return "That's a valid query. Our architecture is designed to handle complex interrogations. Essentially, we turn your website from a digital brochure into an intelligent agent that works 24/7. Shall we proceed with an audit?";
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEO
        title="Conversational Landing Pages | Midnight Dev"
        description="Turn your website into an intelligent agent. Optimize for ChatGPT, Perplexity, and the future of AI search."
        keywords={[
          "Conversational UI",
          "AI SEO",
          "Chat Interface",
          "Generative UI",
          "Midnight Dev",
        ]}
        url="/conversational-landing-pages"
      />
      <Navigation />

      <main className="pt-24 pb-24">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="mb-12 md:mb-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary font-mono text-xs uppercase tracking-widest mb-6">
              <MessageSquare className="h-3 w-3" />
              GEN_UI_PROTOCOL_V1
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
              SPEAK THE <span className="text-primary">LANGUAGE OF AI</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Don't just optimize for clicks. Optimize for conversation.
              Transform your static landing pages into interactive knowledge
              bases that AI models trust and reference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Value Props */}
            <div className="space-y-12">
              <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Bot className="w-24 h-24" />
                </div>
                <h3 className="text-2xl font-mono font-bold mb-4 flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-primary" />
                  Structured for Machines
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We implement deep JSON-LD schemas and semantic HTML that
                  allows LLMs to parse your pricing, features, and unique
                  selling points with 100% accuracy.
                </p>
              </div>

              <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Sparkles className="w-24 h-24" />
                </div>
                <h3 className="text-2xl font-mono font-bold mb-4 flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Zero-Friction Answers
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users don't want to hunt for information. Give them direct
                  answers. Our interfaces reduce bounce rates by engaging
                  visitors in active dialogue immediately.
                </p>
              </div>

              <div className="p-8 border border-dashed border-white/20">
                <h3 className="text-lg font-mono font-bold mb-6 text-center">
                  DEPLOYMENT_STACK
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "RAG_Pipeline",
                    "Vector_Database",
                    "Semantic_Search",
                    "React_GenUI",
                  ].map(tech => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 text-sm font-mono text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Chat Demo */}
            <div className="lg:sticky lg:top-32">
              <div className="border border-white/20 bg-black rounded-xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
                {/* Chat Header */}
                <div className="bg-[#1a1a1a] p-4 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-mono text-sm font-bold tracking-wider">
                      MIDNIGHT_AGENT
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground">
                    ONLINE
                  </div>
                </div>

                {/* Messages Area */}
                <div
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                >
                  {messages.map(msg => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === "ai" ? "bg-primary/20 text-primary" : "bg-white/10 text-white"}`}
                      >
                        {msg.role === "ai" ? (
                          <Bot className="w-5 h-5" />
                        ) : (
                          <User className="w-5 h-5" />
                        )}
                      </div>
                      <div
                        className={`max-w-[80%] p-4 rounded-lg text-sm leading-relaxed ${msg.role === "ai" ? "bg-[#111] border border-white/10 text-gray-300" : "bg-primary/10 border border-primary/20 text-white"}`}
                      >
                        {msg.content}
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5" />
                      </div>
                      <div className="bg-[#111] border border-white/10 p-4 rounded-lg flex items-center gap-1">
                        <span
                          className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-[#111] border-t border-white/10">
                  {/* Suggested Questions */}
                  <div className="flex gap-2 overflow-x-auto pb-4 mb-2 scrollbar-none">
                    {suggestedQuestions.map(q => (
                      <button
                        key={q}
                        onClick={() => handleSendMessage(q)}
                        className="whitespace-nowrap px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-muted-foreground hover:bg-white/10 hover:text-white transition-colors flex-shrink-0"
                      >
                        {q}
                      </button>
                    ))}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={e => setInputValue(e.target.value)}
                      onKeyDown={e =>
                        e.key === "Enter" && handleSendMessage(inputValue)
                      }
                      placeholder="Ask about conversational optimization..."
                      className="w-full bg-black border border-white/20 rounded-lg py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600"
                    />
                    <button
                      onClick={() => handleSendMessage(inputValue)}
                      disabled={!inputValue.trim() || isTyping}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary text-black rounded hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <ContactDialog
                  trigger={
                    <Button
                      size="lg"
                      className="w-full bg-white text-black hover:bg-gray-200 font-mono text-base h-14 uppercase tracking-widest"
                    >
                      Deploy Your Agent
                    </Button>
                  }
                  service="Conversational Landing Page Inquiry"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
