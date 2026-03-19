"use client";
import React, { useState } from "react";
import CustomButton from "../../reusables/buttons/CustomButton";
import clsx from "clsx";
import { navigate } from "next/dist/client/components/segment-cache/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/(context)/ThemeContext";

function Navigation() {
  const { theme, toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

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
    <div className="flex justify-between items-center w-full h-20 ">
      <div className="rounded-full w-20 overflow-hidden ">
        <img src="/images/GymLogo.jpg" alt="Logo" className="w-40 " />
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-(--foreground) dark:bg-(--background) text-(--background) dark:text-(--foreground) transition border-2 flex items-center justify-center hover:scale-110 active:scale-95"
        aria-label="Toggle Dark Mode"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
      <div className="max-lg:hidden">
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
      <div className="max-lg:hidden">
        <CustomButton onclick={onclickContactBtn}>Contact Us</CustomButton>
      </div>

      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`absolute top-0 left-0 max-h-96 bg-(--primary-color)/95 z-10 text-(--foreground) transition-all duration-300 overflow-hidden ${
          isOpen ? " py-4 w-[60%]" : "w-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-10 pl-10">
          {navData.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-yellow-400 font-bold "
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
