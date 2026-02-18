import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';

const ServicesSection = () => {
  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Services data with detailed information
  const services = [
      {
          icon: 'ri-computer-line',
          title: 'Computer & Laptop Repair',
          description:
              'Complete repair and troubleshooting for computers and laptops including hardware faults and system issues.',
          features: [
              'Hardware Diagnosis',
              'Component Replacement',
              'System Repair',
              'Performance Optimization',
          ],
          gradient: 'from-blue-500 to-cyan-500',
          bgColor: 'from-blue-50 to-cyan-50',
          price: 'Starting at ₹300',
      },
      {
          icon: 'ri-windows-line',
          title: 'Windows Installation & Update',
          description:
              'Windows installation, upgrade, update and full OS problem fixing for smooth and stable performance.',
          features: [
              'Windows Install',
              'OS Upgrade',
              'Driver Setup',
              'System Activation',
          ],
          gradient: 'from-indigo-500 to-blue-500',
          bgColor: 'from-indigo-50 to-blue-50',
          price: 'Starting at ₹400',
      },
      {
          icon: 'ri-speed-line',
          title: 'Slow & Hang Issue Fix',
          description:
              'Fix slow computer, hanging, lag and performance related issues for faster system speed.',
          features: [
              'Speed Optimization',
              'Startup Fix',
              'Cache Cleanup',
              'Performance Boost',
          ],
          gradient: 'from-purple-500 to-pink-500',
          bgColor: 'from-purple-50 to-pink-50',
          price: 'Starting at ₹250',
      },
      {
          icon: 'ri-error-warning-line',
          title: 'Blue Screen & Startup Fix',
          description:
              'Diagnosis and repair of BSOD errors, boot issues and startup problems in laptops and desktops.',
          features: [
              'BSOD Repair',
              'Bootloop Fix',
              'Driver Issues',
              'Startup Recovery',
          ],
          gradient: 'from-red-500 to-orange-500',
          bgColor: 'from-red-50 to-orange-50',
          price: 'Starting at ₹350',
      },
      {
          icon: 'ri-lock-unlock-line',
          title: 'Password & Login Issue',
          description:
              'Password unlock and login issue fixing for Windows systems and user accounts.',
          features: [
              'Password Reset',
              'Login Fix',
              'Account Recovery',
              'User Setup',
          ],
          gradient: 'from-yellow-500 to-amber-500',
          bgColor: 'from-yellow-50 to-amber-50',
          price: 'Starting at ₹300',
      },
      {
          icon: 'ri-apps-line',
          title: 'Software Installation',
          description:
              'Installation and configuration of essential software like Office, Photoshop and other applications.',
          features: [
              'Office Installation',
              'Software Setup',
              'License Setup',
              'App Configuration',
          ],
          gradient: 'from-green-500 to-emerald-500',
          bgColor: 'from-green-50 to-emerald-50',
          price: 'Starting at ₹200',
      },
      {
          icon: 'ri-printer-line',
          title: 'Printer & Peripheral Setup',
          description:
              'Setup and troubleshooting of printers, scanners and other computer peripherals.',
          features: [
              'Printer Setup',
              'Scanner Setup',
              'Driver Installation',
              'Peripheral Troubleshooting',
          ],
          gradient: 'from-teal-500 to-cyan-500',
          bgColor: 'from-teal-50 to-cyan-50',
          price: 'Starting at ₹250',
      },
      {
          icon: 'ri-wifi-line',
          title: 'Internet & Network Fix',
          description:
              'Fix internet, Wi-Fi, DNS and network connectivity problems for home and office.',
          features: [
              'WiFi Troubleshooting',
              'DNS Fix',
              'Router Setup',
              'Network Optimization',
          ],
          gradient: 'from-sky-500 to-blue-600',
          bgColor: 'from-sky-50 to-blue-50',
          price: 'Starting at ₹300',
      },
      {
          icon: 'ri-database-2-line',
          title: 'Dead System & Data Recovery',
          description:
              'Recovery of data and repair of dead or non-booting systems safely and efficiently.',
          features: [
              'Data Recovery',
              'Dead PC Repair',
              'Disk Recovery',
              'System Restore',
          ],
          gradient: 'from-rose-500 to-red-500',
          bgColor: 'from-rose-50 to-red-50',
          price: 'Starting at ₹500',
      },
      {
          icon: 'ri-smartphone-line',
          title: 'Mobile Software & Bloatware Removal',
          description:
              'Mobile software fixing, bloatware removal and performance optimization for Android devices.',
          features: [
              'Software Fix',
              'Bloatware Removal',
              'System Cleanup',
              'Performance Boost',
          ],
          gradient: 'from-fuchsia-500 to-pink-500',
          bgColor: 'from-fuchsia-50 to-pink-50',
          price: 'Starting at ₹200',
      },
      {
          icon: 'ri-tools-line',
          title: 'Mobile Repairing',
          description:
              'Complete mobile repairing including hardware, software and common smartphone issues.',
          features: [
              'Hardware Repair',
              'Software Repair',
              'Screen & Battery Fix',
              'General Troubleshooting',
          ],
          gradient: 'from-orange-500 to-amber-500',
          bgColor: 'from-orange-50 to-amber-50',
          price: 'Starting at ₹300',
      },
  ];


  // Additional service benefits
  const benefits = [
    { icon: 'ri-time-line', text: 'Quick Turnaround' },
    { icon: 'ri-shield-check-line', text: '30-Day Warranty' },
    { icon: 'ri-money-dollar-circle-line', text: 'Competitive Pricing' },
    { icon: 'ri-customer-service-2-line', text: '24/7 Support' },
  ];

  return (
      <section
          id="services"
          className="section-padding bg-gradient-to-br from-neutral-50 via-white to-primary-50/20 relative overflow-hidden"
      >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-200/30 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
              >
                  <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                      Our Services
                  </span>
                  <h2 className="font-display font-bold text-4xl sm:text-5xl text-neutral-900 mb-4">
                      Professional{' '}
                      <span className="gradient-text">IT Services</span>
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                      Comprehensive solutions for all your hardware and
                      software repair needs
                  </p>
              </motion.div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {services.map((service, index) => (
                      <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -10 }}
                          className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-100"
                      >
                          {/* Card Header with Gradient */}
                          <div
                              className={`bg-gradient-to-br ${service.bgColor} p-8 pb-6 relative overflow-hidden`}
                          >
                              {/* Background Icon */}
                              <i
                                  className={`${service.icon} absolute -right-4 -top-4 text-[120px] opacity-10 transform rotate-12`}
                              ></i>

                              {/* Icon Container */}
                              <div
                                  className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                              >
                                  <i
                                      className={`${service.icon} text-white text-3xl`}
                                  ></i>
                              </div>

                              <h3 className="relative font-display font-bold text-2xl text-neutral-900 mb-2">
                                  {service.title}
                              </h3>
                              <p className="relative text-sm font-semibold text-neutral-700 bg-white/50 inline-block px-3 py-1 rounded-full">
                                  {service.price}
                              </p>
                          </div>

                          {/* Card Body */}
                          <div className="p-8 pt-6">
                              <p className="text-neutral-600 mb-6 leading-relaxed">
                                  {service.description}
                              </p>

                              {/* Features List */}
                              <div className="space-y-3 mb-6">
                                  {service.features.map((feature, idx) => (
                                      <div
                                          key={idx}
                                          className="flex items-center text-sm"
                                      >
                                          <div
                                              className={`w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}
                                          >
                                              <i className="ri-check-line text-white text-xs"></i>
                                          </div>
                                          <span className="text-neutral-700">
                                              {feature}
                                          </span>
                                      </div>
                                  ))}
                              </div>

                              {/* CTA Button */}
                              <Button
                                  block
                                  size="large"
                                  onClick={scrollToBooking}
                                  className="border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-semibold transition-all duration-300 group-hover:border-primary-600 "
                                  icon={
                                      <i className="ri-calendar-check-line"></i>
                                  }
                              >
                                  Book This Service
                              </Button>
                          </div>
                      </motion.div>
                  ))}
              </div>

              {/* Benefits Section */}
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                  <div className="text-center mb-10">
                      <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                          Why Choose Our Services?
                      </h3>
                      <p className="text-primary-100 text-lg max-w-2xl mx-auto">
                          We're committed to providing the best repair
                          experience with quality you can trust
                      </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {benefits.map((benefit, index) => (
                          <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                          >
                              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                  <i
                                      className={`${benefit.icon} text-white text-3xl`}
                                  ></i>
                              </div>
                              <p className="text-white font-semibold text-lg">
                                  {benefit.text}
                              </p>
                          </motion.div>
                      ))}
                  </div>

                  <div className="text-center mt-10">
                      <Button
                          type="primary"
                          size="large"
                          onClick={scrollToBooking}
                          className="bg-white text-primary-600 hover:bg-neutral-100 border-none shadow-xl font-bold px-8 h-14 text-lg text-white"
                          icon={
                              <i className="ri-calendar-check-line text-white"></i>
                          }
                      >
                          Get Started Today
                      </Button>
                  </div>
              </motion.div>

              {/* Emergency Service Banner */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-12 bg-gradient-to-r from-accent-500 to-orange-600 rounded-2xl p-6 md:p-8 shadow-xl"
              >
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <i className="ri-emergency-line text-white text-3xl"></i>
                          </div>
                          <div className="text-white">
                              <h4 className="font-display font-bold text-xl md:text-2xl mb-1">
                                  Need Emergency Repair?
                              </h4>
                              <p className="text-orange-100 text-sm md:text-base">
                                  We offer same-day service for urgent repairs.
                                  Contact us now!
                              </p>
                          </div>
                      </div>
                      <Button
                          size="large"
                          icon={<i className="ri-phone-fill"></i>}
                          className="bg-white text-accent-600 hover:bg-neutral-100 border-none shadow-lg font-bold px-8 h-12 flex-shrink-0"
                          href="tel:+918651537796"
                      >
                          Call Now
                      </Button>
                  </div>
              </motion.div>
          </div>
      </section>
  );
};

export default ServicesSection;
