export default function Home() {
  return (
    <div className="w-full bg-gradient-to-b from-blue/5 from from-50% via-blue/10  to-blue/20 h-full grid place-items-center">
      <div className=" text-center ">
          {/* <Image src={logo.src} width={50} height={50} alt="Motion Developers" className="" quality={100} /> */}
        {/* <p className="uppercase font-medium text-2xl text-neutral-50 tracking-[15px] sm:tracking-[25px] md:tracking-[50px] ">Coming Soon</p> */}
        {/* <h1 className="text-base uppercase bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text  leading-[1.2] tracking-widest sm:tracking-[10px] md:tracking-[20px] text-transparent sm:text-center sm:leading-[4.75rem] lg:text-left">Motion Developers</h1> */}
        <h1 className="text-5xl sm:text-center sm:text-[4rem] sm:leading-[4.75rem] lg:text-left  uppercase bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text  leading-[1.2] tracking-widest  text-transparent">Motion Developers</h1>
        <p className="mt-6 text-slate-400 max-w-3xl text-2xl leading-[2.5rem] tracking-tight sm:text-center"> We breath life to your ideas</p>
      </div>
    </div>
  );
}
