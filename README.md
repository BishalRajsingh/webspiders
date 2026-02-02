<!-- # Marketing Website – Figma to HTML -->

This project is a pixel-accurate Figma to HTML implementation of a marketing website using vanilla HTML, CSS, and JavaScript.

The goal was to demonstrate:
- Semantic HTML
- Responsive layouts
- Accessible UI patterns
- Lightweight animations
- Clean code organization

<!-- Tech Stack -->
- HTML5 (semantic)
- CSS3 (custom, no UI libraries)
- JavaScript (vanilla)
- GSAP (micro-animations only)
- Font Awesome (icons)

<!--  Features -->
- Glassmorphism navbar with scroll-based background change
- Video hero section
- Interactive pricing cards with animated borders
- Monthly / Yearly pricing toggle with animation and persistence
- Signup / Sign-in widget with validation and success states
- Fully responsive (mobile / tablet / desktop)

<!-- Accessibility -->
- Semantic landmarks
- `aria-live` for dynamic content
- Inline error messages without layout shift
- Reduced motion support

<!-- Performance -->
- No frameworks
- No heavy libraries
- Optimized animations

<!-- Animations--- -->

GSAP is loaded via CDN for ease of review.  
In a production setup, GSAP would be bundled using a build tool to reduce requests and enable tree-shaking.

<!-- -- Build & Optimization-- -->

This project does not include a build step to keep the setup simple and easy to review.

In a production environment, the following optimizations would be applied:
- JavaScript bundling and minification (e.g. via Vite/Webpack)
- CSS minification
- Tree-shaking of animation libraries (GSAP)
- Asset optimization and cache-busting

For this assignment, files are kept readable and unminified by design.
