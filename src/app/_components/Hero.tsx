'use client'
import Image from "next/image";
import bgImage from '@/public/bg.png'
import lis from '@/public/lispng.png'
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/16/solid";

function Hero() {
  return (
    <div className="">
        <div className="w-full px-4 text-center flex flex-col items-center justify-center gap-3">
          <h1 className="text-3xl/9 md:text-5xl/relaxed mt-9 w-12/12 md:w-9/12 font-bold text-slate-900 ">Transforming the way you do business through 
          <span className="bg-[rgb(8,163,239)] bg-[radial-gradient(circle, rgba(8,163,239,1) 0%, rgba(3,103,152,1) 50%, rgba(4,58,84,1) 100%)] bg-clip-text text-transparent">  innovative technology </span> 
           and 
          <span className="bg-[rgb(8,163,239)] bg-[radial-gradient(circle, rgba(8,163,239,1) 0%, rgba(3,103,152,1) 50%, rgba(4,58,84,1) 100%)] bg-clip-text text-transparent">  Digital Marketing</span> 
          </h1>
          <p className="md:w-1/2 font-sm text-slate-700 ">We designing and develop software that make it easy for businesses and organizations succeed and manage their data</p>
          <div className="flex gap-3">
            <button className="text-xs flex items-center gap-2 font-semibold bg-[rgb(8,163,239)] bg-[radial-gradient(circle, rgba(8,163,239,1) 0%, rgba(3,103,152,1) 50%, rgba(4,58,84,1) 100%)] text-white  px-20 py-2 rounded-md">
                <span>Let&apos;s Chat</span>
                <ChatBubbleOvalLeftEllipsisIcon className="size-4" />    
            </button>
          </div>
        </div>
        <div className="w-full relative md:-top-20  md:h-[120vh] grid place-items-center">
          <Image src={bgImage.src} fill objectFit="cover" alt="motion developers bg" className=" -z-10"/>
          <div className="p-10">
            <Image src={lis.src} width={700} height={500} alt="motion developers bg" className="relative -z-10"/>
          </div>
        </div>
      </div>
  )
}

export default Hero