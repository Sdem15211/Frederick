"use client";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/layout/Heading";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

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
          <h2 className="uppercase text-4xl tracking-heading mt-12 font-extralight">
            Contacteer ons
          </h2>
        </motion.div>
        <div className="flex font-light items-center mt-24">
          <form className="flex flex-col gap-12 w-[600px]">
            <motion.div
              initial={{ opacity: 0, y: "50px" }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50px" }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50px" }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50px" }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50px" }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              className="bg-white rounded-md font-medium py-4 text-navy text-center hover:bg-white/50 transition-colors"
            >
              <button type="submit">VERSTUUR</button>
            </motion.div>
          </form>
        </div>
      </Container>
      <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -left-[15.625rem] bottom-1/3" />
      <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -right-[17.625rem] top-1/2" />
    </section>
  );
};

export default Home;
