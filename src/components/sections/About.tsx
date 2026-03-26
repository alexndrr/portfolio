import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiAward } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import { personalInfo, education } from '../../data/portfolio-data'

const highlights = [
  { icon: FiMapPin, label: 'Location', value: 'Belgrade, Serbia' },
  { icon: FiCalendar, label: 'Experience', value: '4+ Years Professional' },
  { icon: FiAward, label: 'Education', value: "Bachelor's in IT Engineering" },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/2 to-transparent pointer-events-none" />

      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Visual card stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Background card */}
            <div className="absolute top-4 left-4 right-4 bottom-0 bg-accent/5 rounded-2xl border border-accent/10" />

            {/* Main card */}
            <div className="relative bg-bg-card border border-border-subtle rounded-2xl p-8 overflow-hidden">
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-2xl pointer-events-none" />

              <div className="mb-8">
                <h3 className="font-display font-bold text-xl text-text-primary mb-1">
                  {personalInfo.name}
                </h3>
                <p className="text-accent font-body text-sm font-medium">{personalInfo.title}</p>
              </div>

              <p className="font-body text-text-secondary leading-relaxed mb-8">
                {personalInfo.bio}
              </p>

              <div className="space-y-4">
                {highlights.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-body text-text-muted text-xs">{label}</p>
                      <p className="font-body text-text-primary text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Education block */}
              <div className="mt-8 pt-8 border-t border-border-subtle">
                <p className="font-body text-text-muted text-xs uppercase tracking-widest mb-3">Education</p>
                <p className="font-display font-semibold text-text-primary text-sm leading-snug">
                  {education.degree}
                </p>
                <p className="font-body text-text-secondary text-sm mt-1">{education.institution}</p>
                <p className="font-body text-accent/70 text-xs mt-1">{education.period}</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Text content */}
          <div>
            <SectionTitle
              label="About Me"
              title="Passionate about"
              highlight="clean systems"
              subtitle="I've spent 4+ years building integrations, automating workflows, and keeping enterprise systems in sync — across telecom, eCommerce, and software services."
            />

            <div className="space-y-5 font-body text-text-secondary leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                My background spans backend systems built on <span className="text-text-primary">.NET and Java Spring Boot</span>,
                with deep experience in integrating third-party platforms like BigCommerce with ERP systems,
                building RabbitMQ and Kafka pipelines, and designing maintainable data flows.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I've had the opportunity to work across multiple domains — from{' '}
                <span className="text-text-primary">telecom infrastructure</span> supporting 10,000+ subscribers,
                to eCommerce synchronization processing 10k+ daily records, to modernizing legacy
                CRM platforms.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Beyond code, I care about <span className="text-text-primary">mentoring teammates</span>,
                contributing to process improvement, and building solutions that are as reliable
                as they are maintainable. I'm now growing into full-stack territory and exploring
                AI tooling — always up for a new challenge.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {['System Integration', 'Process Automation', 'API Design', 'Team Mentoring', 'Database Optimization'].map(tag => (
                <span key={tag} className="bg-accent/10 border border-accent/20 text-accent text-xs font-display font-medium px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
