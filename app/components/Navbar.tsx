"use client";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Project",
    link: "#project",
  },
  {
    id: 3,
    name: "Approach",
    link: "#approach",
  },
  {
    id: 4,
    name: "Commitment",
    link: "#commitment",
  },
  {
    id: 5,
    name: "Team",
    link: "#team",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [toggle]);

  return (
    <>
      <div className="font-abc-marist uppercase flex justify-between items-center text-xl md:text-lg tracking-wide py-5 border-b-2 sticky top-0 z-9999 bg-white">
        <div className="flex justify-around md:w-full">
          <Link className="hidden md:block" href="/">Project</Link>
          <Link className="hidden md:block" href="/">Approach</Link>
          <Link href="/">Vertex</Link>
          <Link className="hidden md:block" href="/">Commitment</Link>
          <Link className="hidden md:block" href="/">Team</Link>
        </div>

        {/* MENU BAR */}
        <div
          className="md:hidden relative h-5 w-8 cursor-pointer font-sans font-bold text-xl"
          onClick={() => setToggle(!toggle)}
        >
          <div className="absolute h-full w-full top-0 left-0 [&_div]:h-0.5 [&_div]:bg-black/70 [&_div]:rounded-md flex flex-col justify-between ">
            <div
              className={`${
                toggle
                  ? "rotate-45 absolute w-full h-1 top-1/2 transition-all duration-300 ease-out"
                  : ""
              }`}
            ></div>
            <div className={`${toggle ? "hidden" : "block"}`}></div>
            <div
              className={`${
                toggle
                  ? "-rotate-45 absolute w-full h-1 top-1/2 transition-all duration-300 ease-out"
                  : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      {/* MENU CONTAINER */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            key="mobile-menu" // <-- 1. Add a unique key
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }} // <-- 2. Add the exit animation
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="absolute z-100 top-0 left-0 h-dvh w-full bg-white flex justify-start items-end px-6 md:px-10 lg:px-15 pb-20"
          >
            <div className="flex justify-center items-start flex-col gap-4 font-abc-marist font-medium text-4xl">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className={`${
                    pathName === link.link
                      ? "underline decoration-2 underline-offset-6 text-brand-black-og"
                      : ""
                  }`}
                  aria-label={link.name}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
