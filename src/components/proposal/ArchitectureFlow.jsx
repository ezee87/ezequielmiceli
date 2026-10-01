import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP, MQ } from '../../utils/gsap.js';
import styles from './ArchitectureFlow.module.css';

/**
 * Architecture en pantallas angostas: los bloques se suman uno debajo del otro en flujo normal,
 * como piezas de la futura landing. Sin sticky ni paneles auxiliares.
 */
export default function ArchitectureFlow({ sections }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        const el = root.current;
        el.setAttribute('data-armed', '');
        const blocks = el.querySelectorAll('[data-block]');

        blocks.forEach((block) => {
          const scrollTrigger = { trigger: block, start: 'top 90%', once: true };
          gsap.fromTo(
            block.querySelector('[data-slab]'),
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power2.out', scrollTrigger },
          );
          const conn = block.querySelector('[data-conn]');
          if (conn) {
            gsap.fromTo(
              conn,
              { scaleY: 0, transformOrigin: '50% 0%' },
              { scaleY: 1, duration: 0.6, delay: 0.2, ease: 'power2.inOut', scrollTrigger },
            );
          }
          // El bloque que se está leyendo queda resaltado; los anteriores se simplifican.
          ScrollTrigger.create({
            trigger: block,
            start: 'top 65%',
            end: 'bottom 65%',
            onToggle: (self) => block.toggleAttribute('data-current', self.isActive),
          });
        });

        return () => el.removeAttribute('data-armed');
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <ol className={styles.flow} ref={root}>
      {sections.map((s, i) => (
        <li className={styles.block} key={s.number} data-block>
          <span className={styles.rail} aria-hidden="true">
            <span className={styles.dot} />
            {i < sections.length - 1 && <span className={styles.conn} data-conn />}
          </span>

          <div className={styles.slab} data-slab>
            <p className={styles.number}>{s.number}</p>
            <h3 className={styles.name}>{s.name}</h3>
            <p className={styles.objective}>{s.objective}</p>
            {s.subpaths?.length > 0 && (
              <ul className={styles.forks} aria-label="Caminos de este bloque">
                {s.subpaths.map((p) => (
                  <li key={p.label}>{p.label}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
