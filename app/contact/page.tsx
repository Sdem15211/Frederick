"use client";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/layout/Heading";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "@/components/ui/ContactForm";

const Home = () => {
  return (
    <section id="questions" className="pb-32 overflow-hidden relative">
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
          <h2 className="uppercase text-2.5xl md:text-4xl md:tracking-heading tracking-logo mt-12 font-extralight">
            Contacteer ons
          </h2>
        </motion.div>
        <div className="flex font-light items-center mt-24">
          <ContactForm />
        </div>
      </Container>
      <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -left-[15.625rem] bottom-1/3 hidden md:block" />
      <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -right-[17.625rem] top-1/2 hidden md:block" />
    </section>
  );
};

export default Home;
