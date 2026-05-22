# 🐕 Himalayan Dog Cheese | ヒマラヤチーズ

A premium, highly-polished, and fully responsive single-page **bilingual (English & Japanese) landing page** for **Himalayan Dog Cheese / ヒマラヤチーズ**. This landing page is built with **TanStack Start**, **React**, and **TypeScript**, utilizing **Tailwind CSS v4** for styling. It features a rich, custom design system, interactive components, smooth micro-animations, and full accessibility features.

---

## ✨ Features & Visual Aesthetics

*   **🌐 Seamless Bilingual Support (EN / JP):** A language toggle button in the header dynamically switches the page content between English and Japanese. The user's language choice is persisted locally using `localStorage`.
*   **🏔️ Immersive Hero Carousel:**
    *   Full-bleed, smooth scale-transitioning slides.
    *   Interactive controls (Previous/Next, Dot indicators).
    *   Custom circular progress bar timing system with a `5-second` delay.
    *   Automatic pause-on-hover logic.
    *   Preloader logic with robust fallback Unsplash nature/dog images if background assets fail to load.
*   **🎨 Premium Design System:**
    *   **Tailwind HSL Color System:** Incorporates warm, natural colors including a `stone` neutral palette (stone-50 to stone-900), organic forest `peak` greens (peak-50 to peak-900), deep accent `ember` orange, and warm `cream` base backgrounds.
    *   **Typography:** Elegant font pairing using the **Playfair Display** serif font for display headers and **DM Sans** sans-serif font for body copy.
    *   **Mountain Grain Overlay:** A custom inline SVG noise texture overlay applied across sections to provide a premium, organic tactile feel.
*   **✨ Modern Micro-interactions:**
    *   Card hover-lift actions (`lift`) that trigger elegant transitions, subtle scaling, and soft shadows.
    *   Bouncing scroll-down indications and custom SVG paw-divider accents.
*   **🚀 Scroll-Reveal Animations:** Dynamic entrance transitions utilizing the modern **Intersection Observer API** for custom fade-up effects (`reveal` and `visible`) as elements scroll into view.
*   **♿ Accessibility (a11y) & SEO:**
    *   Semantic HTML5 tags throughout (`header`, `main`, `section`, `article`, `footer`).
    *   Included a **Skip to Content** keyboard link for screen readers.
    *   Descriptive metadata, responsive viewports, and clean responsive flex/grid wrappers.

---

## 🛠️ Tech Stack

*   **Framework:** TanStack Start, React
*   **Language:** TypeScript
*   **Styling & Theming:** Tailwind CSS v4
*   **Icons & Assets:** Pure SVGs, custom base64 vectors, and high-quality fallback Unsplash assets
*   **Logic & Interactions:** Modern JavaScript (ES6+)
*   **Animations:** Web Animations API, custom CSS `@keyframes`, and `IntersectionObserver` scroll reveals

---

## 📂 Project Structure

The project follows a standard TanStack Start application structure:

```bash
himalyan-dog-chew/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── routes/
│   ├── styles/
│   └── main.tsx
├── .env
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md      # Project documentation and customization guide
```

---

## 🚀 Getting Started

To get this project up and running locally, follow these steps:

### 1. Installation

```bash
bun install
```

### 2. Development Server

```bash
bun --bun run dev
```

This will start the development server, and you can access the application at `http://localhost:5173` (or whatever port is shown in your terminal).

### 3. Build for Production

```bash
bun --bun run build
```

This will compile the application for production, and the output will be in the `dist/` directory.

### 4. Run Production Build (using Nitro)

```bash
npm run build
node dist/server/index.mjs
```

---

## 🧭 Page Sections Breakdown

The page is structured into several responsive sections, likely implemented as React components within the `src/components` and `src/routes` directories:

1.  **Header:** Sticky header with dog emblem, navigation links, and the persisted **EN / JP** switcher.
2.  **Hero Carousel:** The visual centerpiece, combining background imagery, premium tint layers, auto-progression, slide transitions, and overlay navigation.
3.  **About Section:** Introduces the brand story, its heritage, and its dedication to organic Himalayan ingredients.
4.  **Benefits Section:** A premium dark grid section highlighting raw values, lactose-free qualities, dental benefits, and long-lasting chewing utility.
5.  **Products Section:** Interactive product showcases with high-fidelity badges, size parameters, and descriptive titles.
6.  **How to Use:** A simplified, step-by-step visual roadmap walking owners through the feeding, chewing, and microwaving process.
7.  **FAQ Accordions:** An elegant interactive question-and-answer library covering product shelf life, safety guidelines, and puppy suitability.
8.  **Contact & Retailers:** A high-impact dark card grid prompting shop owners to connect, customize copywriting, or map local retailer locator systems.

---

## ✍️ Customization Guide

### 1. Modifying Colors & Styling
Colors are configured directly within `src/styles.css` using Tailwind CSS v4's `@theme` directive:

```css
/* src/styles.css */
@theme inline {
  --color-stone-50: #faf9f7;
  /* ... other stone colors */
  --color-peak-50: #f0f4ef;
  /* ... other peak colors */
  --color-ember: #c0692a;
  --color-cream: #faf6ef;
}
```

### 2. Updating Bilingual Copy
Bilingual copy is handled within React components. You would typically use a localization library or a custom context to manage and switch between English and Japanese text. Look for text content within your components and adapt accordingly.

### 3. Replacing Carousel Images
Carousel images would typically be managed within a React component that handles the carousel logic. Image paths or data would be defined in a component's state or props. Update the image sources within the relevant carousel component files (e.g., `src/components/Carousel.tsx`).

---

## ⚡ Performance & Optimization

*   **Optimized Build:** TanStack Start and Vite provide an optimized build process for fast loading and rendering.
*   **Lazy Loading:** React's `lazy` and `Suspense` can be used for lazy loading components, further improving initial load times.
*   **Responsive Graphics:** Heavy vector artwork and texturizers are loaded via compact, optimized SVGs to maintain crisp clarity on high-DPI displays.
*   **Efficient State Management:** TanStack Start and React's inherent efficiencies ensure smooth updates and interactions.
