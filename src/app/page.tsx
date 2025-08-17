// app/page.tsx
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Yuki</h1>
          <p className="text-xl mb-8">
            Software engineer, gamer, and creator — building tools, websites,
            and experiences that inspire.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100"
          >
            View My Work
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/profile.jpg"
              alt="Yuki"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="mb-4 text-gray-700">
              I'm a developer passionate about creating seamless and visually
              appealing user experiences. From building modern web apps to
              designing game tools, my focus is on both functionality and
              aesthetics.
            </p>
            <p className="text-gray-700">
              When I'm not coding, you can find me playing strategy games,
              exploring new tech, and crafting digital experiences for the
              gaming community.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Project 1", "Project 2", "Project 3"].map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/images/project-${idx + 1}.jpg`}
                  alt={project}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{project}</h3>
                  <p className="text-gray-600 text-sm">
                    A short description of this project goes here. Highlight
                    your role, tech stack, and achievements.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-700 mb-8">
            Interested in working together or just want to say hello? I'd love
            to hear from you.
          </p>
          <Button
            size="lg"
            className="bg-blue-700 text-white hover:bg-blue-800"
          >
            Contact Me
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} Yuki — All Rights Reserved
      </footer>
    </main>
  );
}
