import { motion } from 'framer-motion'
import { SiUdemy, SiAnthropic } from 'react-icons/si'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import { certifications, education } from '../../data/portfolio-data'

const platformIcon: Record<string, React.ElementType> = {
  'Anthropic Academy': SiAnthropic,
  'Udemy': SiUdemy,
}

const platformColor: Record<string, string> = {
  'Anthropic Academy': 'text-orange-400',
  'Udemy': 'text-purple-400',
}

const platformBg: Record<string, string> = {
  'Anthropic Academy': 'bg-orange-400/10 border-orange-400/20',
  'Udemy': 'bg-purple-400/10 border-purple-400/20',
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionTitle
          label="Learning"
          title="Certifications &"
          highlight="Education"
          subtitle="Courses completed and credentials earned to keep my skills sharp and up to date."
          center
        />

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card mb-10 flex flex-col md:flex-row items-start md:items-center gap-6 border-accent/20"
        >
          <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-accent/20">
            <FiAward size={24} className="text-accent" />
          </div>
          <div className="flex-1">
            <span className="font-body text-xs text-accent uppercase tracking-widest">Education</span>
            <h3 className="font-display font-bold text-text-primary text-lg leading-tight mt-1">{education.degree}</h3>
            <p className="font-body text-text-secondary text-sm mt-1">{education.institution} · {education.location}</p>
          </div>
          <span className="font-body text-text-muted text-sm flex-shrink-0">{education.period}</span>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const Icon = platformIcon[cert.platform] ?? FiAward
            const iconColor = platformColor[cert.platform] ?? 'text-accent'
            const bgColor = platformBg[cert.platform] ?? 'bg-accent/10 border-accent/20'

            return (
              <motion.a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card group hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,136,0.08)] transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-11 h-11 ${bgColor} border rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={20} className={iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`font-body text-xs ${iconColor} font-medium`}>{cert.platform}</span>
                    <h3 className="font-display font-semibold text-text-primary text-sm leading-snug mt-0.5 group-hover:text-accent transition-colors duration-200">
                      {cert.title}
                    </h3>
                    <p className="font-body text-text-muted text-xs mt-1">
                      {cert.month} {cert.year}
                    </p>
                  </div>
                  <FiExternalLink size={13} className="text-text-muted group-hover:text-accent transition-colors duration-200 flex-shrink-0 mt-0.5" />
                </div>

                {/* Skill tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border-subtle">
                    {cert.skills.map((skill: string) => (
                      <span key={skill} className="font-body text-xs text-text-secondary border border-border-subtle rounded-md px-2 py-0.5">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
