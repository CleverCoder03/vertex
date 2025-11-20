import { div } from "motion/react-client";
import { teamMembers } from "../constant";
import Image from "next/image";

const Team = () => {
  return (
    <section id="team">
      <div className="border-y-2 pt-5 lg:pt-8 font-abc-marist">
        <div className="md:flex">
          <p className="uppercase text-lg md:w-1/2 md:text-[2.5vw] xl:text-[2.2vw]">
            Team
          </p>
          <p className="indent-15 leading-none mt-4 text-justify text-lg md:w-1/2 md:text-[2.5vw] xl:text-[2.2vw]">
            Our team combines specialist knowledge with broad expertise. Every
            team member is driven by curiosity and purpose. We’re always open to
            new ideas and partnerships. Let’s build the future together.
          </p>
        </div>
        <div className="py-15 grid grid-cols-2 grid-rows-2 lg:flex gap-5">
          {teamMembers.map((item) => (
            <div key={item.id} className="lg:w-1/4">
              <div className="bg-[#ff4abe]">
                <div className="relative aspect-[2/2.2]">
                  <Image src={item.image} alt={item.name} className="object-cover" fill />
                </div>
              </div>
              <div className="pt-5">
                <h1 className="text-xl capitalize lg:text-2xl">{item.name}</h1>
                <div className="text-sm font-medium leading-[1.2] lg:leading-[1.4] lg:text-base mt-4">
                  <p>{item.position}</p>
                  <p>{item.email}</p>
                  <p>{item.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
