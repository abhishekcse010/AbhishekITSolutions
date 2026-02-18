import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  // Replace with actual phone number in international format (without + or spaces)
  const phoneNumber = '8651537796'; // Example: '919876543210' for India
  const message = encodeURIComponent(
    'Hi! I would like to inquire about your repair services.'
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center cursor-pointer group hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300"
      aria-label="Contact via WhatsApp"
    >
      {/* Pulsing ring effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
      
      {/* WhatsApp Icon */}
      <i className="ri-whatsapp-fill text-white text-3xl relative z-10"></i>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 px-3 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-neutral-900 transform rotate-45 -translate-y-1/2"></div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
