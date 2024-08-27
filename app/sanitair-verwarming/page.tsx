"use client";
import { Idea } from "@/components/icons/Idea";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/layout/Heading";
import { EmblaCarousel } from "@/components/ui/EmblaCarousel";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { MdArrowBack } from "react-icons/md";

const sanitair = [
  { url: "sanitair1.jpg" },
  { url: "sanitair2.jpg" },
  { url: "sanitair3.JPG" },
  { url: "sanitair4.JPG" },
  { url: "sanitair5.jpg" },
  { url: "sanitair6.jpg" },
  { url: "sanitair7.jpg" },
  { url: "sanitair8.jpg" },
  { url: "sanitair9.jpg" },
  { url: "sanitair10.jpg" },
  { url: "sanitair12.JPG" },
  { url: "sanitair13.JPG" },
  { url: "sanitair14.JPG" },
  { url: "sanitair15.jpg" },
  { url: "sanitair16.jpg" },
  { url: "sanitair17.jpg" },
  { url: "sanitair18.jpg" },
  { url: "sanitair19.jpg" },
  { url: "sanitair20.jpg" },
  { url: "sanitair21.JPG" },
];
const verwarming = [
  { url: "verwarming13.jpg" },
  { url: "verwarming2.jpg" },
  { url: "verwarming3.jpg" },
  { url: "verwarming17.JPG" },
  { url: "verwarming5.jpg" },
  { url: "verwarming6.jpg" },
  { url: "verwarming7.jpg" },
  { url: "verwarming8.jpg" },
  { url: "verwarming9.jpg" },
  { url: "verwarming10.jpg" },
  { url: "verwarming11.JPG" },
  { url: "verwarming12.jpg" },
  { url: "verwarming1.jpg" },
  { url: "verwarming14.jpg" },
  { url: "verwarming15.jpg" },
  { url: "verwarming16.JPG" },
  { url: "verwarming4.jpg" },
  { url: "verwarming18.jpg" },
  { url: "verwarming19.jpg" },
  { url: "verwarming20.jpg" },
  { url: "verwarming21.jpg" },
  { url: "verwarming22.jpg" },
  { url: "verwarming23.jpg" },
  { url: "verwarming24.jpg" },
  { url: "verwarming25.jpg" },
  { url: "verwarming26.jpg" },
  { url: "verwarming27.jpg" },
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
          <h2 className="uppercase text-2.5xl md:text-4xl tracking-heading mt-12 font-extralight">
            Sanitair
          </h2>
        </motion.div>
      </Container>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <EmblaCarousel images={sanitair} />
      </motion.div>
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="uppercase text-2.5xl md:text-4xl md:tracking-heading tracking-logo mt-56 font-extralight"
        >
          Verwarming
        </motion.h2>
      </Container>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <EmblaCarousel images={verwarming} />
      </motion.div>
      <Container className="mt-56 mb-32">
        <div className="flex flex-col md:flex-row gap-8">
          <Idea />
          <div className="flex flex-col gap-5">
            <p className="text-lg">
              Het onderhoud van uw cv-ketel is verplicht: om de twee jaar bij
              een gasketel en jaarlijks bij een stookolieketel. Onze erkende
              installateur staat klaar om dit voor u te verzorgen.
            </p>
            <div className="flex gap-6">
              <span>Erkenningsnummers:</span>
              <div className="flex flex-col gap-2 md:flex-row">
                <span>TV 12564</span>
                <span>GV 12564</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -left-[15.625rem] bottom-1/3 hidden md:block" />
      <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -right-[17.625rem] top-1/2 hidden md:block" />
    </section>
  );
};

export default Home;
