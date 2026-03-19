"use client";
import clsx from "clsx";
import { MoveUpRight } from "lucide-react";

const CustomButton = ({ children, invert, className }) => {
  return (
    <div className={clsx("flex items-center group cursor-pointer",className)}>
      <div
        className={clsx(
          "border-2 rounded-full flex px-6 py-3 transition-all duration-300",className,
          invert
            ? "bg-(--primary-color) border-(--primary-color) group-hover:bg-transparent"
            : "border-(--primary-color) group-hover:bg-(--primary-color)"
        )}
      >
        <span className="text-white uppercase tracking-widest">
          {children}
        </span>
      </div>

      <div
        className={clsx(
          "border-2 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300",
          invert
            ? "bg-(--primary-color) border-(--primary-color) group-hover:bg-transparent"
            : "border-(--primary-color) group-hover:bg-(--primary-color)"
        )}
      >
        <MoveUpRight className="text-white w-6 h-6" strokeWidth={0.8} />
      </div>
      
    </div>
  );
};

export default CustomButton;