import Navigation from "@/components/Navigation";
import TrackList from "@/components/TrackList";

const Strudel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-12">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl md:text-5xl lg:text-7xl text-foreground leading-none mb-6">
            Strudel Archive
          </h1>
          <p className="font-serif text-lg md:text-2xl text-muted-foreground leading-relaxed">
            Live coded electronic music. Exploring sound design through algorithmic composition using Strudel, a live coding environment for music.
          </p>
        </div>
      </section>

      {/* Track List Section */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-[780px]">
          <TrackList />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="px-6 md:px-12 lg:px-24 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            Built with{' '}
            <a
              href="https://strudel.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors link-underline"
            >
              Strudel
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Strudel;
