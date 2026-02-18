# Customization Guide - RepairPro Website

This guide will help you customize the website for your specific business needs.

---

## 🎨 Branding & Colors

### Change Brand Colors

**File: `tailwind.config.js`**

```javascript
colors: {
  primary: {
    50: '#e6f1ff',
    // ... other shades
    500: '#0073ff', // ← Change this to your primary brand color
    // ... other shades
  },
  accent: {
    50: '#fff4e6',
    // ... other shades
    500: '#ff9100', // ← Change this to your accent color
    // ... other shades
  },
}
```

**Pro Tip:** Use [Coolors.co](https://coolors.co) or [UI Colors](https://uicolors.app) to generate color palettes with all shades.

### Update Company Name & Logo

**1. Company Name**

Search and replace "RepairPro" with your business name in:
- `src/components/common/Header.jsx`
- `src/components/common/Footer.jsx`
- `index.html` (title and meta tags)
- `README.md`

**2. Logo**

Replace logo icon in `Header.jsx`:
```javascript
// Current:
<i className="ri-tools-fill text-white text-xl"></i>

// Change to your icon or add image:
<img src="/logo.png" alt="Your Business" className="w-10 h-10" />
```

### Change Fonts

**File: `src/index.css`**

```css
/* Current fonts */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

/* Change to your preferred fonts */
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

Then update in `tailwind.config.js`:
```javascript
fontFamily: {
  display: ['YourDisplayFont', 'sans-serif'],
  body: ['YourBodyFont', 'sans-serif'],
}
```

---

## 📞 Contact Information

### Update Phone Numbers

**Files to update:**
1. `src/components/common/WhatsAppButton.jsx`
2. `src/components/common/Header.jsx`
3. `src/components/common/Footer.jsx`
4. `src/components/ContactSection.jsx`
5. `src/components/booking/BookingSection.jsx`

**Example:**
```javascript
// WhatsApp format: Country code + number (no + or spaces)
const phoneNumber = '919876543210'; // India example
const phoneNumber = '11234567890';  // US example

// Display format:
<a href="tel:+919876543210">+91 98765 43210</a>
```

### Update Email Addresses

Search for `info@repairpro.com` and replace with your email in:
- Footer
- Contact section
- Meta tags
- mailto: links

### Update Business Address

**File: `src/components/common/Footer.jsx`**
```javascript
<span>
  Your Street Address,<br />
  Your City, State ZIP
</span>
```

**File: `src/components/ContactSection.jsx`**
Update in contact info cards and map section.

### Add Google Maps

**File: `src/components/ContactSection.jsx`**

1. Get your Google Maps embed code:
   - Go to [Google Maps](https://www.google.com/maps)
   - Search your address
   - Click Share → Embed a map
   - Copy the iframe code

2. Replace in ContactSection:
```javascript
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
></iframe>
```

---

## 💼 Services Customization

### Add/Remove Services

**File: `src/components/ServicesSection.jsx`**

```javascript
const services = [
  {
    icon: 'ri-computer-line',        // Remix icon
    title: 'Your Service Name',
    description: 'Detailed description of what you offer',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4',
    ],
    gradient: 'from-blue-500 to-cyan-500',  // Color gradient
    bgColor: 'from-blue-50 to-cyan-50',     // Background color
    price: 'Starting at $XX',
  },
  // Add more services...
];
```

**Finding Icons:**
Browse [Remix Icon](https://remixicon.com) for icons.

### Update Service Dropdown in Booking

**File: `src/components/booking/BookingSection.jsx`**

```javascript
const serviceTypes = [
  { 
    value: 'service-slug',          // URL-friendly name
    label: 'Service Display Name',   // Shown to user
    icon: 'ri-icon-name' 
  },
  // Add your services...
];
```

---

## 🖼️ Images & Media

### Hero Section Image

**File: `src/components/HeroSection.jsx`**

Replace the placeholder:
```javascript
// Current placeholder:
<div className="aspect-square flex items-center justify-center">
  <motion.i className="ri-tools-fill..." />
</div>

// Replace with:
<img 
  src="/images/hero-image.jpg" 
  alt="Professional Repair Service"
  className="w-full h-full object-cover rounded-3xl"
/>
```

### About Section Photo

**File: `src/components/AboutSection.jsx`**

Add your professional photo:
```javascript
<img 
  src="/images/technician-photo.jpg" 
  alt="Professional Technician"
  className="w-full h-full object-cover rounded-2xl"
/>
```

### Portfolio Images

**File: `src/components/PortfolioSection.jsx`**

Add actual repair photos:
```javascript
{
  id: 1,
  category: 'laptop',
  title: 'Laptop Screen Replacement',
  description: '...',
  image: '/images/portfolio/repair-1.jpg', // Add this
  // ... other fields
}
```

Then update the component to display images:
```javascript
<img 
  src={item.image} 
  alt={item.title}
  className="w-full h-56 object-cover"
/>
```

---

## 📝 Content Customization

### Hero Section

**File: `src/components/HeroSection.jsx`**

Update:
- Main headline
- Description text
- CTA button text
- Stats numbers (clients, repairs, years, rating)

### About Section

**File: `src/components/AboutSection.jsx`**

Customize:
- Section description
- Your story/bio paragraphs
- Skills and proficiency levels
- Experience highlights
- "Why Choose Me" points

### Testimonials (Add New Section)

Create `TestimonialsSection.jsx`:
```javascript
const testimonials = [
  {
    name: "John Doe",
    role: "Business Owner",
    avatar: "/images/customer-1.jpg",
    rating: 5,
    review: "Excellent service! Fast and professional...",
  },
  // More testimonials...
];
```

---

## ⚙️ Features Configuration

### Enable/Disable Sections

**File: `src/pages/HomePage.jsx`**

Comment out sections you don't need:
```javascript
return (
  <div className="min-h-screen bg-white">
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      {/* <TestimonialsSection /> */}  {/* Commented out */}
      <BookingSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);
```

### Customize Working Hours

**Multiple Files:**

Search for "Mon - Sat: 9AM - 7PM" and update throughout:
- Footer
- Contact section
- Booking section

### Social Media Links

**File: `src/components/common/Footer.jsx`**

```javascript
const socialLinks = [
  { 
    icon: 'ri-facebook-fill', 
    href: 'https://facebook.com/yourpage',  // ← Update
    label: 'Facebook', 
    color: '#1877F2' 
  },
  // Update all social links...
];
```

---

## 🎯 Booking System Configuration

### Customize Form Fields

**File: `src/components/booking/BookingSection.jsx`**

Add custom fields:
```javascript
{/* Add Device Type field */}
<Form.Item
  label="Device Type"
  name="deviceType"
  rules={[{ required: true }]}
>
  <Select placeholder="Select device type">
    <Option value="laptop">Laptop</Option>
    <Option value="desktop">Desktop</Option>
    <Option value="mobile">Mobile</Option>
  </Select>
</Form.Item>
```

### Connect to Backend API

Replace the mock API call:
```javascript
const handleSubmit = async (values) => {
  setLoading(true);
  
  try {
    // Option 1: Your custom API
    const response = await fetch('https://your-api.com/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });
    
    // Option 2: FormSpree
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: JSON.stringify(bookingData),
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
      notification.success({ message: 'Booking confirmed!' });
      form.resetFields();
    }
  } catch (error) {
    notification.error({ message: 'Booking failed' });
  } finally {
    setLoading(false);
  }
};
```

### Email Notifications

Use services like:
- **EmailJS** (free tier, client-side)
- **SendGrid** (API-based)
- **AWS SES** (professional)

---

## 🎨 Styling Customization

### Add Custom Animations

**File: `src/index.css`**

```css
@keyframes yourAnimation {
  from { transform: scale(0); }
  to { transform: scale(1); }
}

.your-class {
  animation: yourAnimation 0.5s ease-out;
}
```

### Change Button Styles

**File: `src/index.css`**

```css
.btn-primary {
  background: linear-gradient(135deg, #yourcolor1 0%, #yourcolor2 100%);
  /* Customize as needed */
}
```

### Adjust Spacing

**File: `tailwind.config.js`**

```javascript
extend: {
  spacing: {
    '128': '32rem',
    '144': '36rem',
  }
}
```

---

## 📊 Analytics Setup

### Google Analytics

**File: `index.html`**

Add before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## 🔧 Advanced Customization

### Add Blog Section

1. Create `BlogSection.jsx`
2. Add routing in `App.jsx`
3. Create blog post pages
4. Add to navigation

### Multi-language Support

Use `react-i18next`:
```bash
npm install react-i18next i18next
```

### Dark Mode

Add dark mode toggle using Tailwind's dark mode feature.

### Live Chat Integration

Add Tawk.to, Intercom, or Crisp chat widget.

---

## 📋 Pre-Launch Checklist

- [ ] All contact info updated
- [ ] All images replaced
- [ ] Services customized
- [ ] Pricing updated
- [ ] Backend connected
- [ ] Analytics added
- [ ] SEO meta tags updated
- [ ] Forms tested
- [ ] Mobile responsiveness checked
- [ ] Cross-browser tested

---

## 🆘 Need Help?

If you get stuck:
1. Check browser console for errors
2. Review this guide
3. Check component documentation
4. Open an issue on GitHub

---

**Happy Customizing! 🎨**
