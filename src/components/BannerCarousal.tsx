"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";

export function EmblaCarousel({ images }: { images: StaticImageData[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  console.log(images);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((item, index) => (
          <div
            key={index}
            className="embla__slide w-full h-[400px] lg:h-[600px]">
            <Image
              src={item}
              alt="banner image"
              className="object-cover w-full h-full"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}
