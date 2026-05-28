import { motion } from 'framer-motion'
import styles from './Contact.module.css'

const LINKS = [
  {
    label: 'GitHub',
    handle: '@Alvaro3c',
    href: 'https://github.com/Alvaro3c/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'Álvaro Cuallado',
    href: 'https://www.linkedin.com/in/%C3%A1lvaro-cuallado-152aa758/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'alvaro.cuallado.g@gmail.com',
    href: 'mailto:alvaro.cuallado.g@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const vp = { once: true }

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.h2
          className={styles.heading}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Let&apos;s build something{' '}
          <span className={styles.gradient}>together</span>
        </motion.h2>

        <motion.p
          className={styles.sub}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          I&apos;m open to new opportunities — whether it&apos;s a full-time role,
          a freelance project, or just a good conversation about AI.
        </motion.p>

        <div className={styles.cards}>
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={styles.card}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <span className={styles.iconWrap}>{link.icon}</span>
              <span className={styles.cardText}>
                <span className={styles.cardLabel}>{link.label}</span>
                <span className={styles.cardHandle}>{link.handle}</span>
              </span>
              <svg className={styles.arrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </motion.a>
          ))}
        </div>

        <motion.p
          className={styles.location}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.485-2.015-4.5-4.5-4.5z" />
            <circle cx="8" cy="6" r="1.5" />
          </svg>
          Tres Cantos, Madrid · Open to remote
        </motion.p>
      </div>
    </section>
  )
}
