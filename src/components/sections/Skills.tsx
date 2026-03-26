import { motion } from 'framer-motion'
import {
  SiDotnet, SiSharp, SiJavascript, SiTypescript,
  SiSpring, SiBlazor, SiAngular, SiNextdotjs,
  SiPostgresql, SiMysql,
  SiDocker, SiKubernetes, SiGit, SiGrafana, SiApachekafka, SiRabbitmq,
  SiJira,
} from 'react-icons/si'
import { FiCode, FiDatabase, FiZap, FiTool, FiCpu, FiLayers } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import { skills } from '../../data/portfolio-data'

const levelConfig = {
  expert:     { label: 'Expert',     color: 'bg-accent',       text: 'text-bg-primary', width: 'w-full' },
  proficient: { label: 'Proficient', color: 'bg-accent/60',    text: 'text-white',       width: 'w-4/5'  },
  beginner:   { label: 'Learning',   color: 'bg-accent/25',    text: 'text-accent',      width: 'w-2/5'  },
}

const techIcons: Record<string, React.ElementType> = {
  'C#': SiSharp,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  '.NET / ASP.NET': SiDotnet,
  'Spring Boot': SiSpring,
  'Blazor': SiBlazor,
  'AngularJS': SiAngular,
  'Next.js': SiNextdotjs,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Git / Bitbucket': SiGit,
  'Grafana': SiGrafana,
  'Apache Kafka': SiApachekafka,
  'RabbitMQ': SiRabbitmq,
  'Jira / Confluence': SiJira,
}

const categoryIcons: Record<string, React.ElementType> = {
  Languages: FiCode,
  Frameworks: FiLayers,
  Databases: FiDatabase,
  'Messaging & APIs': FiZap,
  'DevOps & Tools': FiTool,
  Architecture: FiCpu,
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-bg-secondary/50">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionTitle
          label="Technical Skills"
          title="My"
          highlight="Toolkit"
          subtitle="Technologies and tools I work with on a daily basis — from backend systems to infrastructure."
          center
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((group, gi) => {
            const CatIcon = categoryIcons[group.category] ?? FiCode
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
                className="card group"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <CatIcon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-text-primary text-base">
                    {group.category}
                  </h3>
                </div>

                {/* Skill items */}
                <div className="space-y-3">
                  {group.items.map((skill) => {
                    const Icon = techIcons[skill.name]
                    const cfg = levelConfig[skill.level as keyof typeof levelConfig]
                    return (
                      <div key={skill.name} className="flex items-center gap-3">
                        <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                          {Icon
                            ? <Icon size={16} className="text-text-secondary" />
                            : <div className="w-2 h-2 bg-text-muted rounded-full" />
                          }
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-body text-sm text-text-primary truncate">{skill.name}</span>
                            <span className={`font-body text-xs px-2 py-0.5 rounded-full ${cfg.color} ${cfg.text} flex-shrink-0 ml-2`}>
                              {cfg.label}
                            </span>
                          </div>
                          <div className="h-1 bg-bg-primary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className={`h-full ${cfg.width} ${cfg.color} rounded-full`}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="font-body text-text-muted text-sm mb-5 uppercase tracking-widest">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['IBM QRadar', 'IIS', 'Bitbucket', 'ADO.NET', 'WooCommerce', 'BigCommerce', 'SAP Integration', 'PKI / Entrust', 'Windows Services', 'Office365 Auth', 'CI/CD Pipelines', 'REST API Design'].map((item) => (
              <span key={item} className="font-body text-sm text-text-secondary border border-border-subtle rounded-full px-4 py-1.5 hover:border-accent/40 hover:text-accent transition-all duration-200 cursor-default">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
