import { Check } from "lucide-react";
import React from "react";
import CustomButton from "../buttons/CustomButton";

const CustomPricingCard = ({cardItem}) => {
  return (
    <div className="relative w-78 h-[calc(fit-content+40px)] py-8  overflow-y-hidden overflow-x-hidden ">
      {/* <div className="absolute w-78 h-8 bg-(--secondary-color) top-3 -rotate-4 border-t-2 border-(--foreground)" /> */}   
      <div className="bg-(--secondary-color)  w-78 h-fit px-5 py-8 border-2 border-(--foreground) -skew-y-[4deg]">
        <p className="text-2xl font-semibold skew-y-[4deg] ">{cardItem.header}</p>
        <p className="text-2xl font-semibold text-(--primary-color) skew-y-[4deg]">{cardItem.text}</p>
        <p className="text-sm my-4 skew-y-[4deg]">{cardItem.description}</p>
        <p className="text-3xl font-bold skew-y-[4deg]">
          <span className="text-(--primary-color) skew-y-[4deg]">{cardItem.price}</span> / mo
        </p>

        <div className="flex items-start flex-col gap-5 mt-5 skew-y-[4deg]">
          {cardItem.information.map((item,index)=>(
          <div className="flex items-start gap-5 " key={index}>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[radial-gradient(circle,var(--primary-color)_60%,var(--secondary-color)_100%)]">
              <Check className="w-4 h-4 text-(--background)" />
            </div>
            <p className="text-sm">{item}</p>
          </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-center skew-y-[4deg]">
          <CustomButton>Enroll Now</CustomButton>
        </div>
      </div>
      {/* <div className="absolute w-78 h-8 bg-(--secondary-color) bottom-3 -rotate-4 border-b-2 border-(--foreground)" /> */}
    </div>
  );
};

export default CustomPricingCard;
