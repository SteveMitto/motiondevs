import type { Metadata } from "next";
import Header from "../_components/Header";

export const metadata: Metadata = {
  title: "Services",
  description: "We breath life to your ideas",
};

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full p-4">
        <Header />
        {children}
    </div>
  );
}
