"use client"

import React from "react"

const ServicesPage = () => {
  return (
    <>
      <section
        className="w-full
        h-screen
        flex
        flex-col
        justify-center
        items-center
        gap-20"
        id={"services-intro"}>
        <div className="w-[1300px] flex flex-col top-[-60px] relative">
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-inter font-bold text-[75px] leading-[100%] tracking-[0] text-left">
              CONTENT CREATION | FILMMAKER
            </h1>
            <img src="/assets/line_10.png" alt="Line" />
          </div>
          <div className="flex flex-row items-center justify-between">
            <img src="/assets/line_10.png" alt="Line" />
            <h1 className="font-inter font-bold text-[75px] leading-[100%] tracking-[0] text-right">PRODUCT DESIGN | UX UI</h1>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-[30px] leading-[100%] tracking-[0] text-left my-4 font-redhat">MY OWN VISION</h2>
        <div className="col-span-3 text-red-600 relative bg-[url('/assets/IMG_18.png')] p-2 bg-cover bg-center h-[996px] flex justify-center items-center">
          <h2 className="z-10 font-bold text-[80px] text-center font-redhat">
            THE WORLD THROUGH
            <br />
            MY EYES
          </h2>
          <p className="absolute top-6 left-6 text-[50px] z-10 font-redhat">Explore</p>
          <p className="absolute top-6 left-1/2 -translate-x-1/2 text-[50px] font-redhat z-10">Discover</p>
          <p className="absolute top-6 right-6 text-[50px] z-10 font-redhat">Create</p>
          <p className="absolute bottom-6 left-6 text-[35px] z-10 font-redhat">
            <i>
              Creating visuals that connect with
              <br />
              the heart and convey genuine
              <br />
              emotion.
            </i>
          </p>
          <p className="absolute bottom-6 right-6 text-[35px] z-10 font-redhat">
            <i>1% better every day</i>
          </p>
          <p className="absolute bottom-[350px] right-6 text-[35px] z-10 text-right font-redhat">
            <i>
              Weaving ideas with souls who long
              <br /> to transform the world.
            </i>
          </p>
        </div>
        <div className="h-[345px] flex">
          <div className="bg-[url('/assets/IMG_19.png')] w-1/2"></div>
          <div className="bg-[url('/assets/IMG_20.png')] w-1/2"></div>
          <p className="absolute bottom-6 left-6 text-[50px] z-10 text-red-600 font-redhat">Passion</p>
          <p className="absolute bottom-6 left-[50%] translate-x-[-50%] text-[50px] z-10 text-red-600 font-redhat">Discipline</p>
          <p className="absolute bottom-6 right-6 text-[50px] z-10 text-red-600 font-redhat">Purpose</p>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
