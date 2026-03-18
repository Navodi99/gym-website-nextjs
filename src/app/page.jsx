import Image from "next/image";
import Link from "next/link";
import Navigation from "./(components)/sections/navigation/Navigation";
import HeroSection from "./(components)/sections/hero/HeroSection";
import AboutUsSection from "./(components)/sections/about/AboutUsSection";
import ServiceSection from "./(components)/sections/servicePart/ServiceSection";

export default function Home() {
  return (
  <div className="w-full h-screen flex flex-col gap-5 m-0 px-15 py-5">
  <Navigation/>
  <HeroSection/>
  <AboutUsSection/>
  <ServiceSection/>
  </div>
  );
}
