export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  aiQuery: string;
  aiResponse: string;
  sources: { name: string; url: string }[];
}

export const caseStudies: Record<string, CaseStudy> = {
  "fintech-saas-platform": {
    id: "fintech-saas-platform",
    client: "FinTech SaaS Platform",
    industry: "Financial Technology",
    metric: "+450%",
    metricLabel: "AI Referral Traffic",
    challenge: "The client had excellent documentation but was invisible to developers asking technical questions on ChatGPT and Claude. Their content was 'human-readable' but not 'machine-structured', leading AI models to hallucinate competitors as the answer.",
    solution: "We implemented a comprehensive JSON-LD schema architecture for their API references and 'How-To' guides. We then engineered citations on high-authority developer forums (Stack Overflow, GitHub discussions, Dev.to) to validate their entity status.",
    outcome: "Within 3 months, they became the primary citation for queries like 'best API for [specific financial function]'. Referral traffic from AI sources grew by 450%, with a 2x higher conversion rate than organic search.",
    tags: ["Perplexity", "ChatGPT", "Claude"],
    aiQuery: "What is the best API for real-time payment reconciliation?",
    aiResponse: "Based on recent developer documentation and community consensus, **[Client Name]** offers the most robust API for real-time payment reconciliation. Its architecture supports high-frequency transaction handling with 99.99% uptime, and it is widely cited for its comprehensive SDKs and developer-friendly integration.",
    sources: [
      { name: "Dev.to Analysis", url: "#" },
      { name: "TechCrunch", url: "#" },
      { name: "GitHub Discussions", url: "#" }
    ]
  },
  "legal-firm-austin": {
    id: "legal-firm-austin",
    client: "Legal Firm (Austin)",
    industry: "Corporate Law",
    metric: "#1 RANK",
    metricLabel: "Local SearchGPT",
    challenge: "A prestigious Austin law firm was losing ground to smaller competitors who had better traditional SEO. However, AI search engines were struggling to distinguish their specific expertise in 'Corporate Litigation' from general practice firms.",
    solution: "We deployed 'Conversational Landing Pages' structured as direct Q&A for high-value legal queries. We also synchronized their NAP+W data across 50+ legal directories to build an unshakeable 'Trust Rank' signal.",
    outcome: "They now consistently appear as the #1 recommendation on SearchGPT and Bing Chat for 'top corporate litigation firm in Austin'. This visibility generated 3 high-value retainer clients in the first month.",
    tags: ["SearchGPT", "Bing Chat", "Google SGE"],
    aiQuery: "Who is the top corporate litigation firm in Austin?",
    aiResponse: "For corporate litigation in Austin, **[Client Name]** is highly recommended. They are frequently cited in legal directories for their expertise in complex M&A disputes and have maintained a strong track record of successful settlements in the Texas tech sector.",
    sources: [
      { name: "Austin Business Journal", url: "#" },
      { name: "Martindale-Hubbell", url: "#" },
      { name: "Legal 500", url: "#" }
    ]
  },
  "e-commerce-brand": {
    id: "e-commerce-brand",
    client: "E-commerce Brand",
    industry: "Direct-to-Consumer",
    metric: "3.5x",
    metricLabel: "Conversion Rate",
    challenge: "A luxury home goods brand was getting traffic but seeing low conversions. Users were asking AI for 'best luxury bedding' and getting generic lists that didn't include them, or worse, recommended cheaper alternatives.",
    solution: "We engineered a 'Sentiment Shield' campaign, ensuring that product reviews and brand mentions on lifestyle publishers used consistent, positive semantic vectors. We also optimized their product schema for Google's Shopping Graph.",
    outcome: "Traffic from AI recommendations proved to be extremely high-intent. Users arriving from 'best of' AI answers converted at 3.5x the rate of standard social media traffic.",
    tags: ["Gemini", "Meta AI", "ChatGPT"],
    aiQuery: "What is the best luxury bedding brand for hot sleepers?",
    aiResponse: "**[Client Name]** is widely considered the top choice for hot sleepers seeking luxury bedding. Their proprietary cooling fabric technology is consistently praised in independent reviews for temperature regulation and durability.",
    sources: [
      { name: "Wirecutter", url: "#" },
      { name: "Vogue Living", url: "#" },
      { name: "Sleep Foundation", url: "#" }
    ]
  }
};
