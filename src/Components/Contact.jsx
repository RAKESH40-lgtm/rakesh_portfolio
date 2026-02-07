import { Github, Linkedin, Mail } from 'lucide-react';
const Contact = () => {
  return (
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
  )
}

export default Contact