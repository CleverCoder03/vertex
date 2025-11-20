import { div } from "motion/react-client"
import { teamMembers } from "../constant"
import Image from "next/image"

const Team = () => {
  return (
    <div className="border-y-2 pt-5 lg:pt-8 font-abc-marist">
        <p className="uppercase text-lg">Team</p>
        <p className="indent-15 leading-none mt-4 text-justify text-lg">
          Our team combines specialist knowledge with broad expertise. Every team member is driven by curiosity and purpose. We’re always open to new ideas and partnerships. Let’s build the future together.
        </p>
        <div className="py-15 grid grid-cols-2 grid-rows-2 gap-5">
            {
                teamMembers.map((item) => (
                    <div key={item.id} >
                        <div className="relative aspect-[2/2.6]">
                            <Image src={item.image} alt={item.name} fill />
                        </div>
                        <div className="pt-5">
                            <h1 className="text-xl capitalize">{item.name}</h1>
                            <div className="text-sm font-medium leading-[1.2] mt-4">
                                <p>{item.position}</p>
                                <p>{item.email}</p>
                                <p>{item.phone}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
  )
}

export default Team