import Navigation from "@/components/Navigation";

const workItems = [
  {
    company: "Bleecker Street",
    role: "Market Mapping & Executive Search",
    description: "Part-time internship during Fall '25 and Spring '26. The firm places exceptional candidates + invests in top tech startups backed by the following:",
    tags: ["Strategy", "Recruiting", "Tech"],
    image: "/BleeckerVC.jpg",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-12">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-none">
          Work
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl">
          Selected professional experience in technology and consulting.
        </p>
      </section>

      {/* Work Items */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="space-y-16 md:space-y-24">
          {workItems.map((item, index) => (
            <article 
              key={index}
              className="grid lg:grid-cols-12 gap-6 lg:gap-12 border-t border-border pt-8"
            >
              <div className="lg:col-span-4">
                <h2 className="font-display text-2xl md:text-3xl text-foreground">
                  {item.company}
                </h2>
                <p className="font-serif text-muted-foreground mt-2">
                  {item.role}
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-6">
                <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-serif text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {item.image && (
                  <div className="bg-muted/30 border border-border overflow-hidden mt-6">
                    <img
                      src={item.image}
                      alt={item.company}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </article>
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

export default Work;
