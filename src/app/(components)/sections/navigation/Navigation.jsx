"use client";
import React, { useState } from "react";
import CustomButton from "../../reusables/buttons/CustomButton";
import clsx from "clsx";

function Navigation() {
  const [activeMenuItem,setActiveMenuItem] = useState(1);

  const onclickMenuItem = ({id})=>{
setActiveMenuItem(id);
  }
  return (
    <div className="flex justify-between items-center w-full h-20"> 
      <div className="rounded-full w-20 overflow-hidden ">
        <img  src="/images/GymLogo.jpg"  alt="Logo" className="w-40 " />
      </div>
      <div>
        <ul className="flex gap-14 text-(--light-color) uppercase">
            <li className={clsx(activeMenuItem === 1 ?" border-b-2 border-b-(--primary-color)":"")} onClick={()=>onclickMenuItem(1)}><a href="">Home</a></li>
            <li className={clsx(activeMenuItem === 2 ?" border-b-2 border-b-(--primary-color)":"")} onClick={()=>onclickMenuItem(2)}><a href="">About</a></li>
            <li className={clsx(activeMenuItem === 3 ?" border-b-2 border-b-(--primary-color)":"")} onClick={()=>onclickMenuItem(3)}><a href="">Services</a></li>
            <li className={clsx(activeMenuItem === 4 ?" border-b-2 border-b-(--primary-color)":"")} onClick={()=>onclickMenuItem(4)}><a href="">Pricing</a></li>
            <li className={clsx(activeMenuItem === 5 ?" border-b-2 border-b-(--primary-color)":"")} onClick={()=>onclickMenuItem(5)}><a href="">Trainers</a></li>
        </ul>
      </div>
      <div>
        <CustomButton>Contact Us</CustomButton>
      </div>
    </div>
  );
}

export default Navigation;
