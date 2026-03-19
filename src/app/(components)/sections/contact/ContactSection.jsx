"use client";
import { MailCheck, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import CustomButton from "../../reusables/buttons/CustomButton";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { container, fadeIn, fadeUp, slideRight } from "@/app/(utils)/animation";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8kbnqxk",
        "template_fobs4jp",
        {
          name,
          email,
          message,
        },
        "Rt-hhWF6kpzZzWnHw",
      )
      .then(() => {
        alert("Message sent!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message");
      });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      className=" max-sm:items-center max-sm:my-2 max-sm:flex-col flex justify-between border-t-4 border-(--primary-color) gap-10 rounded-l-3xl rounded-r-3xl mb-15 p-5"
      id="contact"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container}
        className="flex flex-col  px-10 max-sm:px-1"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          className="flex flex-col"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-widest font-bold text-2xl text-(--primary-color) "
          >
            Contact
          </motion.p>
          <motion.p variants={fadeUp} className="font-medium text-4xl mt-5">
            Get In Touch
          </motion.p>
          <motion.p variants={fadeIn} className="text-sm mt-5">
            Ready to start? Have questions about our plans or facility? <br />
            Drop us a message or visit us in person.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          className="flex flex-col items-start gap-10 mt-5"
        >
          <motion.div variants={slideRight} className="flex items-center gap-5">
            <div className="rounded-full w-14 h-14 bg-(--primary-color) flex items-center justify-center">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <p className=" font-semibold">Location</p>
              <p className="text-sm mt-1">
                No 123, Flower Road,
                <br /> Colombo 07
              </p>
            </div>
          </motion.div>
          <motion.div variants={slideRight} className="flex items-center gap-5">
            <div className="rounded-full w-14 h-14 bg-(--primary-color) flex items-center justify-center">
              <Phone className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <p className=" font-semibold">Phone</p>
              <p className="text-sm mt-1">+94 112 245 556</p>
            </div>
          </motion.div>
          <motion.div variants={slideRight} className="flex items-center gap-5">
            <div className="rounded-full w-14 h-14 bg-(--primary-color) flex items-center justify-center">
              <MailCheck className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <p className=" font-semibold">Email</p>
              <p className="text-sm mt-1">fitness@gmail.com</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="border border-(--foreground) w-180 h-fit rounded-l-3xl rounded-r-3xl p-10 m-10 max-sm:w-80 max-sm:m-0 max-sm:p-4">
        <div className="flex flex-col items-start gap-3 ">
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id=""
            placeholder="Enter Your Name"
            className="bg-(--gray-color) w-160 h-fit py-4 rounded-l-xl rounded-r-xl px-5 filter brightness-50 max-sm:w-72 text-(--white)"
          />
        </div>
        <div className="flex flex-col items-start gap-3 mt-3">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id=""
            placeholder="Enter Your Email"
            className="bg-(--gray-color) w-160 h-fit py-4 rounded-l-xl rounded-r-xl px-5 filter brightness-50 max-sm:w-72 text-(--white)"
          />
        </div>
        <div className="flex flex-col items-start gap-3 mt-3">
          <label htmlFor="message" className="">
            Message
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id=""
            className="bg-(--gray-color) w-160 h-fit py-8 rounded-l-xl rounded-r-xl px-5 filter brightness-50 max-sm:w-72 text-(--white)"
            placeholder="How can we help ?"
          ></textarea>
        </div>
        <div className="mt-6">
          <CustomButton className="w-160 max-sm:w-72" onclick={handleSubmit}>
            Send Message
          </CustomButton>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
