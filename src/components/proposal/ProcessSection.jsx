import { useRef } from 'react';
import Section from '../ui/Section.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { Fade } from '../ui/Reveal.jsx';
import { gsap, useGSAP, MQ } from '../../utils/gsap.js';
import styles from './ProcessSection.module.css';

/** Narrativa tranquila: timeline editorial con un único hilo que avanza con la lectura. */
export default function ProcessSection({ data }) {
  const { eyebrow, title, lead, stages } = data.process;
  const list = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        gsap.fromTo(
          '[data-thread]',
          { scaleY: 0, transformOrigin: '50% 0%' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: list.current, start: 'top 65%', end: 'bottom 65%', scrub: true },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: list },
  );

  return (
    <Section id="proceso" labelledBy="proceso-title">
      <div className={styles.layout}>
        <div className={styles.side}>
          <SectionHeader id="proceso-title" eyebrow={eyebrow} title={title} lead={lead} />
        </div>

        <div className={styles.stages} ref={list}>
          <span className={styles.track} aria-hidden="true">
            <span className={styles.thread} data-thread />
          </span>
          <ol className={styles.list}>
            {stages.map((stage) => (
              <Fade as="li" className={styles.stage} key={stage.number}>
                <span className={styles.number}>{stage.number}</span>
                <div className={styles.content}>
                  <h3 className={styles.name}>{stage.name}</h3>
                  <p className={styles.summary}>{stage.summary}</p>
                  {stage.items?.length > 0 && (
                    <ul className={styles.items}>
                      {stage.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Fade>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
