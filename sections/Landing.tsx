"use client";
import { RenewableEnergy } from "@/components/icons/RenewableEnergy";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlinePlumbing } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { cubicBezier, motion } from "framer-motion";

export const Landing = () => {
  const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);

  return (
    <section>
      <div className="lg:px-24 px-12 relative">
        <div className="flex justify-between items-center text-sm font-light mt-4 opacity-80">
          <motion.span
            initial={{ y: "-300%", opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{
              delay: 1,
              duration: 1.5,
              type: "tween",
              ease: "easeOut",
            }}
          >
            Klijtberg 66-68
          </motion.span>
          <motion.span
            initial={{ y: "-300%", opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{
              delay: 1.2,
              duration: 1.5,
              type: "tween",
              ease: "easeOut",
            }}
          >
            8570 Ingooigem
          </motion.span>
          <motion.span
            initial={{ y: "-300%", opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{
              delay: 1.4,
              duration: 1.5,
              type: "tween",
              ease: "easeOut",
            }}
          >
            info@frederickdesmet.be
          </motion.span>
          <motion.span
            initial={{ y: "-300%", opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{
              delay: 1.6,
              duration: 1.5,
              type: "tween",
              ease: "easeOut",
            }}
          >
            +32 475 50 65 96
          </motion.span>
        </div>
        <div className="flex flex-col gap-2 text-2xl font-light uppercase leading-none mt-12">
          <span>Frederick</span>
          <span className="tracking-logo">Desmet</span>
        </div>
        <div className="mt-2 -ml-2">
          <span className="uppercase text-5xl font-extralight tracking-tight leading-none">
            loodgieter
          </span>
        </div>
        <div className="flex flex-col gap-12 mt-16">
          <Fliplink href={"/sanitair-verwarming"}>
            <MdOutlinePlumbing className="size-[30px] mr-2" />
            SANITAIR & VERWARMING
          </Fliplink>
          <Fliplink href="/arico">
            <TbAirConditioning className="size-[30px] mr-2" />
            <span className="text-xl">AIRCO</span>
          </Fliplink>
          <Fliplink href="/hernieuwbare-energie">
            <RenewableEnergy />
            <span className="text-xl ml-2">HERNIEUWBARE ENERGIE</span>
          </Fliplink>
        </div>
        <button className="bg-white px-6 py-4 rounded-md mt-14 hover:bg-white/75 transition-colors duration-300">
          <Link
            href="/contact"
            className="text-navy text-lg uppercase font-medium"
          >
            Contacteer ons
          </Link>
        </button>
        <div className="size-[500px] absolute right-24 -bottom-10 opacity-50">
          <Image
            src={"/images/Logodark.png"}
            fill
            alt="logo"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

const Fliplink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative overflow-hidden whitespace-nowrap text-xl w-fit"
    >
      <motion.div
        className="flex items-center"
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex items-center absolute inset-0"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
      >
        {children}
      </motion.div>
    </motion.a>
  );
};
