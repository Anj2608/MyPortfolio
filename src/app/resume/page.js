// "use client";

// import MyResume from "@/component/MyResume";
// import Navbar from "@/component/Navbar";

// export default function Resume() {
//   return (
//     <>
//     <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat overflow-auto relative"
//       style={{ backgroundImage: "url('/background.jpg')" }} 
//     >

//          <main className="font-sans flex flex-col items-center justify-center min-h-screen px-6 sm:px-20 bg-white/30 backdrop-blur-md rounded-xl shadow-2xl m-8 border border-white/40">
//          <Navbar />
//          <MyResume/>
//          </main>
//     </div>
//     </>
//   )
// }



















"use client";

import MyResume from "@/component/MyResume";
import Navbar from "@/component/Navbar";

export default function Resume() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat overflow-auto relative"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <main className="font-sans flex flex-col items-center justify-start min-h-screen px-4 sm:px-10 lg:px-20 bg-white/30 backdrop-blur-md rounded-xl shadow-2xl m-4 sm:m-8 border border-white/40 py-10">
        <Navbar />
        <MyResume />
      </main>
    </div>
  );
}

