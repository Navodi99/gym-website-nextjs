import React from "react";
import CustomButton from "../../reusables/buttons/CustomButton";

function Navigation() {
  return (
    <div className="flex justify-between items-center w-full h-20"> 
      <div className="rounded-full w-30 overflow-hidden z-1">
        <img  src="/images/GymLogo.jpg"  alt="Logo" className="w-40 -z-1 rounded-full" />
      </div>
      <div>
        <ul className="flex gap-2 text-(--light-color) uppercase">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Trainers</a></li>
        </ul>
      </div>
      <div>
        <CustomButton>Contact Us</CustomButton>
      </div>
    </div>
  );
}

export default Navigation;
