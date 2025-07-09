import "@/styles/tailwind.css"

import Header from "@/components/header"
import NavMenu from "@/components/nav-menu"

import { Red_Hat_Display } from "next/font/google"

const redhat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-redhat",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={redhat.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <title>Jorge Torres | Portfolio</title>
      </head>
      <body className="w-full border-black border-[10px] bg-black text-white relative ">
        <Header />
        {children}
        <NavMenu />
      </body>
    </html>
  )
}
