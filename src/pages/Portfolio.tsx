import { useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { ExternalLink } from "lucide-react";

// Concert videos - using public path strings
const concertVideos = [
  "/MusicLive/IMG_0406.mov",
  "/MusicLive/IMG_1878.MOV",
  "/MusicLive/IMG_2782.MOV",
];

const Portfolio = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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
      <section className="px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-12">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-none">
          Portfolio
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl">
          Been to over 50 concerts. Visited 7 countries. Always looking for the next moment.
        </p>
      </section>

      {/* Philosophy Statement */}
      <section className="px-6 md:px-12 lg:px-24 pb-16">
        <div className="max-w-3xl">
          <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
            I have a knack for getting in the center of action. I thrive where there's tension, uncertainty, and energy.
          </p>
          <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mt-6">
            I love to be at barricade. I love <em>moments</em>, and textures, and patterns.
          </p>
          <p className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed mt-6">
            On noticing.
          </p>
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
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted/30 border border-border overflow-hidden">
                    <img
                      src="/WKCR1.jpg"
                      alt="WKCR 1"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-muted/30 border border-border overflow-hidden">
                    <img
                      src="/WKCR2.JPG"
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
                    src="/StrudelREPL.jpg"
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
                  src="/PuhlPoster.jpg"
                  alt="Puhl poster"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-muted/30 border border-border overflow-hidden">
                <img
                  src="/PuhlSpeech.jpeg"
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
            © 2025 Owen Puhl
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
