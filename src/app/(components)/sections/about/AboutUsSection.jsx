import {
  AudioWaveform,
  BicepsFlexed,
  Dumbbell,
  HeartHandshake,
} from "lucide-react";
import React from "react";

const AboutUsSection = () => {
  const aboutData = [
    {
      icon: <Dumbbell className="w-8 h-8 text-(--primary-color)" />,
      text1: "24/7",
      text2: "Access",
    },
    {
      icon: <BicepsFlexed className="w-8 h-8 text-(--primary-color)" />,
      text1: "Personal",
      text2: "Training",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-(--primary-color)" />,
      text1: "Certified",
      text2: "Trainers",
    },
    {
      icon: <AudioWaveform className="w-8 h-8 text-(--primary-color)" />,
      text1: "Modern",
      text2: "Vibes",
    },
  ];

  return (
    <div className="  max-sm:flex-col bg-(--gray-color) border-t-4 border-(--primary-color) rounded-3xl mb-15 p-5 max-sm:my-2" id="about">
      <div>
        <p className="uppercase tracking-widest font-bold text-2xl text-(--primary-color) text-center  max-sm:text-xl">
          About Us
        </p>
        <p className="text-4xl text-center mt-5 max-sm:text-2xl">
          Built for Everyone. Powered by Passion.
        </p>
        <p className="text-sm text-center px-90 mt-7 max-sm:px-2 ">
          We provide the best environment, the best equipment, and the best
          coaching to help
          <br /> people achieve their absolute peak potential.
          <br /> We aren't a corporate chain. We are a locally owned powerhouse
          dedicated to real
          <br /> results. Whether you're a seasoned athlete or just starting
          your fitness journey, our
          <br /> facility is designed to push you further.
        </p>
      </div>
      <div className=" max-sm:mb-0 max-sm:gap-y-5 flex items-center justify-center gap-48 my-7 max-sm:grid max-sm:gap-2 max-sm:grid-cols-2 max-sm:place-items-center">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="rounded-full border-2 border-(--primary-color) w-27 h-27 flex flex-col items-center justify-center
            max-sm:w-24 max-sm:h-24 max-sm:rounded-full 
            ">
            {item.icon}
            <p className="text-center text-sm mt-3 max-sm:text-xs">{item.text1}<br/>{item.text2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;
