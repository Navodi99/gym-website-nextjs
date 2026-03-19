"use client";
import React from "react";
import CustomerTrainerCard from "../../reusables/cards/CustomerTrainerCard";
import { motion } from "framer-motion";
import { container, fadeUp } from "@/app/(utils)/animation";

const TrainerSection = () => {
  const trainersData = [
    {
      image: "/images/trainer1.png",
      name: "Ethan Cole",
      role: "Head Strength Coach",
      text: "Former powerlifting champion specializing in raw strength and biomechanics.",
    },
    {
      image: "/images/trainer2.png",
      name: "Liam Carter",
      role: "Personal Trainer",
      text: "Specializes in weight loss programs and personalized workout plans for beginners.",
    },
    {
      image: "/images/trainer3.png",
      name: "Noah Bennett",
      role: "HIIT Specialist",
      text: "Focuses on high-intensity interval training to improve endurance and burn fat fast.",
    },
    {
      image: "/images/trainer4.png",
      name: "Ryan Brooks",
      role: "Bodybuilding Coach",
      text: "Helps clients achieve muscle growth and competition-level physique training.",
    },
    {
      image: "/images/trainer5.png",
      name: "Daniel Hayes",
      role: "Nutrition & Fitness Coach",
      text: "Provides diet planning and fitness guidance for sustainable healthy living.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      className="flex flex-col items-center mb-15 p-5 max-sm:my-2"
      id="trainers"
    >
      <motion.div variants={container} initial="hidden" whileInView="show">
        <motion.p
          variants={fadeUp}
          className="uppercase tracking-widest font-bold text-2xl text-(--primary-color) text-center max-sm:text-xl"
        >
          Team
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-4xl text-center mt-5 max-sm:text-2xl"
        >
          Meet Your Trainers
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex items-center justify-between gap-10 my-5 max-sm:flex-col"
      >
        {trainersData.map((item, index) => (
          <CustomerTrainerCard key={index} cardData={item} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TrainerSection;
