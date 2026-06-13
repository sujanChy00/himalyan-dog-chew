import { useLanguage } from "#/context/language";
import { Package } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { Container } from "./container";

export const FeaturedProducts = ({ className }: { className?: string }) => {
  const { t } = useLanguage();

  const products = [
    {
      title: t("product_title"),
      brandColor: "#FF9900",
      badge: "Amazon",
      icon: <Package className="size-8 text-amber-600" />,
      href: "https://amzn.asia/d/03JGcivk",
    },
    {
      title: t("product_title"),
      brandColor: "#DA3E50",
      badge: "Mercari",
      icon: <Package className="size-8 text-amber-600" />,
      href: "https://jp.mercari.com/shops/product/2JMRfcvBmPEJ3osb4VEc9w?utm_source=ios&source_location=share&utm_medium=share",
    },
    {
      title: t("product_title"),
      brandColor: "#323091",
      badge: "Tetoteto",
      icon: <Package className="size-8 text-amber-600" />,
      href: "https://tetoteto.co.jp/item/dog-chew-chhurpi-a2877725ufd",
    },
  ];

  return (
    <section id="products" className={twMerge("py-16 sm:py-24", className)}>
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-bold tracking-widest text-creamy-text uppercase bg-creamy/30 px-3 py-1 rounded-full">
            {t("menu_products")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            {t("products_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
          {products.map((p, i) => (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              data-card="product"
              className="bg-brand/10 border border-brand/20 hover:border-creamy-text/50 hover:bg-brand/20 transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white rounded-2xl shadow-xs">
                    {p.icon}
                  </div>
                  <span
                    style={{ backgroundColor: p.brandColor }}
                    className={`text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}
                  >
                    {p.badge}
                  </span>
                </div>

                <h3 className="sm:text-4xl text-2xl leading-relaxed font-display font-bold text-gray-900 mb-2">
                  {p.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};
