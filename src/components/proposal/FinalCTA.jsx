import { useRef } from 'react';
import Section from '../ui/Section.jsx';
import CTAButton from '../ui/CTAButton.jsx';
import { RevealText, Fade } from '../ui/Reveal.jsx';
import { gsap, useGSAP, MQ } from '../../utils/gsap.js';
import styles from './FinalCTA.module.css';

/** Cierre minimalista con un único acento espacial (M08 en su versión CSS translúcida, sin WebGL). */
export default function FinalCTA({ data }) {
  const { eyebrow, title, text, buttonLabel, signature } = data.finalCTA;
  const root = useRef(null);
  const scene = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ motion: MQ.motion, fine: MQ.fine }, (ctx) => {
        const { motion, fine } = ctx.conditions;
        if (!motion || !fine) return;
        const rotY = gsap.quickTo(scene.current, 'rotationY', { duration: 1.2, ease: 'power3.out' });
        const rotX = gsap.quickTo(scene.current, 'rotationX', { duration: 1.2, ease: 'power3.out' });
        const el = root.current;
        const onMove = (e) => {
          const r = el.getBoundingClientRect();
          rotY(((e.clientX - r.left) / r.width - 0.5) * 10);
          rotX(-((e.clientY - r.top) / r.height - 0.5) * 6);
        };
        el.addEventListener('pointermove', onMove);
        return () => el.removeEventListener('pointermove', onMove);
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <Section id="proximo-paso" labelledBy="proximo-title" className={styles.section}>
      <div className={styles.wrap} ref={root}>
        <div className={styles.accent} aria-hidden="true">
          <div className={styles.scene} ref={scene}>
            <span className={`${styles.slab} ${styles.slabBack}`} />
            <span className={`${styles.slab} ${styles.slabMid}`} />
            <span className={`${styles.slab} ${styles.slabFront}`} />
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.title} id="proximo-title">
            <RevealText>{title}</RevealText>
          </h2>
          <Fade as="p" className={styles.text} delay={0.2}>
            {text}
          </Fade>
          <Fade className={styles.action} delay={0.3}>
            <CTAButton cta={data.cta} label={buttonLabel} variant="solid" size="lg" />
          </Fade>
        </div>

        <p className={styles.signature}>{signature}</p>
      </div>
    </Section>
  );
}
