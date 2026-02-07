import { education } from '../utils/constants'
import { MapPin } from 'lucide-react';
const Education = () => {
    return (
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
    )
}

export default Education