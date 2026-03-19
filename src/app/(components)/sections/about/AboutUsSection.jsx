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
    <div className="bg-(--gray-color) border-t-4 border-(--primary-color) rounded-3xl mb-15 p-5" id="about">
      <div>
        <p className="uppercase tracking-widest font-bold text-2xl text-(--primary-color) text-center ">
          About Us
        </p>
        <p className="text-4xl text-center mt-5">
          Built for Everyone. Powered by Passion.
        </p>
        <p className="text-sm text-center px-90 mt-7">
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
      <div className="flex items-center justify-center gap-48 my-7">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="rounded-full border-2 border-(--primary-color) w-27 h-27 flex flex-col items-center justify-center">
            {item.icon}
            <p className="text-center text-sm mt-3">{item.text1}<br/>{item.text2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;
