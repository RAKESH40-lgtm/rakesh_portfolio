import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Briefcase, GraduationCap, Award, ChevronDown } from 'lucide-react';
import { certifications, education, experience, projects, skills } from './utils/constants';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden" style={{
      fontFamily: "'Space Mono', monospace"
    }}>
      {/* Animated background gradient */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.15), transparent 50%)`,
          transition: 'background 0.3s ease'
        }}
      />
      
      {/* Grid overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-cyan-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tighter">
              <span className="text-cyan-400">&lt;</span>
              RV
              <span className="text-cyan-400">/&gt;</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm tracking-wider transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://github.com/rakeshvsharman" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/rakeshvsharman" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 tracking-tighter" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="text-cyan-400">//</span> About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
              <p className="text-lg text-gray-300 leading-relaxed">
                Frontend-focused software professional with ~2 years of experience building scalable, 
                performance-driven web applications using React.js, Redux, Material UI, and JavaScript (ES6+).
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Proven ability to translate complex business requirements into clean, efficient user interfaces, 
                with hands-on experience in RPA-driven and enterprise client projects, delivering measurable 
                improvements in performance, load time, and data latency.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Experienced collaborator with a strong focus on usability, state management optimization, 
                and secure, high-quality frontend development.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 transition-colors">
                <MapPin className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-white">Bengaluru, India</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 transition-colors">
                <Phone className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white">9743297092</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 transition-colors">
                <Mail className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white break-all">rakeshvsharman@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 tracking-tighter" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="text-cyan-400">//</span> Experience
          </h2>
          
          <div className="border-l-2 border-cyan-500/30 pl-8 space-y-6">
            <div className="relative">
              <div className="absolute -left-[41px] w-4 h-4 bg-cyan-500 rounded-full border-4 border-black"></div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    {experience.company}
                  </h3>
                  <div className="text-cyan-400 font-semibold text-lg">{experience.role}</div>
                  <div className="text-gray-400 text-sm">{experience.location}</div>
                </div>
                
                <div className="grid gap-4 mt-6" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  {experience.achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 p-4 border border-cyan-500/20 bg-black/40 hover:bg-cyan-500/5 transition-all duration-300 group"
                    >
                      <div className="text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">▹</div>
                      <div className="text-gray-300">{achievement}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 tracking-tighter" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="text-cyan-400">//</span> Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3 group">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `slideIn 1s ease-out ${index * 0.1}s forwards`,
                      transform: 'translateX(-100%)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 tracking-tighter" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="text-cyan-400">//</span> Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="border border-cyan-500/20 bg-black/40 hover:bg-cyan-500/5 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col"
              >
                {/* Project Header */}
                <div className="p-6 border-b border-cyan-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <Code className="text-cyan-400 group-hover:rotate-12 transition-transform" size={28} />
                    <div className="flex space-x-3">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                    {project.description}
                  </p>
                </div>
                
                {/* Project Highlights */}
                <div className="p-6 border-b border-cyan-500/20 flex-grow">
                  <div className="text-xs text-cyan-400 uppercase tracking-wider mb-3 font-semibold">
                    Key Highlights
                  </div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                        <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <span 
                        key={tIndex}
                        className="px-3 py-1 text-xs font-mono text-cyan-400 border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Add Project Button - Optional */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
              More projects coming soon...
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 tracking-tighter" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="text-cyan-400">//</span> Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="p-6 border border-cyan-500/20 bg-black/40 hover:bg-cyan-500/5 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                      {edu.degree}
                    </h3>
                    <div className="text-cyan-400 font-semibold">{edu.institution}</div>
                  </div>
                  {edu.gpa && (
                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-2xl font-bold text-cyan-400">{edu.gpa}</div>
                      <div className="text-sm text-gray-400">GPA</div>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  {edu.location && (
                    <>
                      <span className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </span>
                      <span>•</span>
                    </>
                  )}
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 tracking-tighter" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="text-cyan-400">//</span> Certifications
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="p-6 border border-cyan-500/20 bg-black/40 hover:bg-cyan-500/5 hover:border-cyan-500/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <Award className="text-cyan-400 mb-4 group-hover:rotate-12 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.name}
                </h3>
                <div className="text-sm text-gray-400 mb-1">{cert.issuer}</div>
                <div className="text-xs text-cyan-400 font-mono">{cert.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-5xl font-bold mb-8 tracking-tighter" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="text-cyan-400">//</span> Get In Touch
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="mailto:rakeshvsharman@gmail.com"
              className="px-10 py-5 bg-cyan-500 text-black font-bold tracking-wider hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>SEND EMAIL</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/rakeshvsharman"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border-2 border-cyan-500 text-cyan-400 font-bold tracking-wider hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Linkedin size={20} />
              <span>LINKEDIN</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-gray-400 text-sm mb-4" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Designed & Built by Rakesh V
          </div>
          <div className="text-cyan-400 font-mono text-xs">
            &lt;/&gt; with React.js
          </div>
        </div>
      </footer>

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