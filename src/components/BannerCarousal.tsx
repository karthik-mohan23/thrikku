"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";

export function EmblaCarousel({ images }: { images: StaticImageData[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((item, index) => (
          <div
            key={index}
            className="embla__slide relative h-[460px] md:h-[500px]">
            <Image
              src={item}
              alt="banner image"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
