import  { useContext } from 'react'
import CreateContexts from '../Hooks/useCreateContext'
import { Github, Linkedin } from 'lucide-react';
const Header = () => {
    const { mousePosition, isScrolled, scrollToSection, activeSection } = useContext(CreateContexts)
    return (
        <>
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
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-cyan-500/20' : 'bg-transparent'
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
                                    className={`text-sm tracking-wider transition-all duration-300 hover:text-cyan-400 ${activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-400'
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
        </>
    )
}

export default Header