import React from "react"

const AboutMeSection = () => {
  return (
    <section className="w-full bg-black h-screen flex justify-center items-center" id="about-me">
      <div className="w-[1100px] flex flex-row justify-between">
        <img src="/assets/jorge-photo.png" alt="Jorge Photo" className="w-[294px] h-[294px]" />
        <div className="w-[634px] flex flex-col gap-10">
          <h2 className="font-inter font-bold text-[30px] leading-[100%] tracking-[0]">ABOUT ME</h2>
          <div>
            <p className="font-inter font-normal text-[16px] leading-[100%] tracking-[0] max-w-[634px]">
              Passionate about storytelling and building purpose-driven brands. <br />
              <br />
              For over three years, I have worked with high-standard brands, helping them stand <br />
              out in the market through tailored strategies, teamwork, and a constant drive for <br /> innovation.
              <br />
              <br />
              My expertise lies in <span className="text-red-600">Creative Direction, Content Creation, and Product Design</span>—
              <br />
              three fundamental pillars for a powerful digital presence.
            </p>
          </div>
          <div className="flex flex-row justify-end">
            <div className="w-10/12 grid grid-cols-3 gap-y-6 text-center text-red-600 text-[16px] font-normal mt-14">
              <div>Premiere Pro</div>
              <div>Photoshop</div>
              <div>Illustrator</div>
              <div>After Effects</div>
              <div>Maya 3D</div>
              <div>Figma</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
