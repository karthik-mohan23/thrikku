"use client";
import { ReactNode } from "react";
import {
  HTMLMotionProps,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import Balancer from "react-wrap-balancer";

import { cn } from "@/libs/utils";
import Link from "next/link";

interface FeatureCardProps extends HTMLMotionProps<"div"> {
  feature: {
    title: ReactNode;
    category?: string;
    imageUrl: string;
  };
  zIndexOffset?: number;
}

function FeatureCard({
  feature,
  className,
  zIndexOffset = 0,
  ...props
}: FeatureCardProps) {
  const { title, imageUrl } = feature;
  const springValue = useSpring(0, {
    bounce: 0,
  });
  const zIndex = useTransform(
    springValue,
    (value) => +Math.floor(value * 10) + 10 + zIndexOffset
  );
  const scale = useTransform(springValue, [0, 1], [1, 1.1]);

  const content = (
    <>
      <img
        src={imageUrl}
        alt=""
        className="-z-1 absolute inset-0 h-full w-full max-w-60 object-cover"
      />
      <div className="z-10 flex h-full w-full flex-col gap-2 bg-gradient-to-t from-zinc-800/40 from-15% to-transparent p-3">
        {/* <small className="inline w-fit rounded-xl bg-orange-950 bg-opacity-50 px-2 py-1 text-xs font-medium leading-none text-white">
          {category}
        </small> */}

        <div className="flex-1" />
        <h3 className="rounded-xl bg-blue-950 bg-opacity-30 p-3 text-base font-bold leading-none text-white backdrop-blur-sm">
          {title}
        </h3>
      </div>
    </>
  );

  const containerClassName = cn(
    "relative flex h-64 w-48 flex-col overflow-hidden rounded-2xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl",
    className
  );

  return (
    <>
      <motion.div
        onMouseEnter={() => springValue.set(1)}
        onMouseLeave={() => springValue.set(0)}
        style={{
          zIndex,
          scale,
        }}
        // className={cn(containerClassName, "hidden sm:flex")}
        className={cn(containerClassName)}
        {...props}>
        {content}
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0, transition: { duration: 0.5 } }}
        // className={cn(containerClassName, "flex sm:hidden")}>
        className={cn(containerClassName, "hidden ")}>
        {content}
      </motion.div>
    </>
  );
}

export default function ProductFeatures() {
  const cardWidth = 48 * 4; // w-48 x 4
  const angle = 6;
  const yOffset = 30;

  return (
    <section className="storybook-fix flex w-full flex-col items-center gap-4 bg-orange-50 pt-16  md:pt-10 md:pb-10">
      <motion.header
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        className="flex max-w-2xl flex-col items-center gap-4 md:gap-4 text-center">
        <h1 className="text-4xl md:text-6xl px-2 md:px-0 font-black text-orange-600">
          Wear Your Story. Shop Your Style!
        </h1>
        <Balancer className="block text-lg text-neutral-500 max-w-md">
          Bold Prints for Every Mood.From graphic classics to trendy essentials,
          we&apos;ve got your style sorted.
        </Balancer>
      </motion.header>

      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}>
        <Link
          href="/products/all"
          className="box-border inline-block h-11 transform-gpu cursor-pointer touch-manipulation whitespace-nowrap rounded-full border-b-4 border-solid border-transparent bg-orange-600 px-4 py-3 text-center text-sm font-bold uppercase leading-5 tracking-wider text-white shadow-2xl outline-none transition-all duration-200 hover:brightness-110 active:border-b-0 active:border-t-4 active:bg-none disabled:cursor-auto">
          Start shopping &rarr;
          <span className="absolute inset-0 -z-10 rounded-full border-b-4 border-solid border-transparent bg-orange-500" />
        </Link>
      </motion.div>

      <div className="relative flex w-full  justify-center  px-4 py-12  sm:gap-0">
        <FeatureCard
          feature={{
            // category: "tshirts",
            imageUrl:
              "https://www.pngarts.com/files/3/T-Shirt-PNG-Image-Background.png",
            //   "https://assets.lummi.ai/assets/QmSxHGeLuiXMzUSFM9hhVJToRXVeQCBEtno96zgAXB3uVN?auto=format&w=400",
            title: "Cosmic Drift",
          }}
          initial={{
            x: cardWidth,
            y: yOffset,
            opacity: 0,
            rotate: 0,
            scale: 0.9,
          }}
          animate={{
            x: yOffset,
            y: 10,
            opacity: 1,
            scale: 0.95,
            rotate: -angle,
            transition: {
              type: "spring",
              delay: 0.8,
            },
          }}
        />

        <FeatureCard
          feature={{
            // category: "tshirts",
            title: "Midnight Noir",
            imageUrl:
              "https://th.bing.com/th/id/R.49b3161ef649c8edf2d0cd60cedbff87?rik=DVNVqeNIBftaGg&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f83-833747_hiphop-black-shirt-la-t-shirt-design.png&ehk=IH68nWyzqECE47bCs3e8G%2fd23HByhWBa58dw5OiZc60%3d&risl=&pid=ImgRaw&r=0",
            //   "https://assets.lummi.ai/assets/QmaUXibkkKYu6Y3TzwE71ytVrPqecXiG4URAPZuqqzxz6R?auto=format&w=400",
          }}
          initial={{
            y: yOffset,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              delay: 0.4,
            },
          }}
          zIndexOffset={1}
        />

        <FeatureCard
          feature={{
            // category: "tshirts",
            title: "Sunny Vibe",
            imageUrl:
              "https://www.pngall.com/wp-content/uploads/2016/04/T-Shirt-PNG.png",
            // imageUrl:
            //   "https://assets.lummi.ai/assets/QmYXzaoAXsA71sz3Uv3fXytMKDoBHs1twQN3eCcrvr7AJf?auto=format&w=400",
          }}
          initial={{
            x: -cardWidth,
            y: yOffset,
            opacity: 0,
            rotate: 0,
            scale: 0.9,
          }}
          animate={{
            x: -yOffset,
            y: 10,
            opacity: 1,
            rotate: angle,
            scale: 0.95,
            transition: {
              type: "spring",
              delay: 0.6,
            },
          }}
        />
      </div>
    </section>
  );
}
