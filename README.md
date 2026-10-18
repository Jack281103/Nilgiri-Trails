# Nilgiri Trails - Ooty Taxi Service & Tour Packages

A responsive travel website for Nilgiri Trails, offering taxi services, sightseeing tours, and tour packages across Ooty, Coonoor, and the Nilgiris.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Modern UI** - Clean design with forest/green color scheme inspired by the Nilgiris
- **Service Showcase** - Services, destinations, and tour packages sections
- **Booking Form** - Integrated quote request form with WhatsApp integration
- **Smooth Animations** - Scroll animations and interactive elements
- **WhatsApp Float** - Persistent WhatsApp contact button
- **SEO Optimized** - Meta tags, semantic HTML, and proper heading structure

## Project Structure

```
Nilgiri_Trails/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── logo.png
│   ├── hero-ooty.jpg
│   ├── tea-estate.jpg
│   └── images/
│       ├── ooty-lake.jpg
│       ├── doddabetta.jpg
│       ├── pykara.jpg
│       └── coonoor.jpg
└── README.md
```

## Sections

1. **Hero** - Full-screen banner with CTA buttons
2. **Quick Services** - 4-column service highlights
3. **Services** - 6 detailed service cards
4. **Destinations** - 4 image cards with overlay
5. **Packages** - 3 tour package cards with pricing
6. **Why Us** - 4 trust factors on dark background
7. **CTA** - Call-to-action section
8. **Contact** - Contact info + booking form
9. **Footer** - Links, branding, copyright

## Required Assets

Place the following images in the `assets/` folder:

| File | Description | Recommended Size |
|------|-------------|------------------|
| `logo.png` | Company logo | 200x200px (transparent BG) |
| `hero-ooty.jpg` | Hero background | 1920x1080px |
| `tea-estate.jpg` | CTA background | 1920x1080px |
| `images/ooty-lake.jpg` | Ooty Lake destination | 600x400px |
| `images/doddabetta.jpg` | Doddabetta Peak | 600x400px |
| `images/pykara.jpg` | Pykara Falls | 600x400px |
| `images/coonoor.jpg` | Coonoor town | 600x400px |

## Tour Packages Included

1. **Ooty Essentials** - 2 Days / 1 Night - From ₹8,999
2. **Ooty Coonoor Delight** - 3 Days / 2 Nights - From ₹14,999
3. **Complete Nilgiris** - 4 Days / 3 Nights - From ₹22,999

## Customization

### Colors (CSS Variables)
```css
:root {
    --forest: #0f3d2e;        /* Primary dark green */
    --forest-light: #1f6b4f;  /* Hover state */
    --tea: #4f8a52;           /* Accent green */
    --gold: #e3a928;          /* Gold/yellow accent */
    --cream: #faf9f4;         /* Light background */
    --dark: #17261f;          /* Text color */
}
```

### WhatsApp Number
Update in `index.html` and `js/script.js`:
```html
<a href="https://wa.me/919876543210" class="whatsapp">
```
```js
const whatsappUrl = `https://wa.me/919876543210?text=...`;
```

### Contact Info
Update phone, email, and address in the contact section of `index.html`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Performance Notes

- All CSS in single file (minify for production)
- Google Fonts preconnected
- Images should be optimized (WebP recommended)
- Consider adding lazy loading for destination/package images

## Deployment

Static site - deploy to any static hosting:
- Netlify, Vercel, GitHub Pages
- Apache/Nginx
- AWS S3 + CloudFront
- Firebase Hosting

## License

© 2025 Nilgiri Trails. All rights reserved.