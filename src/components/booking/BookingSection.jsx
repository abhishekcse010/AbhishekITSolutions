import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, Input, Select, DatePicker, Button, notification } from 'antd';
import dayjs from 'dayjs';

const { TextArea } = Input;
const { Option } = Select;

const BookingSection = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Service types for dropdown
  const serviceTypes = [
    { value: 'laptop-repair', label: 'Laptop & Desktop Repair', icon: 'ri-computer-line' },
    { value: 'mobile-repair', label: 'Mobile Device Repair', icon: 'ri-smartphone-line' },
    { value: 'hardware-repair', label: 'Hardware Components', icon: 'ri-cpu-line' },
    { value: 'network-setup', label: 'Network & CCTV Setup', icon: 'ri-wifi-line' },
    { value: 'gaming-console', label: 'Gaming Console Repair', icon: 'ri-gamepad-line' },
    { value: 'power-battery', label: 'Power Supply & Battery', icon: 'ri-flashlight-line' },
    { value: 'other', label: 'Other Services', icon: 'ri-more-line' },
  ];

  // Disable past dates
  const disabledDate = (current) => {
    return current && current < dayjs().startOf('day');
  };

  // Handle form submission
  const handleSubmit = async (values) => {
    setLoading(true);
    
    // Format the data
    const bookingData = {
      name: values.name,
      phone: values.phone,
      email: values.email || 'Not provided',
      serviceType: values.serviceType,
      preferredDate: values.preferredDate.format('YYYY-MM-DD'),
      message: values.message || 'No additional message',
      submittedAt: new Date().toISOString(),
    };

    // Simulate API call - Replace with actual API endpoint
    try {
      // REPLACE THIS WITH YOUR ACTUAL API CALL
      // Example: await axios.post('/api/bookings', bookingData);
      
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Booking Data:', bookingData);
      
      // Success notification
      notification.success({
        message: 'Booking Confirmed!',
        description: 'Thank you! We have received your repair request. Our team will contact you shortly to confirm the appointment.',
        placement: 'topRight',
        duration: 5,
      });

      // Reset form
      form.resetFields();

      // Optional: Send WhatsApp notification
      const whatsappMessage = encodeURIComponent(
        `New Booking Request!\n\nName: ${bookingData.name}\nPhone: ${bookingData.phone}\nService: ${bookingData.serviceType}\nDate: ${bookingData.preferredDate}\nMessage: ${bookingData.message}`
      );
      // Uncomment to auto-open WhatsApp
      // window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, '_blank');

    } catch (error) {
      // Error notification
      notification.error({
        message: 'Booking Failed',
        description: 'Something went wrong. Please try again or contact us directly via WhatsApp.',
        placement: 'topRight',
        duration: 5,
      });
      console.error('Booking error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Validation failed
  const onFinishFailed = (errorInfo) => {
    notification.warning({
      message: 'Please Complete the Form',
      description: 'Please fill in all required fields correctly.',
      placement: 'topRight',
    });
    console.log('Failed:', errorInfo);
  };

  return (
    <section id="booking" className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Book Service
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-neutral-900 mb-4">
            Schedule Your <span className="gradient-text">Repair Service</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours to confirm your appointment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Side - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Why Book Online Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-neutral-100">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-4">
                <i className="ri-calendar-check-line text-white text-2xl"></i>
              </div>
              <h3 className="font-display font-bold text-2xl text-neutral-900 mb-4">
                Why Book Online?
              </h3>
              <ul className="space-y-3">
                {[
                  'Skip the queue - guaranteed slot',
                  'Free initial diagnosis',
                  'Flexible scheduling options',
                  'Instant confirmation',
                  'Easy to reschedule',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-neutral-700">
                    <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 shadow-xl text-white">
              <h3 className="font-display font-bold text-2xl mb-6">
                Need Help?
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="ri-phone-fill"></i>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Call Us</p>
                    <p className="font-semibold">+91 8651537796</p>
                  </div>
                </a>
                <button
                  onClick={() => window.open('https://wa.me/8651537796?text=Hi! I need help with booking.', '_blank')}
                  className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors w-full"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="ri-whatsapp-fill"></i>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-white/70">WhatsApp</p>
                    <p className="font-semibold">Chat with us now</p>
                  </div>
                </button>
                <div className="flex items-center space-x-3 text-white/90">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="ri-time-fill"></i>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Working Hours</p>
                    <p className="font-semibold">Mon-Sun: 9AM - 7PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <div className="flex items-center space-x-3">
                <i className="ri-shield-check-fill text-green-600 text-3xl"></i>
                <div>
                  <p className="font-bold text-green-900">Secure Booking</p>
                  <p className="text-sm text-green-700">Your information is safe with us</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-neutral-100">
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                requiredMark="optional"
                size="large"
              >
                {/* Name Field */}
                <Form.Item
                  label={
                    <span className="font-semibold text-neutral-700 flex items-center">
                      <i className="ri-user-line mr-2 text-primary-500"></i>
                      Full Name
                    </span>
                  }
                  name="name"
                  rules={[
                    { required: true, message: 'Please enter your name' },
                    { min: 2, message: 'Name must be at least 2 characters' },
                  ]}
                >
                  <Input
                    placeholder="John Doe"
                    prefix={<i className="ri-user-line text-neutral-400"></i>}
                  />
                </Form.Item>

                {/* Phone Number Field */}
                <Form.Item
                  label={
                    <span className="font-semibold text-neutral-700 flex items-center">
                      <i className="ri-phone-line mr-2 text-primary-500"></i>
                      Phone Number
                    </span>
                  }
                  name="phone"
                  rules={[
                    { required: true, message: 'Please enter your phone number' },
                    { 
                      pattern: /^[0-9]{10}$/, 
                      message: 'Please enter a valid 10-digit phone number' 
                    },
                  ]}
                >
                  <Input
                    placeholder="1234567890"
                    prefix={<i className="ri-phone-line text-neutral-400"></i>}
                    maxLength={10}
                  />
                </Form.Item>

                {/* Email Field (Optional) */}
                <Form.Item
                  label={
                    <span className="font-semibold text-neutral-700 flex items-center">
                      <i className="ri-mail-line mr-2 text-neutral-400"></i>
                      Email (Optional)
                    </span>
                  }
                  name="email"
                  rules={[
                    { type: 'email', message: 'Please enter a valid email' },
                  ]}
                >
                  <Input
                    placeholder="john@example.com"
                    prefix={<i className="ri-mail-line text-neutral-400"></i>}
                  />
                </Form.Item>

                {/* Service Type Field */}
                <Form.Item
                  label={
                    <span className="font-semibold text-neutral-700 flex items-center">
                      <i className="ri-tools-line mr-2 text-primary-500"></i>
                      Service Type
                    </span>
                  }
                  name="serviceType"
                  rules={[
                    { required: true, message: 'Please select a service type' },
                  ]}
                >
                  <Select
                    placeholder="Select the service you need"
                    suffixIcon={<i className="ri-arrow-down-s-line text-neutral-400"></i>}
                  >
                    {serviceTypes.map((service) => (
                      <Option key={service.value} value={service.value}>
                        <div className="flex items-center">
                          <i className={`${service.icon} mr-2 text-primary-500`}></i>
                          {service.label}
                        </div>
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                {/* Preferred Date Field */}
                <Form.Item
                  label={
                    <span className="font-semibold text-neutral-700 flex items-center">
                      <i className="ri-calendar-line mr-2 text-primary-500"></i>
                      Preferred Date
                    </span>
                  }
                  name="preferredDate"
                  rules={[
                    { required: true, message: 'Please select your preferred date' },
                  ]}
                >
                  <DatePicker
                    className="w-full"
                    placeholder="Select a date"
                    disabledDate={disabledDate}
                    format="MMMM DD, YYYY"
                    suffixIcon={<i className="ri-calendar-line text-neutral-400"></i>}
                  />
                </Form.Item>

                {/* Message/Problem Description Field */}
                <Form.Item
                  label={
                    <span className="font-semibold text-neutral-700 flex items-center">
                      <i className="ri-message-3-line mr-2 text-neutral-400"></i>
                      Problem Description (Optional)
                    </span>
                  }
                  name="message"
                >
                  <TextArea
                    placeholder="Please describe the issue you're experiencing with your device..."
                    rows={4}
                    maxLength={500}
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
                    icon={<i className="ri-send-plane-fill"></i>}
                    className="btn-primary h-14 text-lg font-bold shadow-xl hover:shadow-2xl"
                  >
                    {loading ? 'Submitting...' : 'Book Repair Now'}
                  </Button>
                </Form.Item>

                {/* Info Text */}
                <p className="text-center text-sm text-neutral-500 mt-6">
                  By submitting this form, you agree to our{' '}
                  <button className="text-primary-600 hover:underline">Terms of Service</button>
                  {' '}and{' '}
                  <button className="text-primary-600 hover:underline">Privacy Policy</button>
                </p>
              </Form>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: 'ri-hourglass-line',
              title: 'Quick Response',
              description: 'Get confirmation within 24 hours',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              icon: 'ri-calendar-check-line',
              title: 'Flexible Scheduling',
              description: 'Choose a time that works for you',
              color: 'from-purple-500 to-pink-500',
            },
            {
              icon: 'ri-customer-service-2-line',
              title: 'Dedicated Support',
              description: 'We\'re here to help every step',
              color: 'from-orange-500 to-red-500',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 text-center"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <i className={`${item.icon} text-white text-2xl`}></i>
              </div>
              <h4 className="font-display font-bold text-lg text-neutral-900 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-neutral-600">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
