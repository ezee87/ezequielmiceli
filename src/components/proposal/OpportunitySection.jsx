import { useRef } from 'react';
import Section from '../ui/Section.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { Fade } from '../ui/Reveal.jsx';
import { gsap, useGSAP, MQ } from '../../utils/gsap.js';
import styles from './OpportunitySection.module.css';

function VerticalSequence({ steps, className = '' }) {
  return (
    <ol className={`${styles.verticalSequence} ${className}`}>
      {steps.map((step) => (
        <li key={step.id ?? step.label} data-step-id={step.id}>
          <span className={styles.nodeLabel}>{step.label ?? step}</span>
        </li>
      ))}
    </ol>
  );
}

function BranchingBoard({ observed, proposed, layout, client }) {
  return (
    <div className={styles.branchingBoard} data-layout={layout} data-client={client}>
      <article className={styles.currentPath}>
        <p className={styles.pathHeading}>{observed.label}</p>
        <VerticalSequence steps={observed.steps} />
        {observed.note && <p className={styles.pathNote}>{observed.note}</p>}
      </article>

      <article className={styles.proposedPath}>
        <p className={`${styles.pathHeading} ${styles.proposedHeading}`}>{proposed.label}</p>
        <VerticalSequence steps={proposed.steps} />
        <div className={styles.branchDecision}>
          <p>{proposed.decision}</p>
        </div>
        <div className={styles.opportunityBranches}>
          {proposed.branches.map((branch) => (
            <section className={styles.opportunityBranch} key={branch.id ?? branch.label}>
              <p className={styles.branchLabel}>{branch.label}</p>
              {branch.audience && <p className={styles.branchAudience}>{branch.audience}</p>}
              <VerticalSequence steps={branch.steps} className={styles.branchSequence} />
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}

/**
 * Transformación: el recorrido observado se convierte en el propuesto.
 * En desktop los pasos compartidos "viajan" de una fila a la otra con el scroll (GSAP);
 * en mobile ambos recorridos se presentan como listas verticales estáticas.
 */
export default function OpportunitySection({ data }) {
  const { eyebrow, title, lead, observed, proposed, insight } = data.opportunity;
  const board = useRef(null);
  const branching = Boolean(proposed.branches?.length);

  const counterpartOf = (step) => observed.steps.find((o) => o.id === step.id || o.id === step.replaces);
  const newIndexes = proposed.steps.map((s, i) => (counterpartOf(s) ? -1 : i)).filter((i) => i >= 0);
  const gap = newIndexes.length
    ? { start: newIndexes[0] + 1, span: Math.max(1, newIndexes.at(-1) - newIndexes[0]) }
    : null;

  useGSAP(
    () => {
      if (branching) return undefined;
      const mm = gsap.matchMedia();
      const q = gsap.utils.selector(board.current);

      // Mobile and reduced-motion render the final, fully visible state. Keeping
      // this in its own media context also clears desktop timeline styles when the
      // viewport crosses the breakpoint after the animation has been initialized.
      mm.add('(max-width: 899.98px), (prefers-reduced-motion: reduce)', () => {
        gsap.set(q('[data-step]'), { x: 0, y: 0 });
        gsap.set(q('[data-label]'), { autoAlpha: 1 });
        gsap.set(q('[data-dot]'), { scale: 1 });
        gsap.set(q('[data-rail]'), { scaleX: 1 });
        gsap.set(q('[data-gap]'), { autoAlpha: 1 });
      });

      mm.add(`${MQ.wide} and ${MQ.motion}`, () => {

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
    { scope: board, dependencies: [branching], revertOnUpdate: true },
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

      {branching ? <BranchingBoard observed={observed} proposed={proposed} layout={data.opportunity.layout} client={data.slug} /> : <div className={styles.board} ref={board}>
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
                style={{ gridColumn: `${gap.start} / span ${gap.span}` }}
              >
                {proposed.gapLabel ?? 'Etapas que hoy faltan'}
              </li>
            )}
            {proposed.steps.map((s) => renderStep(s, 'proposed'))}
          </ol>
        </div>
      </div>}

      {insight && (
        <Fade className={`${styles.insight} ${insight.align === 'left' ? styles.insightLeft : ''}`}>
          {insight.title && <h3>{insight.title}</h3>}
          <p>{insight.text ?? insight}</p>
        </Fade>
      )}
    </Section>
  );
}
