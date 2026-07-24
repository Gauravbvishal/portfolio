"use client";

export default function About() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="mt-4 text-lg text-gray-500">
            Passionate Full Stack Developer building modern and scalable web
            applications.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-2xl bg-blue-100 flex items-center justify-center shadow-lg">
              <span className="text-8xl">👨‍💻</span>
            </div>
          </div>

          {/* About Text */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Hi, I'm Vishal Gaurav
            </h2>

            <p className="leading-8 mb-4">
              I'm a Full Stack MERN Developer with 2 years of experience
              developing responsive and user-friendly web applications. I enjoy
              solving real-world problems through clean, maintainable code and
              creating seamless user experiences.
            </p>

            <p className="leading-8 mb-4">
              My primary technologies include React.js, Next.js, Node.js,
              Express.js, MongoDB, JavaScript, and Tailwind CSS. I also have
              experience working with REST APIs, SQL databases, Git, and
              deployment platforms.
            </p>

            <p className="leading-8 mb-8">
              I continuously learn new technologies, improve my development
              skills, and enjoy building projects that strengthen my knowledge
              of modern web development.
            </p>

            {/* Info */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">Name</h4>
                <p>Vishal Gaurav</p>
              </div>

              <div>
                <h4 className="font-semibold">Experience</h4>
                <p>2 Years</p>
              </div>

              <div>
                <h4 className="font-semibold">Location</h4>
                <p>Bengaluru, India</p>
              </div>

              <div>
                <h4 className="font-semibold">Email</h4>
                <p>your.email@example.com</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-4">
                Technical Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "SQL",
                  "Tailwind CSS",
                  "Git",
                  "REST APIs",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-blue-500 text-blue-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}