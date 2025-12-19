import Header from "@/components/Header";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ email: "", name: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="fluid-heading text-foreground mb-6">Contact</h1>
          
          <p className="fluid-subheading text-muted-foreground mb-12">
            Have a question or want to collaborate? I'd love to hear from you.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-serif text-muted-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-base border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-serif text-muted-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-base border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-serif text-muted-foreground mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-base border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-serif text-muted-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                className="w-full px-4 py-3 text-base border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-4 bg-foreground text-background font-serif hover:bg-accent transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Alternative Contact */}
        <div className="mt-24 pt-12 border-t border-border">
          <div className="max-w-2xl">
            <h2 className="font-display text-xl text-foreground mb-6">
              Or reach out directly
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <span className="text-foreground">Email: </span>
                <a
                  href="mailto:ogp2110@columbia.edu"
                  className="link-underline hover:text-foreground transition-colors"
                >
                  ogp2110@columbia.edu
                </a>
              </p>
              <p>
                <span className="text-foreground">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/in/owenpuhl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-foreground transition-colors"
                >
                  Owen Puhl
                </a>
              </p>
              <p>
                <span className="text-foreground">GitHub: </span>
                <a
                  href="https://github.com/owenpuhl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-foreground transition-colors"
                >
                  @owenpuhl
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-auto">
        <div className="px-6 md:px-12 lg:px-24 py-12 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Owen Puhl. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;