"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Or use any icon library

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-4 right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 bg-white bg-opacity-80 px-4 py-2 rounded-md shadow-md flex items-center gap-2"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="font-medium">Menu</span>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="mt-2 w-40 bg-white bg-opacity-90 rounded-md shadow-md py-2 text-center">
            <Link
              href="/"
              className="block py-2 hover:bg-blue-100 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:bg-blue-100 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              href="/resume"
              className="block py-2 hover:bg-blue-100 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
          </div>
        )}
      </div>
  )
}















// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // Or use any icon library

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="text-xl font-bold text-gray-800">MyPortfolio</div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-6">
//             <Link href="/" className="text-gray-700 hover:text-blue-500">
//               Home
//             </Link>
//             <Link href="/about" className="text-gray-700 hover:text-blue-500">
//               About
//             </Link>
//           </div>

//           {/* Mobile Toggle Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-4 pb-4">
//           <Link
//             href="/"
//             className="block py-2 text-gray-700 hover:text-blue-500"
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className="block py-2 text-gray-700 hover:text-blue-500"
//           >
//             About
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }

