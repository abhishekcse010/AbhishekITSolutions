import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  // Smooth scroll to section
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  return (
      <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              scrolled
                  ? 'bg-white/95 backdrop-blur-md shadow-lg'
                  : 'bg-transparent'
          }`}
      >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                  {/* Logo */}
                  <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 cursor-pointer"
                      onClick={() => scrollToSection('#home')}
                  >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                          <i className="ri-tools-fill text-white text-xl"></i>
                      </div>
                      <div className='flex flex-col gap-0'>
                          <h1 className="font-display font-bold text-xl text-neutral-900">
                              Abhishek IT
                          </h1>
                          <h1 className="font-display font-bold text-xl text-neutral-900">
                               Solutions
                          </h1>
                      </div>
                  </motion.div>

                  {/* Desktop Navigation */}
                  <nav className="hidden md:flex items-center space-x-1">
                      {navItems.map((item, index) => (
                          <motion.button
                              key={item.label}
                              onClick={() => scrollToSection(item.href)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 text-neutral-700 hover:text-primary-500 font-medium transition-colors rounded-lg hover:bg-primary-50"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                          >
                              {item.label}
                          </motion.button>
                      ))}
                  </nav>

                  {/* CTA Button - Desktop */}
                  <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="hidden md:block"
                  >
                      <Button
                          type="primary"
                          size="large"
                          icon={<i className="ri-calendar-check-line"></i>}
                          onClick={() => scrollToSection('#booking')}
                          className="btn-primary shadow-lg"
                      >
                          Book Repair
                      </Button>
                  </motion.div>

                  {/* Mobile Menu Button */}
                  <button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 transition-colors"
                  >
                      <i
                          className={`${
                              mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'
                          } text-2xl text-neutral-700`}
                      ></i>
                  </button>
              </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
              initial={false}
              animate={{
                  height: mobileMenuOpen ? 'auto' : 0,
                  opacity: mobileMenuOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white border-t border-neutral-200"
          >
              <nav className="px-4 py-4 space-y-2">
                  {navItems.map((item) => (
                      <button
                          key={item.label}
                          onClick={() => scrollToSection(item.href)}
                          className="w-full text-left px-4 py-3 text-neutral-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg font-medium transition-colors"
                      >
                          {item.label}
                      </button>
                  ))}
                  <Button
                      type="primary"
                      size="large"
                      block
                      icon={<i className="ri-calendar-check-line"></i>}
                      onClick={() => scrollToSection('#booking')}
                      className="btn-primary mt-4"
                  >
                      Book Repair
                  </Button>
              </nav>
          </motion.div>
      </motion.header>
  );
};

export default Header;
