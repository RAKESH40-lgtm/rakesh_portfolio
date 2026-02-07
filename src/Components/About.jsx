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
    )
}

export default About