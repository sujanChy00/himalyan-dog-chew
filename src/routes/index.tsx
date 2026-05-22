import { About } from '#/components/about'
import { Benefits } from '#/components/benefits'
import { Contact } from '#/components/contact'
import { Faq } from '#/components/faq'
import { HeroSection } from '#/components/hero-section'
import { HowToUse } from '#/components/how-to-use'
import { PawDivider } from '#/components/paw-divider'
import { Products } from '#/components/products'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
  <main>
      <HeroSection />
      <PawDivider />
      <About />
      <Benefits />
      <Products />
      <HowToUse />
      <Faq />
      <Contact />
    </main>
  )
}
