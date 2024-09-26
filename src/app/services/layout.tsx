import type { Metadata } from "next";
import Header from "../_components/Header";

export const metadata: Metadata = {
  title: "Services",
  description: "We breath life to your ideas",
};

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full ">
        <Header />
        <div className="p-4">
        {children}
        </div>
    </div>
  );
}
