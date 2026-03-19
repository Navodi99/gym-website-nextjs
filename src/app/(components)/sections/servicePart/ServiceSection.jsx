"use client";
import {
  BicepsFlexed,
  Gem,
  HandFist,
  HandPlatter,
  HeartPulse,
  PersonStanding,
} from "lucide-react";
import React from "react";
import CustomServiceCard from "../../reusables/cards/CustomServiceCard";
import { motion } from "framer-motion";
import { container, fadeIn, fadeUp, slideLeft } from "@/app/(utils)/animation";

const ServiceSection = () => {
  const serviceSectionData = [
    {
      icon: <BicepsFlexed className="w-8 h-8 text-(--secondary-color)" />,
      header: "Strength Training",
      text: "Olympic lifting platforms, premium free weights, and state-of-the-art resistance machines.",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-(--secondary-color)" />,
      header: "Cardio Zone",
      text: "High-end treadmills, rowers, and assault bikes to build your endurance and stamina.",
    },
    {
      icon: <PersonStanding className="w-8 h-8 text-(--secondary-color)" />,
      header: "Yoga & Flexibility",
      text: "Dedicated studio space for mobility work, yoga classes, and active recovery.",
    },
    {
      icon: <HandFist className="w-8 h-8 text-(--secondary-color)" />,
      header: "Personal Training",
      text: "1-on-1 coaching with certified experts who build custom programs for your goals.",
    },
    {
      icon: <HandPlatter className="w-8 h-8 text-(--secondary-color)" />,
      header: "Nutrition Coaching",
      text: "Fuel your body right with personalized meal plans and macro tracking guidance.",
    },
    {
      icon: <Gem className="w-8 h-8 text-(--secondary-color)" />,
      header: "Recovery & Wellness",
      text: "Cold plunges, saunas, and massage therapy to help you bounce back faster.",
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="flex items-center flex-col mb-15 p-5 max-sm:my-2"
      id="services"
    >
      <motion.div variants={container} className="flex flex-col items-center">
        <motion.p
          variants={fadeUp}
          className="uppercase tracking-widest font-bold text-2xl text-(--primary-color) text-center max-sm:text-xl"
        >
          Services
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-4xl text-center mt-5 max-sm:text-2xl"
        >
          What We Offer
        </motion.p>
        <motion.p
          variants={fadeIn}
          className="text-sm text-center px-98 mt-7 max-sm:px-2"
        >
          Everything you need to build strength, increase endurance, and recover
          properly under one roof.
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-3 gap-x-36 gap-y-4 my-5 max-sm:grid-cols-1"
      >
        {serviceSectionData.map((item, index) => (
          <CustomServiceCard key={index} cardData={item} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServiceSection;
