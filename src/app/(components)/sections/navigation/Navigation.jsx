"use client";
import React, { useState } from "react";
import CustomButton from "../../reusables/buttons/CustomButton";
import clsx from "clsx";
import { navigate } from "next/dist/client/components/segment-cache/navigation";

function Navigation() {
  const navData = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Services", link: "#services" },
    { id: 4, name: "Pricing", link: "#pricing" },
    { id: 5, name: "Trainers", link: "#trainers" },
  ];

  const [activeMenuItem, setActiveMenuItem] = useState(1);

  const onclickMenuItem = (id, link) => {
    setActiveMenuItem(id);

    const sectionId = link.replace("#", "");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const onclickContactBtn = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-between items-center w-full h-20">
      <div className="rounded-full w-20 overflow-hidden ">
        <img src="/images/GymLogo.jpg" alt="Logo" className="w-40 " />
      </div>
      <div>
        <ul className="flex gap-14 text-(--light-color) uppercase">
          {navData.map((item) => (
            <li
              key={item.id}
              onClick={() => onclickMenuItem(item.id, item.link)}
              className={clsx(
                "cursor-pointer pb-1",
                activeMenuItem === item.id &&
                  "border-b-2 border-(--primary-color)",
              )}
            >
              <a href={item.link} onClick={(e) => e.preventDefault()}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <CustomButton onclick={onclickContactBtn}>Contact Us</CustomButton>
      </div>
    </div>
  );
}

export default Navigation;
