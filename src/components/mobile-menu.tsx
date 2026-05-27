import { useLanguage } from "#/context/language";
import { headerLinks } from "#/constants";
import { Link } from "@tanstack/react-router";
import { CloseIcon } from "./icons/close";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { t } = useLanguage();

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 w-full bg-brand p-6 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <section className="flex items-center justify-between">
          <img src="/logo.webp" alt="logo" className="h-10 w-auto" />

          <button onClick={onClose} className="rounded-md p-2">
            <CloseIcon className="size-5" />
          </button>
        </section>
        <section className="py-10">
          <ul>
            {headerLinks.map((link) => (
              <li
                key={link.to}
                className="border-b border-b-creamy last:border-none"
              >
                <Link
                  onClick={() => {
                    onClose();
                  }}
                  activeProps={{
                    className: "!font-bold text-creamy-text!",
                  }}
                  to={link.to}
                  className="block py-2 text-gray-600"
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <button className="rounded-lg bg-dark px-6 py-2 w-full text-secondary">
          {t("menu_shop_now")}
        </button>
      </div>
      <div
        className={`fixed inset-0 z-40 bg-white/5 backdrop-blur-2xl transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
    </>
  );
};
