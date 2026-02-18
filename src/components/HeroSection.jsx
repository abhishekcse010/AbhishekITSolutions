import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';

const HeroSection = () => {
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
    }
  };

  // Stats data
  const stats = [
    { icon: 'ri-user-smile-line', value: '1500+', label: 'Happy Clients' },
    { icon: 'ri-tools-line', value: '3000+', label: 'Repairs Done' },
    { icon: 'ri-award-line', value: '2+', label: 'Years Experience' },
    { icon: 'ri-star-line', value: '4.9', label: 'Rating' },
  ];

  // Floating tech icons
  const floatingIcons = [
    { icon: 'ri-computer-line', position: 'top-20 left-10', delay: 0 },
    { icon: 'ri-smartphone-line', position: 'top-40 right-20', delay: 0.2 },
    { icon: 'ri-hard-drive-2-line', position: 'bottom-40 left-20', delay: 0.4 },
    { icon: 'ri-cpu-line', position: 'bottom-20 right-10', delay: 0.6 },
  ];

  return (
      <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 pt-20"
      >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Gradient Orbs */}
              <motion.div
                  animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                  }}
                  className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-full blur-3xl"
              />
              <motion.div
                  animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1,
                  }}
                  className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-400/30 to-primary-400/30 rounded-full blur-3xl"
              />

              {/* Floating Tech Icons */}
              {floatingIcons.map((item, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.1, scale: 1 }}
                      transition={{ delay: item.delay, duration: 0.5 }}
                      className={`absolute ${item.position} hidden lg:block`}
                  >
                      <motion.i
                          animate={{ y: [0, -20, 0] }}
                          transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: item.delay,
                          }}
                          className={`${item.icon} text-6xl text-primary-500`}
                      />
                  </motion.div>
              ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="text-center lg:text-left">
                      {/* Badge */}
                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md mb-6"
                      >
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          <span className="text-sm font-medium text-neutral-700">
                              Available for Repairs
                          </span>
                      </motion.div>

                      {/* Main Heading */}
                      <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 leading-tight mb-6"
                      >
                          Laptop , Desktop, Networking,{' '}
                          <span className="gradient-text text-4xl">
                              Hardware & Software Support
                          </span>
                      </motion.h1>

                      {/* Description */}
                      <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="text-md sm:text-l text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                      >
                          Professional repair and software services for mobile,
                          laptop, desktop, and basic networking — including
                          troubleshooting, OS installation, upgrades,
                          performance optimization, and hardware repair. Also
                          provides device setup, data transfer, connectivity
                          solutions, and custom PC build & installation for
                          office with fast and reliable service.
                      </motion.p>

                      {/* CTA Buttons */}
                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                      >
                          <Button
                              type="primary"
                              size="large"
                              icon={<i className="ri-calendar-check-line"></i>}
                              onClick={() => scrollToSection('#booking')}
                              className="btn-primary h-14 px-8 text-lg font-semibold shadow-xl hover:shadow-2xl"
                          >
                              Book Repair Now
                          </Button>
                          <Button
                              size="large"
                              icon={<i className="ri-whatsapp-fill"></i>}
                              onClick={() =>
                                  window.open(
                                      'https://wa.me/8651537796?text=Hi! I would like to inquire about your repair services.',
                                      '_blank'
                                  )
                              }
                              className="h-14 px-8 text-lg font-semibold border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                              WhatsApp Now
                          </Button>
                      </motion.div>

                      {/* Trust Indicators */}
                      <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-neutral-600"
                      >
                          <div className="flex items-center space-x-2">
                              <i className="ri-shield-check-fill text-green-500 text-xl"></i>
                              <span>Licensed & Insured</span>
                          </div>
                          <div className="flex items-center space-x-2">
                              <i className="ri-time-fill text-primary-500 text-xl"></i>
                              <span>Same Day Service</span>
                          </div>
                          <div className="flex items-center space-x-2">
                              <i className="ri-medal-fill text-accent-500 text-xl"></i>
                              <span>Warranty Included</span>
                          </div>
                      </motion.div>
                  </div>

                  {/* Right Content - Image/Illustration Placeholder */}
                  <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      className="relative"
                  >
                      {/* Main Image Container */}
                      <div className="relative">
                          {/* Decorative Elements */}
                          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl opacity-20 blur-2xl"></div>

                          {/* Image Placeholder - Replace with actual image */}
                          <div className="relative bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-8 shadow-2xl">
                              <div className="aspect-square flex items-center justify-center">
                                  <motion.i
                                      animate={{ rotate: [0, 360] }}
                                      transition={{
                                          duration: 20,
                                          repeat: Infinity,
                                          ease: 'linear',
                                      }}
                                      className="ri-tools-fill text-[200px] text-primary-500/30"
                                  />
                                  
                              </div>
                          </div>

                          {/* Floating Card - Quick Service */}
                          <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.8 }}
                              className="absolute -left-4 top-1/4 bg-white rounded-2xl shadow-xl p-4 max-w-[180px]"
                          >
                              <div className="flex items-center space-x-3">
                                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                      <i className="ri-speed-up-line text-green-600 text-xl"></i>
                                  </div>
                                  <div>
                                      <p className="font-bold text-neutral-900">
                                          Fast Service
                                      </p>
                                      <p className="text-xs text-neutral-500">
                                          Quick turnaround
                                      </p>
                                  </div>
                              </div>
                          </motion.div>

                          {/* Floating Card - Expert Tech */}
                          <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1 }}
                              className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 max-w-[180px]"
                          >
                              <div className="flex items-center space-x-3">
                                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                      <i className="ri-user-star-line text-primary-600 text-xl"></i>
                                  </div>
                                  <div>
                                      <p className="font-bold text-neutral-900">
                                          Expert Tech
                                      </p>
                                      <p className="text-xs text-neutral-500">
                                          2+ years exp.
                                      </p>
                                  </div>
                              </div>
                          </motion.div>
                      </div>
                  </motion.div>
              </div>

              {/* Stats Section */}
              <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                  {stats.map((stat, index) => (
                      <motion.div
                          key={index}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                      >
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                              <i
                                  className={`${stat.icon} text-white text-2xl`}
                              ></i>
                          </div>
                          <h3 className="font-display font-bold text-3xl text-neutral-900 mb-1">
                              {stat.value}
                          </h3>
                          <p className="text-sm text-neutral-600">
                              {stat.label}
                          </p>
                      </motion.div>
                  ))}
              </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
              <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                  }}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => scrollToSection('#about')}
              >
                  <span className="text-sm text-neutral-500 mb-2">
                      Scroll Down
                  </span>
                  <i className="ri-arrow-down-line text-2xl text-neutral-400"></i>
              </motion.div>
          </motion.div>
      </section>
  );
};

export default HeroSection;
