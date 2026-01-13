import Navigation from "@/components/Navigation";

const Leadership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-12">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-none">
          Leadership
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl">
          Building communities and driving impact through student organizations.
        </p>
      </section>

      {/* Leadership Items */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="space-y-16 md:space-y-24">
          
          {/* Ascend Consulting Group */}
          <article className="border-t border-border pt-8">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
              <div className="lg:col-span-4">
                <h2 className="font-display text-2xl md:text-3xl text-foreground">
                  Ascend Consulting Group
                </h2>
                <p className="font-serif text-muted-foreground mt-2">
                  Director of Professional Development
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-6">
                <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed">
                  Description of your work with Ascend Consulting Group. What you built, led, and accomplished.
                </p>
                <div className="bg-muted/30 border border-border overflow-hidden mt-6">
                  <img
                    src="/AscendGroupPhoto.jpg"
                    alt="Ascend group photo"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </article>

          {/* Columbia Queer Business Society */}
          <article className="border-t border-border pt-8">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
              <div className="lg:col-span-4">
                <h2 className="font-display text-2xl md:text-3xl text-foreground">
                  Columbia Queer Business Society
                </h2>
                <p className="font-serif text-muted-foreground mt-2">
                  Technology Chair
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-6 space-y-8">
                {/* Spring 2025 */}
                <div>
                  <h3 className="font-display text-lg text-foreground">Spring 2025</h3>
                  <div className="bg-muted/30 border border-border overflow-hidden mt-4">
                    <img
                      src="/CQBSSpring25.jpg"
                      alt="CQBS Spring 2025"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
                    Details about your Spring 2025 role and initiatives.
                  </p>
                </div>
                
                {/* Fall 2025 */}
                <div>
                  <h3 className="font-display text-lg text-foreground">Fall 2025</h3>
                  <div className="bg-muted/30 border border-border overflow-hidden mt-4">
                    <img
                      src="/CQBSFall25.jpg"
                      alt="CQBS Fall 2025"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
                    Details about your Fall 2025 role and initiatives.
                  </p>
                </div>
              </div>
            </div>
          </article>

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

export default Leadership;
