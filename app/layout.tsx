import "@/styles/tailwind.css"

import NavMenu from "@/components/nav-menu"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-full h-screen border-black border-8 bg-gray-600 text-white relative">
        <header className="relative flex justify-between text-white h-[108px] w-full">
          <div className="h-[55px] flex justify-start w-2/3 pl-4">
            <h1 className="font-inter font-bold text-[35px]">Jorge Torres</h1>
          </div>
          <img src="/assets/header-shape.svg" alt="Header Shape" />
          <div className="h-[45px] absolute right-0 top-0 w-1/3 text-[16px]  text-red-600 flex items-center justify-evenly">
            <a href="https://www.instagram.com/jorgeetorresx/">Instagram</a>
            <a href="#">Behance</a>
            <a href="https://www.linkedin.com/in/jorge-torres-5396662a3/">LinkedIn</a>
          </div>
        </header>
        {children}
        <NavMenu />
      </body>
    </html>
  )
}
