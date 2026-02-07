import { certifications } from '../utils/constants'
import {  Award} from 'lucide-react';
const Certifications = () => {
  return (
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
  )
}

export default Certifications