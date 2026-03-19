"use client";
import { container, slideLeft } from "@/app/(utils)/animation";
import React from "react";
import { motion } from "framer-motion";

const CustomServiceCard = ({ cardData }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="flex flex-col gap-10 mt-5"
    >
      <motion.div
      variants={slideLeft}
      className="max-sm:items-center border border-(--primary-color) w-73 h-55 rounded-2xl flex flex-col py-2 shadow-[0_7px_10px_-6px_var(--primary-color)]">
        <div className="mt-5 ml-5 rounded-l-lg rounded-r-lg bg-[linear-gradient(to_bottom,var(--primary-color),var(--secondary-color))] w-12 h-11 flex items-center justify-center">
          {cardData.icon}
        </div>

        <div className="">
          <p className="text-xl font-bold mt-3 ml-5 max-sm:text-center">
            {cardData.header}
          </p>
          <p className="text-sm text-start mt-2 mx-5 max-sm:text-center">
            {cardData.text}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CustomServiceCard;
