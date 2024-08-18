"use client";
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
];

const Home = () => {
  return (
    <section className="relative">
      <div className="lg:px-24 px-12 relative">
        <div className="flex justify-between items-center [&_span]:text-sm font-light mt-6 [&_span]:opacity-80">
          <div className="flex space-x-56">
            <span>Klijtberg 66-68</span>
            <span>8570 Ingooigem</span>
          </div>
          <div className="w-[40px] h-[40px] absolute left-1/2 -translate-x-1/2 opacity-35">
            <Image
              src={`/images/Logodark.png`}
              fill
              alt="logo"
              className="object-cover"
            />
          </div>
          <div className="flex space-x-40">
            <span>info@frederickdesmet.be</span>
            <span>+32 475 50 65 96</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Link href={"/"}>
            <div className="group">
              <MdArrowBack className="size-6 mt-12 group-hover:-translate-x-2 duration-300 ease-out" />
            </div>
          </Link>
          <h2 className="uppercase text-4xl tracking-heading mt-12 font-extralight">
            Sanitair
          </h2>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      >
        <EmblaCarousel images={sanitair} />
      </motion.div>
    </section>
  );
};

export default Home;
