import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import HireMe from "../components/HireMe";
import ChatBot from "../components/ChatBot";
import Footer from "../components/Footer"; // ✅ IMPORT FOOTER

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <HireMe />
      <ChatBot />
      <Footer /> {/* ✅ USE FOOTER */}
    </div>
  );
}
