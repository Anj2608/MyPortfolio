// "use client";

// import Navbar from "@/component/Navbar";
// import Intro from "@/component/Intro";

// export default function Home() {
//   return (
//     <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat overflow-auto relative"
//       style={{ backgroundImage: "url('/background.jpg')" }} 
//     >
//       {/* Main Content */}
//       <main className="font-sans flex flex-col items-center justify-center h-[600px] px-6 sm:px-20 bg-white/30 backdrop-blur-md rounded-xl shadow-2xl m-8 border border-white/40">
//         <Navbar />
//         <Intro />
//       </main>
//     </div>
//   );
// }

























"use client";

import Navbar from "@/component/Navbar";
import Intro from "@/component/Intro";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Navbar on top */}

      <div className="w-full py-4 px-6">
        <Navbar />
      </div>

      {/* Centered Intro Section */}
      <main className="w-full flex justify-center px-4 sm:px-6 md:px-10 mt-6 mb-10">
        <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-2xl border border-white/40 w-full max-w-6xl p-4 sm:p-6 md:p-8">
          <Intro />
        </div>
      </main>
    </div>
  );
}
