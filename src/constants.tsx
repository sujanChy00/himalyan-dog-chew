import type { LinkProps } from "@tanstack/react-router";
import type { DictionaryKey } from "./context/language/types";
import { DogFaceIcon } from "./components/icons/dog-face";
import { HappyTeethIcon } from "./components/icons/happy-teeth";
import { LeafIcon } from "./components/icons/leaf";
import { MuscleIcon } from "./components/icons/muscle";
import { TeethIcon } from "./components/icons/teeth";

export const footerLinks: { to: LinkProps["to"]; labelKey: DictionaryKey; label: string }[] = [
  {
    to: "/",
    labelKey: "menu_home",
    label: "Home",
  },
  {
    to: "/products",
    labelKey: "menu_products",
    label: "PRODUCTS",
  },
  {
    labelKey: "menu_our_story",
    label: "Our Story",
    to: "/our-story",
  },
  {
    to: "/feeding-guides",
    labelKey: "menu_feeding_guide",
    label: "FEEDING GUIDE",
  },
  {
    to: "/our-story",
    labelKey: "menu_our_story",
    label: "OUR STORY",
  },
  {
    to: "/faq",
    labelKey: "menu_faq",
    label: "FAQ",
  },
  {
    to: "/contact",
    labelKey: "menu_contact",
    label: "CONTACT",
  },
];

export const headerLinks: { to: LinkProps["to"]; labelKey: DictionaryKey; label: string }[] = [
  {
    to: "/",
    labelKey: "menu_home",
    label: "Home",
  },
  {
    to: "/products",
    labelKey: "menu_products",
    label: "Products",
  },
  {
    to: "/our-story",
    labelKey: "menu_our_story",
    label: "Our Story",
  },
  {
    to: "/feeding-guides",
    labelKey: "menu_feeding_guide",
    label: "Feeding Guides",
  },
  {
    to: "/faq",
    labelKey: "menu_faq",
    label: "FAQ",
  },
  {
    to: "/contact",
    labelKey: "menu_contact",
    label: "Contact",
  },
];


export const benefitsList: { icon: React.ReactNode; titleKey: DictionaryKey; descKey: DictionaryKey; title: string; description: string }[] = [
  {
    icon: <TeethIcon className="size-12" />,
    titleKey: "benefit_1_title",
    descKey: "benefit_1_desc",
    title: "Dental Health Support",
    description: "Chewing helps clean teeth and supports oral health.",
  },
  {
    icon: <DogFaceIcon className="size-12" />,
    titleKey: "benefit_2_title",
    descKey: "benefit_2_desc",
    title: "Long-Lasting",
    description: "Hard cheese texture keeps dogs engaged for hours.",
  },
  {
    icon: <MuscleIcon className="size-12" />,
    titleKey: "benefit_3_title",
    descKey: "benefit_3_desc",
    title: "High in Protein",
    description: "Made with over 65.8% crude protein.",
  },
  {
    icon: <HappyTeethIcon className="size-12" />,
    titleKey: "benefit_4_title",
    descKey: "benefit_4_desc",
    title: "Stress Relief",
    description: "Chewing helps reduce stress and promotes relaxation.",
  },
  {
    icon: <LeafIcon className="size-12" />,
    titleKey: "benefit_5_title",
    descKey: "benefit_5_desc",
    title: "100% Natural",
    description: "Made with natural ingredients you can trust.",
  },
];
