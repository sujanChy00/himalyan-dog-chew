import type { LinkProps } from "@tanstack/react-router";
import { DogFaceIcon } from "./components/icons/dog-face";
import { HappyTeethIcon } from "./components/icons/happy-teeth";
import { LeafIcon } from "./components/icons/leaf";
import { MuscleIcon } from "./components/icons/muscle";
import { TeethIcon } from "./components/icons/teeth";

export const footerLinks: { to: LinkProps["to"]; label: string }[] = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/products",
    label: "PRODUCTS",
  },
  {
    label: "Our Story",
    to: "/our-story",
  },
  {
    to: "/feeding-guides",
    label: "FEEDING GUIDE",
  },
  {
    to: "/our-story",
    label: "OUR STORY",
  },
  {
    to: "/faq",
    label: "FAQ",
  },
  {
    to: "/contact",
    label: "CONTACT",
  },
];

export const headerLinks: { to: LinkProps["to"]; label: string }[] = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/products",
    label: "Products",
  },
  {
    to: "/our-story",
    label: "Our Story",
  },
  {
    to: "/feeding-guides",
    label: "Feeding Guides",
  },
  {
    to: "/faq",
    label: "FAQ",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];

export const benefitsList = [
  {
    icon: <TeethIcon className="size-12" />,
    title: "Dental Health Support",
    description: "Chewing helps clean teeth and supports oral health.",
  },
  {
    icon: <DogFaceIcon className="size-12" />,
    title: "Long-Lasting",
    description: "Hard cheese texture keeps dogs engaged for hours.",
  },
  {
    icon: <MuscleIcon className="size-12" />,
    title: "High in Protein",
    description: "Made with over 65.8% crude protein.",
  },
  {
    icon: <HappyTeethIcon className="size-12" />,
    title: "Stress Relief",
    description: "Chewing helps reduce stress and promotes relaxation.",
  },
  {
    icon: <LeafIcon className="size-12" />,
    title: "100% Natural",
    description: "Made with natural ingredients you can trust.",
  },
];
