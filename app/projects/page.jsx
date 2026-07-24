"use client";

import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Real-Time Collaboration Platform",
    description:
      "A collaborative workspace where multiple users can communicate and work together in real time. Built with authentication, role-based access, and live updates.",
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Feedback Management System",
    description:
      "A platform that collects customer feedback and provides an admin dashboard with analytics, charts, filtering, and product insights.",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Government Career Hub",
    description:
      "A web application that helps users explore government job opportunities, search vacancies, and manage applications through a responsive interface.",
    tech: [
      "React.js",
      "Express.js",
      "Supabase",
      "JWT",
      "Tailwind CSS",
    ],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">My Projects</h1>
          <p className="mt-4 text-lg text-gray-500">
            Here are some of the projects I've built using the MERN stack and
            modern web technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              {/* Project Image Placeholder */}
              <div className="h-52 bg-blue-100 flex items-center justify-center">
                <span className="text-7xl">💻</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold">{project.title}</h2>

                <p className="mt-4 text-gray-600 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                  <Link
                    href={project.github}
                    className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                  >
                    GitHub
                  </Link>

                  <Link
                    href={project.demo}
                    className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold">
            Interested in working together?
          </h2>

          <p className="mt-4 text-gray-500">
            I'm always open to new opportunities and exciting projects.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}