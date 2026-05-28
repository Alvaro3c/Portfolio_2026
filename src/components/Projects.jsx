import { motion } from 'framer-motion'
import projects from '../data/projects.json'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <h2 className={styles.heading}>
            Featured <span className={styles.gradientText}>Projects</span>
          </h2>
          <p className={styles.subheading}>
            A selection of things I've built — from AI-powered predictions to real-time chat apps.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
