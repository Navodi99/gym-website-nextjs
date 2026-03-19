"use client";
import { Check } from "lucide-react";
import React from "react";
import CustomButton from "../../reusables/buttons/CustomButton";
import CustomPricingCard from "../../reusables/cards/CustomPricingCard";
import { motion } from "framer-motion";
import { container, fadeIn, fadeUp } from "@/app/(utils)/animation";

const PricingSection = () => {
  const pricingData = [
    {
      header: "Basic Plan",
      text: "Starter",
      description: "Perfect for getting back into a routine.",
      price: "LKR 5000",
      information: [
        "Access to gym equipment",
        "Cardio & weight training area",
        "Locker facility",
        "Free fitness assessment",
      ],
    },

    {
      header: "Standard Plan ",
      text: "Most Popular",
      description: "Everything you need for serious results.",
      price: "LKR 8500",
      information: [
        "Everything in Basic",
        "Group classes (Zumba, HIIT, Yoga)",
        "Diet guidance (basic)",
        "2 personal training sessions / mo",
      ],
    },

    {
      header: "Premium Plan",
      text: "Pro Fitness",
      description: "The ultimate coaching and facility experience.",
      price: "LKR 15000",
      information: [
        "Unlimited access",
        "Personal trainer (weekly sessions)",
        "Customized workout & diet plan",
        "Free fitness Access to premium facilities",
      ],
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className=" border-2 border-(--primary-color) rounded-2xl mb-15 p-5 max-sm:my-2"
      id="pricing"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex flex-col items-center"
      >
        <motion.p
          variants={fadeUp}
          className="uppercase tracking-widest font-bold text-2xl text-(--primary-color) text-center max-sm:text-xl"
        >
          Pricing
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-4xl text-center mt-5 max-sm:text-2xl"
        >
          Choose Your Plan
        </motion.p>
        <motion.p
          variants={fadeIn}
          className="text-sm text-center px-98 mt-7  max-sm:px-2"
        >
          No hidden fees. No complicated contracts. Just straightforward pricing
          for real
        </motion.p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex items-center justify-center gap-40 my-5 max-sm:flex-col max-sm:gap-0 "
      >
        {pricingData.map((item, index) => (
          <CustomPricingCard key={index} cardItem={item} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PricingSection;
