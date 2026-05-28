import { motion } from 'framer-motion'
import {
  SiPython, SiFastapi,
  SiOpenai, SiHuggingface,
  SiGit, SiGithub, SiPostman,
  SiReact, SiJavascript, SiCss,
} from 'react-icons/si'
import {
  TbApi, TbDatabase, TbMessageCode, TbBrandVscode,
  TbMessageDots, TbChartHistogram, TbHierarchy, TbBrandX,
} from 'react-icons/tb'
import styles from './Stack.module.css'

const SKILLS = [
  {
    category: 'Backend & APIs',
    items: [
      { name: 'Python',    Icon: SiPython,   color: '#3776AB' },
      { name: 'FastAPI',   Icon: SiFastapi,  color: '#009688' },
      { name: 'REST APIs', Icon: TbApi,      color: '#94A3B8' },
      { name: 'SQL',       Icon: TbDatabase, color: '#60A5FA' },
    ],
  },
  {
    category: 'AI & GenAI',
    items: [
      { name: 'OpenAI API',         Icon: SiOpenai,          color: '#10A37F' },
      { name: 'Hugging Face',       Icon: SiHuggingface,     color: '#FF9A00' },
      { name: 'Claude',             Icon: TbMessageDots,     color: '#D97706' },
      { name: 'LightGBM',          Icon: TbChartHistogram,  color: '#0EA5E9' },
      { name: 'LangGraph',         Icon: TbHierarchy,       color: '#8B5CF6' },
      { name: 'Grok',              Icon: TbBrandX,          color: '#E2E8F0' },
      { name: 'Prompt Engineering', Icon: TbMessageCode,     color: '#C084FC' },
    ],
  },
  {
    category: 'Tools & Other',
    items: [
      { name: 'Git',        Icon: SiGit,         color: '#F05032' },
      { name: 'GitHub',     Icon: SiGithub,      color: '#E2E8F0' },
      { name: 'Postman',    Icon: SiPostman,     color: '#FF6C37' },
      { name: 'VS Code',    Icon: TbBrandVscode, color: '#007ACC' },
      { name: 'React',      Icon: SiReact,       color: '#61DAFB' },
      { name: 'JavaScript', Icon: SiJavascript,  color: '#F7DF1E' },
      { name: 'CSS',        Icon: SiCss,         color: '#1572B6' },
    ],
  },
]

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const groupVariants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const pillContainerVariants = {
  visible: { transition: { staggerChildren: 0.055 } },
}

const pillVariants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1,  transition: { duration: 0.3, ease: 'easeOut' } },
}

export default function Stack() {
  return (
    <section id="stack" className={styles.stack}>
      <div className={styles.container}>

        {/* Section heading */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2 className={styles.title}>My Toolkit</h2>
          <p className={styles.subtitle}>
            Technologies I use day-to-day to build and ship AI-powered systems.
          </p>
        </motion.div>

        {/* Skill groups */}
        <motion.div
          className={styles.groups}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SKILLS.map(({ category, items }) => (
            <motion.div
              key={category}
              className={styles.group}
              variants={groupVariants}
            >
              <h3 className={styles.categoryLabel}>{category}</h3>

              <motion.div
                className={styles.pills}
                variants={pillContainerVariants}
              >
                {items.map(({ name, Icon, color }) => (
                  <motion.span
                    key={name}
                    className={styles.pill}
                    style={{ '--accent': color }}
                    variants={pillVariants}
                    whileHover={{ y: -3, scale: 1.06, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Icon
                      className={styles.pillIcon}
                      size={15}
                      aria-hidden="true"
                    />
                    {name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
