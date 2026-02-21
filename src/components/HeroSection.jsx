import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';

const HeroSection = () => {
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

    const stats = [
        { icon: 'ri-user-smile-line', value: '1500+', label: 'Happy Clients' },
        { icon: 'ri-tools-line', value: '3000+', label: 'Repairs Done' },
        { icon: 'ri-award-line', value: '2+', label: 'Years Experience' },
        { icon: 'ri-star-line', value: '4.9', label: 'Rating' },
    ];

    const floatingIcons = [
        { icon: 'ri-computer-line', position: 'top-20 left-10', delay: 0 },
        { icon: 'ri-smartphone-line', position: 'top-40 right-20', delay: 0.2 },
        {
            icon: 'ri-hard-drive-2-line',
            position: 'bottom-40 left-20',
            delay: 0.4,
        },
        { icon: 'ri-cpu-line', position: 'bottom-20 right-10', delay: 0.6 },
    ];

    return (
        <section
            id="home"
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 pt-12 lg:pt-16"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent-400/30 to-primary-400/30 rounded-full blur-3xl"
                />

                {floatingIcons.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.08, scale: 1 }}
                        transition={{ delay: item.delay, duration: 0.5 }}
                        className={`absolute ${item.position} hidden lg:block`}
                    >
                        <motion.i
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: item.delay,
                            }}
                            className={`${item.icon} text-5xl text-primary-500`}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow mb-5"
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-sm font-medium text-neutral-700">
                                Available for Repairs
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 leading-tight mb-5"
                        >
                            Laptop, Desktop, Networking,
                            <span className="block gradient-text mt-2">
                                Hardware & Software Support
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-base text-neutral-600 mb-7 leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            Professional repair and software services for
                            mobile, laptop, desktop and networking — OS
                            installation, upgrades, troubleshooting, hardware
                            repair, PC build, and fast reliable service.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button
                                type="primary"
                                size="large"
                                icon={
                                    <i className="ri-calendar-check-line"></i>
                                }
                                onClick={() => scrollToSection('#booking')}
                                className="h-12 px-7 text-base font-semibold shadow-lg"
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
                                className="h-12 px-7 text-base font-semibold border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                            >
                                WhatsApp Now
                            </Button>
                        </motion.div>
                    </div>

                    {/* RIGHT IMAGE (FIXED SIZE) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative max-w-md w-full">
                            <div className="absolute -inset-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl opacity-20 blur-xl"></div>

                            <div className="relative bg-white rounded-3xl p-1 shadow-2xl">
                                <img
                                    src="https://ik.imagekit.io/m2otyox2qq/abhi.jpeg"
                                    alt="Technician"
                                    className="w-full h-[380px] object-cover rounded-2xl"
                                />
                                
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* STATS (reduced margin) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-5 shadow-md text-center"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                                <i
                                    className={`${stat.icon} text-white text-xl`}
                                ></i>
                            </div>
                            <h3 className="font-bold text-2xl text-neutral-900">
                                {stat.value}
                            </h3>
                            <p className="text-sm text-neutral-600">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
