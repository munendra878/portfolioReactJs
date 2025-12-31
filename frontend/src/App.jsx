import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Projects from '../components/Projects.jsx';
import Skills from '../components/Skills.jsx';
import HireMe from '../components/HireMe.jsx';
import ChatBot from '../components/ChatBot.jsx';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <HireMe />
      <ChatBot />

      {/* DEBUG SECTION */}
      <div className="h-screen bg-red-400 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-black">
          END OF PAGE
        </h1>
      </div>
    </div>
  );
}
