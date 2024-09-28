
import React from "react";
import { FaBullhorn } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { MdDesignServices } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";
import * as motion from "framer-motion/client"

export default function OurServices() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y:0 }}
      viewport={{ once: true }}
      transition={{ease: "linear",duration: .7,}}
      className=" relative w-full p-5 md:p-20"
    >
      <h2 className="text-3xl/normal md:text-5xl/normal font-extrabold md:w-[66%] bg-clip-text bg-[linear-gradient(180deg,rgba(4,113,166,1)0%,rgba(0,51,66,1)100%)] text-transparent">
        Exemplary service to our clients in order to improve your business
      </h2>
      <p className="md:w-9/12 text-slate-700 font-semibold text-base md:text-xl/normal">
        To enrich your businesses, we ensure that we offer full modern software
        needs that elevate your business from one level to the next setting you
        ahead of your competitors in the market space.
      </p>
      <RiSettings5Fill className="hidden md:block absolute right-12 top-12 text-[20rem] text-blue/15 rotate-12 " />
      <div className="flex flex-col lg:flex-row my-7 gap-5 md:gap-10 justify-between overflow-hidden">
        <div className="w-full lg:w-4/12 flex flex-col sm:flex-row lg:flex-col sm:justify-between md:justify-normal gap-5 md:gap-10">
          <div className="relative w-full sm:w-[48%] md:w-full p-5 md:p-7 bg-[#0471A6] flex items-center md:items-start flex-col gap-4 rounded-md">
            <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-4 w-full">
              <div className="h-10 w-10 md:h-16  md:w-16 rounded-md bg-whitesmoke grid place-items-center">
                <VscVscode size="50%" className="w-[80%] text-blue" />
              </div>
              <h3 className="text-xl sm:text-xl md:text-3xl font-bold text-slate-100">
                Software Development
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              We bring your ideas to life by building real world software which
              can be either a Web, mobile or desktop applications.
            </p>
          </div>

          <div className="w-full sm:w-[48%] md:w-full p-5 md:p-7 bg-[#0471A6] flex items-center md:items-start flex-col gap-4 rounded-md">
            <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-4 w-full">
              <div className="h-10 w-10 md:h-16  md:w-16 rounded-md bg-whitesmoke grid place-items-center">
                <MdDesignServices size="50%" className="w-[80%] text-blue" />
              </div>
              <h3 className="text-xl sm:text-xl md:text-3xl font-bold text-slate-100">
                Graphics Design{" "}
                <span className="hidden md:block">( UX/ UI)</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nuncvulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>

        <div className="w-full  lg:w-4/12 p-7 h-auto justify-center  bg-[linear-gradient(180deg,rgba(255,124,0,1)0%,rgba(66,32,0,1)100%)] flex flex-col gap-4 rounded-md">
          <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-4 w-full">
            <div className="h-10 w-10 md:h-16  md:w-16 rounded-md bg-whitesmoke grid place-items-center">
              <FaBullhorn
                size="40%"
                className="w-[80%] -rotate-12 text-[rgba(255,124,0)]"
              />
            </div>
            <h3 className="text-xl sm:text-xl md:text-3xl font-bold text-slate-100">
              Social Media Marketing
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        <div className="w-full  lg:w-4/12 flex flex-col sm:flex-row lg:flex-col sm:justify-between md:justify-normal gap-5 md:gap-10">
          <div className="w-full sm:w-[48%] md:w-full p-5 md:p-7 bg-[#0471A6] flex items-center md:items-start flex-col gap-4 rounded-md">
            <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-4 w-full">
              <div className="h-10 w-10 md:h-16  md:w-16 rounded-md bg-whitesmoke grid place-items-center">
                <TbWorldSearch size="50%" className="w-[80%] text-blue" />
              </div>
              <h3 className="text-xl sm:text-xl md:text-3xl font-bold text-slate-100">
                Search Engine Optimization
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="w-full sm:w-[48%] md:w-full p-5 md:p-7 bg-[#0471A6] flex items-center md:items-start flex-col gap-4 rounded-md">
            <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-4 w-full">
              <div className="h-10 w-10 md:h-16  md:w-16 rounded-md bg-whitesmoke grid place-items-center">
                <PiPlugsConnectedBold
                  size="50%"
                  className="w-[80%] text-blue"
                />
              </div>
              <h3 className="text-xl sm:text-xl md:text-3xl font-bold text-slate-100">
                API Development & Integration
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
