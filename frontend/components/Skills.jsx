const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "PHP",
  "Python",
  "Java Scripts",
  "Java",
  "Html And Css",
  "OpenAI API",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 overflow-hidden
                 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700"
    >
      {/* Decorative Blur Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />

      {/* Section Heading */}
      <div className="relative text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          My <span className="text-indigo-300">Skills</span>
        </h2>
        <p className="mt-4 text-indigo-200 max-w-xl mx-auto">
          Technologies and tools I use to build modern, scalable, and
          high-performance applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="relative flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="
              px-7 py-3 rounded-full font-semibold text-sm tracking-wide
              text-white
              bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-md shadow-indigo-900/30
              transition-all duration-300 ease-out
              hover:scale-110 hover:shadow-xl
              hover:from-purple-500 hover:to-pink-500
              hover:ring-2 hover:ring-white/30
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
