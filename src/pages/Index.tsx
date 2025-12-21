import { useEffect, useRef } from "react";

// Headshot
import headshot from "@/assets/PuhlOwenHeadshotWebsite.jpeg";

// Gallery images
import film01 from "@/assets/portfoliofilm1/88840005.JPG";
import film02 from "@/assets/portfoliofilm1/88840009.JPG";
import film03 from "@/assets/portfoliofilm1/88840010.JPG";
import film04 from "@/assets/portfoliofilm1/88840011.JPG";
import film05 from "@/assets/portfoliofilm1/88840012.JPG";
import film06 from "@/assets/portfoliofilm1/88840013.JPG";
import film07 from "@/assets/portfoliofilm1/88840014.JPG";
import film08 from "@/assets/portfoliofilm1/88840015.JPG";
import film09 from "@/assets/portfoliofilm1/88840016.JPG";
import film10 from "@/assets/portfoliofilm1/88840017.JPG";
import film11 from "@/assets/portfoliofilm1/88840018.JPG";
import film12 from "@/assets/portfoliofilm1/88840019.JPG";

const galleryImages = [
  { src: film01, alt: "Portfolio moment", span: "col-span-8 row-span-2" },
  { src: film02, alt: "Film study", span: "col-span-4 row-span-1" },
  { src: film03, alt: "Captured light", span: "col-span-4 row-span-1" },
  { src: film04, alt: "Composition", span: "col-span-4 row-span-2" },
  { src: film05, alt: "Detail", span: "col-span-4 row-span-1" },
  { src: film06, alt: "Moment", span: "col-span-6 row-span-1" },
  { src: film07, alt: "Perspective", span: "col-span-6 row-span-2" },
  { src: film08, alt: "Frame", span: "col-span-6 row-span-1" },
  { src: film09, alt: "Expression", span: "col-span-4 row-span-1" },
  { src: film10, alt: "Scene", span: "col-span-4 row-span-1" },
  { src: film11, alt: "Atmosphere", span: "col-span-8 row-span-1" },
  { src: film12, alt: "Story", span: "col-span-4 row-span-1" },
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
          CS, Math, & Music at Columbia University. Photographer. Music producer.
        </p>
        <div className="flex flex-wrap gap-6 mt-4 text-sm text-muted-foreground">
          <a 
            href="mailto:ogp2110@columbia.edu" 
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
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center gap-8">
            <p className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed">
              Based in Ohio and New York. Motivated by logic, pattern, and aesthetics.
            </p>
            <p className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed">
              My background is in technology, consulting, and behavioral research.
            </p>
            <p className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed">
              I'm currently learning to shoot film photography and live code music.
            </p>
            <p className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed">
              Always building and looking for new projects + challenges!
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
