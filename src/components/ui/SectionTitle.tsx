import { motion } from 'framer-motion'

interface SectionTitleProps {
  label: string
  title: string
  highlight?: string
  subtitle?: string
  center?: boolean
}

export default function SectionTitle({ label, title, highlight, subtitle, center = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}
    >
      <span className="text-accent font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">
        {label}
      </span>
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight">
        {title}{' '}
        {highlight && <span className="text-accent">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-text-secondary text-base max-w-xl leading-relaxed font-body ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-px w-16 bg-gradient-to-r from-accent to-transparent ${center ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
