import React from "react";
import CustomButton from "../../reusables/buttons/CustomButton";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between p-5 my-15 max-sm:flex-col max-sm:my-2
     max-sm:bg-[url('/images/hero.png')]
        max-sm:bg-size-[420px] 
        max-sm:bg-center 
        max-sm:bg-no-repeat 
        max-sm:relative
         max-sm:bg-(--background)/60
  max-sm:bg-blend-darken
        " 

 

        id="home">
        <div className="pb-10 flex  flex-col">
            <p className="uppercase tracking-widest font-semibold max-sm:text-center ">Built Strong</p>
            <p className="text-6xl mt-6 max-sm:text-4xl max-sm:text-center">Transform<span className="text-(--primary-color)"> Your Body.</span> </p>
            <p className="text-6xl mt-6 max-sm:text-4xl max-sm:text-center">Transform<span className="text-(--primary-color)"> Your Life.</span></p>
            <p className="font-light mt-6">
            Join the ultimate fitness experience with expert trainers, modern<br/>
            equipment, and personalized workout plans.
            </p>
            <div className="flex gap-3 mt-6 max-sm:flex-col max-sm:items-center">
                <CustomButton >Join Now</CustomButton>
                <CustomButton invert >View Plans</CustomButton>
            </div>
        </div>
        <div className="max-sm:hidden">
            <img src="/images/hero.png" alt="" className="w-2xl filter brightness-70" />
        </div>
    </div>
  );
};

export default HeroSection;
