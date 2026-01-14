import { useEffect, useRef, useState } from "react";
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

const paragraphs = [
  "Based in Ohio and New York. Motivated by logic, strategy, and pattern.",
  "My background is in business, technology, and behavioral research.",,
  "Living portfolio. Always building & looking for new projects and challenges!",
];

const BlurText = ({ children }: { children: string }) => {
  return (
    <p className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed">
      {children}
    </p>
  );
};

const Index = () => {
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const textSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* Headshot + Background - Parallax Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12 md:py-16 overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div
            className="lg:col-span-4"
            style={{ transform: `translateY(${scrollY * 0.07}px)` }}
          >
            <div className="aspect-[3/4] bg-muted/30 border border-border overflow-hidden">
              <img
                src={headshot}
                alt="Owen Puhl headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div
            ref={textSectionRef}
            className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center gap-8"
            style={{ transform: `translateY(${scrollY * -0.12}px)` }}
          >
            {paragraphs.map((text, index) => (
              <BlurText key={index}>{text}</BlurText>
            ))}
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
            © 2026 Owen Puhl
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
