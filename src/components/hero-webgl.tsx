import { useState, useEffect } from "react"

export const Hero3DWebGL = () => {
  const [visible, setVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [btnVisible, setBtnVisible] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 200)
    const t2 = setTimeout(() => setSubtitleVisible(true), 1000)
    const t3 = setTimeout(() => setBtnVisible(true), 1800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <div className="h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/3a6eaf33-5fcc-4db0-bdb6-0ba1b536f2bf/files/de88b3fb-0150-4545-9c5a-912358344c58.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />
      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div
          className={visible ? "fade-in" : ""}
          style={{ opacity: visible ? undefined : 0 }}
        >
          <p className="text-amber-400 text-sm md:text-base font-space-mono tracking-[0.3em] uppercase mb-6">
            26 апреля 1986 — помним всегда
          </p>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold font-orbitron text-white mb-6 leading-tight">
            МЫ ПОМНИМ.<br />
            <span className="text-amber-400">МЫ ЧТИМ.</span>
          </h1>
        </div>

        <div
          className={subtitleVisible ? "fade-in-subtitle" : ""}
          style={{ opacity: subtitleVisible ? undefined : 0 }}
        >
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light mb-10">
            Памяти ликвидаторов Чернобыльской катастрофы — смолян, отдавших жизнь и здоровье ради спасения мира
          </p>
        </div>

        <div
          className={btnVisible ? "fade-in" : ""}
          style={{ opacity: btnVisible ? undefined : 0 }}
        >
          <a
            href="#about"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold font-orbitron px-10 py-4 rounded-none text-sm tracking-widest uppercase transition-all duration-300 mr-4"
          >
            Узнать историю
          </a>
          <a
            href="#heroes"
            className="inline-block border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black font-bold font-orbitron px-10 py-4 rounded-none text-sm tracking-widest uppercase transition-all duration-300"
          >
            Герои
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-gray-400 text-xs font-space-mono tracking-widest animate-bounce flex flex-col items-center gap-2">
        <span>ПРОКРУТИТЕ ВНИЗ</span>
        <div className="w-px h-8 bg-amber-500/50" />
      </div>
    </div>
  )
}

export default Hero3DWebGL
