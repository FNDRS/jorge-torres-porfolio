import React from "react"

const BrandIntro = () => {
  return (
    <div
      className="w-[1342px] h-[242px]
        bg-[#232425]
        rounded-4xl
        flex
        flex-row
        justify-between
        items-center
        p-12">
      <p className="font-inter font-normal text-[16px] leading-[100%] tracking-[0]">
        In 2024, I founded FOUNDERS alongside two partners — a company
        <br />
        focused on developing websites and software systems.
        <br />
        <br />
        Our driving force is excellence.
      </p>
      <img src="/assets/logo-transparente.png" alt="FNDRS logo transparente" className="ml-24 w-[500px] h-fit" />
      <div className="flex justify-between items-center flex-col h-full">
        <img src="/assets/web-icon-3.png" alt="Web icon" className="w-[32px] h-fit" />
        <img src="/assets/instagram-logo.png" alt="Instagram icon" className="w-[32px] h-fit" />
        <img src="/assets/linkedin-logo.png" alt="LinkedIn icon" className="w-[32px] h-fit" />
      </div>
    </div>
  )
}

export default BrandIntro
