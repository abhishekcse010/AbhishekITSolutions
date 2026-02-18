# Deployment Guide - RepairPro Website

## Pre-Deployment Checklist

Before deploying your website, make sure to:

### 1. Update Contact Information ✅

- [ ] WhatsApp phone number in `src/components/common/WhatsAppButton.jsx`
- [ ] Footer contact details in `src/components/common/Footer.jsx`
- [ ] Contact section info in `src/components/ContactSection.jsx`
- [ ] Email addresses throughout the site
- [ ] Social media links in footer

### 2. Configure Backend Integration ✅

- [ ] Replace API placeholder in `src/components/booking/BookingSection.jsx`
- [ ] Replace API placeholder in `src/components/ContactSection.jsx`
- [ ] Set up email notification service (optional)
- [ ] Configure database for storing bookings (optional)

### 3. Add Real Content ✅

- [ ] Replace placeholder images in HeroSection
- [ ] Add actual technician photo in AboutSection
- [ ] Add real repair photos in PortfolioSection
- [ ] Update service descriptions and pricing
- [ ] Add Google Maps embed in ContactSection

### 4. SEO Optimization ✅

- [ ] Update meta tags in `index.html`
- [ ] Add favicon files in `public/` folder
- [ ] Configure sitemap.xml
- [ ] Set up robots.txt
- [ ] Add Google Analytics (optional)

### 5. Test Everything ✅

- [ ] Test on mobile devices (Chrome DevTools)
- [ ] Test all forms (booking, contact)
- [ ] Test all links and navigation
- [ ] Test WhatsApp integration
- [ ] Verify responsive design on all breakpoints

---

## Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

**Why Vercel?**
- Free hosting for personal/small business sites
- Automatic HTTPS
- Global CDN
- Zero configuration
- Continuous deployment from Git

**Steps:**

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
# From project root
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? Your account
# - Link to existing project? N
# - Project name? repair-pro-website
# - Directory? ./
# - Build command? (auto-detected)
# - Output directory? dist
```

4. **Production Deployment**
```bash
vercel --prod
```

Your site will be live at: `https://your-project.vercel.app`

**Custom Domain:**
```bash
vercel domains add yourdomain.com
```

---

### Option 2: Netlify (Easy & Popular)

**Why Netlify?**
- Free tier with generous limits
- Drag-and-drop deployment
- Form handling built-in
- Great for static sites

**Steps:**

1. **Build the project**
```bash
npm run build
```

2. **Deploy via Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `dist` folder
   - Done! Your site is live

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

**Custom Domain:**
- Dashboard → Domain settings → Add custom domain

---

### Option 3: GitHub Pages (Free)

**Steps:**

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**
```json
{
  "homepage": "https://yourusername.github.io/repair-pro-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

---

### Option 4: Traditional Hosting (cPanel, Shared Hosting)

**Steps:**

1. **Build the project**
```bash
npm run build
```

2. **Upload files**
   - Upload contents of `dist/` folder to your hosting
   - Typically to `public_html/` or `www/` directory
   - Use FTP client (FileZilla) or hosting file manager

3. **Configure .htaccess** (for Apache servers)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

### Option 5: AWS S3 + CloudFront (Professional)

**For high-traffic sites**

1. **Build project**
```bash
npm run build
```

2. **Create S3 Bucket**
   - Enable static website hosting
   - Upload dist/ contents

3. **Configure CloudFront**
   - Create distribution
   - Point to S3 bucket
   - Set up SSL certificate

4. **Deploy**
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

---

## Post-Deployment

### 1. Test Your Live Site ✅

Visit your deployed URL and test:
- [ ] All pages load correctly
- [ ] Forms submit properly
- [ ] WhatsApp button works
- [ ] Responsive on mobile devices
- [ ] No console errors

### 2. Set Up Analytics (Optional)

**Google Analytics:**
Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Set Up Form Backend (Important!)

The booking and contact forms need a backend to function. Options:

**A. FormSpree (Easiest - Free tier available)**
```javascript
// In BookingSection.jsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(bookingData),
  headers: { 'Content-Type': 'application/json' }
});
```

**B. Netlify Forms (If using Netlify)**
Add to form tag: `data-netlify="true"`

**C. Custom Backend**
- Build Node.js/Express API
- Or use serverless functions (Vercel, Netlify)
- Store in database (MongoDB, PostgreSQL)
- Send email notifications

### 4. Enable HTTPS

All modern hosting providers include free SSL. Ensure HTTPS is enabled in your hosting dashboard.

### 5. Set Up Domain

If you have a custom domain:
1. Point domain DNS to hosting provider
2. Update nameservers
3. Wait for propagation (24-48 hours)
4. Enable SSL for custom domain

---

## Continuous Deployment

### With Vercel/Netlify + GitHub

1. Push code to GitHub repository
2. Connect repository to Vercel/Netlify
3. Every push to main branch auto-deploys

**Set up:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

Then connect in Vercel/Netlify dashboard.

---

## Performance Optimization

After deployment, optimize:

1. **Enable Gzip Compression**
2. **Use CDN** (CloudFlare free tier)
3. **Optimize Images** (use WebP format)
4. **Minify Assets** (already done in build)
5. **Enable Caching**

---

## Monitoring & Maintenance

### Set Up Uptime Monitoring
- UptimeRobot (free)
- Pingdom
- StatusCake

### Regular Tasks
- Weekly: Check form submissions
- Monthly: Update content, check analytics
- Quarterly: Update dependencies (`npm update`)

---

## Troubleshooting

### Issue: Blank page after deployment
**Solution:** Check browser console, ensure all assets loaded

### Issue: Forms not working
**Solution:** Configure backend endpoint, check CORS settings

### Issue: 404 on page refresh
**Solution:** Configure redirects/rewrites for SPA routing

### Issue: Slow loading
**Solution:** Check image sizes, enable CDN, optimize build

---

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **React Docs**: https://react.dev

---

**Need Help?** Open an issue or contact support at info@repairpro.com

Good luck with your deployment! 🚀
