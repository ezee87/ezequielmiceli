import { useMemo, useRef } from 'react';
import Section from '../ui/Section.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { gsap, ScrollTrigger, useGSAP, MQ } from '../../utils/gsap.js';
import { buildJourneyGraph } from '../../utils/journeyGraph.js';
import styles from './LandingArchitecture.module.css';

const ART_BARS = { hero: 3, proof: 3, split: 2, text: 3, grid: 3, faq: 3, cta: 1, footer: 4 };
const DEPTH_STEP = 14;
const WIDE = '(min-width: 1024px)';

function ModuleArt({ shape = 'text' }) {
  return (
    <span className={styles.art} data-shape={shape} aria-hidden="true">
      {Array.from({ length: ART_BARS[shape] ?? 3 }, (_, i) => (
        <i key={i} />
      ))}
    </span>
  );
}

/**
 * M05 + M06 — Depth Stack + Sticky Build.
 * Los bloques de la landing se ensamblan en un plano CSS 3D mientras se lee cada paso (desktop);
 * en pantallas chicas la estructura es un blueprint vertical editorial.
 */
export default function LandingArchitecture({ data }) {
  const { eyebrow, title, lead, sections } = data.architecture;
  const layout = useRef(null);
  const bridge = useRef(null);
  const stepsRef = useRef(null);
  const journeyLabels = useMemo(() => {
    const { nodes } = buildJourneyGraph(data.journey?.steps);
    return (id) => nodes.get(id)?.label;
  }, [data.journey]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ motion: MQ.motion, wide: WIDE }, (ctx) => {
        const { motion, wide } = ctx.conditions;
        if (!motion) return;
        const root = layout.current;
        const q = gsap.utils.selector(root);

        gsap.fromTo(
          bridge.current,
          { scaleY: 0, transformOrigin: '50% 0%' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: bridge.current, start: 'top 88%', end: 'bottom 55%', scrub: true },
          },
        );

        if (!wide) return;

        const mods = q('[data-module]');
        const steps = q('[data-step]');
        root.setAttribute('data-armed', '');

        const tl = gsap.timeline({
          defaults: { ease: 'power2.out' },
          scrollTrigger: { trigger: stepsRef.current, start: 'top 55%', end: 'bottom 60%', scrub: 0.6 },
        });
        mods.forEach((mod, i) => {
          tl.fromTo(mod, { opacity: 0, z: 320, y: 40 }, { opacity: 1, z: 0, y: 0, duration: 0.7 }, i);
          for (let j = 0; j < i; j += 1) {
            tl.to(mods[j], { z: -DEPTH_STEP * (i - j), duration: 0.7, ease: 'power2.inOut' }, i);
          }
        });
        tl.to({}, { duration: 0.001 }, mods.length);

        const setActive = (index) => {
          steps.forEach((s, i) => (i === index ? s.setAttribute('data-active', '') : s.removeAttribute('data-active')));
          mods.forEach((m, i) => (i === index ? m.setAttribute('data-active', '') : m.removeAttribute('data-active')));
        };
        steps.forEach((step, i) => {
          ScrollTrigger.create({
            trigger: step,
            start: 'top 60%',
            end: 'bottom 60%',
            onToggle: (self) => self.isActive && setActive(i),
          });
        });

        return () => {
          root.removeAttribute('data-armed');
          [...steps, ...mods].forEach((el) => el.removeAttribute('data-active'));
        };
      });
      return () => mm.revert();
    },
    { scope: layout },
  );

  return (
    <Section id="estructura" labelledBy="estructura-title" style={{ paddingTop: 'calc(var(--section-pad) * 0.4)' }}>
      <span className={styles.bridge} ref={bridge} aria-hidden="true" />
      <SectionHeader id="estructura-title" eyebrow={eyebrow} title={title} lead={lead} />

      <div className={styles.layout} ref={layout}>
        <ol className={styles.steps} ref={stepsRef}>
          {sections.map((s) => {
            const ref = s.journeyRef ? journeyLabels(s.journeyRef) : null;
            return (
              <li className={styles.step} key={s.number} data-step>
                <p className={styles.number}>{s.number}</p>
                <h3 className={styles.name}>{s.name}</h3>
                <p className={styles.objective}>{s.objective}</p>
                {s.description && <p className={styles.description}>{s.description}</p>}

                {s.subpaths?.length > 0 && (
                  <ul className={styles.subpaths}>
                    {s.subpaths.map((p) => (
                      <li key={p.label}>
                        <span className={styles.subLabel}>{p.label}</span>
                        <ul>
                          {p.blocks.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}

                <dl className={styles.meta}>
                  {ref && (
                    <div>
                      <dt>Responde al recorrido</dt>
                      <dd>{ref}</dd>
                    </div>
                  )}
                  {s.cta && (
                    <div>
                      <dt>CTA</dt>
                      <dd>{s.cta}</dd>
                    </div>
                  )}
                  {s.note && (
                    <div>
                      <dt>Nota</dt>
                      <dd>{s.note}</dd>
                    </div>
                  )}
                </dl>
              </li>
            );
          })}
        </ol>

        <div className={styles.stageWrap} aria-hidden="true">
          <div className={styles.stage}>
            <div className={styles.stack}>
              {sections.map((s, i) => (
                <div
                  className={styles.module}
                  key={s.number}
                  data-module
                  style={{
                    '--w': s.shape === 'hero' || s.subpaths?.length ? 1.5 : 1,
                    transform: `translateZ(${-DEPTH_STEP * (sections.length - 1 - i)}px)`,
                  }}
                >
                  <span className={styles.modNumber}>{s.number}</span>
                  <span className={styles.modName}>{s.name}</span>
                  {s.subpaths?.length > 0 ? (
                    <span className={styles.fork}>
                      {s.subpaths.map((p) => (
                        <em key={p.label}>{p.label}</em>
                      ))}
                    </span>
                  ) : (
                    <ModuleArt shape={s.shape} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
