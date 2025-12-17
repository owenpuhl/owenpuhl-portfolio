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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-50px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={malmoHero}
            alt="Owen Puhl - Visual perspective"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-4 max-w-4xl">
            Where code meets<br />
            <span className="italic">creative vision</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            CS-Math at Columbia. Photographer. Producer.
          </p>
        </div>
      </section>

      {/* Story Section 1: How I See */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="flow-section px-6 md:px-12 lg:px-24 py-24 md:py-32"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
              01 — How I See
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Photography taught me to observe
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every frame is a decision. Light, composition, timing — the same 
              principles that make a compelling photograph make elegant code. 
              I learned to notice what others walk past.
            </p>
            <Link 
              to="/lens" 
              className="link-underline font-display text-lg text-foreground hover:text-accent transition-colors"
            >
              Explore my lens →
            </Link>
          </div>
          <div className="order-1 lg:order-2 editorial-image aspect-[4/5]">
            <img
              src={malmo02}
              alt="Visual observation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story Section 2: How I Think */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="flow-section px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-card"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="editorial-image aspect-[4/5]">
            <img
              src={malmo05}
              alt="Abstract thinking"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
              02 — How I Think
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Mathematics as a language
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The patterns in a well-designed algorithm echo through signal processing, 
              harmonic theory, and visual composition. CS-Math isn't just a major — 
              it's a way of understanding structure across domains.
            </p>
            <Link 
              to="/about" 
              className="link-underline font-display text-lg text-foreground hover:text-accent transition-colors"
            >
              More about my path →
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section 3: What I Build */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="flow-section px-6 md:px-12 lg:px-24 py-24 md:py-32"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
              03 — What I Build
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Code as composition
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From hackathon prototypes to research implementations, every project 
              carries this dual sensibility. Some have a soundtrack. All have an 
              aesthetic intention.
            </p>
            <Link 
              to="/work" 
              className="link-underline font-display text-lg text-foreground hover:text-accent transition-colors"
            >
              View my work →
            </Link>
          </div>
          <div className="order-1 lg:order-2 editorial-image aspect-[4/5]">
            <img
              src={malmo09}
              alt="Building and creating"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="flow-section px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-border"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Let's connect
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I'm always interested in conversations about technology, creativity, 
            and the spaces where they overlap.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-foreground text-background font-serif hover:bg-accent transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="px-6 md:px-12 lg:px-24 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Owen Puhl. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/lens" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Lens
              </Link>
              <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Work
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;