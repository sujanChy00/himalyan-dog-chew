import { headerLinks } from "#/constants";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Container } from "./container";

export const Header = () => {
  const [hasBorder, setHasBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const canScrollEnough =
        document.documentElement.scrollHeight > window.innerHeight + 500;

      if (!canScrollEnough) {
        setHasBorder(false);
        return;
      }

      setHasBorder(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-brand border-b-brand border-b transition-all duration-300 ${
        hasBorder ? "border-b-creamy" : ""
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link to="/">
          <img src="/logo.webp" alt="logo" />
        </Link>

        <nav className="flex items-center gap-4">
          <ul className="flex gap-4">
            {headerLinks.map((link) => (
              <li key={link.to}>
                <Link
                  activeProps={{
                    className:
                      "underline underline-offset-4 font-medium decoration-2",
                  }}
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="rounded-lg bg-dark px-6 py-2 text-secondary">
            🛒 Shop Now
          </button>
        </nav>
      </Container>
    </header>
  );
};
