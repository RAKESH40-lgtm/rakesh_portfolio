import {  Mail, Phone, MapPin } from 'lucide-react';
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
                           I build scalable, high-performance frontend applications that improve efficiency, reduce load time, and simplify complex workflows.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                           With nearly 3 years of experience as a Frontend Developer at VarchAi, I specialize in React.js, Redux, JavaScript (ES6+), Material UI, and REST API integration. I work at the intersection of UI engineering and process automation, particularly within RPA-driven and enterprise-grade systems.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          One project that shaped my approach was contributing to a client engagement for ZIMDEF (Zimbabwe), where we streamlined SAP Business Partner creation. By refactoring legacy systems and implementing optimized Redux-based state management, I helped reduce processing time by 30%, cut application load time by 20%, and decreased data latency by 15%. I focus on clean architecture, reusable components, secure source code practices, and performance optimization—ensuring applications are not just functional but efficient and production-ready.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          Earlier, during my Full Stack Developer training at The 10x Academy, I built two MERN stack applications, strengthening my backend fundamentals with Node.js, Express, and MongoDB.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          One project that shaped my approach was contributing to a client engagement for ZIMDEF (Zimbabwe), where we streamlined SAP Business Partner creation. By refactoring legacy systems and implementing optimized Redux-based state management, I helped reduce processing time by 30%, cut application load time by 20%, and decreased data latency by 15%. I focus on clean architecture, reusable components, secure source code practices, and performance optimization—ensuring applications are not just functional but efficient and production-ready.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                         If you’re hiring for Frontend, React, or MERN Stack roles—or building products that require scalable UI architecture—let’s connect. I’m open to Relocate and excited to collaborate on impactful technology solutions.
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