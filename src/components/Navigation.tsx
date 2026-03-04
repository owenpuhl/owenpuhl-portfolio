import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Work", path: "/work" },
  { label: "Research", path: "/research" },
  { label: "Leadership", path: "/leadership" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Strudel", path: "/strudel" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo / Name */}
          <Link
            to="/"
            className="font-display text-lg md:text-xl text-foreground hover:text-accent transition-colors"
          >
            Owen Puhl
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-serif text-sm transition-colors link-underline ${
                  isActive(link.path)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full sm:w-[400px] bg-background border-l border-border"
            >
              <nav className="flex flex-col gap-6 mt-12">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`font-display text-2xl transition-colors ${
                    location.pathname === "/" 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Home
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-2xl transition-colors ${
                      isActive(link.path)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
