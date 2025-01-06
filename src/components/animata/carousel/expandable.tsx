"use client";

import { HTMLAttributes, useEffect, useState } from "react";

import { cn } from "@/libs/utils";
import Image, { StaticImageData } from "next/image";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: StaticImageData;
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list?: StaticImageData[];
  autoPlay?: boolean;
  className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-7 sm:w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
        {
          "flex-grow": index === activeItem,
        },
        className
      )}
      {...props}>
      <Image
        src={item}
        alt="image"
        fill
        className={cn("h-full w-full object-cover", {
          "blur-[2px]": index !== activeItem,
        })}
      />
    </div>
  );
};

export default function Expandable({
  list,
  autoPlay = true,
  className,
}: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay || !list?.length) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list?.length, isHovering]);

  return (
    <div className={cn("flex h-96 w-full gap-1", className)}>
      {list?.map((item, index) => (
        <List
          key={index}
          item={item}
          index={index}
          activeItem={activeItem}
          onMouseEnter={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        />
      ))}
    </div>
  );
}
