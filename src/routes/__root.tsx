import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";

import { Footer } from "#/components/footer";
import { Header } from "#/components/header";
import { LanguageProvider } from "#/context/language";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Himalayan Dog Cheese | ヒマラヤチーズ",
      },
      {
        name: "description",
        content:
          "Premium Himalayan dog cheese chews crafted from natural ingredients in the Himalayas. Long-lasting, healthy dog treats for enrichment, chewing, and happy dogs. ヒマラヤチーズ",
      },
      {
        name: "keywords",
        content:
          "Himalayan Dog Cheese, Himalayan Cheese Chew, Himalayan Dog Chew, Dog Cheese Chew, Natural Dog Treats, Long Lasting Dog Chew, Hard Cheese Dog Treat, Himalayan Yak Chew, Yak Cheese Dog Treat, Natural Dog Chews, Healthy Dog Snacks, Dog Enrichment Treats, Premium Dog Chews, Himalayan Pet Products, Cheese Bone for Dogs, Durable Dog Treats, Natural Pet Treats, 犬用チーズ, ヒマラヤチーズ, 犬用ガム",
      },
      {
        property: "og:title",
        content: "Himalayan Dog Cheese | ヒマラヤチーズ",
      },
      {
        property: "og:description",
        content:
          "Crafted in the Himalayas using simple natural ingredients, Himalayan Dog Cheese delivers long-lasting chewing enjoyment and healthy enrichment for dogs of all sizes.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://himalayandogcheese.com",
      },
      {
        property: "og:image",
        content: "https://himalayandogcheese.com/og-image.jpg",
      },
      { name: "og:image:width", content: "1200" },
      { name: "og:image:height", content: "630" },
      {
        name: "twitter:image",
        content: "https://himalayandogcheese.com/og-image.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-cream text-stone-900 antialiased overflow-x-hidden">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
        <Scripts />
      </body>
    </html>
  );
}
