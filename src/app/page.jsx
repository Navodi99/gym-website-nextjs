import Image from "next/image";
import Link from "next/link";
import Navigation from "./(components)/sections/navigation/Navigation";
import HeroSection from "./(components)/sections/hero/HeroSection";
import AboutUsSection from "./(components)/sections/about/AboutUsSection";
import ServiceSection from "./(components)/sections/servicePart/ServiceSection";
import PricingSection from "./(components)/sections/pricing/PricingSection";
import TrainerSection from "./(components)/sections/Trainers/TrainerSection";
import ContactSection from "./(components)/sections/contact/ContactSection";
import Footer from "./(components)/sections/footer/Footer";

export default function Home() {
  return (
  <div className="w-full h-screen flex flex-col gap-5 m-0 px-15 py-5">
  <Navigation/>
  <HeroSection/>
  <AboutUsSection/>
  <ServiceSection/>
  <PricingSection/>
  <TrainerSection/>
  <ContactSection/>
  <Footer/>
  </div>
  );
}
