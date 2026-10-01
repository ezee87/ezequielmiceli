import { useRef } from 'react';
import Section from '../ui/Section.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { gsap, ScrollTrigger, useGSAP, MQ } from '../../utils/gsap.js';
import styles from './VisualDirection.module.css';

function Surface({ image, kind, label, scrollableMobile = false }) {
  const isScrollableMobile = kind === 'mobile' && scrollableMobile;

  return (
    <figure className={styles[kind]}>
      <div className={styles.device} data-device={kind} data-scroll-mobile={isScrollableMobile ? '' : undefined} style={{ '--ar': `${image.width} / ${image.height}` }}>
        <div className={styles.shell}>
          <div className={styles.bezel}>
            <div className={styles.viewport} data-mobile-viewport={isScrollableMobile ? '' : undefined}>
              {image.available === false ? (
                <div className={styles.placeholder} role="img" aria-label={`${image.alt} Pendiente de incorporar.`}>
                  <span>Mockup {label}</span>
                  <small>Pendiente de incorporar</small>
                </div>
              ) : (
                <img
                  className={styles.capture}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  data-scroll-capture={isScrollableMobile ? '' : undefined}
                />
              )}
            </div>
          </div>
        </div>
        {kind === 'desktop' && <div className={styles.base} aria-hidden="true" />}
      </div>
      <figcaption className={styles.figureCaption}>
        <p className={styles.label}>{label}</p>
        {image.title && <h3>{image.titleLines ? image.titleLines.map((line, index) => (
          <span className={styles.titleLine} key={line}>{line}{index < image.titleLines.length - 1 ? ' ' : null}</span>
        )) : image.title}</h3>}
        {image.description && <p>{image.description}</p>}
      </figcaption>
    </figure>
  );
}

const ENTRANCE = {
  desktop: { from: { opacity: 0, y: 40, scale: 0.97, rotationX: 5, transformPerspective: 1400, transformOrigin: '50% 100%' }, delay: 0 },
  mobile: { from: { opacity: 0, y: 46, scale: 0.96, rotationX: 4, rotationY: -3, transformPerspective: 1400, transformOrigin: '50% 100%' }, delay: 0.18 },
};

/** Los dispositivos entran como objeto completo; las capturas mobile recorren su viewport con el scroll. */
export default function VisualDirection({ data }) {
  const { eyebrow, title, lead, reference, desktop, mobile, mockups, compactMobileShowcase, mobileEditorialStack, scrollMobileMockups } = data.visualDirection;
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MQ.motion, () => {
      const devices = gsap.utils.toArray('[data-device]', root.current);
      const sharedMobileTrigger = mockups?.length
        ? devices.find((device) => device.dataset.device === 'mobile')
        : null;

      devices.forEach((device) => {
        const { from, delay } = ENTRANCE[device.dataset.device];
        gsap.fromTo(device, from, {
          opacity: 1, y: 0, scale: 1, rotationX: 0, rotationY: 0,
          duration: 1, delay, ease: 'power3.out', clearProps: 'all',
          scrollTrigger: {
            trigger: device.dataset.device === 'mobile' && sharedMobileTrigger ? sharedMobileTrigger : device,
            start: 'top 88%',
            once: true,
          },
        });
      });

      const mobileCaptures = gsap.utils.toArray('[data-scroll-capture]', root.current);
      const mobileScrollTrigger = root.current.querySelector(`.${styles.mobilePair}`) ?? root.current;
      const pendingImageLoads = [];

      mobileCaptures.forEach((capture) => {
        const viewport = capture.closest('[data-mobile-viewport]');

        gsap.fromTo(capture, { y: 0 }, {
          y: () => -Math.max(0, capture.scrollHeight - viewport.clientHeight),
          ease: 'none',
          scrollTrigger: {
            trigger: mobileScrollTrigger,
            start: 'top 82%',
            end: 'bottom 22%',
            scrub: 0.65,
            invalidateOnRefresh: true,
          },
        });

        if (!capture.complete) {
          const refreshOnLoad = () => ScrollTrigger.refresh();
          capture.addEventListener('load', refreshOnLoad, { once: true });
          pendingImageLoads.push([capture, refreshOnLoad]);
        }
      });

      return () => {
        pendingImageLoads.forEach(([capture, refreshOnLoad]) => {
          capture.removeEventListener('load', refreshOnLoad);
        });
      };
    });
    return () => mm.revert();
  }, { scope: root });

  return (
    <Section id="direccion-visual" labelledBy="direccion-title">
      <SectionHeader id="direccion-title" eyebrow={eyebrow} title={title} lead={lead} />
      <div className={styles.showcase} ref={root}>
        <div className={styles.pin} data-multiple={mockups?.length ? '' : undefined} data-caption={reference ? '' : undefined}>
          {reference && <div className={styles.caption}>
            <p className={styles.tag}>{reference.label}</p>
            <h3 className={styles.refTitle}>{reference.title}</h3>
            <p className={styles.refNote}>{reference.note}</p>
          </div>}
          <div className={styles.scene} data-multiple={mockups?.length ? '' : undefined} data-compact-mobile={compactMobileShowcase ? '' : undefined} data-mobile-editorial={mobileEditorialStack ? '' : undefined}>
            {mockups?.length ? <>
              {mobileEditorialStack && <div className={styles.mobileDivider} aria-hidden="true" />}
              {mockups.filter((mockup) => mockup.kind === 'desktop').map((mockup) => (
                <Surface image={mockup} kind={mockup.kind} label={mockup.label} key={mockup.id ?? mockup.label} />
              ))}
              <div className={styles.mobilePair}>
                {mockups.filter((mockup) => mockup.kind === 'mobile').map((mockup) => (
                  <Surface image={mockup} kind={mockup.kind} label={mockup.label} scrollableMobile={scrollMobileMockups} key={mockup.id ?? mockup.label} />
                ))}
              </div>
            </> : <>
              <Surface image={desktop} kind="desktop" label="Desktop" />
              <Surface image={mobile} kind="mobile" label="Mobile" />
            </>}
          </div>
        </div>
      </div>
    </Section>
  );
}
