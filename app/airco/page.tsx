"use client";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/layout/Heading";
import { EmblaCarousel } from "@/components/ui/EmblaCarousel";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

const airco = [
  { url: "Airco1.jpg" },
  { url: "sanitair1.jpg" },
  { url: "sanitair2.jpg" },
  { url: "sanitair3.JPG" },
  { url: "sanitair4.JPG" },
  { url: "sanitair5.jpg" },
  { url: "sanitair6.jpg" },
  { url: "sanitair7.jpg" },
];

const page = () => {
  return (
    <section className="relative overflow-hidden pb-32">
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
          <h2 className="uppercase text-2.5xl md:text-4xl tracking-heading mt-12 font-extralight">
            Airco
          </h2>
        </motion.div>
      </Container>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <EmblaCarousel images={airco} />
      </motion.div>
      <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -left-[15.625rem] bottom-1/3 hidden md:block" />
      <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -right-[17.625rem] top-1/2 hidden md:block" />
    </section>
  );
};

export default page;
