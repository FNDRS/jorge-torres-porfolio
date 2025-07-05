export function HeroSection() {
  return (
    <section className="w-full flex items-center justify-center" id="hero-section" style={{ height: "calc(100vh - 122px)" }}>
      <div className="h-[100px] w-[1160px] flex justify-around items-center mb-[200px]">
        <div className="flex flex-row justify-end items-start w-2/3 pr-4">
          <h1 className="font-inter font-bold text-[80px] leading-[100%] tracking-[0]">Jorge Torres</h1>
        </div>
        <div className="border-[1px] h-[120px]"></div>
        <div className="flex flex-col flex-1/2 h-[50px] justify-between pl-4">
          <p className="font-inter font-normal text-[16px] leading-[100%] tracking-[0]">Creative Director | Content Creator</p>
          <p className="font-inter font-normal text-[16px] leading-[100%] tracking-[0]">San Pedro Sula, Honduras</p>
        </div>
      </div>
    </section>
  )
}
