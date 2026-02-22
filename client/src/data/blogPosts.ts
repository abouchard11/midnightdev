export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string; // In a real app, this would be markdown or HTML
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "optimizing-for-searchgpt",
    title: "Optimizing for SearchGPT: The New SEO Frontier",
    excerpt:
      "Why traditional keyword stuffing is dead and how to structure your data for the next generation of AI search engines.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "AI_STRATEGY",
    image: "/images/hero-bg.png",
    content: `
      <h2>The Shift to Answer Engines</h2>
      <p>Search is evolving from a list of links to direct answers. SearchGPT and Perplexity don't just index your site; they read it, understand it, and synthesize it into a response.</p>
      
      <h2>Structured Data is King</h2>
      <p>To win in this new environment, your site needs to speak the language of AI. This means robust JSON-LD schemas, clear semantic HTML, and "Citation Engineering" to build trust rank.</p>
      
      <h2>Actionable Steps</h2>
      <ul>
        <li>Implement Organization and Service schemas</li>
        <li>Build "Conversational Landing Pages" that answer specific questions</li>
        <li>Focus on high-authority citations over spammy backlinks</li>
      </ul>
    `,
  },
  {
    slug: "enterprise-saas-architecture",
    title: "Enterprise SaaS Architecture: Scaling Beyond the MVP",
    excerpt:
      "A deep dive into microservices, multi-tenancy, and how to build a codebase that survives your Series B.",
    date: "2024-03-10",
    readTime: "8 min read",
    category: "ENGINEERING",
    image: "/images/saas-service.png",
    content: `
      <h2>The Monolith Trap</h2>
      <p>Most startups begin with a monolith. It's fast, simple, and great for an MVP. But as you scale, it becomes a bottleneck. Deployment times slow down, and one bug can bring down the entire system.</p>
      
      <h2>Moving to Microservices</h2>
      <p>Breaking your app into distinct services (Auth, Billing, Core Logic) allows for independent scaling and faster iteration cycles. But it introduces complexity in data consistency and observability.</p>
    `,
  },
  {
    slug: "ai-agents-local-marketing",
    title: "Why AI Agents Are Replacing Traditional Marketing Agencies",
    excerpt:
      "Autonomous agents don't sleep, don't take breaks, and respond to leads instantly. Here's why the agency model is being disrupted.",
    date: "2024-03-01",
    readTime: "4 min read",
    category: "MARKETING",
    image: "/images/marketing-service.png",
    content: `
      <h2>Speed to Lead</h2>
      <p>The #1 factor in closing a local lead is response time. AI agents can respond in seconds via SMS or email, while human agencies take hours or days.</p>
      
      <h2>Cost Efficiency</h2>
      <p>Instead of paying a retainer for a team of humans to manually post on social media, AI agents can generate and schedule content at a fraction of the cost.</p>
    `,
  },
];
