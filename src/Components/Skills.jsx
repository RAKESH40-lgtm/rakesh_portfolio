import { skills } from '../utils/constants'

const Skills = () => {
    return (
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
                                {/* <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span> */}
                            </div>
                            {/* <div className="h-2 bg-gray-800 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `slideIn 1s ease-out ${index * 0.1}s forwards`,
                      transform: 'translateX(-100%)'
                    }}
                  />
                </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills