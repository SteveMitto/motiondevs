"use client";
import Image from "next/image";
import logo from "@/public/mainLogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    {
      name: "Service",
      path: "/services",
      links: [
        {
          id: 0,
          name: "Software Development",
          desc: "Desktop, mobile apps, web apps",
          path: "/services/software-development",
        },
        {
          id: 1,
          name: "Graphics Design",
          desc: "UX/UI Design, Posters, Logos, Banners",
          path: "/services/software-development",
        },
        {
          id: 2,
          name: "Online Marketing",
          desc: "Get leads from Facebook, Youtube & Instagram ads",
          path: "/services/software-development",
        },
        {
          id: 3,
          name: "SEO Optimization",
          desc: "Make your website more discoverable",
          path: "/services/software-development",
        },
        {
          id: 4,
          name: "API Development",
          desc: "We develope full functional APIs",
          path: "/services/software-development",
        },
      ],
    },
    { name: "Expertise", path: "/clients", links:[
        {
            id: 0,
            name: "Frontend Development",
            // desc: "Fronted softwares using",
            path: "/expertise/front-development",
        },
        {
            id: 1,
            name: "Backed Development",
            // desc: "Development using Python, NodeJs ",
            path: "/expertise/backend-development",
        },
        {
            id: 2,
            name: "API Development & Integration",
            // desc: "Developing full functional APIs and integrate them",
            path: "/expertise/api-development-and-integration",
        },
        {
            id: 3,
            name: "Fullstack Software Development",
            // desc: "Custom fullstack software",
            path: "/expertise/full-stack-software-development",
        },
        {
            id: 4,
            name: "Graphics Design",
            // desc: "Custom fullstack software",
            path: "/expertise/graphics-design",
        },
        {
            id: 5,
            name: "More",
            final: true,
            desc: "Cloud, Mailing, Hosting, Dev Ops, Database e.t.c",
            path: "/expertise",
        }
        
    ] },
    { name: "Our Work", path: "/our-work" },
    { name: "Industries", path: "/industries", links:[
        {
            id: 0,
            name: "E-commerce",
            desc: "Allowing brands to sell their products online",
            path: "/industries/online-selling-and-e-commerce",
        },
        {
            id: 1,
            name: "Edu Tech",
            desc: "Helping schools manage students data easily and E-learning",
            path: "/industries/educational-tech",
        },
        {
            id: 2,
            name: "Health tech",
            desc: "Softwares to help in patience data management and better health",
            path: "/industries/health-tech",
        },
        {
            id: 3,
            name: "Hotel & Tourism",
            desc: "Display your facilities and help your clients to easily\n book slots online ",
            path: "/industries/hotel-and-tourism",
        },
        {
            id: 4,
            name: "Transportation",
            desc: "Get your clients to pay and book tickets online",
            path: "/industries/transportation",
        },
        {
            id: 5,
            name: "Bring Your Own Idea (BYOI)",
            final:true,
            desc: "We are open to all ideas that you have. Feel free to reach out",
            path: "/industries/bring-your-own-idea-byoi",
        },
        
    ] },
    { name: "Contacts", path: "/contacts" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-whitesmoke/70 backdrop-blur-sm flex justify-between items-center  px-8 text-xs">
        <div className="flex gap-28">
            <Image
                src={logo.src}
                width={50}
                height={100}
                alt="Motion developers"
                className="my-2"
            />
            <div className="hidden md:flex items-center gap-16 text-slate-600 font-semibold">
                {links.map((link, index) =>
                link.links ? (
                    <Popover className="" key={index}>
                    <PopoverButton className="h-[50px] focus:outline-none data-[active]:text-blue data-[hover]:text-blue data-[focus]:outline-1 data-[focus]:outline-blue">
                        {link.name}
                        {pathname == link.path && (
                        <span className="absolute top-full h-1 w-9/12 rounded-full bg-blue"></span>
                        )}
                    </PopoverButton>
                        <PopoverPanel anchor="bottom" className="revival z-[100] shadow-md flex flex-col text-slate-900 text-xs bg-whitesmoke/90 backdrop-blur-md rounded p-2 border border-slate-400/10">
                        {link.links.map((item) => (
                            <>
                            {item?.final && <hr className="my-1" />}
                            <Link key={item.id} href={item.path} className="flex flex-col px-3 py-3 rounded-md hover:bg-blue/10 hover:text-blue">
                            <span className="font-bold">{item.name}</span>
                            {item.desc && <span className="text-xs font-medium text-neutral-500 mt-1"> {item.desc}</span>}
                            </Link>
                            </>
                        ))}
                        </PopoverPanel>
                    </Popover>
                ) : (
                    <Link key={index} href={link.path} className={`relative focus:outline-none hover:text-blue ${pathname == link.path && 'text-blue'}`}>
                        <span>{link.name}</span>
                        {pathname == link.path && (
                        <span className="hidden right-1/12 top-full h-0.5 w-6/12  rounded-full bg-blue"></span>
                        )}
                        </Link>
                )
                )}
            </div>
        </div>
      <button className="px-5 text-xs py-1 text-blue font-medium border border-blue rounded-md">
        Get in touch
      </button>
    </header>
  );
}
