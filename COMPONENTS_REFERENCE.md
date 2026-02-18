# Component Reference Guide

## Overview of All Components

This document describes each component in the website and how to use/customize them.

---

## 🧩 Common Components

### 1. Header (Navigation)
**File:** `src/components/common/Header.jsx`

**Purpose:** Main navigation bar with logo, menu links, and CTA button

**Features:**
- Sticky header with scroll effect
- Mobile responsive menu
- Smooth scroll to sections
- Glass morphism effect on scroll

**Customization:**
```javascript
// Update navigation items
const navItems = [
  { label: 'Your Link', href: '#section' },
  // Add more...
];

// Update logo
<div className="...">
  {/* Replace with your logo */}
</div>
```

---

### 2. Footer
**File:** `src/components/common/Footer.jsx`

**Purpose:** Site footer with links, contact info, and social media

**Features:**
- 4-column responsive layout
- Quick links
- Service list
- Contact information
- Social media icons
- Copyright info

**Customization:**
```javascript
// Update social links
const socialLinks = [
  { icon: 'ri-facebook-fill', href: 'your-url', ... },
  // Add more...
];

// Update contact info
// Update quick links
// Update services list
```

---

### 3. WhatsApp Button
**File:** `src/components/common/WhatsAppButton.jsx`

**Purpose:** Floating WhatsApp button for instant contact

**Features:**
- Fixed position (bottom-right)
- Pulsing animation
- Hover tooltip
- Opens WhatsApp with pre-filled message

**Customization:**
```javascript
// Update phone number
const phoneNumber = '1234567890'; // Your WhatsApp number

// Update message
const message = encodeURIComponent('Your custom message');
```

---

## 📄 Page Sections

### 4. Hero Section
**File:** `src/components/HeroSection.jsx`

**Purpose:** Main landing section - first thing visitors see

**Features:**
- Eye-catching headline
- CTA buttons (Book Repair & WhatsApp)
- Stats showcase
- Animated background elements
- Trust indicators
- Floating decorative cards

**Key Elements:**
- Main headline with gradient text
- Description text
- 2 CTA buttons
- 4 stat cards
- Background animations
- Scroll indicator

**Customization:**
```javascript
// Update headline
<h1>Your Custom Headline</h1>

// Update stats
const stats = [
  { icon: '...', value: 'Your Value', label: 'Your Label' },
  // Modify as needed
];

// Update trust indicators
// Change background colors
// Modify animations
```

---

### 5. About Section
**File:** `src/components/AboutSection.jsx`

**Purpose:** Tell your story and showcase expertise

**Features:**
- Professional photo area
- Experience badge
- Bio/story text
- Skills with progress bars
- Core competencies
- Why choose section
- Highlight cards

**Key Elements:**
- Image/photo container
- 8+ years experience badge
- 3 paragraphs of bio text
- 4 skills with proficiency levels
- 4 "Why Choose Me" points
- 4 highlight cards

**Customization:**
```javascript
// Update skills
const skills = [
  { name: 'Your Skill', level: 95, icon: 'ri-icon' },
  // Add your skills...
];

// Update highlights
const highlights = [
  { icon: '...', title: '...', description: '...', color: '...' },
  // Customize...
];

// Update bio text
// Add your photo
```

---

### 6. Services Section
**File:** `src/components/ServicesSection.jsx`

**Purpose:** Showcase all your repair services

**Features:**
- Service cards with gradients
- Feature lists
- Pricing
- Icons
- CTA buttons
- Benefits section
- Emergency banner

**Key Elements:**
- 6 default service cards (customizable)
- Each card has: icon, title, description, 4 features, price
- Benefits grid (4 items)
- Emergency service banner

**Customization:**
```javascript
// Add/remove services
const services = [
  {
    icon: 'ri-your-icon',
    title: 'Your Service',
    description: 'What you offer',
    features: ['Feature 1', 'Feature 2', ...],
    gradient: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    price: 'Starting at $XX',
  },
  // Add more...
];

// Update benefits
// Modify emergency banner
```

---

### 7. Portfolio Section
**File:** `src/components/PortfolioSection.jsx`

**Purpose:** Showcase completed repair projects

**Features:**
- Filterable portfolio grid
- Category tabs
- Before/After display
- Duration badges
- Modal for details
- Stats summary

**Key Elements:**
- Filter tabs (All, Laptop, Mobile, Hardware, Network)
- 9 default portfolio items
- Before/After comparison
- Click for detailed view
- Stats banner at bottom

**Customization:**
```javascript
// Add portfolio items
const portfolioItems = [
  {
    id: 1,
    category: 'laptop', // or mobile, hardware, network
    title: 'Your Project',
    description: 'What you did',
    before: 'Initial problem',
    after: 'End result',
    duration: 'Time taken',
    icon: 'ri-icon',
    color: 'gradient-colors',
  },
  // Add more...
];

// Add categories
// Customize filters
// Add real images
```

---

### 8. Booking Section ⭐ (IMPORTANT)
**File:** `src/components/booking/BookingSection.jsx`

**Purpose:** Main booking system for repair services

**Features:**
- Complete booking form
- Full validation
- Service type dropdown
- Date picker (no past dates)
- Phone validation
- Email validation
- Success/error notifications
- Info cards

**Form Fields:**
1. Name (required, min 2 chars)
2. Phone (required, 10 digits)
3. Email (optional, validated)
4. Service Type (required, dropdown)
5. Preferred Date (required, DatePicker)
6. Message (optional, 500 chars max)

**Customization:**
```javascript
// Add custom fields
<Form.Item
  label="Your Field"
  name="fieldName"
  rules={[{ required: true }]}
>
  <Input placeholder="..." />
</Form.Item>

// Update service types
const serviceTypes = [
  { value: 'slug', label: 'Display Name', icon: 'ri-icon' },
  // Add your services...
];

// Connect to backend
const handleSubmit = async (values) => {
  // Replace with your API call
  const response = await fetch('/api/bookings', {
    method: 'POST',
    body: JSON.stringify(bookingData),
  });
};
```

**Backend Integration:**
See `DEPLOYMENT.md` for backend options (FormSpree, custom API, etc.)

---

### 9. Contact Section
**File:** `src/components/ContactSection.jsx`

**Purpose:** Additional contact options and message form

**Features:**
- Contact info cards
- Contact form
- Social media links
- Map placeholder
- Emergency contact banner

**Key Elements:**
- 4 contact info cards (Phone, Email, Location, Hours)
- Message form (name, email, subject, message)
- Social media links
- Google Maps area
- Emergency service box

**Customization:**
```javascript
// Update contact info
const contactInfo = [
  {
    icon: 'ri-phone-fill',
    title: 'Phone',
    details: ['Your numbers'],
    action: 'tel:your-number',
    color: 'gradient-colors',
  },
  // Update all...
];

// Add Google Maps
<iframe src="YOUR_GOOGLE_MAPS_EMBED" ... />

// Update form handler
const handleSubmit = async (values) => {
  // Your API call
};
```

---

## 🎨 Styling System

### Color Classes

**Primary Colors:**
- `bg-primary-500` - Main brand blue
- `text-primary-600` - Primary text
- `border-primary-500` - Primary border

**Accent Colors:**
- `bg-accent-500` - Accent orange
- `text-accent-600` - Accent text
- `border-accent-500` - Accent border

**Gradients:**
```javascript
className="bg-gradient-to-r from-primary-500 to-accent-500"
```

### Animation Classes

**Built-in:**
- `animate-fade-in` - Fade in
- `animate-slide-up` - Slide up
- `animate-float` - Floating animation
- `card-hover` - Card hover effect

**Delays:**
- `animate-delay-100` to `animate-delay-500`

### Custom Classes

**In index.css:**
- `.glass-effect` - Glass morphism
- `.gradient-text` - Gradient text
- `.btn-primary` - Primary button
- `.btn-accent` - Accent button
- `.section-padding` - Section spacing

---

## 📱 Responsive Breakpoints

All components are responsive using Tailwind breakpoints:

- **Mobile**: `< 768px` (default)
- **Tablet**: `md:` (≥ 768px)
- **Laptop**: `lg:` (≥ 1024px)
- **Desktop**: `xl:` (≥ 1280px)

Example:
```javascript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

---

## 🔧 Common Patterns

### Scroll to Section
```javascript
const scrollToSection = (href) => {
  const element = document.querySelector(href);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};
```

### Framer Motion Animation
```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

### Ant Design Form
```javascript
<Form
  form={form}
  onFinish={handleSubmit}
  layout="vertical"
>
  <Form.Item
    name="fieldName"
    rules={[{ required: true, message: 'Error message' }]}
  >
    <Input placeholder="..." />
  </Form.Item>
</Form>
```

---

## 🎯 Best Practices

### Do's ✅
- Keep component files under 500 lines
- Use meaningful variable names
- Add comments for complex logic
- Test on mobile devices
- Use Tailwind utilities
- Keep animations subtle
- Validate all form inputs
- Handle loading states
- Show error messages clearly

### Don'ts ❌
- Don't inline large CSS
- Don't skip error handling
- Don't forget mobile responsiveness
- Don't hardcode values (use config)
- Don't ignore accessibility
- Don't skip testing

---

## 📚 Component Dependencies

**All Components Use:**
- React (hooks: useState, useEffect)
- Framer Motion (animations)
- Tailwind CSS (styling)

**Specific Components:**
- Header: No extra deps
- Footer: No extra deps
- WhatsApp: No extra deps
- Sections: Framer Motion
- Booking: Ant Design (Form, Input, Select, DatePicker, Button, notification)
- Contact: Ant Design (Form, Input, Button, notification)
- Portfolio: Ant Design (Modal)

---

## 🔍 Finding Things Quickly

**Need to update...?**

| What | File | Line/Section |
|------|------|--------------|
| Phone number | WhatsAppButton.jsx | Line ~12 |
| Company name | Header.jsx, Footer.jsx | Logo section |
| Services | ServicesSection.jsx | services array |
| Stats | HeroSection.jsx | stats array |
| Skills | AboutSection.jsx | skills array |
| Portfolio items | PortfolioSection.jsx | portfolioItems array |
| Form fields | BookingSection.jsx | Form.Item components |
| Colors | tailwind.config.js | colors object |
| Animations | index.css | @keyframes |

---

## 💡 Tips for Customization

1. **Start Small**: Change colors first, then text, then structure
2. **Test Often**: Check changes immediately
3. **Use Browser DevTools**: Inspect elements, try CSS live
4. **Copy Patterns**: Copy existing components as templates
5. **Keep Backups**: Save working versions
6. **Read Docs**: Check Tailwind/Ant Design docs when stuck

---

## 🆘 Common Issues

**Component not updating?**
- Check if file is saved
- Restart dev server: `Ctrl+C` then `npm run dev`

**Styling broken?**
- Check Tailwind class names
- Verify imports
- Clear browser cache

**Animation not working?**
- Check Framer Motion import
- Verify viewport settings
- Test scroll position

---

This reference should help you understand and customize every part of your website! 🎉
