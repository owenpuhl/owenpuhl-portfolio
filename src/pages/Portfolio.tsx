import { useRef, useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { ExternalLink } from "lucide-react";

// Concert videos - using public path strings
const concertVideos = [
  "/images/MusicLive/IMG_0406.mov",
  "/images/MusicLive/IMG_1878.MOV",
  "/images/MusicLive/IMG_2782.MOV",
];

const Portfolio = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for video autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-12 overflow-hidden">
        <div className="flex gap-8 lg:gap-16">
          <div
            className="flex-1 self-start flex flex-col justify-center gap-4"
            style={{ transform: `translateY(${scrollY * -0.12}px)` }}
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-none">
              Portfolio
            </h1>
            <p className="ffont-serif text-2xl md:text-3xl text-foreground leading-relaxed max-w-2xl">
              I've been to over 50 concerts, and visited 7 countries. I pride myself on noticing all I can.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed max-w-2xl">
              I have a knack for getting in the center of action. I thrive where there's tension, uncertainty, and energy.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed max-w-2xl">
              I love to be at barricade. I love <em>moments</em>.
            </p>
          </div>
          <div
            className="flex-shrink-0 self-start w-full max-w-md"
            style={{ transform: `translateY(${scrollY * 0.07}px)` }}
          >
            <div className="bg-muted/30 border border-border overflow-hidden">
              <img
                src="/images/Headshots/Portrait1.JPG"
                alt="Portrait"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Concert Videos - 3 side by side */}
      <section className="px-6 md:px-12 lg:px-24 pb-16">
        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">Live Music</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {concertVideos.map((video, index) => (
            <div key={index} className="aspect-[9/16] bg-muted/30 border border-border overflow-hidden">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video}
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SDT Rush Photography - Commented out for later */}
      {false && (
        <section className="px-6 md:px-12 lg:px-24 pb-16">
          <div className="border-t border-border pt-8">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
              <div className="lg:col-span-4">
                <h2 className="font-display text-2xl md:text-3xl text-foreground">
                  Rush Photography
                </h2>
                <p className="font-serif text-muted-foreground mt-2">
                  SDT
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-6">
                <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed">
                  Documenting rush events and community moments through photography.
                </p>
                {/* Placeholder for SDT photography */}
                <div className="aspect-[3/2] bg-muted/30 border border-border flex items-center justify-center mt-6">
                  <span className="text-muted-foreground font-serif text-sm">SDT photography samples</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Music Production */}
      <section className="px-6 md:px-12 lg:px-24 pb-16">
        <div className="border-t border-border pt-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl md:text-3xl text-foreground">
                Music Production
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-6 space-y-6">
              <div>
                <h3 className="font-display text-lg text-foreground">WKCR</h3>
                <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed mt-2">
                  Programming music on Columbia's radio station. Catch me on Transfigured Night, every other Friday from 2-6 AM!
                </p>
                <a
                  href="https://wkcr.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  <span className="font-serif">wkcr.org</span>
                  <ExternalLink size={14} />
                </a>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted/30 border border-border overflow-hidden">
                    <img
                      src="/images/WKCR1.jpg"
                      alt="WKCR 1"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-muted/30 border border-border overflow-hidden">
                    <img
                      src="/images/WKCR2.JPG"
                      alt="WKCR 2"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground">Strudel</h3>
                <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed mt-2">
                  Experimenting with live coding music. Snippet of one of my favorites so far.
                </p>
                <div className="aspect-[4/3] bg-muted/30 border border-border overflow-hidden mt-4">
                  <img
                    src="/images/StrudelREPL.jpg"
                    alt="Strudel REPL"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Curation */}
      <section className="px-6 md:px-12 lg:px-24 pb-16">
        <div className="border-t border-border pt-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl md:text-3xl text-foreground">
                Content & Curation
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-6">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-border pb-2">
                  <span className="font-serif text-foreground">Instagram</span>
                  <span className="font-serif text-muted-foreground">50,000 impressions/month</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-border pb-2">
                  <span className="font-serif text-foreground">TikTok</span>
                  <span className="font-serif text-muted-foreground">500,000+ total impressions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story - Informative Speaking */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="border-t border-border pt-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
              Origins
            </h2>
            <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed">
              I got my start competing in Informative Speaking during high school. I learned to curate mixed media using poster boards. My speeches grew over the course of the year, until I finally presented at state and national competitions. Supplimenting my writing with visuals allowed me to bring light to causes I felt strongly about in healthcare and technology.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8">
              <div className="aspect-[3/4] bg-muted/30 border border-border overflow-hidden">
                <img
                  src="/images/PuhlPoster.jpg"
                  alt="Puhl poster"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-muted/30 border border-border overflow-hidden">
                <img
                  src="/images/PuhlSpeech.jpeg"
                  alt="Puhl speech"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
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

export default Portfolio;
