import { MapPin } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <div className="flex items-center">
        <div className="flex flex-col">
            <div className="flex flex-col">
            <p className="uppercase tracking-widest font-bold text-2xl text-(--primary-color) ">
                Contact
            </p>
            <p className="font-medium text-4xl">Get In Touch</p>
            <p className="text-sm">
                Ready to start? Have questions about our plans or facility? Drop us
                a message or visit us in person.
            </p>
            </div>
            <div>
                <div className="flex items-center gap-5">
                    <div className="rounded-full w-14 h-14 bg-(--primary-color) flex items-center justify-center"  >
                        <MapPin className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col">
                        <p className=" font-semibold">Location</p>
                        <p className="text-sm mt-1">No 123, Flower Road,<br/> Colombo 07</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="border border-(--foreground) w-180 h-150 rounded-l-3xl rounded-r-3xl">
            
        </div>
    </div>
  );
};

export default ContactSection;
