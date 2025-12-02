import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";

export default function Intro() {
  return (
    // <div className="bg-white text-black absolute top-20 left-0 right-0 mx-auto max-w-5xl rounded-md shadow-md px-6 py-8">
    <div className="bg-white text-black mx-auto max-w-5xl rounded-md shadow-md px-6 py-4">

      <div className="flex flex-col md:flex-row items-center gap-6">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          {/* <img
            src="/anjali.jpg" // Replace with your image path
            alt="Intro"
            className="w-full h-auto rounded-md"
          /> */}

          <Image
  src="/anjali.jpg"
  alt="Intro"
  width={400}
  height={400}
  className="w-full h-auto rounded-md"
/>

        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Hi 👋, I&#39;m Anjali</h1>
          <ReactTyped
        strings={[
          "I&#39;m a MERN Stack Developer",
          "I&#39;m a Frontend Developer",
          "I&#39;m a Full Stack Developer",
          "I&#39;m a React Developer",
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
        className="text-gray-800 text-3xl font-medium"
      />
          <p className="text-gray-700 leading-relaxed">
           I&#39;m Anjali, a passionate web developer from Jharkhand with experience in building responsive websites and dynamic web apps using React, Next.js, Node.js, and Tailwind CSS. I love solving problems, learning new tools, and turning ideas into functional, beautiful experiences.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Tech Stack:</h3>
          <ul className="flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">Javascript</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">React</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">Next.js</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">Tailwind CSS</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">Node.js</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">MySQL</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">Three.js</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">WordPress</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">MongoDb</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">Express.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
