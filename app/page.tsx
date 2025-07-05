import AboutMeSection from "@/components/about-me-section"
import { HeroSection } from "@/components/hero-section"
import SEO from "@/next-seo.config"

import { Metadata } from "next"

export const metadata: Metadata = {
  ...SEO,
}

export default function MainPage() {
  return (
    <main className={"font-inter w-full h-screen bg-[url('/assets/background_about_me_Web.png')] bg-cover bg-center"}>
      <HeroSection />
      <AboutMeSection />
    </main>
  )
}
