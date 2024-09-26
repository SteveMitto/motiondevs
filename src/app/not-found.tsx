import notFoundImage from "@/public/404.png"
import Image from "next/image"
export default function Custom404() {
    return (
        <div className="w-dvw h-dvh grid place-items-center text-black overflow-hidden">
            <div className="flex flex-col items-center">
                <Image src={notFoundImage.src} width={500} height={100} quality={100} alt="404"/>
                <h1 className="text-9xl text-black font-black">404</h1>
                <p className="text-xl text-slate-700">Oops! Sorry the was page Not Found</p>
            </div>
        </div>
    )

  }