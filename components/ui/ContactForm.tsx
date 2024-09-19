import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/lib/sendEmail";
import { useToast } from "@/hooks/use-toast";
export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      await sendEmail(formData);
      toast({
        title: "Verstuurd✅",
        description: "Uw bericht is verstuurd.",
        duration: 5000,
      });
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Uw bericht kon niet verstuurd worden. Probeer het later opnieuw.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields: Array<{
    name: string;
    label: string;
    type: string;
    maxLength?: number;
  }> = [
    { name: "name", label: "Naam", type: "text", maxLength: 100 },
    { name: "senderEmail", label: "Email", type: "email" },
    { name: "senderTelephone", label: "Telefoon", type: "tel" },
  ];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12 w-[600px]">
      {inputFields.map((field, index) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, y: "50px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
          className="relative z-0"
        >
          <input
            required
            type={field.type}
            id={field.name}
            name={field.name}
            maxLength={field.maxLength}
            className="peer block w-full appearance-none bg-transparent border-0 border-b border-white px-0 py-2.5 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label
            htmlFor={field.name}
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
          >
            {field.label}
          </label>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: "50px" }}
        animate={{ opacity: 1, y: 0 }}
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

      <motion.button
        type="submit"
        disabled={isSubmitting}
        initial={{ opacity: 0, y: "50px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className="bg-white rounded-md font-medium py-4 text-navy text-center hover:bg-white/50 transition-colors active:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "VERSTUREN..." : "VERSTUUR"}
      </motion.button>
    </form>
  );
}
