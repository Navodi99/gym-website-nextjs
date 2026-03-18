import { Check } from "lucide-react";
import React from "react";
import CustomButton from "../../reusables/buttons/CustomButton";
import CustomPricingCard from "../../reusables/cards/CustomPricingCard";

const PricingSection = () => {
  return (
    <div className="pb-50 border-2 border-(--primary-color) rounded-2xl mt-5">
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
      <div>
        {/* <div className="bg-(--secondary-color) border border-(--foreground) w-78 h-fit px-5 py-4">
            
                <p className="text-2xl font-semibold ">Basic Plan</p>
                <p className="text-2xl font-semibold text-(--primary-color)">Starter</p>
                <p className="text-sm my-4">Perfect for getting back into a routine.</p>
                <p className="text-3xl font-bold"><span className="text-(--primary-color)">LKR 5000</span> / mo</p>
            
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
        </div> */}
        <CustomPricingCard/>
      </div>
    </div>
  );
};

export default PricingSection;
