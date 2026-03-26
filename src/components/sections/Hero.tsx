import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi'
import { personalInfo, stats } from '../../data/portfolio-data'

function TypingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((index + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, words])

  return (
    <span className="text-accent">
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  )
}

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="section-padding w-full pt-24 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-sm font-display font-medium px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-4"
            >
              Hi, I'm{' '}
              <span className="text-gradient block mt-1">Aleksandar.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display font-semibold text-2xl md:text-3xl text-text-primary/80 mb-6 h-10"
            >
              <TypingText words={personalInfo.roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-text-secondary text-lg leading-relaxed max-w-lg mb-10"
            >
              Backend Developer with <span className="text-text-primary">4+ years</span> of enterprise experience,
              primarily in <span className="text-accent">C# / .NET</span> and <span className="text-accent">Java Spring Boot</span>.
              I architect integrations, automate data pipelines, and modernize legacy systems —
              turning complex, fragmented processes into{' '}
              <span className="text-text-primary">stable, scalable backends</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href={`mailto:${personalInfo.email}`} className="btn-primary">
                <FiArrowRight size={18} />
                Get in Touch
              </a>
              <a href={personalInfo.cvUrl} download className="btn-outline">
                <FiDownload size={18} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-5"
            >
              <span className="text-text-muted text-sm font-body">Find me on:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={22} />
              </a>
            </motion.div>
          </div>

          {/* Right — Photo + Stats */}
          <div className="flex flex-col items-center gap-10">
            {/* Hexagonal Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="relative animate-float"
            >
              {/* Outer ring */}
              <div className="w-72 h-72 md:w-80 md:h-80 clip-hexagon bg-gradient-to-br from-accent/40 to-accent/10 flex items-center justify-center animate-glow-pulse">
                {/* Inner hexagon */}
                <div className="w-64 h-64 md:w-72 md:h-72 clip-hexagon bg-bg-card overflow-hidden">
                  <img
                    src="/profile.png"
                    alt="Aleksandar Radišić"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 5%' }}
                  />
                </div>
              </div>

              {/* Accent corner dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full shadow-[0_0_10px_rgba(0,255,136,0.8)]" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent/60 rounded-full" />
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 gap-4 w-full max-w-sm"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card text-center py-4"
                >
                  <div className="font-display font-bold text-3xl text-accent mb-1 glow-text">
                    {stat.value}
                  </div>
                  <div className="font-body text-text-secondary text-xs leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors group"
        >
          <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent/60 to-transparent group-hover:h-14 transition-all duration-300" />
        </motion.button>
      </div>
    </section>
  )
}
