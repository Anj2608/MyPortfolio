"use client";

import Navbar from "@/component/Navbar";
import AboutUs from "@/component/AboutUs";
export default function About() {
  return (
    <>
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat overflow-auto relative"
      style={{ backgroundImage: "url('/background.jpg')" }} 
    >

         <main className="font-sans flex flex-col items-center justify-center min-h-screen px-6 sm:px-20 bg-white/30 backdrop-blur-md rounded-xl shadow-2xl m-8 border border-white/40">
         <Navbar />
         <AboutUs/>
         </main>
    </div>
    </>
  )
}
