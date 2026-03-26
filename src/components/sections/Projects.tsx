import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiLock, FiPlus } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

const placeholderProjects = [
  {
    id: 1,
    title: 'This Portfolio',
    description: 'The very site you\'re looking at — built with React, TypeScript, Tailwind CSS, and Framer Motion. Dockerized and deployed on Netlify.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Docker'],
    github: 'https://github.com/alexndrr',
    status: 'live',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-bg-secondary/50">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionTitle
          label="Portfolio"
          title="Featured"
          highlight="Projects"
          subtitle="Personal and open-source projects I've built or am currently working on. More coming soon!"
          center
        />

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {placeholderProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card group flex flex-col w-full max-w-sm"
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-display font-medium px-2.5 py-1 rounded-full border ${
                  project.status === 'live'
                    ? 'bg-accent/10 text-accent border-accent/20'
                    : 'bg-text-muted/10 text-text-muted border-text-muted/20'
                }`}>
                  {project.status === 'live' ? '● Live' : '◌ Planned'}
                </span>
                <div className="flex items-center gap-2">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      <FiGithub size={16} />
                    </a>
                  ) : (
                    <FiLock size={14} className="text-text-muted" title="Private / In progress" />
                  )}
                  {project.status === 'live' && (
                    <FiExternalLink size={14} className="text-text-muted" />
                  )}
                </div>
              </div>

              <h3 className="font-display font-bold text-text-primary text-lg mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="font-body text-text-secondary text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="font-body text-xs text-text-secondary border border-border-subtle rounded-md px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block bg-bg-card border border-dashed border-accent/30 rounded-2xl px-8 py-6 max-w-md mx-auto">
            <FiPlus size={28} className="text-accent mx-auto mb-3" />
            <p className="font-display font-semibold text-text-primary mb-2">More projects in progress</p>
            <p className="font-body text-text-secondary text-sm">
              I'm actively building new things. Follow me on{' '}
              <a
                href="https://github.com/alexndrr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                GitHub
              </a>{' '}
              to stay updated!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
