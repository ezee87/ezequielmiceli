import { Fragment, useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP, MQ } from '../../utils/gsap.js';
import styles from './JourneyFlow.module.css';

const branchLabel = (index) => String.fromCharCode(65 + (index % 26));

function Chip({ node }) {
  if (!node.cta) return null;
  return <span className={styles.chip}>{node.ctaLabel ?? 'CTA → Conversión'}</span>;
}

function Item({ node, type = 'step', line = true }) {
  return (
    <li className={styles.item} data-flow data-type={type}>
      <span className={styles.dot} aria-hidden="true" />
      {line && <span className={styles.line} data-line aria-hidden="true" />}
      {node.kind && <p className={styles.kind}>{node.kind}</p>}
      <h3 className={styles.name}>{node.label}</h3>
      {node.description && <p className={styles.desc}>{node.description}</p>}
      <Chip node={node} />
    </li>
  );
}

function Merge({ label }) {
  return (
    <li className={styles.merge} data-flow>
      <svg className={styles.glyph} viewBox="0 0 24 18" aria-hidden="true" focusable="false">
        <path d="M2 1 L12 14 M22 1 L12 14 M12 14 V18" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className={styles.line} data-line aria-hidden="true" />
      <p className={styles.mergeName}>{label}</p>
    </li>
  );
}

function Paths({ step }) {
  const [open, setOpen] = useState(null);
  const mounted = useRef(false);

  // Al abrir o cerrar un camino cambia la altura: se recalculan los triggers posteriores.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return undefined;
    }
    const t = setTimeout(() => ScrollTrigger.refresh(), 450);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <li className={styles.paths}>
      <span className={styles.trunk} aria-hidden="true" />
      <ul className={styles.branches}>
        {step.branches.map((lane, i) => {
          const letter = branchLabel(i);
          const isOpen = open === lane.id;
          const id = `${step.id}-${lane.id}`;
          return (
            <li className={styles.branch} key={lane.id} data-flow data-open={isOpen ? '' : undefined}>
              <button
                type="button"
                className={styles.opt}
                id={`opt-${id}`}
                aria-expanded={isOpen}
                aria-controls={`panel-${id}`}
                onClick={() => setOpen(isOpen ? null : lane.id)}
              >
                <span className={styles.letter}>{letter}</span>
                <span className={styles.optText}>
                  <span className={styles.kind}>{lane.audience ?? `Camino ${letter}`}</span>
                  <span className={styles.optLabel}>{lane.label}</span>
                </span>
                <svg className={styles.chev} viewBox="0 0 12 12" aria-hidden="true" focusable="false">
                  <path d="M2 4.5 L6 8.5 L10 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>

              <div
                className={styles.panel}
                id={`panel-${id}`}
                role="region"
                aria-labelledby={`opt-${id}`}
                data-open={isOpen ? '' : undefined}
                inert={!isOpen}
              >
                <div className={styles.panelInner}>
                  <div className={styles.path} data-lane={i}>
                    <ol className={styles.pathSteps}>
                      {lane.steps.map((n, j) => (
                        <li className={styles.pathStep} key={n.id}>
                          <span className={styles.pDot} aria-hidden="true" />
                          {j < lane.steps.length - 1 && <span className={styles.pLine} aria-hidden="true" />}
                          {n.kind && <p className={styles.kind}>{n.kind}</p>}
                          <h4 className={styles.pName}>{n.label}</h4>
                          {n.description && <p className={styles.desc}>{n.description}</p>}
                          <Chip node={n} />
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
/**
 * Recorrido en pantallas angostas: secuencia vertical con decisión, caminos como piezas
 * diferenciadas y una convergencia explícita. No imita el diagrama desktop.
 */
export default function JourneyFlow({ journey }) {
  const root = useRef(null);
  const { steps } = journey;
  const mergeLabel = journey.convergenceLabel ?? 'Los dos recorridos vuelven a encontrarse';

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        root.current.querySelectorAll('[data-flow]').forEach((el) => {
          const scrollTrigger = { trigger: el, start: 'top 90%', once: true };
          gsap.fromTo(el, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger });
          const line = el.querySelector('[data-line]');
          if (line) {
            gsap.fromTo(
              line,
              { scaleY: 0, transformOrigin: '50% 0%' },
              { scaleY: 1, duration: 0.7, delay: 0.15, ease: 'power2.inOut', scrollTrigger },
            );
          }
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <ol className={styles.flow} ref={root} data-compact={journey.compact ? '' : undefined}>
      {steps.map((step) =>
        step.branches ? (
          <Fragment key={step.id}>
            <Item node={step} type="decision" />
            <Paths step={step} />
            <Merge label={mergeLabel} />
          </Fragment>
        ) : (
          <Item key={step.id} node={step} type={step.final ? 'final' : 'step'} line={!step.final} />
        ),
      )}
    </ol>
  );
}
