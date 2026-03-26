import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import { personalInfo } from '../../data/portfolio-data'

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    description: 'Best way to reach me',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'Aleksandar Radišić',
    href: personalInfo.linkedin,
    description: 'Connect professionally',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: '@alexndrr',
    href: personalInfo.github,
    description: 'Check my open source work',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Belgrade, Serbia',
    href: null,
    description: 'Open to remote worldwide',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-secondary/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-padding max-w-7xl mx-auto">
        <SectionTitle
          label="Get In Touch"
          title="Let's"
          highlight="Work Together"
          subtitle="I'm open to new opportunities, collaborations, or just a good tech conversation. Don't hesitate to reach out!"
          center
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Left — contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="font-body text-text-secondary leading-relaxed mb-8">
              Whether you have a project in mind, want to talk about backend architecture,
              or are looking for a reliable developer to join your team — I'm all ears.
            </p>

            {contactLinks.map(({ icon: Icon, label, value, href, description }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="card flex items-center gap-4 hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-body text-text-muted text-xs">{description}</p>
                      <p className="font-display font-semibold text-text-primary text-sm">{value}</p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <FiSend size={14} className="text-accent" />
                    </div>
                  </a>
                ) : (
                  <div className="card flex items-center gap-4">
                    <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-body text-text-muted text-xs">{description}</p>
                      <p className="font-display font-semibold text-text-primary text-sm">{value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right — Quick message form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card h-full">
              <h3 className="font-display font-bold text-text-primary text-lg mb-6">Send a Quick Message</h3>

              <form
                action={`mailto:${personalInfo.email}`}
                method="post"
                encType="text/plain"
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-text-muted text-xs mb-1.5 block uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="w-full bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-text-muted text-xs mb-1.5 block uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-text-muted text-xs mb-1.5 block uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Let's collaborate on..."
                    className="w-full bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="font-body text-text-muted text-xs mb-1.5 block uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="w-full bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/60 transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  <FiSend size={16} />
                  Send Message
                </button>
              </form>

              <p className="font-body text-text-muted text-xs mt-4 text-center">
                Or email me directly at{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-accent hover:underline">
                  {personalInfo.email}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
