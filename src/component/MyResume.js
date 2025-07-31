// import React from "react";
// import { motion } from "framer-motion";

// const experiences = [
//   {
//     title: "Full Stack Developer – Codedotart (2024)",
//     description:
//       "Worked on AR/VR and gaming-based web platforms using React.js, Node.js, and Three.js. Developed dynamic dashboards, integrated APIs, and implemented responsive UI with Tailwind CSS. Contributed to real-time rendering modules and optimized database queries in MySQL, improving app performance by 30%. Collaborated closely with designers and 3D teams for immersive user experiences.",
//   },
//   {
//     title: "Web Developer Intern – Dzinepixel Studio (2023)",
//     description:
//       "Built a Travel Management System using PHP, MySQL, and HTML/CSS. Designed user-friendly interfaces and created backend logic for booking and admin control panels. Implemented secure login/auth features and automated user notifications. Enhanced reporting features and reduced manual work by 40%. Participated in weekly code reviews and testing cycles.",
//   },
// ];

// const projects = [
//   {
//     title: "Book Banao",
//     description:
//       "A full-stack customizable book creation platform built with React.js, Node.js, and Express.js. Enabled users to design personalized books, notebooks, and diaries with real-time preview. Integrated pricing logic and PDF generation. Improved engagement by 30% using dynamic layouts and smooth user flows.",
//   },
//   {
//     title: "School Management System",
//     description:
//       "A role-based MERN stack application with separate dashboards for admin, teachers, and students. Implemented CRUD operations for student records, attendance tracking, fee management, and inventory control. Integrated MongoDB for scalable data storage and JWT for secure login.",
//   },
//   {
//     title: "AR Video Creator",
//     description:
//       "An interactive video generation platform using React.js and Python. Enabled users to create Augmented Reality videos with background removal and dynamic overlays. Used OpenCV and Flask API for real-time video processing and React Webcam for recording functionalities.",
//   },
//   {
//     title: "E-commerce Grocery Store",
//     description:
//       "Built a responsive online grocery store using WordPress and WooCommerce. Customized plugins for product filtering, payment gateway integration, and order tracking. Optimized for mobile and SEO, resulting in faster loading times and increased user retention.",
//   },
// ];

// export default function MyResume() {
//   const renderCard = (item, index) => {
//     const isRight = index % 2 !== 0;

//     return (
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: index * 0.2 }}
//         viewport={{ once: true }}
//         className="relative w-full md:w-1/2 px-4 z-10"
//       >
//         <div
//           className={`bg-white shadow-xl rounded-lg p-6 mb-12 border-l-4 ${
//             isRight ? "md:ml-auto border-blue-400" : "md:mr-auto border-green-400"
//           }`}
//         >
//           <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
//           <p className="text-gray-600 mt-2">{item.description}</p>
//         </div>
//       </motion.div>
//     );
//   };

//   return (
//     <div className="min-h-screen  px-4 py-16">
//       <div className="max-w-6xl mx-auto relative">
//         {/* Vertical timeline line */}
//         <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0" />

//         {/* Experience Section */}
//         <h2 className="text-4xl font-bold text-white mb-12 ">Experience</h2>
//         <div className="flex flex-col md:flex-row flex-wrap">
//           {experiences.map((exp, index) => renderCard(exp, index))}
//         </div>

//         {/* Projects Section */}
//         <h2 className="text-4xl font-bold text-white mt-20 mb-12 ">Projects</h2>
//         <div className="flex flex-col md:flex-row flex-wrap">
//           {projects.map((proj, index) => renderCard(proj, index))}
//         </div>
//       </div>
//     </div>
//   );
// }



















// import React from "react";
// import { motion } from "framer-motion";

// const experiences = [
//   {
//     title: "Full Stack Developer – Codedotart (2024)",
//     description:
//       "Worked on AR/VR and gaming-based web platforms using React.js, Node.js, and Three.js. Developed dynamic dashboards, integrated APIs, and implemented responsive UI with Tailwind CSS. Contributed to real-time rendering modules and optimized database queries in MySQL, improving app performance by 30%. Collaborated closely with designers and 3D teams for immersive user experiences.",
//   },
//   {
//     title: "Web Developer Intern – Dzinepixel Studio (2023)",
//     description:
//       "Built a Travel Management System using PHP, MySQL, and HTML/CSS. Designed user-friendly interfaces and created backend logic for booking and admin control panels. Implemented secure login/auth features and automated user notifications. Enhanced reporting features and reduced manual work by 40%. Participated in weekly code reviews and testing cycles.",
//   },
// ];

// const education = [
//   {
//     title: "Master of Computer Applications – College of Engineering Bhubaneswar (2021–2024)",
//     description:
//       "Pursued advanced topics in software development, web technologies, data structures, and database systems. Built multiple full-stack projects and participated in coding contests and technical events.",
//   },
//   {
//     title: "Bachelor of Science in Mathematics – Karim City College, Jamshedpur (2018–2021)",
//     description:
//       "Studied core mathematical subjects including algebra, calculus, and statistics. Developed strong analytical and problem-solving skills essential for software development.",
//   },
//   {
//     title: "Intermediate (PCM with Computer Science) – CBSE Board (2016–2018)",
//     description:
//       "Chose Physics, Chemistry, Mathematics, and Computer Science as major subjects. Gained early exposure to programming concepts and participated in coding and science exhibitions.",
//   },
//   {
//     title: "Matriculation – CBSE Board (2016)",
//     description:
//       "Completed foundational education with subjects including English, Hindi, Mathematics, Science, and Social Science. Scored distinction and actively participated in co-curricular activities.",
//   },
// ];


// export default function MyResume() {
//   const renderCard = (item, index) => {
//     const isRight = index % 2 !== 0;

//     return (
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: index * 0.2 }}
//         viewport={{ once: true }}
//         className="relative w-full md:w-1/2 px-4 z-10"
//       >
//         <div
//           className={`bg-white shadow-xl rounded-lg p-6 mb-12 border-l-4 ${
//             isRight ? "md:ml-auto border-blue-400" : "md:mr-auto border-green-400"
//           }`}
//         >
//           <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
//           <p className="text-gray-600 mt-2">{item.description}</p>
//         </div>
//       </motion.div>
//     );
//   };

//   return (
//     <div className="min-h-screen  px-4 py-16">
//       <div className="max-w-6xl mx-auto relative">
//         {/* Vertical timeline line */}
//         <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0" />

//         {/* Experience Section */}
//         <h2 className="text-4xl font-bold text-white mb-12 ">Experience</h2>
//         <div className="flex flex-col md:flex-row flex-wrap">
//           {experiences.map((exp, index) => renderCard(exp, index))}
//         </div>

//         {/* Projects Section */}
//         {/* <h2 className="text-4xl font-bold text-white mt-20 mb-12 ">Projects</h2>
//         <div className="flex flex-col md:flex-row flex-wrap">
//           {projects.map((proj, index) => renderCard(proj, index))}
//         </div> */}

//         {/* Education Section */}
// <h2 className="text-4xl font-bold text-white mt-20 mb-12">Education</h2>
// <div className="flex flex-col md:flex-row flex-wrap">
//   {education.map((edu, index) => renderCard(edu, index))}
// </div>

//       </div>

      
//     </div>
//   );
// }















import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer – Codedotart (2024)",
    description:
      "Worked on AR/VR and gaming-based web platforms using React.js, Node.js, and Three.js. Developed dynamic dashboards, integrated APIs, and implemented responsive UI with Tailwind CSS. Contributed to real-time rendering modules and optimized database queries in MySQL, improving app performance by 30%. Collaborated closely with designers and 3D teams for immersive user experiences.",
  },
  {
    title: "Web Developer Intern – Dzinepixel Studio (2023)",
    description:
      "Built a Travel Management System using PHP, MySQL, and HTML/CSS. Designed user-friendly interfaces and created backend logic for booking and admin control panels. Implemented secure login/auth features and automated user notifications. Enhanced reporting features and reduced manual work by 40%. Participated in weekly code reviews and testing cycles.",
  },
];

const education = [
  {
    title: "Master of Computer Applications – College of Engineering Bhubaneswar (2021–2024)",
    description:
      "Pursued advanced topics in software development, web technologies, data structures, and database systems. Built multiple full-stack projects and participated in coding contests and technical events.",
  },
  {
    title: "Bachelor of Science in Mathematics – Karim City College, Jamshedpur (2018–2021)",
    description:
      "Studied core mathematical subjects including algebra, calculus, and statistics. Developed strong analytical and problem-solving skills essential for software development.",
  },
  {
    title: "Intermediate (PCM with Computer Science) – CBSE Board (2016–2018)",
    description:
      "Chose Physics, Chemistry, Mathematics, and Computer Science as major subjects. Gained early exposure to programming concepts and participated in coding and science exhibitions.",
  },
  {
    title: "Matriculation – CBSE Board (2016)",
    description:
      "Completed foundational education with subjects including English, Hindi, Mathematics, Science, and Social Science. Scored distinction and actively participated in co-curricular activities.",
  },
];


export default function MyResume() {
  // const renderCard = (item, index) => {
  //   const isRight = index % 2 !== 0;

  //   return (
  //     <motion.div
  //       key={index}
  //       initial={{ opacity: 0, y: 60 }}
  //       whileInView={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.6, delay: index * 0.2 }}
  //       viewport={{ once: true }}
  //       className="relative w-full md:w-1/2 px-4 z-10"
  //     >
  //       <div
  //         className={`bg-white shadow-xl rounded-lg p-6 mb-12 border-l-4 ${
  //           isRight ? "md:ml-auto border-blue-400" : "md:mr-auto border-green-400"
  //         }`}
  //       >
  //         <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
  //         <p className="text-gray-600 mt-2">{item.description}</p>
  //       </div>
  //     </motion.div>
  //   );
  // };








  const renderTimelineCard = (item, index) => {
  const isRight = index % 2 !== 0;

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative mb-16"
    >
      {/* Dot on the timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full z-20 border-4 border-white shadow-md" />

      {/* Card */}
      <div
        className={`w-full md:w-1/2 px-4 ${
          isRight ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-400">
          <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};


  return (
    <div className="relative max-w-6xl mx-auto before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:-translate-x-1/2 before:bg-gray-300 px-4 py-16">
  {/* Section Header */}
  <h2 className="text-4xl font-bold text-white mb-12 ">Experience</h2>
  
  {experiences.map((exp, index) => renderTimelineCard(exp, index))}

  <h2 className="text-4xl font-bold text-white mt-20 mb-12 ">Education</h2>

  {education.map((edu, index) => renderTimelineCard(edu, index))}
</div>
  );
}
