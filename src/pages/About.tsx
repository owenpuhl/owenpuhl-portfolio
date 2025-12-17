import Header from "@/components/Header";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-4xl">
          <h1 className="fluid-heading text-foreground mb-6">About</h1>
        </div>
      </section>

      {/* Bio Content */}
      <section className="px-6 md:px-12 lg:px-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Main Bio */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-display">
              I'm Owen Puhl, a Computer Science and Mathematics major at Columbia University.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work lives at the intersection of rigorous computation and creative 
              expression. I believe the same patterns that make elegant code also 
              make compelling photographs and resonant music.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Photography taught me to see — to notice light, geometry, the quiet 
              moments that most people walk past. That way of observing has changed 
              how I approach problems in code. Every system has its own visual 
              logic, its own rhythm.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Music production is where I experiment with structure and transformation. 
              The mathematical foundations of signal processing, harmony theory, and 
              algorithmic composition aren't separate from my CS work — they're 
              extensions of it.
            </p>
          </div>

          {/* Details */}
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-lg text-foreground mb-4 pb-2 border-b border-border">
                Currently
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>CS-Math Major, Columbia University</li>
                <li>Research: Computational approaches to visual systems</li>
                <li>Building tools that bridge creative and technical domains</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg text-foreground mb-4 pb-2 border-b border-border">
                Interests
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Computer Vision & Graphics</li>
                <li>Music Information Retrieval</li>
                <li>Distributed Systems</li>
                <li>Photography & Visual Design</li>
                <li>Sound Design & Synthesis</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg text-foreground mb-4 pb-2 border-b border-border">
                Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I don't see a separation between "technical" and "creative" work. 
                The best code has an aesthetic dimension. The best art has rigorous 
                underlying structure. I'm interested in the space where both are true.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-border">
        <div className="flex flex-wrap gap-8">
          <Link 
            to="/lens" 
            className="link-underline font-display text-xl text-foreground hover:text-accent transition-colors"
          >
            See how I see →
          </Link>
          <Link 
            to="/work" 
            className="link-underline font-display text-xl text-foreground hover:text-accent transition-colors"
          >
            View my work →
          </Link>
          <Link 
            to="/contact" 
            className="link-underline font-display text-xl text-foreground hover:text-accent transition-colors"
          >
            Get in touch →
          </Link>
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

export default About;