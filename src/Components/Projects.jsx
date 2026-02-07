import { projects } from '../utils/constants'
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Briefcase, GraduationCap, Award, ChevronDown } from 'lucide-react';
const Projects = () => {
    return (
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
            </div>
        </section>
    )
}

export default Projects