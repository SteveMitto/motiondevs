"use client";
import Image from "next/image";
import logo from "@/public/mainLogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

export default function Header() {
  const pathname = usePathname();
  toast.success(pathname)
  const links = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/services" },
    { name: "Clients", path: "/clients" },
    { name: "Our Work", path: "/our-work" },
    { name: "Pricing", path: "/pricing" },
  ];
  return (
    <header className="flex justify-between items-center py-3 px-8 text-xs">
      <Image src={logo.src} width={70} height={100} alt="Motion developers" />
      <div className="flex gap-9 text-slate-600 font-semibold">
        {links.map((link, index) => (
          <Link href="#"  key={index} className={`flex flex-col items-center gap-1 ${pathname == link.path ? "text-blue" : ""}`}>
            <p>{link.name}</p>
            {pathname == link.path && <span className="size-1 rounded-full bg-blue"></span>}
            </Link>
        ))}
      </div>
      <button className="px-3 py-1 text-blue font-semibold border-2 border-blue rounded-md">Get in touch</button>
    </header>
  );
}
