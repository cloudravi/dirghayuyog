# 🧘 Dirghayuyog - Yoga Classes Website

A modern, responsive website for Dirghayuyog yoga classes in Kalyan, Mumbai. Built with HTML5, CSS3, and Vanilla JavaScript.

## ✨ Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Modern UI** - Clean, professional design with smooth animations
- **Mobile Menu** - Hamburger menu for mobile devices
- **Smooth Scroll** - Navigation with smooth scrolling
- **Performance Optimized** - Lazy loading, debounced events
- **SEO Ready** - Meta tags, semantic HTML, accessibility features
- **Fast Loading** - Optimized CSS and JavaScript
- **Accessible** - ARIA labels, proper heading hierarchy

## 📁 File Structure

```
dirghayuyog/
├── index.html        # Main HTML file with semantic structure
├── styles.css        # Professional CSS with animations
├── script.js         # Vanilla JavaScript functionality
├── README.md         # This file
└── assets/           # (Optional) For images and icons
```

## 🎨 Features Overview

### Header
- Sticky navigation with smooth scroll
- Mobile hamburger menu
- Gradient background with brand colors

### Hero Section
- Full-height hero with background image
- Overlay for better text contrast
- Smooth fade-in animation
- Call-to-action button

### About Section
- Founder information
- Professional image
- Achievements and experience

### Classes Section
- 4 different yoga classes
- Icon-based cards
- Hover animations
- Responsive grid layout

### Achievement Banner
- Highlights of credentials
- Gradient background
- Prominent positioning

### Contact Section
- Contact information
- WhatsApp integration
- Email link
- Responsive layout

### Footer
- Copyright information
- Professional styling

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/cloudravi/dirghayuyog.git
   cd dirghayuyog
   ```

2. **Open in browser**
   - Open `index.html` directly in your browser
   - Or use a local server:
   ```bash
   python3 -m http.server 8000
   # or
   npx http-server
   ```

3. **View the site**
   - Navigate to `http://localhost:8000`

## 🎯 Customization Guide

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
  --primary-color: #0f766e;
  --secondary-color: #14b8a6;
  --light-bg: #f0fdfa;
  /* ... more colors ... */
}
```

### Contact Information
Update in `index.html`:
```html
<p>Call / WhatsApp: <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a></p>
<p>Email: <a href="mailto:dirghayuyog@gmail.com">dirghayuyog@gmail.com</a></p>
<a href="https://wa.me/91XXXXXXXXXX">Book Your Free Demo Class</a>
```

### Replace Images
Update image URLs in `index.html`:
```html
<img src="YOUR_IMAGE_URL" alt="Description">
```

### Add More Classes
Add new boxes in the classes section:
```html
<div class="box">
  <div class="box-icon">🎯</div>
  <h3>Class Name</h3>
  <p>Class description here</p>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🔍 SEO Optimization

- Meta descriptions
- Semantic HTML5 tags
- Proper heading hierarchy
- Alt text for images
- Mobile viewport meta tag
- Structured data ready

## 🎬 JavaScript Features

- **Mobile Menu Toggle** - Hamburger menu functionality
- **Smooth Scrolling** - Anchor link navigation
- **Intersection Observer** - Fade-in animations on scroll
- **Lazy Loading** - Images load on demand
- **Validation Helpers** - Email and phone validation functions
- **Performance Monitoring** - Optional performance tracking

## 📊 Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: iOS Safari, Chrome Android

## 🚀 Deployment Options

### GitHub Pages
```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Enable GitHub Pages in repository settings
# Select 'main' branch as source
```

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: (leave empty)
4. Deploy!

### Vercel
1. Import your GitHub repository
2. Deploy!

### Traditional Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Access via your domain

## ✅ Performance Tips

- Images are optimized from Unsplash
- CSS is minified and critical
- JavaScript is vanilla (no dependencies)
- Lazy loading for images
- Debounced scroll events

## 📝 Future Enhancements

- [ ] Blog section
- [ ] Student testimonials
- [ ] Class schedule/booking system
- [ ] Before/after gallery
- [ ] Live chat support
- [ ] Newsletter signup
- [ ] Social media integration
- [ ] Multi-language support

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for improvements.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Support

For questions or support, contact:
- **Email**: dirghayuyog@gmail.com
- **WhatsApp**: +91 XXXXX XXXXX
- **Location**: Kalyan, Mumbai, Maharashtra

---

**Made with ❤️ for Dirghayuyog Yoga Classes**

© 2026 Dirghayuyog | All Rights Reserved