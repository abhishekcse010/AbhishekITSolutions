import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Contact', href: '#contact' },
    ];

    const services = [
        'Hardware Repair',
        'Software Installation/Repair',
        'Laptop/Desktop Repair',
        'Mobile Repair',
        'Network Setup',
    ];

    const socialLinks = [
        {
            icon: 'ri-facebook-fill',
            href: 'https://www.facebook.com/abhishekcse0101',
            label: 'Facebook',
            color: '#1877F2',
        },
        {
            icon: 'ri-instagram-line',
            href: 'https://www.instagram.com/abhishekcse01/',
            label: 'Instagram',
            color: '#E4405F',
        },
        {
            icon: 'ri-twitter-x-fill',
            href: '#',
            label: 'Twitter',
            color: '#1DA1F2',
        },
        {
            icon: 'ri-linkedin-fill',
            href: '#',
            label: 'LinkedIn',
            color: '#0A66C2',
        },
        {
            icon: 'ri-youtube-fill',
            href: '#',
            label: 'YouTube',
            color: '#FF0000',
        },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <footer className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                                <i className="ri-tools-fill text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl">
                                    Abhishek IT
                                </h3>
                                <p className="text-xs text-neutral-400">
                                    Solutions
                                </p>
                            </div>
                        </div>
                        <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                            Professional repair and software services for
                            mobile, laptop, desktop, and basic networking —
                            including troubleshooting, OS installation,
                            upgrades, performance optimization, and hardware
                            repair. Also provides device setup, data transfer,
                            connectivity solutions, and custom PC build &
                            installation for office with fast and reliable
                            service.
                        </p>
                        <div className="flex items-center space-x-2 text-sm">
                            <i className="ri-time-line text-accent-500"></i>
                            <span className="text-neutral-300">
                                Mon - Sun: 9AM - 7PM
                            </span>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="font-display font-semibold text-lg mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() =>
                                            scrollToSection(link.href)
                                        }
                                        className="text-neutral-300 hover:text-accent-500 transition-colors text-sm flex items-center group"
                                    >
                                        <i className="ri-arrow-right-s-line text-accent-500 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0"></i>
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            {link.label}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="font-display font-semibold text-lg mb-4">
                            Our Services
                        </h4>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li
                                    key={service}
                                    className="text-neutral-300 text-sm flex items-center"
                                >
                                    <i className="ri-check-line text-accent-500 mr-2"></i>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className="font-display font-semibold text-lg mb-4">
                            Get in Touch
                        </h4>
                        <div className="space-y-3">
                            <a
                                href="tel:+1234567890"
                                className="flex items-center text-neutral-300 hover:text-accent-500 transition-colors text-sm group"
                            >
                                <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary-500/30 transition-colors">
                                    <i className="ri-phone-line text-primary-400"></i>
                                </div>
                                <span>+91 8651537796</span>
                            </a>
                            <a
                                href="mailto:abhishekcse0101@gmail.com"
                                className="flex items-center text-neutral-300 hover:text-accent-500 transition-colors text-sm group"
                            >
                                <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary-500/30 transition-colors">
                                    <i className="ri-mail-line text-primary-400"></i>
                                </div>
                                <span>abhishekcse0101@gmail.com</span>
                            </a>
                            <div className="flex items-start text-neutral-300 text-sm">
                                <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                                    <i className="ri-map-pin-line text-primary-400"></i>
                                </div>
                                <span>
                                    Pirauna Hasanapur Sugar Mills
                                    <br />
                                    Samastipur Bihar - 848205
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Social Links & Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 pt-8 border-t border-neutral-700"
                >
                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mb-6">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-all duration-300 group"
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <i
                                    className={`${social.icon} text-lg text-neutral-400 group-hover:text-white transition-colors`}
                                ></i>
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-neutral-400 text-sm">
                        <p>
                            © {currentYear}{' '}
                            <span className="text-white font-semibold">
                                Abhishek IT Solutions
                            </span>
                            . All rights reserved.
                        </p>
                        <p className="mt-2">
                            Built with{' '}
                            <i className="ri-heart-fill text-red-500 mx-1"></i>{' '}
                            for quality repairs
                        </p>
                        <p className="text-neutral-400 font-semibold mt-5">
                            Developed by -
                            <a
                                href="https://github.com/Mrsaxena01"
                                target="_blank"
                                className="text-l font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent"
                            >
                                shaonu
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
