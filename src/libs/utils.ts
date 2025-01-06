import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import greenOneImg from "../../public/greenOne.jpg";
import greenTwoImg from "../../public/greenTwo.jpg";
import greenThreeImg from "../../public/greenThree.jpg";
import starOneImg from "../../public/starOne.jpg";
import starTwoImg from "../../public/starTwo.jpg";
import starFourImg from "../../public/starFour.jpg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const allProducts = [
  {
    id: 1,
    images: [greenOneImg, greenTwoImg, greenThreeImg],
    name: "Chakra Design",
    price: 599,
  },
  {
    id: 2,
    images: [starOneImg, starTwoImg, starFourImg],
    name: "Star Design",
    price: 599,
  },
];
