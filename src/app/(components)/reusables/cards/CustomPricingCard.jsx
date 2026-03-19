import { Check } from "lucide-react";
import React from "react";
import CustomButton from "../buttons/CustomButton";

const CustomPricingCard = () => {
  return (
    <div className="relative w-78 h-[calc(fit-content+40px)] py-8 border-x-2 border-(--foreground) overflow-y-hidden overflow-x-hidden ">
      <div className="absolute w-78 h-8 bg-(--secondary-color) top-3 -rotate-4 border-t-2 border-(--foreground)" />
      <div className="bg-(--secondary-color) border border-(--foreground) w-78 h-fit px-5 py-8 ">
        <p className="text-2xl font-semibold ">Basic Plan</p>
        <p className="text-2xl font-semibold text-(--primary-color)">Starter</p>
        <p className="text-sm my-4">Perfect for getting back into a routine.</p>
        <p className="text-3xl font-bold">
          <span className="text-(--primary-color)">LKR 5000</span> / mo
        </p>

        <div className="flex items-start flex-col gap-5 mt-5">
          <div className="flex items-start gap-5">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[radial-gradient(circle,var(--primary-color)_60%,var(--secondary-color)_100%)]">
              <Check className="w-4 h-4 text-(--background)" />
            </div>
            <p className="text-sm">Access to gym equipment</p>
          </div>
          <div className="flex items-start gap-5">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[radial-gradient(circle,var(--primary-color)_60%,var(--secondary-color)_100%)]">
              <Check className="w-4 h-4 text-(--background)" />
            </div>
            <p className="text-sm">Cardio & weight training area</p>
          </div>
          <div className="flex items-start gap-5">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[radial-gradient(circle,var(--primary-color)_60%,var(--secondary-color)_100%)]">
              <Check className="w-4 h-4 text-(--background)" />
            </div>
            <p className="text-sm">Locker facility</p>
          </div>
          <div className="flex items-start gap-5">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[radial-gradient(circle,var(--primary-color)_60%,var(--secondary-color)_100%)]">
              <Check className="w-4 h-4 text-(--background)" />
            </div>
            <p className="text-sm">Free fitness assessment</p>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <CustomButton>Enroll Now</CustomButton>
        </div>
      </div>
      <div className="absolute w-78 h-8 bg-(--secondary-color) bottom-3 -rotate-4 border-b-2 border-(--foreground)" />
    </div>
  );
};

export default CustomPricingCard;
