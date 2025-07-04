import SEO from "@/next-seo.config"

import { Metadata } from "next"

export const metadata: Metadata = {
  ...SEO,
}

export default function MainPage() {
  return <main className="min-h-screen bg-black text-white relative overflow-hidden"></main>
}
