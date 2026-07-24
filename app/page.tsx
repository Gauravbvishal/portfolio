"use client"
 
import Link from "next/link";
 
export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex items-center  ">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="  font-semibold mb-2">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-bold  leading-tight">
              Vishal Gaurav
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold   mt-4">
              MERN Stack Developer
            </h2>

            <p className="mt-6   leading-7">
              I build fast, responsive, and scalable web applications using
              React, Next.js, Node.js, Express.js, and MongoDB. I enjoy creating
              clean user interfaces and solving real-world problems through code.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                href="/projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-blue-100 flex items-center justify-center shadow-xl">
              <span className="text-8xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
