export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row
                 justify-center items-center gap-12
                 px-6 text-center md:text-left
                 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600
                 text-white"
    >
      {/* Profile Image */}
<div className="flex-shrink-0">
  <img
    src="/profile.png"
    alt="Baghel Munendrasinh"
    className="
      w-20 h-20          /* mobile: 80x80 */
      sm:w-28 sm:h-28    /* small screens */
      md:w-40 md:h-40    /* tablets */
      lg:w-56 lg:h-56    /* desktop */
      rounded-full
      border-2 border-white
      shadow-xl
      object-cover
    "
  />
</div>



      {/* Content */}
      <div className="max-w-xl">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Hi, I&apos;m{" "}
          <span className="text-yellow-300 drop-shadow-lg">
            Baghel Munendrasinh Radheshyam
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90">
          Frontend Developer • PHP Developer • Full Stack Developer • AI Enthusiast
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {/* See Work */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center
                       px-8 py-4 rounded-full
                       bg-white text-indigo-600 font-semibold
                       shadow-lg transition-all duration-300
                       hover:bg-yellow-300 hover:text-black
                       hover:scale-110"
          >
            See My Work →
          </a>

          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center
                       px-8 py-4 rounded-full
                       border-2 border-white text-white font-semibold
                       shadow-lg transition-all duration-300
                       hover:bg-white hover:text-indigo-600
                       hover:scale-110"
          >
            Download Resume 📄
          </a>
        </div>
      </div>
    </section>
  );
}
