import React from "react";
export default function MyResume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-16">
      <div className="bg-white text-black backdrop-blur-md max-w-5xl mx-auto rounded-md shadow-xl px-6 py-10 border border-gray-200">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">My Resume</h2>

        {/* Summary / Introduction */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Summary</h3>
          <p className="text-gray-600">
            I'm Anjali Singh, a MERN Stack Developer with experience in React, Node.js, Next.js, Tailwind CSS, and MongoDB. I build responsive, user-focused applications and love working on innovative web projects.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Skills</h3>
          <ul className="flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="bg-gray-100 px-3 py-1 rounded-full">React.js</li>
            <li className="bg-gray-100 px-3 py-1 rounded-full">Next.js</li>
            <li className="bg-gray-100 px-3 py-1 rounded-full">Node.js</li>
            <li className="bg-gray-100 px-3 py-1 rounded-full">MongoDB</li>
            <li className="bg-gray-100 px-3 py-1 rounded-full">Tailwind CSS</li>
            <li className="bg-gray-100 px-3 py-1 rounded-full">Express.js</li>
            <li className="bg-gray-100 px-3 py-1 rounded-full">Three.js</li>
            <li className="bg-gray-100 px-3 py-1 rounded-full">WordPress</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Projects</h3>
          <ul className="space-y-4">
            <li>
              <strong>Book Banao</strong> – A platform to design and order custom books using React & Node.js.
            </li>
            <li>
              <strong>School Management System</strong> – Built with MERN stack to manage students, fees, and attendance.
            </li>
            <li>
              <strong>AR Video Creator</strong> – React + Python project for generating interactive AR videos.
            </li>
            <li>
              <strong>E-commerce Grocery Store</strong> – WordPress site with WooCommerce integration.
            </li>
          </ul>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Education</h3>
          <p className="text-gray-600">
            B.Tech in Computer Science – [Your College Name], [Year]
          </p>
        </section>

        {/* Resume Download */}
        <div className="text-center mt-10">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
