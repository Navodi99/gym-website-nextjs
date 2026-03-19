
import React from "react";
import CustomerTrainerCard from "../../reusables/cards/CustomerTrainerCard";

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
    <div className="" id="trainers">
      <div>
        <p className="uppercase tracking-widest font-bold text-2xl text-(--primary-color) text-center mt-5">
          Team
        </p>
        <p className="text-4xl text-center mt-5">Meet Your Trainers</p>
      </div>

      <div className="flex items-center justify-between gap-12.5 mt-10">
        {trainersData.map((item, index) => (
          <CustomerTrainerCard key={index} cardData={item} />
        ))}
      </div>
    </div>
  );
};

export default TrainerSection;
