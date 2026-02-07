import React from 'react'

const Footer = () => {
    return (
        <footer className="border-t border-cyan-500/20 py-8 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <div className="text-gray-400 text-sm mb-4" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                    Designed & Built by Rakesh V
                </div>
                <div className="text-cyan-400 font-mono text-xs">
                    &lt;/&gt; with React.js
                </div>
            </div>
        </footer>
    )
}

export default Footer