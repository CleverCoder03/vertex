import Image from "next/image";
import Carousel from "./Carousel";
import { approach } from "../constant";

const Approach = () => {
  return (
    <section id="approach">
      <div className="border-t-2 py-5 lg:py-8 font-abc-marist md:flex ">
        <p className="uppercase md:w-1/2 text-lg md:text-[2.5vw] xl:text-[2.2vw]">Our Apporoach</p>
        <div className="md:w-1/2 text-lg md:text-[2.5vw] xl:text-[2.2vw] flex flex-col md:gap-3">
          <p className="indent-15 leading-none mt-4 text-justify">
          We’re constantly shaping the future of real estate through innovative
          solutions. Our core principles remain the same whether it’s
          self-storage, serviced offices, or strategic land.
        </p>
        <p className="leading-none mt-4 text-justify">
          Our success is built on delivering value to the consumer. We listen,
          adapt, and innovate to meet their needs. When they love our product,
          we generate sustainable income that drives value.
        </p>
        <p className="leading-none mt-4 text-justify">
          Capital is a responsibility; we manage it as if it were our own. We do
          so through a strong board, a consistent challenge to the acceptable
          norm, and a no-wrong-answers approach to debate.
        </p>
        </div>
      </div>
      <div className="border-b-2 py-5 lg:py-8">
        <Carousel images={approach} className={"aspect-[4/2.8]"} gallery={true} />
      </div>
    </section>
  );
};

export default Approach;
