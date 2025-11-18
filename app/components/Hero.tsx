import Image from "next/image";

const Hero = () => {
  return (
    <div>

      {/* Hero Headline */}
      <div className="py-4 lg:py-8 uppercase font-abc-marist font-medium text-[11.5vw] leading-none flex flex-col gap-14">
        <div className="flex flex-col">
          <h1>Investing</h1>
          <h1 className="text-right">In</h1>
        </div>
        <div>
          <h1>Tomorrow's</h1>
          <h1>spaces</h1>
        </div>
      </div>

      {/* Hero  Banner */}
      <div className="border-y-2 py-5 lg:py-8">
        <div className="relative aspect-[4/2.5]">
          <Image src="/hero.avif" alt="Hero banner" fill />
        </div>
      </div>

      {/* Short Para */}
      <div className="font-abc-marist text-lg py-5 lg:py-8">
        <p className="uppercase tracking-wide">Vertex</p>
        <p  className="indent-15 leading-none mt-4 text-justify">At Vertex Real Estate, we create and invest in spaces where life unfolds. We focus on transforming operational assets into robust platforms that bring together people, properties, and infrastructure. We build resilient places that serve the evolving needs of our customers and capital.</p>
      </div>
    </div>
  );
};

export default Hero;
