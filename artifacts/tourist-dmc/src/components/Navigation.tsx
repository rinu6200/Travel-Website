import { useState, useEffect } from "react";
import { Menu, X, Phone, MailOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Destinations", href: "#destinations" },
    { name: "Why Partner", href: "#why-partner" },
  ];

  return (
    <>
      {/* Top Bar - Only visible on desktop */}
      <div className="hidden lg:flex justify-between items-center bg-[#0A2A42] text-white/80 py-2 px-8 text-sm">
        <div className="flex space-x-6">
          <a href="mailto:mail@touristdmc.com" className="flex items-center hover:text-white transition-colors">
            <MailOpen className="w-4 h-4 mr-2 text-secondary" />
            mail@touristdmc.com
          </a>
          <a href="tel:09809700000" className="flex items-center hover:text-white transition-colors">
            <Phone className="w-4 h-4 mr-2 text-secondary" />
            +91 98097 00000
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-secondary font-medium">B2B Kerala Travel Experts</span>
          <span className="opacity-50">|</span>
          <span>A division of Quadrant Group LLP</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#home" className="flex items-center group">
            <img 
              src={`${import.meta.env.BASE_URL}logo.jpg`} 
              alt="Tourist DMC" 
              className="h-10 sm:h-12 object-contain group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Fallback text if logo fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden font-display font-bold text-2xl text-primary ml-2">Tourist <span className="text-secondary">DMC</span></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              Partner With Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 border-t border-border mt-8">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block w-full py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/20"
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
