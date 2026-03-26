import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personalInfo } from '../../data/portfolio-data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle bg-bg-primary">
      <div className="section-padding py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <span className="font-body text-text-secondary text-sm">
            © {year} Aleksandar Radišić. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-text-secondary hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
