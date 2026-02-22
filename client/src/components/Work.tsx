import { Badge } from "@/components/ui/badge";

export default function Work() {
  const projects = [
    {
      title: "VORTEX_ANALYTICS",
      category: "SaaS Platform",
      description:
        "Enterprise data visualization dashboard for financial institutions processing $5B+ annually.",
      tech: ["Next.js", "Tremor", "Python"],
      image: "/images/portfolio-bg.png", // Using the abstract bg as placeholder for now
    },
    {
      title: "APEX_LEGAL",
      category: "Local Marketing",
      description:
        "AI-driven lead generation system for a top-tier law firm, increasing qualified leads by 340%.",
      tech: ["OpenAI API", "Twilio", "Next.js"],
      image: "/images/portfolio-bg.png",
    },
    {
      title: "NEXUS_HEALTH",
      category: "SaaS Platform",
      description:
        "HIPAA-compliant patient management system with integrated telemedicine capabilities.",
      tech: ["React", "WebRTC", "Node.js"],
      image: "/images/portfolio-bg.png",
    },
  ];

  return (
    <section
      id="work"
      className="py-16 md:py-24 bg-background border-b border-white/10"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tighter">
              SELECTED <span className="text-primary">WORKS</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl">
              A collection of high-impact systems deployed for our partners.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-right font-mono text-sm text-muted-foreground">
              <p>TOTAL_PROJECTS_DEPLOYED: 47</p>
              <p>UPTIME_GUARANTEE: 99.9%</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative border border-white/10 bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                  <span className="font-mono text-primary text-lg tracking-widest border border-primary px-4 py-2">
                    VIEW_CASE_STUDY
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-primary tracking-widest uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="rounded-none bg-white/5 text-white/70 hover:bg-white/10 font-normal text-xs"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
