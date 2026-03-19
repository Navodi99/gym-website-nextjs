"use client";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { blurFade, container, fadeUp } from "@/app/(utils)/animation";

const CustomerTrainerCard = ({cardData}) => {
  return (
    <motion.div
    initial="hidden"
    whileInView="show"
    variants={container}>
    <motion.div
    variants={blurFade}
    
    className="w-60 h-110 bg-(--background) border border-(--primary-color) rounded-l-3xl rounded-r-3xl shadow-[0_8px_1px_1px_var(--secondary-color)] ">
      <div className="bg-linear-to-b from-[#F1F0EB] to-[#2C2C2C] w-56 h-fit m-2 rounded-l-2xl rounded-r-2xl">
       <motion.img 
       variants={fadeUp}
       src={cardData.image}/>
      </div>
      <div className="flex items-center flex-col my-3 p-3 ">
        <p className="text-(--foreground) text-lg font-bold">{cardData.name}</p>
        <p className="text-(--primary-color)  font-bold">
          {cardData.role}
        </p>
        <p className="text-sm text-(--foreground) text-center my-3">
         {cardData.text}
        </p>
        <div className="text-(--primary-color) flex items-center justify-center gap-7">
          <Facebook />
          <Instagram />
          <Linkedin />
        </div>
      </div>
    </motion.div>
       </motion.div>
  );
};

export default CustomerTrainerCard;
