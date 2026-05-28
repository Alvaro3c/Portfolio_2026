import { motion } from 'framer-motion'
import styles from './Hero.module.css'

// Deterministic positions — avoids layout shift across renders
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id:       i,
  left:     `${(i * 19 + 5) % 92 + 4}%`,
  top:      `${(i * 13 + 7) % 82 + 8}%`,
  size:     `${1 + (i % 3)}px`,
  duration: `${5 + (i * 0.6 % 7)}s`,
  delay:    `-${(i * 1.1 % 8)}s`,
  color:    i % 2 === 0 ? 'var(--color-accent-purple)' : 'var(--color-accent-cyan)',
  opacity:  0.2 + (i % 5) * 0.08,
}))

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const item = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className={styles.hero}>
      {/* Dot-grid pattern */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Floating particles */}
      <div className={styles.particles} aria-hidden="true">
        {PARTICLES.map(p => (
          <span
            key={p.id}
            className={styles.particle}
            style={{
              left:              p.left,
              top:               p.top,
              width:             p.size,
              height:            p.size,
              background:        p.color,
              opacity:           p.opacity,
              animationDuration: p.duration,
              animationDelay:    p.delay,
            }}
          />
        ))}
      </div>

      {/* Radial glow centered behind text */}
      <div className={styles.glow} aria-hidden="true" />

      {/* Animated content */}
      <motion.div
        className={styles.content}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span className={styles.eyebrow} variants={item}>
          <span className={styles.statusDot} />
          Available for opportunities
        </motion.span>

        <motion.h1 className={styles.heading} variants={item}>
          Hi, I&apos;m <span className={styles.name}>Álvaro</span>
          <br />
          <span className={styles.gradientText}>AI/Backend Developer</span>
        </motion.h1>

        <motion.p className={styles.tagline} variants={item}>
          I build intelligent backends and production-ready AI systems —
          <br className={styles.desktopBreak} />
          turning language models into real, scalable products.
        </motion.p>

        <motion.div className={styles.ctas} variants={item}>
          <button
            className={styles.btnPrimary}
            onClick={() => scrollTo('projects')}
          >
            See my work
          </button>
          <button
            className={styles.btnSecondary}
            onClick={() => scrollTo('contact')}
          >
            Get in touch
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}
