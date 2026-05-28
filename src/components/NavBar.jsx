import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Stack',      href: '#stack' },
  { label: 'CV',         href: '#curriculum' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
]

const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, staggerChildren: 0.07, delayChildren: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const linkVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
}

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Show border + blur after user scrolls past 20px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section is in view
  useEffect(() => {
    const ids = ['hero', ...NAV_LINKS.map(l => l.href.slice(1))]
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close overlay when viewport widens to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll while mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = href => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a
          href="#hero"
          className={styles.logo}
          onClick={e => { e.preventDefault(); scrollTo('#hero') }}
        >
          Álvaro<span className={styles.dot}>.</span>
        </a>

        {/* Desktop links */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`${styles.navLink} ${activeSection === href.slice(1) ? styles.active : ''}`}
              onClick={e => { e.preventDefault(); scrollTo(href) }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
          >
            <nav aria-label="Mobile navigation">
              {NAV_LINKS.map(({ label, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  className={styles.mobileLink}
                  variants={linkVariants}
                  onClick={e => { e.preventDefault(); scrollTo(href) }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
