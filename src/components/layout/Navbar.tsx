
import { useEffect, useState } from "react";
import { CustomButton } from "../ui/CustomButton";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: "Models", href: "#models" },
    { name: "Configurator", href: "#configurator" },
    { name: "Technology", href: "#technology" },
    { name: "Experience", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold text-luxury-900 font-serif tracking-tighter">
          Emmanuel Basto
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-luxury-800 hover:text-luxury-600 subtle-underline font-medium"
            >
              {link.name}
            </a>
          ))}
          
          <CustomButton variant="luxury" size="default">
            Book Test Drive
          </CustomButton>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-luxury-900/95 z-50 backdrop-blur-md flex flex-col justify-center items-center space-y-8 transition-all duration-500 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button 
          className="absolute top-6 right-6 text-white"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>
        
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            className="text-2xl text-white font-medium"
            onClick={toggleMenu}
          >
            {link.name}
          </a>
        ))}
        
        <CustomButton variant="gold" size="lg" onClick={toggleMenu}>
          Book Test Drive
        </CustomButton>
      </div>
    </nav>
  );
};

export default Navbar;
