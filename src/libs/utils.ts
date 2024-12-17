import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const allProducts = [
  {
    id: 1,
    images: [
      "https://www.mydesignation.com/cdn/shop/files/theyyam-tshirt-kathakali-theyyam-fusion-902772.jpg?v=1716285048&width=750",
      "https://www.mydesignation.com/cdn/shop/files/theyyam-tshirt-kathakali-theyyam-fusion-983649.jpg?v=1716279504&width=750",
      "https://www.mydesignation.com/cdn/shop/files/theyyam-tshirt-kathakali-theyyam-fusion-484392.jpg?v=1716279504&width=750",
    ],
    name: "Theyyam Tshirt - Kathakali Theyyam Fusion",
    price: 599,
  },
  {
    id: 2,
    images: [
      "https://www.mydesignation.com/cdn/shop/files/ayinu-840409.jpg?v=1726948386&width=750",
      "https://www.mydesignation.com/cdn/shop/files/ayinu-794619.jpg?v=1726948386&width=750",
      "https://www.mydesignation.com/cdn/shop/files/ayinu-530084.jpg?v=1726948386&width=750",
    ],
    name: "Ayinu",
    price: 599,
  },
  {
    id: 3,
    images: [
      "https://www.mydesignation.com/cdn/shop/files/naatukar-enthu-parayum-222224.jpg?v=1728974993&width=750",
      "https://www.mydesignation.com/cdn/shop/files/naatukar-enthu-parayum-226401.jpg?v=1728974993&width=750",
      "https://www.mydesignation.com/cdn/shop/files/naatukar-enthu-parayum-985808.jpg?v=1728974993&width=750",
    ],
    name: "Naatukar Enthu Parayum",
    price: 599,
  },
];
