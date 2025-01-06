import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import greenOneImg from "../../public/greenOne.jpg";
import greenTwoImg from "../../public/greenTwo.jpg";
import greenThreeImg from "../../public/greenThree.jpg";
import starOneImg from "../../public/starOne.jpg";
import starTwoImg from "../../public/starTwo.jpg";
import starFourImg from "../../public/starFour.jpg";

import bannerOneImg from "../../public/bannerOne.jpg";
import bannerTwoImg from "../../public/bannerTwo.jpg";

import mobileBOneImg from "../../public/mobileBOne.jpg";
import mobileBTwoImg from "../../public/mobileBTwo.jpg";
import mobileBThreeImg from "../../public/mobileBThree.jpg";

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

export const mobileBanners = [mobileBOneImg, mobileBTwoImg, mobileBThreeImg];
export const desktopBanners = [bannerOneImg, bannerTwoImg];
