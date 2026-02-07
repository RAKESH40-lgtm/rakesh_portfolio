import Header from './components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden" style={{
      fontFamily: "'Space Mono', monospace"
    }}>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
     <Footer/>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Space+Mono:wght@400;700&family=IBM+Plex+Sans:wght@300;400;600&display=swap');
        
        @keyframes slideIn {
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}