import { sendEmail } from "@/lib/sendEmail";
import { motion } from "framer-motion";
export default function ContactForm() {
  return (
    <form
      action={async (formData) => {
        await sendEmail(formData);
      }}
      className="flex flex-col gap-12 w-[600px]"
    >
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
          maxLength={100}
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
          type="email"
          id="email"
          name="senderEmail"
          className="peer block w-full appearance-none border-0 border-b border-white bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
          placeholder=" "
        />
        <label
          htmlFor="email"
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
          type="number"
          id="telephone"
          name="senderTelephone"
          className="peer block w-full appearance-none border-0 border-b border-white bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
          placeholder=" "
        />
        <label
          htmlFor="telephone"
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
  );
}
