import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import CTAButton from '../ui/CTAButton.jsx';
import styles from './ProposalNav.module.css';

/** Navegación mínima: identidad, capítulo actual, progreso (M12) y un CTA discreto. */
export default function ProposalNav({ data, chapters }) {
  const { scrollY, scrollYProgress } = useScroll();
  const [pastHero, setPastHero] = useState(false);
  const [dark, setDark] = useState(false);
  const [current, setCurrent] = useState(chapters[0]?.label ?? '');

  useMotionValueEvent(scrollY, 'change', (y) => {
    setPastHero(y > window.innerHeight * 0.7);

    const probe = 48;
    const over = Array.from(document.querySelectorAll('[data-atmosphere="dark"]')).some((el) => {
      const r = el.getBoundingClientRect();
      return r.top <= probe && r.bottom >= probe;
    });
    setDark(over);

    let label = chapters[0]?.label ?? '';
    for (const chapter of chapters) {
      const el = document.getElementById(chapter.id);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) label = chapter.label;
    }
    setCurrent(label);
  });

  return (
    <header className={styles.nav} data-theme={dark ? 'dark' : undefined} data-print="hide">
      <div className={styles.inner}>
        <a className={styles.brand} href="#inicio" aria-label="Volver al inicio de la propuesta">
          <span className={styles.monogram}>{data.author.monogram}</span>
          <span className={styles.for}>Propuesta para {data.client.name}</span>
        </a>

        <div className={styles.right}>
          <span className={styles.chapter} aria-hidden="true">
            {current}
          </span>
          <AnimatePresence>
            {pastHero && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <CTAButton cta={data.cta} label="Agendar" variant="text" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <motion.div className={styles.progress} style={{ scaleX: scrollYProgress }} aria-hidden="true" />
    </header>
  );
}
