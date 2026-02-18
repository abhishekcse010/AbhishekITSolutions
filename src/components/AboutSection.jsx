import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from 'antd';

import abhi from '../images/abhi.jpeg';

const AboutSection = () => {
    // Skills with proficiency levels
    const skills = [
        { name: 'Hardware Diagnostics', level: 95, icon: 'ri-cpu-line' },
        { name: 'Software Troubleshooting', level: 88, icon: 'ri-bug-line' },
        { name: 'Component Replacement', level: 90, icon: 'ri-tools-line' },
    ];

    // Experience highlights
    const highlights = [
        {
            icon: 'ri-award-fill',
            title: 'Certified Technician',
            description: 'Industry-certified with multiple specializations',
            color: 'from-yellow-500 to-orange-500',
        },
        {
            icon: 'ri-team-fill',
            title: '1500+ Repairs',
            description:
                'Successfully completed repairs for satisfied customers',
            color: 'from-blue-500 to-purple-500',
        },
        {
            icon: 'ri-time-fill',
            title: 'Quick Turnaround',
            description: 'Most repairs completed within 24-48 hours',
            color: 'from-green-500 to-teal-500',
        },
        {
            icon: 'ri-shield-check-fill',
            title: 'Quality Guarantee',
            description: '90-day warranty on all repairs and parts',
            color: 'from-red-500 to-pink-500',
        },
    ];

    return (
        <section
            id="about"
            className="section-padding bg-white relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #0073ff 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                ></div>
            </div>

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
                        About Me
                    </span>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-neutral-900 mb-4">
                        Your Trusted{' '}
                        <span className="gradient-text">IT Supporter</span>
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Passionate about fixing what's broken and bringing your
                        devices back to life
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content - Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        {/* Main Image Container */}
                        <div className="relative">
                            {/* Background Decoration */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl opacity-10"></div>

                            {/* Image Placeholder */}
                            <div className="relative bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 shadow-xl">
                                <div className="aspect-[4/3] flex items-center justify-center bg-white rounded-2xl">
                                    <div className="text-center">
                                        
                                        <img
                                            src={abhi}
                                            alt="myPic"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.5,
                                    type: 'spring',
                                    stiffness: 200,
                                }}
                                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[200px]"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-2xl">
                                            2+
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-neutral-900 text-lg">
                                            Years
                                        </p>
                                        <p className="text-sm text-neutral-500">
                                            Experience
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Content - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="font-display font-bold text-3xl text-neutral-900 mb-6">
                            Bringing Your Devices Back to Life
                        </h3>
                        <div className="space-y-4 text-neutral-700 text-lg leading-relaxed mb-8">
                            <p>
                                With over{' '}
                                <span className="font-semibold text-primary-600">
                                    2 years of hands-on experience
                                </span>{' '}
                                in hardware and software repair, I've dedicated
                                my career to solving complex technical problems
                                and delivering exceptional service.
                            </p>
                            <p>
                                From smartphones to computers, networking , I've
                                successfully repaired thousands of devices,
                                earning the trust of customers who value
                                quality, reliability, and honest service.
                            </p>
                            <p>
                                My approach combines{' '}
                                <span className="font-semibold text-accent-600">
                                    technical expertise
                                </span>{' '}
                                with genuine care for each customer's needs.
                                Every repair is handled with precision, and I
                                stand behind my work with a comprehensive
                                warranty.
                            </p>
                        </div>

                        {/* Skills Progress */}
                        <div className="mb-8">
                            <h4 className="font-display font-semibold text-xl text-neutral-900 mb-6">
                                Core Competencies
                            </h4>
                            <div className="space-y-6">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-2">
                                                <i
                                                    className={`${skill.icon} text-primary-500 text-xl`}
                                                ></i>
                                                <span className="font-medium text-neutral-700">
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className="text-sm font-semibold text-neutral-600">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <Progress
                                            percent={skill.level}
                                            strokeColor={{
                                                '0%': '#0073ff',
                                                '100%': '#ff9100',
                                            }}
                                            showInfo={false}
                                            strokeWidth={8}
                                            trailColor="#e2e8f0"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Why Choose Me */}
                        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100">
                            <h4 className="font-display font-semibold text-lg text-neutral-900 mb-4 flex items-center">
                                <i className="ri-question-answer-line text-primary-500 mr-2"></i>
                                Why Choose Me?
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="ri-check-double-line text-green-500 mt-1 mr-3 text-lg"></i>
                                    <span className="text-neutral-700">
                                        Transparent pricing with no hidden fees
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <i className="ri-check-double-line text-green-500 mt-1 mr-3 text-lg"></i>
                                    <span className="text-neutral-700">
                                        Free diagnostics and repair estimates
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <i className="ri-check-double-line text-green-500 mt-1 mr-3 text-lg"></i>
                                    <span className="text-neutral-700">
                                        Quality parts from trusted suppliers
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <i className="ri-check-double-line text-green-500 mt-1 mr-3 text-lg"></i>
                                    <span className="text-neutral-700">
                                        Personalized service, not a corporate
                                        experience
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Highlights Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 },
                            }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100"
                        >
                            <div
                                className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                            >
                                <i
                                    className={`${item.icon} text-white text-2xl`}
                                ></i>
                            </div>
                            <h5 className="font-display font-bold text-lg text-neutral-900 mb-2">
                                {item.title}
                            </h5>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
