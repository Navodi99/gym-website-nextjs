import Image from "next/image";
import Link from "next/link";
import Navigation from "./(components)/sections/navigation/Navigation";

export default function Home() {
  return (
  <div className="w-full h-screen flex flex-col gap-5 m-0 px-20 py-10">
  <Navigation/>
  </div>
  );
}
