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

const ServiceSection = () => {
  const serviceSectionData = [
    {
      icon: <BicepsFlexed className="w-8 h-8 text-(--primary-color)" />,
      header: "Strength Training",
      text: "Olympic lifting platforms, premium free weights, and state-of-the-art resistance machines.",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-(--primary-color)" />,
      header: "Cardio Zone",
      text: "High-end treadmills, rowers, and assault bikes to build your endurance and stamina.",
    },
    {
      icon: <PersonStanding className="w-8 h-8 text-(--primary-color)" />,
      header: "Yoga & Flexibility",
      text: "Dedicated studio space for mobility work, yoga classes, and active recovery.",
    },
    {
      icon: <HandFist className="w-8 h-8 text-(--primary-color)" />,
      header: "Personal Training",
      text: "1-on-1 coaching with certified experts who build custom programs for your goals.",
    },
    {
      icon: <HandPlatter className="w-8 h-8 text-(--primary-color)" />,
      header: "Nutrition Coaching",
      text: "Fuel your body right with personalized meal plans and macro tracking guidance.",
    },
    {
      icon: <Gem className="w-8 h-8 text-(--primary-color)" />,
      header: "Recovery & Wellness",
      text: "Cold plunges, saunas, and massage therapy to help you bounce back faster.",
    },
  ];

  return (
    <div className=" flex items-center flex-col">
        <div className="mt-5">
            <p className="uppercase tracking-widest font-bold text-2xl text-(--primary-color) text-center mt-5">
            Services
            </p>
            <p className="text-4xl text-center mt-5">What We Offer</p>
            <p className="text-sm text-center px-98 mt-7">
            Everything you need to build strength, increase endurance, and recover
            properly under one roof.
            </p>
        </div>

        <div className="grid grid-cols-3 gap-x-36 gap-y-4">
            {serviceSectionData.map((item, index) => (
            <CustomServiceCard key={index} cardData={item} />
            ))}
        </div>
    </div>
  );
};

export default ServiceSection;
