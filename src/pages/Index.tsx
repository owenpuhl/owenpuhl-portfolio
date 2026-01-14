import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

// Headshot
import headshot from "@/assets/PuhlOwenHeadshotWebsite.jpeg";

// Gallery images - using public path
const galleryImages = [
  { src: "/PortfolioFilm1/88840005.JPG", alt: "Portfolio moment", span: "col-span-8 row-span-2" },
  { src: "/PortfolioFilm1/88840009.JPG", alt: "Film study", span: "col-span-4 row-span-1" },
  { src: "/PortfolioFilm1/88840010.JPG", alt: "Captured light", span: "col-span-4 row-span-1" },
  { src: "/PortfolioFilm1/88840011.JPG", alt: "Composition", span: "col-span-4 row-span-2" },
  { src: "/PortfolioFilm1/88840012.JPG", alt: "Detail", span: "col-span-4 row-span-1" },
  { src: "/PortfolioFilm1/88840013.JPG", alt: "Moment", span: "col-span-6 row-span-1" },
  { src: "/PortfolioFilm1/88840014.JPG", alt: "Perspective", span: "col-span-6 row-span-2" },
  { src: "/PortfolioFilm1/88840015.JPG", alt: "Frame", span: "col-span-6 row-span-1" },
  { src: "/PortfolioFilm1/88840016.JPG", alt: "Expression", span: "col-span-4 row-span-1" },
  { src: "/PortfolioFilm1/88840017.JPG", alt: "Scene", span: "col-span-4 row-span-1" },
  { src: "/PortfolioFilm1/88840018.JPG", alt: "Atmosphere", span: "col-span-8 row-span-1" },
  { src: "/PortfolioFilm1/88840019.JPG", alt: "Story", span: "col-span-4 row-span-1" },
];

const Index = () => {
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    imagesRef.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero - Name, title, and contact */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 md:pt-28 pb-8">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-none">
          Owen Puhl
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-md">
          Applied Mathematics at Columbia University. Culture enthusiast.
        </p>
        <div className="flex flex-wrap gap-6 mt-4 text-sm text-muted-foreground">
          <span className="text-muted-foreground">
            ogp2110@columbia.edu
          </span>
          <a 
            href="https://github.com/owenpuhl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors link-underline"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/owenpuhl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors link-underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Headshot + Background */}
      <section className="px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="aspect-[3/4] bg-muted/30 border border-border overflow-hidden">
              <img
                src={headshot}
                alt="Owen Puhl headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center gap-12">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Philosophy</span>
              <p className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed">
                <span className="italic">This is how I see the world</span>—through the intersection of logic, culture, and creativity.
              </p>
            </div>
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Background</span>
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
                Based between <span className="border-b border-foreground/30 hover:border-foreground transition-colors cursor-default">Ohio</span> and <span className="border-b border-foreground/30 hover:border-foreground transition-colors cursor-default">New York</span>. My work spans business, technology, and behavioral research.
              </p>
            </div>
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Currently</span>
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
                Learning to shoot <span className="text-muted-foreground hover:text-foreground transition-colors">film photography</span> and <span className="text-muted-foreground hover:text-foreground transition-colors">live code music</span>.
              </p>
            </div>
            
            <div className="pt-4 border-t border-border">
              <p className="font-serif text-xl text-muted-foreground leading-relaxed">
                A living portfolio—projects and interests as they evolve. Always building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className={`${image.span} editorial-image opacity-0`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="relative w-full h-full min-h-[200px] md:min-h-[300px] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
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

export default Index;
