"use client";

import {motion} from "motion/react"

interface LoaderProps {
  onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {

  return (
    <motion.div
      className="fixed inset-0 py-14 px-8 md:py-18 md:px-14 bg-[#ff4abe] text-black z-999 loader-wrapper 
                 flex items-center justify-center" // Added flex to center content
      
      // Animation props
      initial={{ opacity: 1 }} // Start fully visible
      animate={{ opacity: 0 }} // Animate to fully transparent
      transition={{
        delay: 1.6,     // Wait 1.6 seconds before starting the fade
        duration: 1,  // Fade out over 1 second
        ease: [0.83, 0, 0.17, 1]
      }}
      
      // Call onFinish when the 'animate' sequence is complete
      onAnimationComplete={onFinish}
    >
      {/* Your text in the center */}
      <motion.h1 initial={{ opacity: 0 }} // Start fully visible
      animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1], delay: 0.5 }} className="text-2xl md:text-3xl lg:text-4xl uppercase font-abc-marist font-medium tracking-widest">
        Vertex
      </motion.h1>
      
    </motion.div>
  );
}