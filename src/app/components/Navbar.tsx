import { motion } from 'motion/react';

export default function Navbar() {
  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Interface', href: '#interface' },
    { label: 'Analytics', href: '#analytics' },
    { label: 'Journey', href: '#journey' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40 h-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="flex items-center gap-2 group">
          <img
            src="/public/Expensa_logo_without_name.png"
            alt="Expensa Logo Mark"
            className="h-25 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <motion.h1 style={{fontSize:'30px'}}>Expensa</motion.h1>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-neon-blue transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

      </div>
    </motion.header>
  );
}
