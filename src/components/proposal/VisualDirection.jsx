import { useRef } from 'react';
import Section from '../ui/Section.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { gsap, useGSAP, MQ } from '../../utils/gsap.js';
import styles from './VisualDirection.module.css';

function Surface({ image, kind, label }) {
  return (
    <figure className={styles[kind]}>
      <div className={styles.device} data-device={kind} style={{ '--ar': `${image.width} / ${image.height}` }}>
        <div className={styles.shell}>
          <div className={styles.bezel}>
            <div className={styles.viewport}>
              <img className={styles.capture} src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
        {kind === 'desktop' && <div className={styles.base} aria-hidden="true" />}
      </div>
      <figcaption className={styles.label}>{label}</figcaption>
    </figure>
  );
}

const ENTRANCE = {
  desktop: { from: { opacity: 0, y: 40, scale: 0.97, rotationX: 5, transformPerspective: 1400, transformOrigin: '50% 100%' }, delay: 0 },
  mobile: { from: { opacity: 0, y: 46, scale: 0.96, rotationX: 4, rotationY: -3, transformPerspective: 1400, transformOrigin: '50% 100%' }, delay: 0.18 },
};

/** Los dispositivos entran como objeto completo y quedan quietos; la captura nunca se mueve. */
export default function VisualDirection({ data }) {
  const { eyebrow, title, lead, reference, desktop, mobile } = data.visualDirection;
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MQ.motion, () => {
      gsap.utils.toArray('[data-device]', root.current).forEach((device) => {
        const { from, delay } = ENTRANCE[device.dataset.device];
        gsap.fromTo(device, from, {
          opacity: 1, y: 0, scale: 1, rotationX: 0, rotationY: 0,
          duration: 1, delay, ease: 'power3.out', clearProps: 'all',
          scrollTrigger: { trigger: device, start: 'top 88%', once: true },
        });
      });
    });
    return () => mm.revert();
  }, { scope: root });

  return (
    <Section id="direccion-visual" labelledBy="direccion-title">
      <SectionHeader id="direccion-title" eyebrow={eyebrow} title={title} lead={lead} />
      <div className={styles.showcase} ref={root}>
        <div className={styles.pin}>
          <div className={styles.caption}>
            <p className={styles.tag}>{reference.label}</p>
            <h3 className={styles.refTitle}>{reference.title}</h3>
            <p className={styles.refNote}>{reference.note}</p>
          </div>
          <div className={styles.scene}>
            <Surface image={desktop} kind="desktop" label="Desktop" />
            <Surface image={mobile} kind="mobile" label="Mobile" />
          </div>
        </div>
      </div>
    </Section>
  );
}
