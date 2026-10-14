import { useEffect } from 'react';
import { ScrollTrigger } from '../../utils/gsap.js';
import { usePrivateDocument } from '../../utils/usePrivateDocument.js';
import { PROPOSAL_PATH } from '../../data/claudia/booking.js';
import { site } from '../../data/claudia/site.js';
import { testimonials } from '../../data/claudia/testimonials.js';
import SiteHeader from './SiteHeader.jsx';
import Hero from './Hero.jsx';
import Situations from './Situations.jsx';
import Testimonials from './Testimonials.jsx';
import Approach from './Approach.jsx';
import LifeModel from './LifeModel.jsx';
import About from './About.jsx';
import Closing from './Closing.jsx';
import SiteFooter from './SiteFooter.jsx';
import BookingModalProvider from './BookingModal.jsx';
import './claudia.css';
import styles from './ClaudiaSite.module.css';

function setMeta(name, content) {
  let el = document.head.querySelector(`meta[name="${name}"]`);
  const created = !el;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  const previous = el.getAttribute('content');
  el.setAttribute('content', content);
  return () => {
    if (created) el.remove();
    else if (previous !== null) el.setAttribute('content', previous);
  };
}

/**
 * Demo funcional de la web de Claudia Sánchez: /demo/claudia-sanchez.
 * Con `?embed=1` (vista previa dentro de la propuesta) se omite la franja de concepto.
 */
export default function ClaudiaSite() {
  const embedded = new URLSearchParams(window.location.search).has('embed');
  usePrivateDocument(site.meta.title);

  useEffect(() => {
    const restore = [
      setMeta('description', site.meta.description),
      setMeta('theme-color', '#1b1a44'),
    ];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    if (!reduce) root.style.scrollBehavior = 'smooth';
    const previousBackground = root.style.background;
    root.style.background = '#1b1a44';
    // Dentro de la vista previa de la propuesta no debe aparecer scrollbar.
    const previousOverflow = root.style.overflow;
    if (embedded) root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = previousOverflow;
      restore.forEach((undo) => undo());
      root.style.scrollBehavior = previousBehavior;
      root.style.background = previousBackground;
    };
  }, [embedded]);

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener('load', refresh);
    return () => window.removeEventListener('load', refresh);
  }, []);

  return (
    <div className="claudia-root">
      <BookingModalProvider>
      <a className="skip-link" href="#contenido" data-print="hide">
        Saltar al contenido
      </a>

      {!embedded && (
        <div className={styles.concept} data-print="hide">
          <p>
            <strong>Demo de concepto</strong> · Contenido propuesto, pendiente de validación con Claudia.
          </p>
          <a href={PROPOSAL_PATH}>← Volver a la propuesta</a>
        </div>
      )}

      <SiteHeader brand={site.brand} nav={site.nav} />

      <main id="contenido">
        <Hero hero={site.hero} portrait={site.portrait} />
        <Situations content={site.situations} />
        <Testimonials content={testimonials} />
        <Approach content={site.approach} />
        <LifeModel content={site.life} />
        <About content={site.about} portrait={site.portrait} />
        <Closing content={site.closing} />
      </main>

      <SiteFooter brand={site.brand} content={site.footer} nav={site.nav} />
      </BookingModalProvider>
    </div>
  );
}
