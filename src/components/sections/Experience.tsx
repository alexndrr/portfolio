import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import { experience } from '../../data/portfolio-data'

const typeColors: Record<string, string> = {
  'Full-time': 'bg-accent/10 text-accent border-accent/20',
  'Internship': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionTitle
          label="Work History"
          title="My"
          highlight="Experience"
          subtitle="A timeline of the companies I've worked with and the impact I've made along the way."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {experience.map((job, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-0 md:gap-8`}
                >
                  {/* Mobile: left-side dot | Desktop: center dot */}
                  <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 -translate-x-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-4 h-4 bg-accent rounded-full shadow-[0_0_10px_rgba(0,255,136,0.6)]" />
                  </div>

                  {/* Spacer for alternating layout on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2">
                    <div className="card hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="font-display font-bold text-text-primary text-lg leading-tight">
                            {job.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <FiBriefcase size={13} className="text-accent flex-shrink-0" />
                            <span className="font-body text-accent text-sm font-medium">{job.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
                          <span className={`text-xs font-display font-medium px-2.5 py-1 rounded-full border ${typeColors[job.type] ?? typeColors['Full-time']}`}>
                            {job.type}
                          </span>
                          <span className="font-body text-text-muted text-xs">{job.period}</span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="font-body text-text-secondary text-sm mb-4 leading-relaxed italic">
                        {job.summary}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {job.highlights.map((point, pi) => (
                          <li key={pi} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="font-body text-text-secondary text-sm leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
