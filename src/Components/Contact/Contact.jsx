import React, { useRef, useState } from "react";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_g1ef4ro", "template_ta1raw7", form.current, {
        publicKey: "oybic5I9VtwkTSSpI",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Succesfully");
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
          className="text-xl lg:text-5xl primary-rubik"
          variants={variants}
        >
          Let's Work Together
        </motion.h1>
        <motion.div
          className="contact-text flex flex-col gap-2 lg:gap-6"
          variants={variants}
        >
          <h2 className="text-lg lg:text-2xl">yaduk.developer@gmail.com</h2>
          <h2 className="text-lg lg:text-2xl">Mumbai, India</h2>
          <h2 className="text-lg lg:text-2xl">+91 9137832949</h2>
        </motion.div>
      </motion.div>
      <div className="form-container w-[80%] lg:w-[40%]">
        <form
          ref={form}
          className="flex flex-col gap-5 w-full"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            required
            placeholder="Name"
            className="p-5 bg-transparent border border-black text-black rounded-md"
            name="from_name"
            value={name}
            onChange={handleName}
          />
          <input
            type="email"
            required
            placeholder="Email ID"
            className="p-5 bg-transparent border border-black text-black rounded-md"
            name="from_email"
            value={email}
            onChange={handleEmail}
          />
          <textarea
            rows={8}
            placeholder="Message"
            className="p-5 bg-transparent border border-black text-black rounded-md"
            name="message"
            value={message}
            onChange={handleMessage}
          />
          <button className="border-none bg-black text-white px-4 py-2 rounded-2xl cursor-pointer primary-rubik">
            Send
          </button>
          <p>{success}</p>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
