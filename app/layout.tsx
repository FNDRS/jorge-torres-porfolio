import "@/styles/tailwind.css"

import Header from "@/components/header"
import NavMenu from "@/components/nav-menu"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-full border-black border-8 bg-black text-white relative">
        <Header />
        {children}
        <NavMenu />
      </body>
    </html>
  )
}
