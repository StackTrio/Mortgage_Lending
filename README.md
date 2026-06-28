# Aura Mortgage Homepage Concept

A premium, high-fidelity static homepage prototype for a mortgage lending firm. Inspired by Apple's minimalist design language, this concept is fully responsive, SEO-optimized, and built using semantic HTML5, Vanilla CSS, and Vanilla JavaScript.

## Features

- **Apple-Inspired Design Philosophy**: Clean typography, generous whitespace, soft glassmorphism, responsive grids, and golden accents.
- **Interactive Mortgage Calculator**: Real-time payment breakdowns including Principal & Interest, Property Taxes (estimated at 1.2% annually), and Home Insurance (estimated at 0.35% annually), complete with a dynamic SVG progress ring visualization.
- **Smooth Animations & Scroll Reveals**: Custom Intersection Observer implementation triggers elegant element reveals and statistics count-up transitions dynamically on scroll.
- **Production-Ready & Static**: No build steps, no Node.js dependencies, and purely relative assets. Ready for immediate deployment.
- **SEO & Compliance Ready**: Full meta structures (Open Graph, robots configuration, SEO tags, sitemap integration), clean title paths, and accessibility labels.

## Folder Structure

```
/
├── index.html          # Main homepage markup
├── styles.css          # Design system & layouts
├── script.js           # Live calculator & animations
├── README.md           # Documentation
├── walkthrough.md      # Features walkthrough
├── CLIENT_DEMO.md      # Presentation details
├── .gitignore          # Git exclusion rules
├── sitemap.xml         # XML Sitemap
└── assets/
    └── logos/
        └── favicon.svg # Branding Favicon
```

## Technologies Used

- **Markup**: Semantic HTML5 (ARIA tags, SEO optimized)
- **Styling**: Vanilla CSS (Custom properties, grid systems, glassmorphism)
- **Scripting**: Vanilla JavaScript (ES6+, Intersection Observer API)
- **Graphics**: Lightweight Vector Inline & Asset SVGs (Retina ready)

## Deployment Instructions (GitHub Pages)

This project has zero dependencies and can be deployed to GitHub Pages in minutes:

1. **Create Repository**: Create a new public repository on your GitHub account (e.g., `Mortgage_Lending`).
2. **Initialize Git**: Push this codebase to your newly created repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Aura Mortgage Homepage Concept"
   git branch -M main
   git remote add origin https://github.com/yourusername/Mortgage_Lending.git
   git push -u origin main
   ```
3. **Configure Pages**:
   - Go to your repository settings on GitHub.
   - In the left sidebar, click on **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch** for Source.
   - Select the `main` branch and click **Save**.
4. **Access the Demo**: Your site will be published at: `https://yourusername.github.io/Mortgage_Lending/` (usually takes less than a minute to build and go live).

## Screenshots Section
*Place visual screens here after rendering.*

## Credits

Designed and developed with ❤️ for Aura Mortgage client presentation.
Licensed under the MIT License.
