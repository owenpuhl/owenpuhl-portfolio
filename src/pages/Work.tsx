import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Music, Code, FlaskConical, GraduationCap } from "lucide-react";

interface Project {
  title: string;
  category: "hackathon" | "research" | "capstone" | "class";
  description: string;
  tags: string[];
  year: string;
  hasSound?: boolean;
}

const projects: Project[] = [
  {
    title: "Harmonic Patterns",
    category: "hackathon",
    description: "An exploration of musical structures through algorithmic composition. Built at HackMIT, this project translates mathematical sequences into generative audio landscapes.",
    tags: ["Python", "Web Audio API", "React"],
    year: "2024",
    hasSound: true,
  },
  {
    title: "Visual Entropy",
    category: "research",
    description: "Research on information theory applied to image compression. Investigating novel approaches to lossy compression using perceptual metrics.",
    tags: ["Computer Vision", "Information Theory", "PyTorch"],
    year: "2024",
  },
  {
    title: "Distributed Systems Capstone",
    category: "capstone",
    description: "A fault-tolerant key-value store implementing Raft consensus. Designed for consistency and partition tolerance in distributed environments.",
    tags: ["Go", "Distributed Systems", "Consensus"],
    year: "2024",
  },
  {
    title: "Frequency Domain Analysis",
    category: "class",
    description: "Signal processing project exploring FFT applications in audio visualization and real-time frequency analysis.",
    tags: ["DSP", "JavaScript", "Canvas API"],
    year: "2023",
    hasSound: true,
  },
  {
    title: "Graph Neural Networks for Molecules",
    category: "research",
    description: "Applying GNNs to predict molecular properties. Collaboration with the chemistry department on computational drug discovery.",
    tags: ["PyTorch Geometric", "Chemistry", "ML"],
    year: "2023",
  },
  {
    title: "Compiler Optimization",
    category: "class",
    description: "Implementation of common subexpression elimination and loop-invariant code motion in a custom compiler backend.",
    tags: ["OCaml", "LLVM", "Optimization"],
    year: "2023",
  },
];

const categoryIcons = {
  hackathon: Code,
  research: FlaskConical,
  capstone: GraduationCap,
  class: GraduationCap,
};

const categoryLabels = {
  hackathon: "Hackathon",
  research: "Research",
  capstone: "Capstone",
  class: "Coursework",
};

const Work = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-4xl">
          <h1 className="fluid-heading text-foreground mb-6">Work</h1>
          <p className="fluid-subheading text-muted-foreground max-w-2xl">
            Projects at the intersection of computation, mathematics, and creative expression. 
            Code as composition.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="px-6 md:px-12 lg:px-24 pb-8">
        <div className="flex flex-wrap gap-3">
          {["all", "hackathon", "research", "capstone", "class"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-serif transition-colors border ${
                filter === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground border-border hover:border-foreground"
              }`}
            >
              {cat === "all" ? "All" : categoryLabels[cat as keyof typeof categoryLabels]}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => {
            const Icon = categoryIcons[project.category];
            return (
              <article
                key={index}
                className="group border-t border-border pt-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon size={16} />
                    <span className="text-sm">{categoryLabels[project.category]}</span>
                    <span className="text-sm">· {project.year}</span>
                  </div>
                  {project.hasSound && (
                    <div className="flex items-center gap-1 text-accent">
                      <Music size={14} />
                      <span className="text-xs">Sound</span>
                    </div>
                  )}
                </div>

                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Sound Integration Note */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="border-t border-border pt-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Music size={24} className="text-accent" />
              <h3 className="font-display text-xl text-foreground">On Sound</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Music production is where I think about structure differently. The same 
              patterns that appear in algorithms — recursion, transformation, composition — 
              show up in arrangement and synthesis. Projects marked with the sound icon 
              have an auditory component.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="px-6 md:px-12 lg:px-24 py-12 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Owen Puhl. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Work;