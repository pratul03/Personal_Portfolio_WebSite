import Image from "next/image";
import bg from "../../../../public/background/about-background.png";

import RenderModel from "../../../components/RenderModels";
// import HatModel from "@/components/model/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const HatModel = dynamic(() => import("@/components/model/HatModel"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-3/4 xs:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2  -translate-x-1/2">
          <h1 className="font-bold text-6xl lg:text-8xl sm:text-7xl xs:text-5xl text-accent">
            Pratul Makar
          </h1>
          <p className="font-light text-foreground text-ls">
            Nice to meet you.
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
