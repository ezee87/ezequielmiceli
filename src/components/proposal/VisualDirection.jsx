import { useRef } from 'react';
import Section from '../ui/Section.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { Fade } from '../ui/Reveal.jsx';
import { gsap, useGSAP, MQ } from '../../utils/gsap.js';
import styles from './VisualDirection.module.css';

const WIDE = '(min-width: 1024px)';
const FULL = 'inset(0% 0% 0% 0%)';

function Surface({ image, kind, label }) {
  return (
    <figure className={styles[kind]} data-surface={kind}>
      <div className={styles.frame} data-frame>
        <div className={styles.scroller} data-scroller>
          <img
            className={styles.blur}
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            aria-hidden="true"
            data-blur
          />
          <img
            className={styles.crisp}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            data-crisp
          />
        </div>
      </div>
      <figcaption className={styles.label} data-label-in>
        {label}
      </figcaption>
    </figure>
  );
}

/**
 * M07 — Media Materialization (CSS + GSAP, sin WebGL).
 * Una superficie difusa y en perspectiva se resuelve en la captura real; el mobile entra con otra
 * profundidad y recorre su landing dentro de su viewport.
 */
export default function VisualDirection({ data }) {
  const { eyebrow, title, lead, reference, desktop, mobile, principles = [] } = data.visualDirection;
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ motion: MQ.motion, wide: WIDE }, (ctx) => {
        const { motion, wide } = ctx.conditions;
        if (!motion || !wide) return;
        const el = root.current;
        const q = gsap.utils.selector(el);
        const one = (sel) => q(sel)[0];

        el.setAttribute('data-armed', '');
        const plane = one('[data-plane]');
        const dCrisp = one('[data-surface="desktop"] [data-crisp]');
        const mSurface = one('[data-surface="mobile"]');
        const mCrisp = one('[data-surface="mobile"] [data-crisp]');
        const mFrame = one('[data-surface="mobile"] [data-frame]');
        const mScroller = one('[data-surface="mobile"] [data-scroller]');
        const labels = q('[data-label-in]');

        const tl = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(plane, { rotationX: 14, rotationY: -26, scale: 0.88 }, { rotationX: 4, rotationY: -8, scale: 1, duration: 6 }, 0)
          .fromTo(dCrisp, { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: FULL, duration: 4 }, 0.4)
          .fromTo(mSurface, { opacity: 0, z: -260, y: 150 }, { opacity: 1, z: 50, y: 0, duration: 4 }, 3)
          .fromTo(mCrisp, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: FULL, duration: 3.5 }, 3.6)
          .fromTo(labels, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.4 }, 5)
          .fromTo(
            mScroller,
            { y: 0 },
            { y: () => -Math.max(0, mScroller.scrollHeight - mFrame.clientHeight), duration: 3, ease: 'none' },
            7,
          );
        tl.to({}, { duration: 0.5 });

        return () => el.removeAttribute('data-armed');
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <Section id="direccion-visual" labelledBy="direccion-title">
      <SectionHeader id="direccion-title" eyebrow={eyebrow} title={title} lead={lead} />

      <div className={styles.showcase} ref={root}>
        <div className={styles.pin}>
          <div className={styles.caption}>
            <p className={styles.tag}>{reference.label}</p>
            <h3 className={styles.refTitle}>{reference.title}</h3>
            <p className={styles.refNote}>{reference.note}</p>
            {reference.relatesTo && (
              <p className={styles.relates}>
                Se corresponde con el bloque <strong>{reference.relatesTo.number}</strong> · {reference.relatesTo.name} de la
                arquitectura.
              </p>
            )}
            {principles.length > 0 && (
              <dl className={styles.principles}>
                {principles.map((p) => (
                  <Fade key={p.title}>
                    <dt>{p.title}</dt>
                    <dd>{p.text}</dd>
                  </Fade>
                ))}
              </dl>
            )}
          </div>

          <div className={styles.scene}>
            <div className={styles.plane} data-plane>
              <Surface image={desktop} kind="desktop" label="Desktop" />
              <Surface image={mobile} kind="mobile" label="Mobile" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
