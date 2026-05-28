import { motion } from 'framer-motion'
import cvData from '../data/CV.json'
import styles from './Curriculum.module.css'

function Bold({ text }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className={styles.tech}>{part}</strong> : part
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

function TimelineCard({ title, subtitle, period, bullets, index }) {
  return (
    <motion.div
      className={styles.card}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className={styles.cardDot} />
      <div className={styles.cardBody}>
        <span className={styles.period}>{period}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
        <span className={styles.cardSubtitle}>{subtitle}</span>
        <ul className={styles.bullets}>
          {bullets.map((b, i) => (
            <li key={i}><Bold text={b} /></li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Curriculum() {
  return (
    <section id="curriculum" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Curriculum
        </motion.h2>

        <div className={styles.grid}>
          {/* Experiencia */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <span className={styles.icon}>💼</span> Experience
            </h3>
            <div className={styles.timeline}>
              {cvData.experience.map((item, i) => (
                <TimelineCard
                  key={item.id}
                  title={item.role}
                  subtitle={item.company}
                  period={item.period}
                  bullets={item.bullets}
                  index={i}
                />
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <span className={styles.icon}>🎓</span> Education
            </h3>
            <div className={styles.timeline}>
              {cvData.education.map((item, i) => (
                <TimelineCard
                  key={item.id}
                  title={item.degree}
                  subtitle={item.institution}
                  period={item.period}
                  bullets={item.bullets}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
