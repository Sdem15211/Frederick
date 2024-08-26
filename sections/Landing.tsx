"use client";
import { RenewableEnergy } from "@/components/icons/RenewableEnergy";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlinePlumbing } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { cubicBezier, motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export const Landing = () => {
  return (
    <section>
      <Container className={`relative md:h-screen`}>
        <div className="lg:hidden relative mt-10 size-[48px] md:size-[60px] opacity-50">
          <Image
            src={"/images/Logodark.png"}
            fill
            alt="logo"
            className="object-cover"
          />
        </div>
        <div className="hidden lg:flex justify-between items-center text-sm font-light mt-4 opacity-80">
          <motion.span
          // initial={{ y: "-300%", opacity: 0 }}
          // animate={{ y: 0, opacity: 0.8 }}
          // transition={{
          //   delay: 1,
          //   duration: 1.5,
          //   type: "tween",
          //   ease: "easeOut",
          // }}
          >
            Klijtberg 66-68
          </motion.span>
          <motion.span
          // initial={{ y: "-300%", opacity: 0 }}
          // animate={{ y: 0, opacity: 0.8 }}
          // transition={{
          //   delay: 1.2,
          //   duration: 1.5,
          //   type: "tween",
          //   ease: "easeOut",
          // }}
          >
            8570 Ingooigem
          </motion.span>
          <motion.span
          // initial={{ y: "-300%", opacity: 0 }}
          // animate={{ y: 0, opacity: 0.8 }}
          // transition={{
          //   delay: 1.4,
          //   duration: 1.5,
          //   type: "tween",
          //   ease: "easeOut",
          // }}
          >
            info@frederickdesmet.be
          </motion.span>
          <motion.span
          // initial={{ y: "-300%", opacity: 0 }}
          // animate={{ y: 0, opacity: 0.8 }}
          // transition={{
          //   delay: 1.6,
          //   duration: 1.5,
          //   type: "tween",
          //   ease: "easeOut",
          // }}
          >
            +32 475 50 65 96
          </motion.span>
        </div>
        <div className="flex flex-col gap-2 text-xl md:text-2xl font-light uppercase leading-none md:mt-10 mt-6">
          <span>Frederick</span>
          <span className="tracking-logo">Desmet</span>
        </div>
        <div className="mt-8 md:mt-4 -ml-2">
          <span className="uppercase text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-none">
            loodgieter
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="relative">
            <div className="flex flex-col gap-12 mt-16 lg:mt-0">
              <Fliplink href={"/sanitair-verwarming"}>
                <MdOutlinePlumbing className="size-[28px] mr-2" />
                SANITAIR & VERWARMING
              </Fliplink>
              <Fliplink href="/airco">
                <TbAirConditioning className="size-[28px] mr-2" />
                AIRCO
              </Fliplink>
              <span className="bg-white absolute top-[120px] lg:top-14 left-24 text-navy text-[12px] px-2 py-1 rounded-md">
                NIEUW!
              </span>
              <Fliplink href="/hernieuwbare-energie">
                <RenewableEnergy />
                <span className="ml-2">HERNIEUWBARE ENERGIE</span>
              </Fliplink>
            </div>
            <button className="bg-white px-8 py-3 rounded-md mt-14 hover:bg-white/75 transition-colors duration-300">
              <Link
                href="/contact"
                className="text-navy text-lg uppercase font-medium"
              >
                Contacteer ons
              </Link>
            </button>
          </div>
          <div className="md:max-lg:flex hidden flex-col gap-6 self-end text-sm font-light opacity-80 text-right -translate-x-4">
            <span>Klijtberg 68-88</span>
            <span>8570 Ingooigem</span>
            <span>info@frederickdesmet.be</span>
            <span>+32 475 50 65 96</span>
          </div>
          <div className="hidden lg:block relative lg:size-[400px] xl:size-[500px] opacity-50 xl:-translate-y-10">
            <Image
              src={"/images/Logodark.png"}
              fill
              alt="logo"
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:hidden flex justify-end items-center mt-12 pb-12">
          <div className="flex flex-col gap-6 self-end text-sm font-light opacity-80 text-right">
            <span>Klijtberg 68-88</span>
            <span>8570 Ingooigem</span>
            <span>info@frederickdesmet.be</span>
            <span>+32 475 50 65 96</span>
          </div>
        </div>
      </Container>
      {/* <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -left-[15.625rem] -bottom-1/2" />
      <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -right-[17.625rem] -top-1/2" /> */}
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
      className="relative overflow-hidden whitespace-nowrap md:text-xl text-llg w-fit"
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
