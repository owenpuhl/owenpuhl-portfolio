import { useEffect, useRef } from "react";
import Header from "@/components/Header";

// Portfolio film photography
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

const Lens = () => {
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
      <Header />

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-4xl">
          <h1 className="fluid-heading text-foreground mb-6">Lens</h1>
          <p className="fluid-subheading text-muted-foreground max-w-2xl">
            How I see the world — moments of light, geometry, and quiet observation. 
            Photography as a way of thinking.
          </p>
        </div>
      </section>

      {/* Asymmetric Gallery Grid */}
      <section className="px-4 md:px-8 lg:px-12 pb-24">
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
        <div className="px-6 md:px-12 lg:px-24 py-12 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Owen Puhl. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Lens;