import { useRef } from 'react';
import { gsap, useGSAP, MQ } from '../../utils/gsap.js';
import { formatDate } from '../../utils/format.js';
import CTAButton from '../ui/CTAButton.jsx';
import styles from './ProposalHero.module.css';

/** M02 — Spatial Typography: capas DOM/CSS con profundidad Z contenida + GSAP. */
export default function ProposalHero({ data }) {
  const root = useRef(null);
  const plane = useRef(null);
  const { client, project, date, author, intro } = data;
  const lines = client.name.split(' ');

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ motion: MQ.motion, fine: MQ.fine }, (ctx) => {
        const { motion, fine } = ctx.conditions;
        if (!motion) return;
        const q = gsap.utils.selector(root.current);

        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from(q('[data-pre]'), { opacity: 0, y: 14, duration: 0.8 }, 0.05)
          .from(q('[data-line-inner]'), { yPercent: 115, duration: 1.15, stagger: 0.1 }, 0.1)
          .from(q('[data-layer="back"]'), { opacity: 0, z: -360, duration: 1.8, ease: 'power2.out' }, 0.35)
          .from(q('[data-layer="front"]'), { opacity: 0, z: 220, duration: 1.4 }, 0.55)
          .from(q('[data-meta]'), { opacity: 0, y: 16, duration: 0.8, stagger: 0.08 }, 0.95);

        gsap
          .timeline({
            defaults: { ease: 'none' },
            scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
          })
          .to(q('[data-layer="back"]'), { yPercent: 16 }, 0)
          .to(q('[data-layer="main"]'), { yPercent: -5 }, 0)
          .to(q('[data-layer="front"]'), { yPercent: -30 }, 0);

        if (!fine) return;
        const rotY = gsap.quickTo(plane.current, 'rotationY', { duration: 0.9, ease: 'power3.out' });
        const rotX = gsap.quickTo(plane.current, 'rotationX', { duration: 0.9, ease: 'power3.out' });
        const onMove = (e) => {
          const r = root.current.getBoundingClientRect();
          rotY(((e.clientX - r.left) / r.width - 0.5) * 6);
          rotX(-((e.clientY - r.top) / r.height - 0.5) * 4);
        };
        const onLeave = () => {
          rotY(0);
          rotX(0);
        };
        const el = root.current;
        el.addEventListener('pointermove', onMove);
        el.addEventListener('pointerleave', onLeave);
        return () => {
          el.removeEventListener('pointermove', onMove);
          el.removeEventListener('pointerleave', onLeave);
        };
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      className={styles.hero}
      id="inicio"
      ref={root}
      aria-labelledby="hero-title"
      style={{ '--lines': lines.length }}
    >
      <div className={styles.top} data-meta>
        <p className={styles.eyebrow}>{intro.eyebrow}</p>
        <p className={styles.disciplines} aria-label="Disciplinas">
          {intro.disciplines.join(' · ')}
        </p>
      </div>

      <div className={styles.stage}>
        <div className={styles.plane} ref={plane}>
          <div className={styles.echo} data-layer="back" aria-hidden="true">
            {lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>

          <h1 className={styles.title} id="hero-title" data-layer="main">
            <span className={styles.pre} data-pre>
              {intro.pretitle}
            </span>
            {lines.map((line) => (
              <span className={styles.line} key={line}>
                <span className={styles.lineInner} data-line-inner>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div className={styles.rule} data-layer="front" aria-hidden="true">
            <span className={styles.ruleDot} />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <dl className={styles.meta}>
          <div data-meta>
            <dt>Proyecto</dt>
            <dd>{project.title}</dd>
          </div>
          <div data-meta>
            <dt>Fecha</dt>
            <dd>{formatDate(date)}</dd>
          </div>
          <div data-meta>
            <dt>Por</dt>
            <dd>
              {author.name}
              <span className={styles.role}>{author.role}</span>
            </dd>
          </div>
        </dl>
        <div className={styles.action} data-meta>
          <CTAButton href="#entendimiento" label={intro.startLabel} variant="solid" size="lg" />
        </div>
      </div>
    </section>
  );
}
