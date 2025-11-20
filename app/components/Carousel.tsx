"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// Import the type definition you created in constant.ts
import { ImageItem } from "../constant";

interface CarouselProps {
  images: ImageItem[];
  className?: string;
  gallery?: boolean;
}

const Carousel = ({ images, className = "", gallery }: CarouselProps) => {
  // Type the ref as an HTMLDivElement
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const totalImages = images.length;

  const goToSlide = (index: number) => {
    // Ensure index stays within bounds (looping)
    const newIndex = (index + totalImages) % totalImages;
    setCurrentIndex(newIndex);
  };

  const getSlideAt = (offset: number) => {
    return images[(currentIndex + offset + totalImages) % totalImages];
  };

  const currentSlide = getSlideAt(0);

  // GSAP Animation with Scope
  useGSAP(
    () => {
      // Animate the main image whenever currentIndex changes
      gsap.fromTo(
        ".main-image",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    },
    { dependencies: [currentIndex], scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full flex flex-col gap-6">
      {/* Main Content Area */}
      <div
        className={`relative w-full flex flex-col md:flex-row gap-4 ${className} mt-5`}
      >
        {/* Main Image */}
        <div className="relative w-full h-full overflow-hidden bg-gray-100">
          <Image
            key={currentSlide.id} // Key ensures React remounts image for fresh animation
            src={currentSlide.src}
            alt={`Project image ${currentIndex + 1}`}
            className="main-image object-cover"
            fill
            priority // Loads the image faster
          />
        </div>

        <div className="absolute bottom-0 left-0 flex justify-center items-center gap-2 w-full mb-5">
          {gallery && (
            <div className="py-2 px-6 rounded-sm bg-black/20 backdrop-blur text-white uppercase font-abc-marist tracking-wider hidden md:block">
              Gallery
            </div>
          )}
          <div className="py-2 px-6 rounded-sm bg-black/20 backdrop-blur flex gap-5">
            {images.map((image, index) => (
              <span
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`cursor-pointer font-abc-marist text-lg ${
                  currentIndex === index ? "text-white" : "text-white/60"
                }`}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
