# 🐕 Himalayan Dog Cheese | ヒマラヤチーズ

A premium, highly-polished, and fully responsive single-page **bilingual (English & Japanese) landing page** for **Himalayan Dog Cheese / ヒマラヤチーズ**. This landing page utilizes a rich, custom design system, interactive JavaScript components, smooth micro-animations, and full accessibility features.

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

*   **Core Structure:** Semantic HTML5
*   **Styling & Theming:** Tailwind CSS (v3 CDN integration with custom configurations)
*   **Icons & Assets:** Pure SVGs, custom base64 vectors, and high-quality fallback Unsplash assets
*   **Logic & Interactions:** Modern Vanilla JavaScript (ES6+)
*   **Animations:** Web Animations API, custom CSS `@keyframes`, and `IntersectionObserver` scroll reveals

---

## 📂 Project Structure

The project has been architected as an optimized, zero-dependency, self-contained single-page experience:

```bash
himalyan-do-cheese-html/
├── index.html     # High-fidelity single-page bilingual application with Tailwind CDN & logic
└── README.md      # Project documentation and customization guide
```

---

## 🚀 Getting Started

Since the project is built on pure, serverless frontend technologies with standard CDN resources, running it locally is incredibly simple.

### Quick Start
You do not need to install dependencies or compile any code. Simply open `index.html` in any web browser of your choice:

*   **Option 1: Direct File Access**
    Double-click the `index.html` file in your operating system's file manager to run it locally.
*   **Option 2: Live Server (Recommended)**
    Run a local static server to take advantage of proper routing and `localStorage` storage scopes:
    ```bash
    # If you have Python installed:
    python3 -m http.server 8000
    
    # Or if you have Node.js / npm:
    npx serve .
    ```
    Then visit `http://localhost:8000` or the corresponding address in your browser.

---

## 🧭 Page Sections Breakdown

The page is split into seven distinct responsive sections (`<section>` wrappers):

1.  **Header (`#top`):** Sticky, backdrop-blur (`backdrop-blur-lg`) header carrying the dog emblem, descriptive headers, section-navigation links, and the persisted **EN / JP** switcher.
2.  **Hero Carousel:** The visual centerpiece, combining background imagery, premium tint layers, auto-progression, slide transitions, and overlay navigation.
3.  **About Section (`#about`):** Introduces the brand story, its heritage, and its dedication to organic Himalayan ingredients.
4.  **Benefits Section (`#benefits`):** A premium dark grid section highlight with cards mapping out raw values, lactose-free qualities, dental benefits, and long-lasting chewing utility.
5.  **Products Section (`#products`):** Interactive product showcases grouped with high-fidelity badges, size parameters, emojis, and descriptive titles.
6.  **How to Use (`#how-to`):** A simplified, step-by-step visual roadmap walking owners through the feeding, chewing, and microwaving process.
7.  **FAQ Accordions (`#faq`):** An elegant interactive question-and-answer library covering product shelf life, safety guidelines, and puppy suitability.
8.  **Contact & Retailers (`#contact`):** An high-impact dark card grid prompting shop owners to connect, customize copywriting, or map local retailer locator systems.

---

## ✍️ Customization Guide

Because the application is highly configurable, you can easily adapt this landing page to fit your exact brand styling and retail operations:

### 1. Modifying Colors & Styling
You can change the HSL colors under the Tailwind configuration block at the top of the file:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        stone: { ... },  // Custom warm gray palettes
        peak: { ... },   // Primary brand green palettes
        ember: '#c0692a', // Accent color
        cream: '#faf6ef' // Creamy base background
      }
    }
  }
}
```

### 2. Updating Bilingual Copy
Both English and Japanese copies are housed in matching tags side-by-side. To alter copy, simply modify the text inside the `data-lang="en"` and `data-lang="jp"` attributes:
```html
<h2>
  <span data-lang="en">Natural Dog Chew</span>
  <span data-lang="jp">無添加・自然派ドッグガム</span>
</h2>
```

### 3. Replacing Carousel Images
In `index.html`, the carousel slides possess base64 placeholder tags. You can replace the base64 code or absolute URLs directly on the `style="background-image:url('...')" ` inline attributes on each `.carousel-slide` element. If the image fails to load, the script will automatically substitute it with premium Unsplash dog/mountain fallbacks.

---

## ⚡ Performance & Optimization

*   **Fast Rendering:** Uses Tailwind CDN and local vanilla JS to eliminate bulky framework lifecycles and bundling overheads.
*   **Lazy Intersection Observers:** Page components are monitored cleanly by `IntersectionObserver` instances, keeping background processes free and rendering smooth 60fps animations.
*   **Responsive Graphics:** Heavy vector artwork and texturizers are loaded via compact, optimized inline SVGs to maintain crisp clarity on high-DPI displays.
