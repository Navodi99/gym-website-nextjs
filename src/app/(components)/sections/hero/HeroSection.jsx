"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomButton from "../../reusables/buttons/CustomButton";
import clsx from "clsx";
import { container, fadeUp, imageAnim } from "@/app/(utils)/animation";

const HeroSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      id="home"
      className={clsx(
        "flex items-center justify-between p-5 my-15",
        "max-sm:flex-col max-sm:my-2",
      )}
    >
      <motion.div className="pb-10 flex flex-col" variants={container}>
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

      <motion.div variants={imageAnim} className="max-sm:hidden">
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
