"use client"

import BrandIcon from "@/components/brand-icon"

const UxUiPage = () => {
  return (
    <section className="w-full px-5 flex justify-center items-center flex-col mt-40" id={"ui-ux-page"}>
      <BrandIcon />
      <div className="w-full flex justify-between flex-row items-center mt-30">
        <h2 className="font-inter font-bold text-[30px] leading-[100%] tracking-[0] text-right">MUSE | WEBSITE DESIGN</h2>
        <p className="font-inter font-normal text-[16px] leading-[100%] tracking-[0] text-[#FF0000]">
          <a href="https://www.behance.net/jorgetorres46" target="_blank">
            See on Behance
          </a>
        </p>
      </div>
      <img src="/assets/muse_behance.png" alt="Muse Behance" className="mt-10" />
      <img src="/assets/muse_behance_02.png" alt="Muse Behance 02" className="mt-10" />
      <img src="/assets/muse_behance_03.png" alt="Muse Behance 03" className="mt-10" />
      <img src="/assets/muse_behance_04.png" alt="Muse Behance 04" className="mt-10 mb-30" />
    </section>
  )
}

export default UxUiPage
