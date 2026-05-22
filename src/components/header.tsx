import { Link, useLocation } from "@tanstack/react-router";
import { Container } from "./container";
import { ToggleLanguage } from "./toggle-language";

export const Header = () => {
  const location = useLocation();

  const activeClassName = "text-white bg-ember";
  const LinkClassName =
    "px-3 py-1.5 rounded-full hover:text-white hover:bg-ember transition-all";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-cream/85 border-b border-stone-200/70">
      <Container className="py-3 flex items-center gap-4 justify-between">
        <Link
          to={"/"}
          aria-label="Himalayan Dog Cheese home"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-peak-500 to-peak-700 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
            🐕
          </div>
          <div className="leading-tight">
            <h3 className="font-display font-bold text-stone-900 text-sm">
              Himalayan Dog Cheese
            </h3>
            <h6 className="text-stone-400 text-xs">ヒマラヤチーズ</h6>
          </div>
        </Link>

        <nav
          className="hidden md:flex items-center gap-1 text-sm font-body"
          aria-label="Sections"
        >
          <a
            href="#about"
            className={`${LinkClassName} ${location.hash === "about" && activeClassName}`}
          >
            About
          </a>
          <a
            href="#benefits"
            className={`${LinkClassName} ${
              location.hash === "benefits" && activeClassName
            }`}
          >
            Benefits
          </a>
          <a
            href="#products"
            className={`${LinkClassName} ${
              location.hash === "products" && activeClassName
            }`}
          >
            Products
          </a>
          <a
            href="#how-to"
            className={`${LinkClassName} ${
              location.hash === "how-to" && activeClassName
            }`}
          >
            How to Use
          </a>
          <a
            href="#faq"
            className={`${LinkClassName} ${
              location.hash === "faq" && activeClassName
            }`}
          >
            FAQ
          </a>
          <a
            href="#contact"
            className={`${LinkClassName} ${
              location.hash === "contact" && activeClassName
            }`}
          >
            Contact
          </a>
        </nav>
        <ToggleLanguage />
      </Container>
    </header>
  );
};
