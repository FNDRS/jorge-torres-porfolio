"use client"

import VisualImage from "@/components/visual-image"

import React from "react"

const VisualsPage = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-4 auto-rows-[120px] absolute top-0 left-0">
      <VisualImage src="/assets/IMG_1.png" alt="IMG_3587" style={"col-span-2 row-span-4"} />
      <VisualImage src="/assets/IMG_2.png" alt="IMG_2" style={"col-span-2 row-span-2"} />
      <VisualImage src="/assets/IMG_3.png" alt="IMG_3" style={"col-span-2 row-span-3"} />
      <VisualImage src="/assets/IMG_4.png" alt="IMG_4" style={"col-span-3 row-span-5"} />
      <VisualImage src="/assets/IMG_5.png" alt="IMG_5" style={"row-start-5 col-span-3 row-span-3"} />
      <VisualImage src="/assets/IMG_6.png" alt="IMG_6" style={"row-start-3 col-start-3 col-span-1 row-span-2"} />
      <VisualImage src="/assets/IMG_7.png" alt="IMG_7" style={"row-start-3 col-start-4 col-span-1 row-span-2"} />
      <VisualImage src="/assets/IMG_8.png" alt="IMG_8" style={"row-start-5 col-start-4 col-span-1 row-span-3"} />
      <VisualImage src="/assets/IMG_9.png" alt="IMG_9" style={"row-start-4 col-start-5 col-span-2 row-span-4"} />
      <VisualImage src="/assets/IMG_10.png" alt="IMG_10" style={"row-start-6 col-start-7 col-span-3 row-span-5"} />
      <VisualImage src="/assets/IMG_11.png" alt="IMG_11" style={"row-start-8 col-start-1 col-span-2 row-span-5"} />
      <VisualImage src="/assets/IMG_12.png" alt="IMG_12" style={"row-start-8 col-start-3 col-span-2 row-span-2"} />
      <VisualImage src="/assets/IMG_13.png" alt="IMG_13" style={"row-start-8 col-start-5 col-span-2 row-span-5"} />
      <VisualImage src="/assets/IMG_14.png" alt="IMG_14" style={"row-start-10 col-start-3 col-span-1 row-span-3"} />
      <VisualImage src="/assets/IMG_15.png" alt="IMG_15" style={"row-start-10 col-start-4 col-span-1 row-span-3"} />
      <VisualImage src="/assets/IMG_16.png" alt="IMG_16" style={"row-start-11 col-start-7 col-span-3 row-span-2"} />
    </div>
  )
}

export default VisualsPage
