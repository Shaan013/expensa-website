import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Help Center', 'API Docs', 'Community', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses'],
  };

  const socialLinks = [
    // { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shaan-patel-609879271', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Shaan013', label: 'GitHub' },
    { icon: Mail, href: 'mailto:shaanpatel013@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/50 border-t border-border py-16 snap-end">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                {/* <img src="/logo.png" alt="Expensa Logo" className="h-10 w-auto object-contain" /> */}
                  <img
            src="/Expensa_logo_without_name.png"
            alt="Expensa Logo Mark"
            className="h-25 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <motion.h1 style={{fontSize:'30px'}}>Expensa</motion.h1>
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs leading-relaxed">
                Take control of your finances with intelligent tracking, beautiful insights,
                and effortless management.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center hover:border-neon-blue/50 hover:bg-neon-blue/10 transition-all group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-neon-blue transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {/* {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-neon-blue transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))} */}
        </div>
{/* 
        Newsletter Section
        <motion.div
          className="py-8 mb-8 border-y border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold mb-2">Stay updated</h4>
              <p className="text-sm text-muted-foreground">
                Get the latest features and financial tips delivered to your inbox
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:border-neon-blue transition-colors"
              />
              <motion.button
                className="px-6 py-3 bg-neon-blue text-background rounded-xl font-semibold hover:bg-neon-blue-light transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div> */}

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="flex items-center gap-1">
              © 2026 Expensa. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for better finances.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed & Developed by <a href="https://github.com/Shaan013" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline transition-all">Shaan Patel</a>
            </p>
          </div>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-neon-blue transition-colors">
              Status
            </a>
            <a href="#" className="hover:text-neon-blue transition-colors">
              Changelog
            </a>
            <a href="#" className="hover:text-neon-blue transition-colors">
              Download
            </a>
          </div> */}
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />
    </footer>
  );
}
