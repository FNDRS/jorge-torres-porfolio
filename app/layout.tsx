import "@/styles/tailwind.css"

import Header from "@/components/header"
import NavMenu from "@/components/nav-menu"

import { Inter, Red_Hat_Display } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
})

const redhat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-redhat",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${redhat.variable}`}>
      <head>
        <title>Jorge Torres | Portfolio</title>
      </head>
      <body className="w-full border-black border-[10px] bg-black text-white relative">
        <Header />
        {children}
        <NavMenu />
      </body>
    </html>
  )
}
