import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({ 
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
 })

export const metadata: Metadata = {
  title: "Motion Developers",
  description: "We breath life to your ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={`${poppins.className} w-dvw max-w-[100dvw] h-dvh overflow-x-hidden`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
