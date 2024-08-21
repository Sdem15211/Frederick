"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/layout/Heading";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  const questionsRef = useRef<HTMLDivElement | null>(null);
  const title = useRef<HTMLHeadingElement | null>(null);
  const form = useRef<(HTMLDivElement | null)[]>([]); // Explicitly type as an array of HTMLDivElement | null
  const button = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: questionsRef.current,
      start: "top 80%",
      animation: gsap
        .timeline()
        .from(title.current, {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        })
        .from(
          form.current,
          {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.2,
          },
          "<0.5"
        )
        .from(
          button.current,
          { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" },
          "<1"
        ),
      toggleActions: "play none none none",
    });
  });

  return (
    <section ref={questionsRef} id="questions" className="mb-32">
      <Container>
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
          <h2 className="uppercase text-4xl tracking-heading mt-12 font-extralight">
            Contacteer ons
          </h2>
        </motion.div>
        <div className="flex font-light items-center mt-24">
          <form className="flex flex-col gap-12 w-[600px]">
            <div
              ref={(el) => {
                form.current[0] = el;
              }}
              className="relative z-0"
            >
              <input
                required
                type="text"
                id="name"
                name="name"
                className="peer block w-full appearance-none bg-transparent border-0 border-b border-white px-0 py-2.5 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
              >
                Naam
              </label>
            </div>
            <div
              ref={(el) => {
                form.current[1] = el;
              }}
              className="relative z-0"
            >
              <input
                required
                type="text"
                id="name"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-white bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
              >
                Email
              </label>
            </div>
            <div
              ref={(el) => {
                form.current[2] = el;
              }}
              className="relative z-0"
            >
              <input
                required
                type="text"
                id="name"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-white bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
              >
                Telefoon
              </label>
            </div>
            <div
              ref={(el) => {
                form.current[3] = el;
              }}
              className="relative z-0"
            >
              <textarea
                required
                rows={5}
                id="message"
                name="message"
                className="peer block w-full appearance-none border-0 border-b border-white bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
              >
                Bericht
              </label>
            </div>
            <div
              className="bg-white rounded-md font-medium py-4 text-navy text-center hover:bg-white/50 transition-colors"
              ref={button}
            >
              <button type="submit">VERSTUUR</button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Home;
