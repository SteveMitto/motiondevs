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
        {/* <h1 className=" bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text   text-transparent">Motion Developers</h1> */}
          <span className="text-blue ">  innovative technology </span> 
          {/* <span className="bg-clip-text bg-[linear-gradient(90deg,hsla(186,100%,44%,1)0%,hsla(186,100%,23%,1)100%)] text-transparent ">  innovative technology </span>  */}
           and 
          <span className="text-blue">  social media marketing</span> 
          {/* <span className="bg-[rgb(8,163,239)] bg-clip-text bg-[linear-gradient(90deg,hsla(186,100%,44%,1)0%,hsla(186,100%,23%,1)100%)]  text-transparent">  social media marketing</span>  */}
          </h1>
          <p className="md:w-1/2 font-sm text-slate-700 ">We designing and develop software that make it easy for businesses and organizations succeed and manage their data</p>
          <div className="flex gap-3">
            <button className="text-xs flex items-center gap-2 font-semibold bg-blue text-white  px-20 py-2 rounded-md">
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