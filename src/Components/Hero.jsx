import  { useContext } from 'react'
import CreateContexts from '../Hooks/useCreateContext'
import { ChevronDown } from 'lucide-react';
const Hero = () => {
   const { scrollToSection } = useContext(CreateContexts)
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="max-w-5xl w-full">
          <div className="space-y-6 animate-fade-in">
            <div className="text-cyan-400 text-sm tracking-widest uppercase opacity-0 animate-slide-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Frontend Developer
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter opacity-0 animate-slide-up"
              style={{
                animationDelay: '0.4s',
                animationFillMode: 'forwards',
                fontFamily: "'Orbitron', sans-serif"
              }}>
              RAKESH V
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl opacity-0 animate-slide-up"
              style={{
                animationDelay: '0.6s',
                animationFillMode: 'forwards',
                fontFamily: "'IBM Plex Sans', sans-serif"
              }}>
              Building fast, user-friendly web applications with React, Redux, and modern JavaScript
            </p>

            <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-cyan-500 text-black font-bold tracking-wider hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105">
                GET IN TOUCH
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold tracking-wider hover:bg-cyan-500/10 transition-all duration-300">
                VIEW WORK
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-cyan-400">
          <ChevronDown size={32} />
        </button>
      </section>
  )
}

export default Hero