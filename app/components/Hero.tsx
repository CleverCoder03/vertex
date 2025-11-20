import Image from "next/image";
import Carousel from "./Carousel";
import { hero } from "../constant";

const Hero = () => {
  return (
    <div>
      {/* Hero Headline */}
      <div className="py-4 lg:py-8 uppercase font-abc-marist font-medium text-[11.5vw] md:text-[10.5vw] leading-none md:leading-[0.8] flex flex-col gap-14 md:gap-20 lg:gap-[12vw]">
        <div className="flex flex-col md:gap-3">
          <div className="md:flex md:justify-between">
            <h1>Investing</h1>
            <h1 className="text-right">In</h1>
          </div>
          <div>
            <h1 className="hidden md:block text-right">Tomorrow's</h1>
          </div>
        </div>
        <div>
          <h1 className="md:hidden">Tomorrow's</h1>
          <h1>spaces</h1>
        </div>
      </div>

      {/* Hero  Banner */}
      <div className="border-y-2 py-5 lg:py-8">
        <Carousel images={hero} className={"aspect-[4/2.5]"} />
      </div>

      {/* Short Para */}
      <div className="font-abc-marist md:text-lg tracking-wide py-5 lg:py-8">
        <p className="uppercase tracking-wide text-lg">Vertex</p>
        <p className="indent-15 leading-none mt-4 text-justify text-lg">
          At Vertex Real Estate, we create and invest in spaces where life
          unfolds. We focus on transforming operational assets into robust
          platforms that bring together people, properties, and infrastructure.
          We build resilient places that serve the evolving needs of our
          customers and capital.
        </p>
      </div>
    </div>
  );
};

export default Hero;
