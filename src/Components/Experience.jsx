import { experience } from '../utils/constants'
const Experience = () => {
  return (
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
  )
}

export default Experience