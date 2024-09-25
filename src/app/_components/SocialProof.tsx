import React from "react";
import appleMall from "@/public/Clients/appleMall.png";
import internPlug from "@/public/Clients/InternPlug.png";
import magdas from "@/public/Clients/Magdas.png";
import pacificMedia from "@/public/Clients/pacificMedia.png";
import theDesign from "@/public/Clients/thedesign24.png";
import Image from "next/image";

export default function SocialProof() {
  const clients = [
    {id:0, name: "Apple Mall", logo:appleMall},
    {id:3, name: "Pacific Media", logo:pacificMedia, width:200},
    {id:1, name: "Intern Plug", logo:internPlug},
    {id:2, name: "Magdas Home Creation", logo:magdas},
    {id:4, name: "The Design 24", logo:theDesign, width:200},
  ]
  return (
    <div className="w-full px-5 text-center">
      <h3 className="text-slate-900 text-xs md:text-base font-medium">Part of the client&apos;s who delight in our work</h3>
      <div className="flex items-center my-4 md:my-8 gap-4 justify-center">
        {
            clients.map( client => (
                <div key={client.id} className="flex justify-center min-w-[16.666667%]">
                    <Image src={client.logo.src} width={client.width ? client.width : 100} height={100} alt={client.name} className="" />
                </div>
            ))
        }
      </div>
      <br />
    </div>
  );
}
