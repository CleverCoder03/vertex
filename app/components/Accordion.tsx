"use client";

import { useState } from "react";
import { platforms } from "../constant";
import Image from "next/image";

const Accordion = () => {
  // State to keep track of the currently open accordion item's ID.
  // We initialize it to null, so all items are closed by default.
  const [openId, setOpenId] = useState<number | null>(null);

  // This function handles the click event on an accordion item.
  const handleToggle = (id: number) => {
    // If the clicked item is already open, close it by setting state to null.
    // Otherwise, set the state to the ID of the clicked item.
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="mt-50" id="project">
      <div className="text-xl font-ppneune-medium">
        <h1 className="mt-8 lg:mt-0 uppercase text-center font-abc-marist text-xl md:text-lg tracking-wide">
          Platforms
        </h1>
      </div>

      <div className="border-t-2 border-black mt-4 text-xl font-ppneune-medium lg:mt-30">
        {platforms.map((item) => {
          // Check if the current item is the one that's open
          const isOpen = item.id === openId;

          return (
            <div
              key={item.id}
              className="py-5 lg:py-8 border-b-2 border-black cursor-pointer"
              onClick={() => handleToggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <div>
                <div className="flex justify-between ">
                  <div className="flex">
                    <div className="">
                      <h1 className="uppercase text-lg font-abc-marist">
                        {item.title}
                      </h1>
                      <div className="overflow-hidden">
                        <p className="pt-4 text-lg font-abc-marist leading-none">
                          {item.desc}
                        </p>
                      </div>
                      <div
                        id={`accordion-content-${item.id}`}
                        className={`grid transition-all duration-500 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pt-5 lg:pt-8">
                            {item.images.map(src=>
                              <div className="relative aspect-3/4" key={src.id}>
                              <Image src={src.src} alt={src.src} fill />
                            </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Plus/Minus Icon */}
                  <div className="relative w-5 h-5 shrink-0">
                    {/* Horizontal line (always visible) */}
                    <div className="w-full border h-px bg-black absolute top-1/2 -translate-y-1/2"></div>
                    {/* Vertical line (rotates to become horizontal, forming a minus sign) */}
                    <div
                      className={`h-full border w-px bg-black absolute left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-90" : "rotate-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
