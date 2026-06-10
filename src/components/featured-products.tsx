import { useLanguage } from "#/context/language";
import { Box, Layers, Package, Sparkles } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { Container } from "./container";

export const FeaturedProducts = ({ className }: { className?: string }) => {
  const { t } = useLanguage();

  const products = [
    {
      title: t("product_1_title"),
      desc: t("product_1_desc"),
      size: "S",
      badge: "S-Size",
      icon: <Sparkles className="size-8 text-amber-600" />,
    },
    {
      title: t("product_2_title"),
      desc: t("product_2_desc"),
      size: "M",
      badge: "M-Size",
      icon: <Box className="size-8 text-amber-600" />,
    },
    {
      title: t("product_3_title"),
      desc: t("product_3_desc"),
      size: "L",
      badge: "L-Size",
      icon: <Package className="size-8 text-amber-600" />,
    },
    {
      title: t("product_4_title"),
      desc: t("product_4_desc"),
      size: "Bundle",
      badge: "Value Pack",
      icon: <Layers className="size-8 text-amber-600" />,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              data-card="product"
              className="bg-brand/10 border border-brand/20 hover:border-creamy-text/50 hover:bg-brand/20 transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white rounded-2xl shadow-xs">
                    {p.icon}
                  </div>
                  <span className="bg-dark text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-medium mb-6">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
