import Navigation from "@/components/Navigation";
import { ExternalLink } from "lucide-react";

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-12">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-none">
          Research
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl">
          Academic research in AI policy, behavioral economics, and data science.
        </p>
      </section>

      {/* Featured Research - Cambridge */}
      <section className="px-6 md:px-12 lg:px-24 pb-16">
        <div className="border-t border-border pt-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <span className="text-sm text-muted-foreground font-serif">Summer 2025 · Study Abroad</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2">
                Cambridge
              </h2>
              <p className="font-serif text-lg text-muted-foreground mt-4 leading-relaxed">
                Details about your Cambridge research experience will go here. This is the featured, consequential choice section.
              </p>
              <a 
                href="https://researchgate.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-foreground hover:text-accent transition-colors link-underline"
              >
                <span className="font-serif">ResearchGate</span>
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="aspect-[4/3] bg-muted/30 border border-border overflow-hidden">
                <img
                  src="/CambridgeLandscape.jpg"
                  alt="Cambridge landscape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Research */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="space-y-12">
          {/* Teachers College */}
          <article className="border-t border-border pt-8">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
              <div className="lg:col-span-4">
                <h3 className="font-display text-xl md:text-2xl text-foreground">
                  AI Policy Research
                </h3>
                <p className="font-serif text-sm text-muted-foreground mt-1">
                  Dr. Renzhe Yu
                </p>
                <p className="font-serif text-xs text-muted-foreground mt-1">
                  Teachers College · Columbia Data Science Institute
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-6">
                <p className="font-serif text-base md:text-lg text-foreground leading-relaxed">
                  Mapping AI policy at Teachers College, examining the intersection of education technology and policy implications.
                </p>
              </div>
            </div>
          </article>

          {/* Political Accountability */}
          <article className="border-t border-border pt-8">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
              <div className="lg:col-span-4">
                <h3 className="font-display text-xl md:text-2xl text-foreground">
                  Political Accountability
                </h3>
                <p className="font-serif text-sm text-muted-foreground mt-1">
                  Dr. Victoria Moorers
                </p>
                <p className="font-serif text-xs text-muted-foreground mt-1">
                  Columbia Department of Economics
                </p>
                <div className="flex gap-4 mt-4">
                  <a 
                    href="https://scholar.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                  >
                    <span className="font-serif">Google Scholar</span>
                    <ExternalLink size={14} />
                  </a>
                  <a 
                    href="https://github.com/owenpuhl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                  >
                    <span className="font-serif">GitHub</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-6 lg:col-start-6">
                <p className="font-serif text-base md:text-lg text-foreground leading-relaxed">
                  Research examining political accountability mechanisms through data-driven analysis and visualization.
                </p>
                {/* Education by State visualization */}
                <div className="mt-6">
                  <div className="bg-muted/30 border border-border overflow-hidden">
                    <img
                      src="/education_by_state.png"
                      alt="Education by state visualization"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="px-6 md:px-12 lg:px-24 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Owen Puhl
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Research;
