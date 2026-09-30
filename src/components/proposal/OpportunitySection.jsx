import { useRef } from 'react';
import Section from '../ui/Section.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { Fade } from '../ui/Reveal.jsx';
import { gsap, useGSAP, MQ } from '../../utils/gsap.js';
import styles from './OpportunitySection.module.css';

/**
 * Transformación: el recorrido observado se convierte en el propuesto.
 * En desktop los pasos compartidos "viajan" de una fila a la otra con el scroll (GSAP);
 * en mobile ambos recorridos se presentan como listas verticales estáticas.
 */
export default function OpportunitySection({ data }) {
  const { eyebrow, title, lead, observed, proposed, insight } = data.opportunity;
  const board = useRef(null);

  const counterpartOf = (step) => observed.steps.find((o) => o.id === step.id || o.id === step.replaces);
  const newIndexes = proposed.steps.map((s, i) => (counterpartOf(s) ? -1 : i)).filter((i) => i >= 0);
  const gap = newIndexes.length ? { start: newIndexes[0] + 1, count: newIndexes.length } : null;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ motion: MQ.motion, wide: MQ.wide }, (ctx) => {
        const { motion, wide } = ctx.conditions;
        if (!motion || !wide) return;

        const q = gsap.utils.selector(board.current);
        const obsEls = q('[data-row="observed"] [data-step]');
        const propEls = q('[data-row="proposed"] [data-step]');
        const offset = (el) => {
          const r = el.getBoundingClientRect();
          return { x: r.left - gsap.getProperty(el, 'x'), y: r.top - gsap.getProperty(el, 'y') };
        };

        const tl = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: {
            trigger: board.current,
            start: 'top 78%',
            end: 'bottom 42%',
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        tl.set(q('[data-row="proposed"] [data-label]'), { opacity: 0 }, 0).set(
          q('[data-row="proposed"] [data-rail]'),
          { scaleX: 0, transformOrigin: '0 50%' },
          0,
        );

        let t = 1;
        let gapPlaced = false;
        propEls.forEach((el) => {
          const fromId = el.dataset.from;
          const source = fromId ? obsEls.find((o) => o.dataset.id === fromId) : null;
          const label = el.querySelector('[data-label]');
          const dot = el.querySelector('[data-dot]');

          if (source) {
            tl.fromTo(
              el,
              {
                x: () => offset(source).x - offset(el).x,
                y: () => offset(source).y - offset(el).y,
              },
              { x: 0, y: 0, duration: 3 },
              t,
            )
              .fromTo(label, { opacity: 0 }, { opacity: 1, duration: 1.2 }, t + 1)
              .to(source.querySelector('[data-label]'), { opacity: 0.28, duration: 1 }, t + 0.5);
            t += 0.55;
          } else {
            if (!gapPlaced) {
              tl.fromTo(q('[data-gap]'), { opacity: 0 }, { opacity: 1, duration: 1.4 }, t + 1.5);
              gapPlaced = true;
            }
            tl.fromTo(
              el,
              { y: 26 },
              { y: 0, duration: 1.6 },
              t + 1.5,
            ).fromTo(label, { opacity: 0 }, { opacity: 1, duration: 1.2 }, t + 1.5);
            t += 0.55;
          }
          tl.fromTo(dot, { scale: 0 }, { scale: 1, duration: 0.6, ease: 'back.out(2)' }, t + 1.5);
        });

        tl.to(q('[data-row="proposed"] [data-rail]'), { scaleX: 1, duration: 2, stagger: 0.25, ease: 'none' }, '>-1.5');
        tl.to({}, { duration: 1 });
      });
      return () => mm.revert();
    },
    { scope: board },
  );

  const renderStep = (step, row) => {
    const from = row === 'proposed' ? counterpartOf(step) : null;
    return (
      <li
        key={step.id}
        className={styles.step}
        data-step
        data-id={step.id}
        data-from={from?.id}
        data-kind={row === 'proposed' && !from ? 'new' : undefined}
      >
        <span className={styles.rail} data-rail aria-hidden="true" />
        <span className={styles.dot} data-dot aria-hidden="true" />
        <span className={styles.label} data-label>
          {step.label}
        </span>
      </li>
    );
  };

  return (
    <Section id="oportunidad" labelledBy="oportunidad-title">
      <SectionHeader id="oportunidad-title" eyebrow={eyebrow} title={title} lead={lead} />

      <div className={styles.board} ref={board}>
        <div className={styles.row} data-row="observed">
          <p className={styles.rowLabel}>
            <span>{observed.caption}</span>
            {observed.label}
          </p>
          <ol className={styles.steps} style={{ '--n': observed.steps.length }}>
            {observed.steps.map((s) => renderStep(s, 'observed'))}
          </ol>
        </div>

        <div className={styles.row} data-row="proposed">
          <p className={`${styles.rowLabel} ${styles.proposedLabel}`}>
            <span>{proposed.caption}</span>
            {proposed.label}
          </p>
          <ol
            className={`${styles.steps} ${gap ? styles.hasGap : ''}`}
            style={{
              '--n': proposed.steps.length,
              '--cols': proposed.steps.map((s) => (counterpartOf(s) ? 'minmax(0,1fr)' : 'minmax(0,1.5fr)')).join(' '),
            }}
          >
            {gap && (
              <li
                className={styles.gap}
                data-gap
                aria-hidden="true"
                style={{ gridColumn: `${gap.start} / span ${gap.count}` }}
              >
                {proposed.gapLabel ?? 'Etapas que hoy faltan'}
              </li>
            )}
            {proposed.steps.map((s) => renderStep(s, 'proposed'))}
          </ol>
        </div>
      </div>

      {insight && (
        <Fade as="p" className={styles.insight}>
          {insight}
        </Fade>
      )}
    </Section>
  );
}
