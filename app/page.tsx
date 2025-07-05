import AboutMeSection from "@/components/about-me-section"
import { HeroSection } from "@/components/hero-section"
import SEO from "@/next-seo.config"

import { Metadata } from "next"

export const metadata: Metadata = {
  ...SEO,
}

export default function MainPage() {
  return (
    <main className="font-inter">
      <HeroSection />
      <AboutMeSection />
    </main>
  )
}
