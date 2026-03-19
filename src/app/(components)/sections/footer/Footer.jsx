import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between border-t border-(--primary-color) py-2 max-sm:gap-3 ">
      <div className="max-sm:hidden">
        <div className="rounded-full w-20 overflow-hidden ">
          <img src="/images/GymLogo.jpg" alt="Logo" className="w-40 "  />
        </div>
      </div>

      <div>
        <p className="text-sm max-sm:text-xs ">© 2026  FITNESS CENTER. All rights reserved.</p>
      </div>
      <div>
        <div className="text-(--primary-color) flex items-center justify-center gap-7">
          <Facebook className="w-8 h-8 max-sm:w-4 max-sm:h-4"/>
          <Instagram className="w-8 h-8 max-sm:w-4 max-sm:h-4"/>
          <Linkedin className="w-8 h-8 max-sm:w-4 max-sm:h-4"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
