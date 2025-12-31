export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6
                 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white"
    >
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
        Hi, I&apos;m{" "}
        <span className="text-yellow-300 drop-shadow-lg">
          Munendra
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl">
        Frontend Developer & AI Enthusiast
      </p>

      {/* CTA Button */}
      <a
        href="#projects"
        className="mt-10 inline-flex items-center gap-2
                   px-8 py-4 rounded-full
                   bg-white text-indigo-600 font-semibold
                   shadow-lg transition-all duration-300
                   hover:bg-yellow-300 hover:text-black
                   hover:scale-110"
      >
        See My Work →
      </a>
    </section>
  );
}
