'use client'
import Image from "next/image";
import bgImage from '@/public/bg.png'
import lis from '@/public/lispng.png'

function Hero() {
  return (
    <div className="">
        <div className="w-full text-center flex flex-col items-center justify-center gap-3">
          <h1 className="text-4xl w-7/12 font-bold text-black leading-relaxed">Transforming the way you do business through 
          <span className="bg-[rgb(8,163,239)] bg-[radial-gradient(circle, rgba(8,163,239,1) 0%, rgba(3,103,152,1) 50%, rgba(4,58,84,1) 100%)] bg-clip-text text-transparent">  innovative technology </span> 
           and 
          <span className="bg-[rgb(8,163,239)] bg-[radial-gradient(circle, rgba(8,163,239,1) 0%, rgba(3,103,152,1) 50%, rgba(4,58,84,1) 100%)] bg-clip-text text-transparent">  Digital Marketing</span> 
          </h1>
          <p className="w-1/2 font-sm text-slate-700 ">We designing and develop software that make it easy for businesses and organizations succeed and manage their data</p>
          <div className="flex gap-3">
            <button className="text-xs  bg-[rgb(8,163,239)] bg-[radial-gradient(circle, rgba(8,163,239,1) 0%, rgba(3,103,152,1) 50%, rgba(4,58,84,1) 100%)] text-white  px-20 py-1.5 rounded-md">Let&apos;s Chat</button>
            {/* <button className="text-xs  border-2 border-blue  text-blue px-20 py-1.5 rounded-md">Learn More</button> */}
          </div>
        </div>
        <div className="w-full h-[120vh] relative grid place-items-center">
          <Image src={bgImage.src} fill objectFit="cover" alt="motion developers bg" className=" -z-10"/>
          <Image src={lis.src} width={700} height={500} alt="motion developers bg" className="relative -z-10"/>
          
        </div>
      </div>
  )
}

export default Hero