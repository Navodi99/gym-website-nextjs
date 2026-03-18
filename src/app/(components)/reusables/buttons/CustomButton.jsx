import { MoveUpRight } from "lucide-react";
import React from "react";


const CustomButton = ({ children }) => {
  return (
    <div className="flex items-center">
      <div className="border-2 border-(--primary-color) rounded-l-full rounded-r-full p-10 flex">
        <span className="text-white">{children}</span>
      </div>
      <div className=" border-2 border-(--primary-color) rounded-full w-12 h-12 ">
        <MoveUpRight className="text-white w-4 h-4" />
      </div>
    </div>
  );
};

export default CustomButton;
{
  /* <div className="flex h-fit w-fit items-center">
      <div className=" w-fit h-fit p-2 bg-(--primary-color) rounded-l-full rounded-r-full">
        <span className="text-(--light-color)">{children}</span>
      </div>
      <div className="flex items-center justify-center text-(--light-color) w-fit h-fit bg-(--primary-color) rounded-full p-2" >
        <GoArrowUpRight className="w-15 h-15" />
      </div>
    </div> */
}
