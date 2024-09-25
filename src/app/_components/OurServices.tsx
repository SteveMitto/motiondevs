import React from 'react'

export default function OurServices() {
  return (
    <div className="w-full p-20">
        <h2 className="text-5xl/normal font-extrabold w-[66%] bg-clip-text bg-[linear-gradient(180deg,rgba(4,113,166,1)0%,rgba(0,51,66,1)100%)] text-transparent">
          Exemplary service to our clients in order to improve your business
        </h2>
        <p className="w-9/12 text-slate-700 font-semibold text-xl/normal">
          To enrich your businesses, we ensure that we offer full modern
          software needs that elevate your business from one level to the next
          setting you ahead of your competitors in the market space.
        </p>

        <div className="flex my-7 gap-10 justify-between">
          <div className="w-4/12 flex flex-col gap-10">
            <div className="w-full p-7 bg-[#0471A6] flex flex-col gap-4 rounded-md">
              <div className="size-16 rounded-md bg-white"></div>
              <h3 className="text-3xl font-bold text-slate-100">
                Software Development
              </h3>
              <p className="text-sm text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="w-full p-7 bg-[#0471A6] flex flex-col gap-4 rounded-md">
              <div className="size-16 rounded-md bg-white"></div>
              <h3 className="text-3xl font-bold text-slate-100">
                Graphics Design ( UX/ UI)
              </h3>
              <p className="text-sm text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>

          <div className="w-4/12 p-7 h-auto justify-center  bg-[linear-gradient(180deg,rgba(4,113,166,1)0%,rgba(0,51,66,1)100%)] flex flex-col gap-4 rounded-md">
            <div className="size-16 rounded-md bg-white"></div>
            <h3 className="text-3xl font-bold text-slate-100">
            Social Media Marketing
            </h3>
            <p className="text-sm text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>


          <div className="w-4/12 flex flex-col gap-10">
            <div className="w-full p-7 bg-[#0471A6] flex flex-col gap-4 rounded-md">
              <div className="size-16 rounded-md bg-white"></div>
              <h3 className="text-3xl font-bold text-slate-100">
                Search Engine Optimization
              </h3>
              <p className="text-sm text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="w-full p-7 bg-[#0471A6] flex flex-col gap-4 rounded-md">
              <div className="size-16 rounded-md bg-white"></div>
              <h3 className="text-3xl font-bold text-slate-100">
              API  Development & Integration
              </h3>
              <p className="text-sm text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

