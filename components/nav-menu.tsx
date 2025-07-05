"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavMenu() {
  const pathname = usePathname()

  const menuItems = [
    { label: "About me", href: "/" },
    { label: "Visuals", href: "/visuals" },
    { label: "UX | UI", href: "/ux-ui" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <div className="w-full absolute top-[700px] left-0 flex justify-center text-[16px] font-light z-10">
      <nav className="bg-white/30 backdrop-blur-lg rounded-full p-1 flex gap-x-2 justify-between shadow-md">
        {menuItems.map(({ label, href }) => {
          const isActive = pathname === href
          return (
            <Link
              key={label}
              href={href}
              className={`px-4 w-[105px] flex justify-center py-2 rounded-full font-medium transition ${
                isActive ? "bg-white text-black" : "text-black/80 hover:bg-white/50 hover:text-black"
              }`}>
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="absolute right-0 h-full w-[200px] pr-6">
        <div className="flex justify-center items-center h-full flex-row gap-y-2">
          <p className="font-inter font-medium text-[12px] leading-[100%] tracking-[0]">Develop by</p>
          <img src="/assets/fndrs-logo.png" alt="FNDRS Logo" className="w-[100px] h-[100px]" />
        </div>
      </div>
    </div>
  )
}
