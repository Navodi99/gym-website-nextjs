"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomButton from "../../reusables/buttons/CustomButton";
import clsx from "clsx";

const HeroSection = () => {
  
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  
  const imageAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
<motion.div
  variants={container}
  initial="hidden"
  animate="show"
  id="home"
  className={clsx(
    "flex items-center justify-between p-5 my-15",
    "max-sm:flex-col max-sm:my-2",
    "max-sm:bg-[url('/images/hero.png')]",
    "max-sm:bg-size-[420px]",
    "max-sm:bg-center max-sm:bg-no-repeat",
    "max-sm:relative",
    "max-sm:bg-(--background)/60",
    "max-sm:bg-blend-darken"
  )}
>
     
      <motion.div
        className="pb-10 flex flex-col"
        variants={container}
      >
        <motion.p
          variants={fadeUp}
          className="uppercase tracking-widest font-semibold max-sm:text-center"
        >
          Built Strong
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-6xl mt-6 max-sm:text-4xl max-sm:text-center"
        >
          Transform
          <span className="text-(--primary-color)"> Your Body.</span>
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-6xl mt-6 max-sm:text-4xl max-sm:text-center"
        >
          Transform
          <span className="text-(--primary-color)"> Your Life.</span>
        </motion.p>

        <motion.p variants={fadeUp} className="font-light mt-6">
          Join the ultimate fitness experience with expert trainers, modern
          <br />
          equipment, and personalized workout plans.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex gap-3 mt-6 max-sm:flex-col max-sm:items-center"
        >
          <CustomButton>Join Now</CustomButton>
          <CustomButton invert>View Plans</CustomButton>
        </motion.div>
      </motion.div>

      
      <motion.div
        variants={imageAnim}
        className="max-sm:hidden"
      >
        <img
          src="/images/hero.png"
          alt=""
          className="w-2xl filter brightness-70"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;