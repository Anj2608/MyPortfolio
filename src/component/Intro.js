export default function Intro() {
  return (
    <div className="bg-white text-black absolute top-20 left-0 right-0 mx-auto max-w-5xl rounded-md shadow-md px-6 py-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/girl.webp" // Replace with your image path
            alt="Intro"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">Hi 👋, I'm Anjali</h1>
          <p className="text-gray-700 leading-relaxed">
            I'm a web developer passionate about building responsive and
            interactive user interfaces. I love working with modern tools like
            React and Tailwind, and I'm always exploring new technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
