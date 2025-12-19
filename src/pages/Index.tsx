import { useEffect, useRef } from "react";

// Headshot
import headshot from "@/assets/PuhlOwenHeadshotWebsite.jpeg";

// Gallery images
import malmo01 from "@/assets/malmo/malmo-01.jpg";
import malmo02 from "@/assets/malmo/malmo-02.avif";
import malmo03 from "@/assets/malmo/malmo-03.avif";
import malmo04 from "@/assets/malmo/malmo-04.avif";
import malmo05 from "@/assets/malmo/malmo-05.avif";
import malmo06 from "@/assets/malmo/malmo-06.avif";
import malmo07 from "@/assets/malmo/malmo-07.avif";
import malmo08 from "@/assets/malmo/malmo-08.avif";
import malmo09 from "@/assets/malmo/malmo-09.avif";
import malmo10 from "@/assets/malmo/malmo-10.avif";
import malmo11 from "@/assets/malmo/malmo-11.avif";
import malmo12 from "@/assets/malmo/malmo-12.avif";

const galleryImages = [
  { src: malmo01, alt: "Malmö moment", span: "col-span-8 row-span-2" },
  { src: malmo02, alt: "Urban study", span: "col-span-4 row-span-1" },
  { src: malmo03, alt: "Captured light", span: "col-span-4 row-span-1" },
  { src: malmo04, alt: "Composition", span: "col-span-4 row-span-2" },
  { src: malmo05, alt: "Detail", span: "col-span-4 row-span-1" },
  { src: malmo06, alt: "Moment", span: "col-span-6 row-span-1" },
  { src: malmo07, alt: "Perspective", span: "col-span-6 row-span-2" },
  { src: malmo08, alt: "Frame", span: "col-span-6 row-span-1" },
  { src: malmo09, alt: "Expression", span: "col-span-4 row-span-1" },
  { src: malmo10, alt: "Scene", span: "col-span-4 row-span-1" },
  { src: malmo11, alt: "Atmosphere", span: "col-span-8 row-span-1" },
  { src: malmo12, alt: "Story", span: "col-span-4 row-span-1" },
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
      {/* Hero - Name, title, and contact */}
      <section className="px-6 md:px-12 lg:px-24 pt-12 pb-8">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-none">
          Owen Puhl
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-md">
          CS, Math, & Music at Columbia. Photographer. Producer.
        </p>
        <div className="flex flex-wrap gap-6 mt-4 text-sm text-muted-foreground">
          <a 
            href="mailto:op2238@columbia.edu" 
            className="hover:text-foreground transition-colors link-underline"
          >
            Email
          </a>
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
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center">
            <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
              Motivated by logic + aesthetics. Always building.
            </p>
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
