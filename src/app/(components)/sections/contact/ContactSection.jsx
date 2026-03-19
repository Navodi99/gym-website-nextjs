import { MailCheck, MapPin, Phone } from "lucide-react";
import React from "react";
import CustomButton from "../../reusables/buttons/CustomButton";

const ContactSection = () => {
  return (
    <div className="max-sm:flex-col flex justify-between border-t-4 border-(--primary-color) gap-10 rounded-l-3xl rounded-r-3xl mb-15 p-5" id="contact">
      <div className="flex flex-col  px-10">
        <div className="flex flex-col">
          <p className="uppercase tracking-widest font-bold text-2xl text-(--primary-color) ">
            Contact
          </p>
          <p className="font-medium text-4xl mt-5">Get In Touch</p>
          <p className="text-sm mt-5">
            Ready to start? Have questions about our plans or facility? <br/>Drop us
            a message or visit us in person.
          </p>
        </div>
        <div className="flex flex-col items-start gap-10 mt-5">
          <div className="flex items-center gap-5">
            <div className="rounded-full w-14 h-14 bg-(--primary-color) flex items-center justify-center">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <p className=" font-semibold">Location</p>
              <p className="text-sm mt-1">
                No 123, Flower Road,
                <br /> Colombo 07
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="rounded-full w-14 h-14 bg-(--primary-color) flex items-center justify-center">
              <Phone className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <p className=" font-semibold">Phone</p>
              <p className="text-sm mt-1">+94 112 245 556</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="rounded-full w-14 h-14 bg-(--primary-color) flex items-center justify-center">
              <MailCheck className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <p className=" font-semibold">Email</p>
              <p className="text-sm mt-1">fitness@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-(--foreground) w-180 h-fit rounded-l-3xl rounded-r-3xl p-10 m-10">
        <div className="flex flex-col items-start gap-3 ">
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter Your Name"
            className="bg-(--gray-color) w-160 h-fit py-4 rounded-l-xl rounded-r-xl px-5 filter brightness-50"
          />
        </div>
        <div className="flex flex-col items-start gap-3 mt-3">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Your Email"
            className="bg-(--gray-color) w-160 h-fit py-4 rounded-l-xl rounded-r-xl px-5 filter brightness-50"
          />
        </div>
        <div className="flex flex-col items-start gap-3 mt-3">
          <label htmlFor="message" className="">
            Message
          </label>
          <textarea
            name="message"
            id=""
            className="bg-(--gray-color) w-160 h-fit py-8 rounded-l-xl rounded-r-xl px-5 filter brightness-50"
            placeholder="How can we help ?"
          ></textarea>
        </div>
        <div className="mt-6">
          <CustomButton className="w-160">Send Message</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
