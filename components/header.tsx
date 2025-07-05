import React from "react"

const Header = () => {
  return (
    <header className="flex justify-between text-white h-[108px] w-full z-10 absolute">
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
  )
}

export default Header
