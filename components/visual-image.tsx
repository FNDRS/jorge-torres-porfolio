import React from "react"

interface Props {
  src: string
  alt: string
  style?: any
}

const VisualImage = ({ src, alt, style }: Props) => {
  return <img src={src} alt={alt} className={`w-full h-full rounded-lg object-cover ${style || ""}`} />
}

export default VisualImage
