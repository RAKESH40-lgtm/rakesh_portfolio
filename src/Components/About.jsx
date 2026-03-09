import { Mail, Phone, MapPin } from 'lucide-react';
const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center px-6 py-20">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-5xl font-bold mb-12 tracking-tighter" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    <span className="text-cyan-400">//</span> About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I build high-performance, scalable frontend applications that improve speed, usability, and business efficiency. My focus is on creating responsive interfaces and clean architectures that make complex systems easier to use and maintain.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                           With nearly 3 years of experience as a Frontend Developer at VarchAi, I specialize in React.js (Hooks), Redux, JavaScript (ES6+), REST API integration, and performance optimization. I work on enterprise-grade applications where performance, maintainability, and scalable UI architecture are critical.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            At VarchAi, I improved UI responsiveness by 30% and reduced page load time by 20% through code optimization and efficient state management. I also led frontend development for the SAP Business Partner module, redesigning workflows that reduced manual data entry effort by 25%. By building reusable and modular React components, I reduced code redundancy by 35%, improving maintainability and development efficiency.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            I’ve also worked on refactoring legacy RPA-driven systems using HTML5, CSS3, and React, which helped cut processing time by 30% while improving overall system performance and stability.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            My journey into development started during my Full Stack training at The 10x Academy, where I built MERN stack applications with JWT authentication, optimized MongoDB queries, and collaborated using structured Git workflows—strengthening my understanding of clean architecture and production-ready deployments.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            If you're hiring for Frontend Developer, React Developer, or MERN Stack roles—or building products that require scalable UI architecture—let’s connect. I’m open to relocate and excited to collaborate on building fast, user-focused, and impactful technology solutions.
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
    )
}

export default About