"use client";

const skills = {
  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
  ],
  Database: [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Supabase",
  ],
  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Figma",
  ],
};

export default function Skills() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">My Skills</h1>
          <p className="mt-4 text-gray-500">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold mb-6">{category}</h2>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            What I Focus On
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">
                Frontend Development
              </h3>
              <p>
                Building responsive, accessible, and user-friendly interfaces
                using React, Next.js, and Tailwind CSS.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">
                Backend Development
              </h3>
              <p>
                Developing scalable REST APIs with Node.js, Express.js, JWT,
                and secure authentication.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">
                Database Management
              </h3>
              <p>
                Designing and managing MongoDB, PostgreSQL, and MySQL databases
                for efficient applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}