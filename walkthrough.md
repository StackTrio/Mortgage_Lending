# Walkthrough - Aura Mortgage Homepage Prototype

We have implemented a premium, high-fidelity static homepage prototype for **Aura Mortgage**, matching the requirements and styled with an Apple-inspired design philosophy.

## Files Created

We created a fully responsive, semantic, and highly interactive landing page:

1. **[index.html](file:///c:/mockup/code/Mortgage_Lending/index.html)**:
   - High-fidelity semantic layout structured with headers, main section cards, interactive panels, dynamic SVGs, and compliance disclosures.
   - Built-in SVGs for architectural background elements, custom solution cards, ratings, trust badges, and navigation icons.

2. **[styles.css](file:///c:/mockup/code/Mortgage_Lending/styles.css)**:
   - Premium design tokens with typography (Inter & Plus Jakarta Sans), colors (Deep Navy `#0A2540`, Muted Gold `#D4AF37`, Light Gray background `#F8FAFC`).
   - Apple-style design accents: soft glassmorphism (`backdrop-filter: blur(20px)`), elegant hover states (sliding line borders, 3D shifts), card shadowing, and responsive layout systems.

3. **[script.js](file:///c:/mockup/code/Mortgage_Lending/script.js)**:
   - **Interactive Mortgage Calculator**: Calculates Principal, Interest, estimated Property Taxes, and Home Insurance in real-time. Features SVG chart ring update reflecting monthly payment breakdown.
   - **Intersection Observer**: Fades and slides elements into view as the user scrolls, creating a smooth, lightweight animation flow.
   - **Count-Up Stat Numbers**: Animates stats numbers (e.g., Families Served, Years of Experience) from 0 when they scroll into view.
   - **Responsive Menu Trigger**: Compact mobile header navigation overlay.

## Verification & Testing

- Verified calculations:
  - For $450,000 price, $90,000 down payment (20%), 5.5% interest, and 30-year fixed term:
    - Principal & Interest: ~$2,044/mo.
    - Taxes (1.2% / 12 of Home Price): $450/mo.
    - Insurance (0.35% / 12 of Home Price): ~$131/mo.
    - Estimated Total Monthly Payment: ~$2,625 (matches calculator logic).
- Custom Intersection Observer manages scroll triggers for `.reveal` elements cleanly.
- Clean vanilla structure, compatible with direct GitHub Pages deployment.
