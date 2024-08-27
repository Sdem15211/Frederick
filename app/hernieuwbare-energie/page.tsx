"use client";
import { Idea } from "@/components/icons/Idea";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/layout/Heading";
import { EmblaCarousel } from "@/components/ui/EmblaCarousel";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { MdArrowBack } from "react-icons/md";

const zonneboilers = [
  { url: "zonneboiler1.JPG" },
  { url: "placeholder.png" },
  { url: "placeholder.png" },
  { url: "placeholder.png" },
  { url: "placeholder.png" },
  { url: "placeholder.png" },
  { url: "placeholder.png" },
  { url: "placeholder.png" },
  { url: "placeholder.png" },
];

const warmtepompen = [
  { url: "placeholder.png" },
  { url: "placeholder.png" },
  { url: "placeholder.png" },
  { url: "placeholder.png" },
  { url: "placeholder.png" },
  { url: "placeholder.png" },
  { url: "placeholder.png" },
  { url: "placeholder.png" },
];

const Home = () => {
  return (
    <section className="relative overflow-hidden">
      <Container className="relative">
        <Heading />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link href={"/"}>
            <div className="group">
              <MdArrowBack className="size-6 mt-12 group-hover:-translate-x-2 duration-300 ease-out" />
            </div>
          </Link>
          <h2 className="uppercase text-2.5xl md:text-4xl tracking-widest md:tracking-tablet lg:tracking-heading mt-12 font-extralight">
            Warmtepompen
          </h2>
        </motion.div>
      </Container>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <EmblaCarousel images={warmtepompen} />
      </motion.div>
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="uppercase text-2.5xl md:text-4xl tracking-widest md:tracking-tablet lg:tracking-heading mt-56 font-extralight"
        >
          Zonneboilers
        </motion.h2>
      </Container>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <EmblaCarousel images={zonneboilers} />
      </motion.div>
      <Container className="mt-56 mb-32">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <Idea />

          <p className="text-lg">
            Tip: mogelijke premies zijn te raadplegen op:{" "}
            <Link
              className="underline"
              href={"https://www.premiezoeker.be"}
              target="_blank"
            >
              www.premiezoeker.be
            </Link>
            ,{" "}
            <Link
              className="underline"
              href={"https://www.energiesparen.be"}
              target="_blank"
            >
              www.energiesparen.be
            </Link>{" "}
            en{" "}
            <Link
              className="underline"
              href={"https://www.fluvius.be"}
              target="_blank"
            >
              www.fluvius.be
            </Link>
          </p>
        </div>
      </Container>
      <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -left-[15.625rem] bottom-1/3 hidden md:block" />
      <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -right-[17.625rem] top-1/2 hidden md:block" />
    </section>
  );
};

export default Home;
