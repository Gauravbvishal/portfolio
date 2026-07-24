"use client";

export default function Contact() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">Contact Me</h1>
          <p className="mt-4 text-gray-500">
            Have a project or opportunity? Let's connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border rounded-xl p-6 shadow">
              <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>

              <p className="mb-4">
                I'm always interested in discussing new opportunities,
                freelance work, or collaborating on exciting projects.
              </p>

              <div className="space-y-3">
                <p>
                  <strong>Email:</strong> your.email@example.com
                </p>

                <p>
                  <strong>Location:</strong> Bengaluru, India
                </p>

                <p>
                  <strong>Role:</strong> MERN Stack Developer
                </p>
              </div>
            </div>

            <div className="border rounded-xl p-6 shadow">
              <h2 className="text-2xl font-bold mb-4">Follow Me</h2>

              <div className="space-y-3">
                <p>GitHub</p>
                <p>LinkedIn</p>
                <p>Portfolio</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border rounded-xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}