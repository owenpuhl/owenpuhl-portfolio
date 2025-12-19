import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

// Using existing images for the homepage narrative
import malmoHero from "@/assets/malmo/malmo-hero.jpg";
import malmo02 from "@/assets/malmo/malmo-02.avif";
import malmo05 from "@/assets/malmo/malmo-05.avif";
import malmo09 from "@/assets/malmo/malmo-09.avif";

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero - Simple name and title */}
      <section className="h-[70vh] min-h-[500px] flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-12">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-none">
          Owen Puhl
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-md">
          CS-Math at Columbia. Photographer. Producer.
        </p>
      </section>

      {/* Headshot + Brief Intro */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="flow-section px-6 md:px-12 lg:px-24 py-16 md:py-24"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Headshot placeholder */}
          <div className="lg:col-span-4">
            <div className="aspect-[3/4] bg-muted/30 border border-border overflow-hidden">
              {/* Replace with your headshot */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                Your headshot here
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center">
            <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
              I sit at the intersection of logic and aesthetics — building software 
              with the same attention to composition I bring to photography and sound.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Work Teaser */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="flow-section"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-square lg:aspect-auto lg:h-[80vh]">
            <img
              src={malmo02}
              alt="Visual work"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-0 flex flex-col justify-center">
            <span className="text-xs text-muted-foreground tracking-widest uppercase mb-3">
              Photography
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              How I see
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Every frame is a decision — the same principles that make a compelling 
              photograph make elegant code.
            </p>
            <Link 
              to="/lens" 
              className="link-underline font-serif text-foreground w-fit"
            >
              View gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Code Work Teaser */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="flow-section"
      >
        <div className="grid lg:grid-cols-2">
          <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-0 flex flex-col justify-center order-2 lg:order-1">
            <span className="text-xs text-muted-foreground tracking-widest uppercase mb-3">
              Projects
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              What I build
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              From hackathon prototypes to research implementations — 
              code as composition, some with a soundtrack.
            </p>
            <Link 
              to="/work" 
              className="link-underline font-serif text-foreground w-fit"
            >
              View work
            </Link>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-[80vh] order-1 lg:order-2">
            <img
              src={malmo05}
              alt="Technical work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="flow-section px-6 md:px-12 lg:px-24 py-24 md:py-32"
      >
        <div className="max-w-2xl">
          <span className="text-xs text-muted-foreground tracking-widest uppercase mb-3 block">
            Background
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            The intersection
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            CS-Math isn't just a major — it's a lens for understanding pattern and structure 
            across domains: algorithms, signal processing, harmonic theory, visual composition.
          </p>
          <Link 
            to="/about" 
            className="link-underline font-serif text-foreground"
          >
            About me
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="px-6 md:px-12 lg:px-24 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Owen Puhl
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link to="/lens" className="hover:text-foreground transition-colors">Lens</Link>
              <Link to="/work" className="hover:text-foreground transition-colors">Work</Link>
              <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
