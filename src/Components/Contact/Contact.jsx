import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      className="contact secondary-rubik h-full w-full m-auto flex flex-col lg:flex-row justify-center lg:justify-baseline items-center gap-12"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        className="contact-container flex flex-col gap-4 lg:gap-10 w-[90%] lg:w-[40%]"
        variants={variants}
      >
        <motion.h1
          className="text-xl lg:text-5xl primary-rubik text-cyan-500"
          variants={variants}
        >
          Let's Work Together
        </motion.h1>
        <motion.div
          className="contact-text flex flex-col gap-2 lg:gap-6"
          variants={variants}
        >
          <h2 className="text-lg lg:text-3xl">yaduk.developer@gmail.com</h2>
          <h2 className="text-lg lg:text-3xl">Mumbai, India</h2>
          <h2 className="text-lg lg:text-3xl">+91 9137832949</h2>
        </motion.div>
      </motion.div>
      <div className="form-container w-[80%] lg:w-[40%]">
        <form className="flex flex-col gap-5 w-full">
          <input
            type="text"
            required
            placeholder="Name"
            className="p-5 bg-transparent border border-white text-white rounded-md"
          />
          <input
            type="email"
            required
            placeholder="Email ID"
            className="p-5 bg-transparent border border-white text-white rounded-md"
          />
          <textarea
            rows={8}
            placeholder="Message"
            className="p-5 bg-transparent border border-white text-white rounded-md"
          />
          <button className="border-none bg-cyan-500 px-4 py-2 rounded-2xl cursor-pointer primary-rubik">
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
