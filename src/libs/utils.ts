import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import greenOneImg from "../../public/greenOne.jpg";
import greenTwoImg from "../../public/greenTwo.jpg";
import greenThreeImg from "../../public/greenThree.jpg";
import starOneImg from "../../public/starOne.jpg";
import starTwoImg from "../../public/starTwo.jpg";
import starFourImg from "../../public/starFour.jpg";

import bannerOnePngImg from "../../public/bannerOne.png";
import bannerTwoPngImg from "../../public/bannerTwo.png";

import comboOneImg from "../../public/comboOne.jpg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const allProducts = [
  {
    id: 1,
    images: [comboOneImg, greenOneImg, starFourImg],
    name: "Combo Offer",
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: 899,
  },
  {
    id: 2,
    images: [greenOneImg, greenTwoImg, greenThreeImg],
    name: "Chakra Design",
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: 599,
  },
  {
    id: 3,
    images: [starOneImg, starTwoImg, starFourImg],
    name: "Star Design",
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: 599,
  },
];

export const desktopBanners = [bannerTwoPngImg, bannerOnePngImg];
