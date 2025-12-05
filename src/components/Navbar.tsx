import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/favicon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Entradas", path: "/entradas" },
    { name: "Festas", path: "/festas" },
    { name: "Urubudega", path: "/urubudega" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 border-b transition-all duration-300",
        scrolled
          ? "bg-background/98 backdrop-blur-lg shadow-lg border-border/50"
          : "bg-background/95 backdrop-blur-md shadow-sm border-border"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 group touch-feedback"
            onClick={() => setIsOpen(false)}
          >
            {/* Container da logo com imagem */}
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-active:scale-95">
              {/* Imagem da logo */}
              <img
                src={logoImage}
                alt="Urubu Ecoparque Logo"
                className="w-full h-full object-contain drop-shadow-sm"
                onError={(e) => {
                  // Fallback para ícone se a imagem não carregar
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback - ícone caso a imagem não exista */}
              <div 
                className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full items-center justify-center hidden"
                style={{ display: 'none' }}
              >
                <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            {/* Texto da logo - opcional, pode ser removido se a logo já tiver texto */}
            <div className="hidden sm:block">
              <span className="text-xl sm:text-2xl font-heading font-bold text-foreground transition-colors">
                Urubu
              </span>
              <span className="text-xl sm:text-2xl font-heading font-bold text-primary ml-1 transition-colors">
                Ecoparque
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm lg:text-base font-medium transition-all duration-300 relative group",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 hover:bg-muted rounded-lg transition-all duration-300 touch-feedback active:scale-95"
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                )}
              />
              <X
                size={24}
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background/98 backdrop-blur-lg border-t border-border",
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-4 px-6 rounded-xl transition-all duration-300 touch-feedback active:scale-95 font-medium text-base",
                  location.pathname === link.path
                    ? "bg-primary text-white shadow-lg"
                    : "text-foreground hover:text-primary hover:bg-muted/50"
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
