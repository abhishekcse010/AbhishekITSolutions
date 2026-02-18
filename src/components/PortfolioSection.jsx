import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal } from 'antd';

const PortfolioSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState('all');

  // Portfolio items - Replace with actual repair photos
  const portfolioItems = [
      {
          id: 1,
          category: 'laptop',
          title: 'Fix Bluescreen Problem',
          description:
              'HP" Fixing laptop blue screen (BSOD) issues caused by driver, software, or hardware problems with quick diagnosis and reliable repair.',
          before: 'Bluescreen display',
          after: 'Perfect working condition',
          duration: '2-3 Hours',
          icon: 'ri-computer-line',
          color: 'from-blue-500 to-cyan-500',
      },
      {
          id: 2,
          category: 'mobile',
          title: 'FRP Bypass',
          description:
              'iQOO 5g FRP (Factory Reset Protection) lock removal and Google account lock assistance with safe and policy-compliant software solutions.',
          before: 'Forgot Gmail & Password',
          after: 'Working without any authentication',
          duration: '30 Minutes',
          icon: 'ri-smartphone-line',
          color: 'from-purple-500 to-pink-500',
      },
      {
          id: 3,
          category: 'hardware',
          title: 'SSD & Windows(OS) installation',
          description:
              'SSD upgrade with Windows installation, including OS setup, drivers, and performance optimization for faster and smoother system performance.',
          before: 'Not booting',
          after: 'Fully functional',
          duration: '3-4 hours',
          icon: 'ri-cpu-line',
          color: 'from-orange-500 to-red-500',
      },
      {
          id: 4,
          category: 'network',
          title: 'Home Network Setup',
          description:
              'Complete home WiFi network installation with 3 access points',
          before: 'Dead zones',
          after: 'Full coverage',
          duration: '3 hours',
          icon: 'ri-wifi-line',
          color: 'from-green-500 to-teal-500',
      },
      {
          id: 5,
          category: 'mobile',
          title: 'Water Damage Recovery',
          description:
              'Samsung Galaxy S21 water damage cleaning and restoration',
          before: 'Not turning on',
          after: 'Fully operational',
          duration: '2 days',
          icon: 'ri-drop-line',
          color: 'from-indigo-500 to-purple-500',
      },
      {
          id: 6,
          category: 'hardware',
          title: 'SSD Upgrade & Migration',
          description: 'Upgraded from HDD to 1TB NVMe SSD with data migration',
          before: 'Slow boot (2 min)',
          after: 'Fast boot (10 sec)',
          duration: '2 hours',
          icon: 'ri-hard-drive-2-line',
          color: 'from-yellow-500 to-orange-500',
      },
      {
          id: 7,
          category: 'laptop',
          title: 'Keyboard Replacement',
          description:
              'Dell XPS 13 keyboard replacement with backlight functionality',
          before: 'Keys not working',
          after: 'Perfect typing',
          duration: '1 hour',
          icon: 'ri-keyboard-line',
          color: 'from-teal-500 to-green-500',
      },
  ];

  // Filter categories
  const categories = [
    { key: 'all', label: 'All Projects', icon: 'ri-grid-line' },
    { key: 'laptop', label: 'Laptop', icon: 'ri-computer-line' },
    { key: 'mobile', label: 'Mobile', icon: 'ri-smartphone-line' },
    { key: 'hardware', label: 'Hardware', icon: 'ri-cpu-line' },
    { key: 'network', label: 'Network', icon: 'ri-wifi-line' },
  ];

  // Filtered items
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #0073ff 25%, transparent 25%), 
                           linear-gradient(-45deg, #0073ff 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, #ff9100 75%), 
                           linear-gradient(-45deg, transparent 75%, #ff9100 75%)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-4">
            Portfolio
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-neutral-900 mb-4">
            Recent <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Check out some of our recent repair projects and see the quality of our work
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setFilter(category.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                filter === category.key
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              <i className={category.icon}></i>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer bg-gradient-to-br from-white to-neutral-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-100"
              >
                {/* Image Placeholder with Gradient */}
                <div className={`relative h-56 bg-gradient-to-br ${item.color} p-8 flex items-center justify-center overflow-hidden`}>
                  {/* Background Icon */}
                  <i className={`${item.icon} absolute text-[150px] text-white/10 transform rotate-12 group-hover:scale-110 transition-transform duration-500`}></i>
                  
                  {/* Main Icon */}
                  <div className="relative w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <i className={`${item.icon} text-white text-4xl`}></i>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-neutral-700 flex items-center space-x-1">
                    <i className="ri-time-line"></i>
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Before/After */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex-1">
                      <p className="text-neutral-400 font-medium mb-1">Before</p>
                      <p className="text-red-600 font-semibold">{item.before}</p>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center mx-3">
                      <i className="ri-arrow-right-line text-white"></i>
                    </div>
                    <div className="flex-1 text-right">
                      <p className="text-neutral-400 font-medium mb-1">After</p>
                      <p className="text-green-600 font-semibold">{item.after}</p>
                    </div>
                  </div>

                  {/* View Details Link */}
                  <div className="mt-4 pt-4 border-t border-neutral-200">
                    <button className="text-primary-600 font-semibold text-sm flex items-center justify-center w-full group-hover:text-accent-600 transition-colors">
                      View Details
                      <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform"></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-8">
            Trusted by Hundreds of Satisfied Customers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '3000+', label: 'Repairs Completed' },
              { value: '98%', label: 'Success Rate' },
              { value: '24hrs', label: 'Avg. Turnaround' },
              { value: '1500+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal for Item Details */}
      <Modal
        open={!!selectedItem}
        onCancel={() => setSelectedItem(null)}
        footer={null}
        width={600}
        centered
      >
        {selectedItem && (
          <div className="p-4">
            <div className={`w-full h-40 bg-gradient-to-br ${selectedItem.color} rounded-2xl flex items-center justify-center mb-6`}>
              <i className={`${selectedItem.icon} text-white text-6xl`}></i>
            </div>
            <h3 className="font-display font-bold text-2xl text-neutral-900 mb-3">
              {selectedItem.title}
            </h3>
            <p className="text-neutral-600 mb-4">{selectedItem.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 rounded-xl p-4">
                <p className="text-neutral-500 text-sm mb-1">Before</p>
                <p className="font-semibold text-red-600">{selectedItem.before}</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-neutral-500 text-sm mb-1">After</p>
                <p className="font-semibold text-green-600">{selectedItem.after}</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-neutral-600">
              <div className="flex items-center space-x-2">
                <i className="ri-time-line text-primary-500"></i>
                <span>Duration: {selectedItem.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-check-double-line text-green-500"></i>
                <span>Completed Successfully</span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default PortfolioSection;
