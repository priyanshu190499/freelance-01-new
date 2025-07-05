import Features from "../main/Features";
import Partners from "../main/Partners";
import { partnersData } from "../../lib/staticData";
import { WavyBackground } from "../main/WavyBackground";

export default function WavyBackgroundDemo() {
  return (
    <WavyBackground className="w-full   max-w-7xl mx-auto mt-48">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-white font-medium text-start">
        Make every second count
      </p>
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-white font-medium text-start">
        with Pro+ edits
      </p>
      <p className="mt-6 text-base sm:text-lg md:text-xl text-white font-normal text-start">
        Effortlessly elevate your visuals with our Pro+ editing,
      </p>
      <p className="text-base sm:text-lg md:text-xl text-white font-normal text-start">
         designed for creators and agencies
      </p>
      <div className=" w-full max-w-2xl">
        <div className="my-12">
          <Features data={"Schedule a Call"} />
        </div>
        <div className="py-4 border border-t-bl">
          <Partners marqueeData={partnersData} />
        </div>
      </div>
      <div className=" h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
    </WavyBackground>
  );
}
