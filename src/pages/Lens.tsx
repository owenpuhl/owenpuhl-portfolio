import { useEffect, useRef } from "react";
import Header from "@/components/Header";

// Using existing Malmö images for the gallery
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
  { src: malmo01, alt: "Urban geometry", span: "col-span-8 row-span-2" },
  { src: malmo02, alt: "Light study", span: "col-span-4 row-span-1" },
  { src: malmo03, alt: "Street moment", span: "col-span-4 row-span-1" },
  { src: malmo04, alt: "Architecture", span: "col-span-4 row-span-2" },
  { src: malmo05, alt: "Texture", span: "col-span-4 row-span-1" },
  { src: malmo06, alt: "Reflection", span: "col-span-6 row-span-1" },
  { src: malmo07, alt: "Composition", span: "col-span-6 row-span-2" },
  { src: malmo08, alt: "Shadow play", span: "col-span-6 row-span-1" },
  { src: malmo09, alt: "Quiet moment", span: "col-span-4 row-span-1" },
  { src: malmo10, alt: "Pattern", span: "col-span-4 row-span-1" },
  { src: malmo11, alt: "Perspective", span: "col-span-8 row-span-1" },
  { src: malmo12, alt: "Detail", span: "col-span-4 row-span-1" },
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
            © 2024 Owen Puhl. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Lens;