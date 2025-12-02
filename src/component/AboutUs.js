import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white text-black backdrop-blur-md absolute top-20 left-0 right-0 mx-auto max-w-5xl rounded-md shadow-lg px-6 py-10 border border-white/40">
      
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="w-full md:w-1/3">
          <Image
            src="/profile.jpg" // Make sure to add this image in /public
            alt="Profile"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Intro + Skills */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <p className="text-gray-700 leading-relaxed mb-4">
            I&#39;m Anjali, a passionate web developer from Jharkhand with experience in building responsive websites and dynamic web apps using React, Next.js, Node.js, and Tailwind CSS. I love solving problems, learning new tools, and turning ideas into functional, beautiful experiences.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Tech Stack:</h3>
          <ul className="flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">React</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">Next.js</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">Tailwind CSS</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">Node.js</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">MySQL</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">Three.js</li>
            <li className="bg-white/70 px-3 py-1 rounded-full shadow">WordPress</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Outside of Code:</h3>
          <p className="text-gray-700">
            I enjoy reading books, drawing Mandala art, watching K-dramas 🎬, and listening to music. I&#39;m curious, self-driven, and always eager to grow as a full-stack developer.
          </p>
        </div>
      </div>
    </div>
  );
}
