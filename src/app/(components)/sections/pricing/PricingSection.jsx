import { Check } from "lucide-react";
import React from "react";
import CustomButton from "../../reusables/buttons/CustomButton";
import CustomPricingCard from "../../reusables/cards/CustomPricingCard";

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
    <div className="pb-50 border-2 border-(--primary-color) rounded-2xl mt-5" id="pricing">
      <div className="mt-5">
        <p className="uppercase tracking-widest font-bold text-2xl text-(--primary-color) text-center mt-5">
          Pricing
        </p>
        <p className="text-4xl text-center mt-5">Choose Your Plan</p>
        <p className="text-sm text-center px-98 mt-7">
          No hidden fees. No complicated contracts. Just straightforward pricing
          for real
        </p>
      </div>
      <div className="flex items-center justify-center gap-20 mt-5">
        {pricingData.map((item, index) => (
          <CustomPricingCard key={index} cardItem={item} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
