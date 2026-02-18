import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, Input, Button, notification } from 'antd';

const { TextArea } = Input;

const ContactSection = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    // Contact information
    const contactInfo = [
        {
            icon: 'ri-phone-fill',
            title: 'Phone',
            details: ['+91 8651537796', '+91 8986133581'],
            action: 'tel:+918651537796',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: 'ri-mail-fill',
            title: 'Email',
            details: ['abhishekcse0101@gmail.com', 'abhishekcse0101@gmail.com'],
            action: 'mailto:abhishekcse0101@gmail.com',
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: 'ri-map-pin-fill',
            title: 'Location',
            details: ['Pirauna Hasanpur sugar mills', 'Samastipur, 848205'],
            action: 'https://www.google.com/maps/place/Abhishek+IT+solutions+(AITS)/@25.6934406,86.2070339,17z/data=!3m1!4b1!4m6!3m5!1s0x39edfffb1f375b87:0xadcbb881606e618a!8m2!3d25.6934406!4d86.2096088!16s%2Fg%2F11ywntqrgx?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D',
            color: 'from-orange-500 to-red-500',
        },
        {
            icon: 'ri-time-fill',
            title: 'Working Hours',
            details: ['Mon - Sun: 9AM - 7PM'],
            action: null,
            color: 'from-green-500 to-teal-500',
        },
    ];

    // Social media links
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
    ];

    // Handle contact form submission
    const handleSubmit = async (values) => {
        setLoading(true);

        const contactData = {
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
            submittedAt: new Date().toISOString(),
        };

        try {
            // REPLACE WITH ACTUAL API CALL
            await new Promise((resolve) => setTimeout(resolve, 2000));

            console.log('Contact Data:', contactData);

            notification.success({
                message: 'Message Sent!',
                description:
                    'Thank you for contacting us. We will get back to you within 24 hours.',
                placement: 'topRight',
                duration: 5,
            });

            form.resetFields();
        } catch (error) {
            notification.error({
                message: 'Failed to Send',
                description:
                    'Something went wrong. Please try again or contact us directly.',
                placement: 'topRight',
                duration: 5,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="section-padding bg-white relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, #0073ff 1px, transparent 1px)`,
                        backgroundSize: '30px 30px',
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
                    <span className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-4">
                        Get in Touch
                    </span>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-neutral-900 mb-4">
                        Contact <span className="gradient-text">Our Team</span>
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Have questions? We're here to help. Reach out and we'll
                        respond as soon as possible.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Left Side - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Contact Cards */}
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div
                                        className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                                    >
                                        <i
                                            className={`${info.icon} text-white text-2xl`}
                                        ></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-display font-bold text-lg text-neutral-900 mb-2">
                                            {info.title}
                                        </h4>
                                        {info.details.map((detail, idx) => (
                                            <p
                                                key={idx}
                                                className="text-neutral-600 text-sm"
                                            >
                                                {detail}
                                            </p>
                                        ))}
                                        {info.action && (
                                            <a
                                                href={info.action}
                                                target="_blank"
                                                className="inline-flex items-center text-primary-600 hover:text-accent-600 font-semibold text-sm mt-2 transition-colors"
                                            >
                                                {info.title === 'Phone'
                                                    ? 'Call Now'
                                                    : info.title === 'Email'
                                                      ? 'Send Email'
                                                      : 'Get Directions'}
                                                <i className="ri-arrow-right-line ml-1"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Social Media */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-6 shadow-xl"
                        >
                            <h4 className="font-display font-bold text-xl text-white mb-4">
                                Follow Us
                            </h4>
                            <p className="text-primary-100 text-sm mb-4">
                                Stay updated with our latest news and offers
                            </p>
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                                    >
                                        <i
                                            className={`${social.icon} text-white text-xl`}
                                        ></i>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Emergency Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-red-50 border-2 border-red-200 rounded-2xl p-6"
                        >
                            <div className="flex items-center space-x-3 mb-3">
                                <i className="ri-alarm-warning-fill text-red-600 text-2xl"></i>
                                <h4 className="font-display font-bold text-lg text-red-900">
                                    Emergency Service
                                </h4>
                            </div>
                            <p className="text-red-700 text-sm mb-3">
                                Need urgent repair? We offer 24/7 emergency
                                support for critical issues.
                            </p>
                            <Button
                                size="large"
                                danger
                                icon={<i className="ri-phone-fill"></i>}
                                href="tel:+918651537796"
                                className="w-full font-semibold"
                            >
                                Emergency Hotline
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-neutral-100">
                            <h3 className="font-display font-bold text-2xl text-neutral-900 mb-6">
                                Send Us a Message
                            </h3>

                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={handleSubmit}
                                size="large"
                            >
                                {/* Name Field */}
                                <Form.Item
                                    label={
                                        <span className="font-semibold text-neutral-700">
                                            Your Name
                                        </span>
                                    }
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your name',
                                        },
                                        {
                                            min: 2,
                                            message:
                                                'Name must be at least 2 characters',
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="John Doe"
                                        prefix={
                                            <i className="ri-user-line text-neutral-400"></i>
                                        }
                                    />
                                </Form.Item>

                                {/* Email Field */}
                                <Form.Item
                                    label={
                                        <span className="font-semibold text-neutral-700">
                                            Email Address
                                        </span>
                                    }
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your email',
                                        },
                                        {
                                            type: 'email',
                                            message:
                                                'Please enter a valid email',
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="john@example.com"
                                        prefix={
                                            <i className="ri-mail-line text-neutral-400"></i>
                                        }
                                    />
                                </Form.Item>

                                {/* Subject Field */}
                                <Form.Item
                                    label={
                                        <span className="font-semibold text-neutral-700">
                                            Subject
                                        </span>
                                    }
                                    name="subject"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter a subject',
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="How can we help you?"
                                        prefix={
                                            <i className="ri-edit-line text-neutral-400"></i>
                                        }
                                    />
                                </Form.Item>

                                {/* Message Field */}
                                <Form.Item
                                    label={
                                        <span className="font-semibold text-neutral-700">
                                            Message
                                        </span>
                                    }
                                    name="message"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please enter your message',
                                        },
                                        {
                                            min: 10,
                                            message:
                                                'Message must be at least 10 characters',
                                        },
                                    ]}
                                >
                                    <TextArea
                                        placeholder="Tell us more about your inquiry..."
                                        rows={5}
                                        maxLength={1000}
                                        showCount
                                    />
                                </Form.Item>

                                {/* Submit Button */}
                                <Form.Item className="mb-0">
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        size="large"
                                        block
                                        loading={loading}
                                        icon={
                                            <i className="ri-send-plane-fill"></i>
                                        }
                                        className="btn-primary h-14 text-lg font-bold shadow-xl hover:shadow-2xl"
                                    >
                                        {loading
                                            ? 'Sending...'
                                            : 'Send Message'}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>

                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            id="map"
                            className="mt-8 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl overflow-hidden shadow-xl border border-neutral-200 h-80"
                        >
                            {/* Replace with actual Google Maps embed */}
                            <div className="w-full h-full flex items-center justify-center">
                                <iframe
                                    src="https://www.google.com/maps?q=Abhishek+IT+solutions+(AITS)&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
