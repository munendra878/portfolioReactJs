const projects = [
  {
    id: 1,
    name: "Online Examination System",
    description:
      "A full-featured online examination system with admin & user dashboards, quiz attempts, results, and certificates.",
    techStack: ["PHP", "HTML", "JAVASCRIPT", "PHP", "MySQL"],
    liveLink: "https://mohit123.rf.gd/",
    githubLink: "https://github.com/munendra878/Online-Examination-System-by-mb",
  },
  {
    id: 2,
    name: " Portfolio",
    description:
      "Personal portfolio with an AI-powered chatbot using OpenAI API to answer recruiter queries.",
    techStack: ["PHP", "HTML", "JAVASCRIPT", "CSS"],
    liveLink: "https://portfolio-munendra.infinityfree.me/",
    githubLink: "https://github.com/munendra878/portfolioReactJs",
  },
  {
    id: 3,
    name: "Painter App",
    description:
      "Role-based authentication system with admin controls, password reset, and profile management.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    liveLink: "https://monstack-painter.vercel.app/",
    githubLink: "https://github.com/munendra878/monstack-painter",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            My <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A selection of projects showcasing my full-stack development skills,
            UI design sense, and real-world problem solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/70 backdrop-blur
                         border border-gray-200 rounded-2xl p-6
                         shadow-md transition-all duration-300
                         hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Gradient border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0
                           group-hover:opacity-100 transition
                           bg-gradient-to-r from-indigo-500 to-purple-500
                           -z-10 blur"
              />

              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {project.name}
              </h3>

              <p className="text-gray-600 mb-5">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-semibold
                               bg-indigo-100 text-indigo-700
                               rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2
                             bg-indigo-600 text-white rounded-lg
                             font-semibold transition
                             hover:bg-indigo-700"
                >
                  Live Demo
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2
                             border border-gray-300 rounded-lg
                             font-semibold text-gray-700
                             transition hover:bg-gray-100"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
