import { useEffect, useRef } from 'react';
import { ScrollTrigger, gsap, useGSAP, MQ } from '../../../utils/gsap.js';
import { usePrivateDocument } from '../../../utils/usePrivateDocument.js';
import ProposalNav from '../../proposal/ProposalNav.jsx';
import ProposalHero from '../../proposal/ProposalHero.jsx';
import ProposalFooter from '../../proposal/ProposalFooter.jsx';
import Section from '../../ui/Section.jsx';
import SectionHeader from '../../ui/SectionHeader.jsx';
import CTAButton from '../../ui/CTAButton.jsx';
import DarkChapter from '../../ui/DarkChapter.jsx';
import { Fade, RevealChars, RevealText } from '../../ui/Reveal.jsx';
import LivePreview from './LivePreview.jsx';
import styles from './ClaudiaProposal.module.css';

function Opportunity({ content }) {
  return (
    <Section id="oportunidad" labelledBy="oportunidad-title" className={styles.opportunity}>
      <SectionHeader id="oportunidad-title" eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
      <ol className={styles.journey} aria-label="Recorrido desde los canales de Claudia hasta la reserva">
        {content.journey.map((step, index) => (
          <Fade as="li" className={styles.journeyStep} delay={index * 0.08} key={step.label}>
            <span className={styles.journeyIndex} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <p className={styles.journeyStage}>{step.stage}</p>
            <h3>{step.label}</h3>
            <p className={styles.journeyDetail}>{step.detail}</p>
          </Fade>
        ))}
      </ol>
      <Fade as="p" className={`${styles.note} ${styles.hypothesis}`}>
        {content.transparency.map((line) => <span key={line}>{line}</span>)}
      </Fade>
    </Section>
  );
}

function VisualDirectionSection({ content }) {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add({ motion: MQ.motion, wide: MQ.wide }, (ctx) => {
      if (!ctx.conditions.motion || !ctx.conditions.wide) return;
      const q = gsap.utils.selector(root.current);
      const scrollTrigger = { trigger: q('[data-stage]')[0], start: 'top 85%', end: 'bottom 30%', scrub: 0.6 };
      gsap.fromTo(q('[data-slot="desktop"]'), { rotationY: -5, rotationX: 2, transformPerspective: 1600 }, { rotationY: -1.5, rotationX: 0, ease: 'none', scrollTrigger });
      gsap.fromTo(q('[data-slot="mobile"]'), { y: 34 }, { y: -24, ease: 'none', scrollTrigger });
    });
    return () => mm.revert();
  }, { scope: root });

  return (
    <Section id="direccion-visual" labelledBy="direccion-title" className={styles.direction}>
      <div ref={root}>
        <SectionHeader id="direccion-title" eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
        <div className={styles.demoAction}><CTAButton href={content.demo.href} label={content.demo.label} variant="solid" size="lg" /></div>
        <div className={styles.stage} data-stage>
          <figure className={styles.slotDesktop} data-slot="desktop">
            <LivePreview src={content.previewSrc} width={1440} height={900} kind="desktop" title="Vista previa de la demo en escritorio" />
            <figcaption>{content.previewCaptions.desktop}</figcaption>
          </figure>
          <figure className={styles.slotMobile} data-slot="mobile">
            <LivePreview src={content.previewSrc} width={390} height={780} kind="mobile" title="Vista previa de la demo en mobile" />
            <figcaption>{content.previewCaptions.mobile}</figcaption>
          </figure>
        </div>
        <div className={styles.system}>
          <ul className={styles.palette} aria-label="Paleta">
            {content.palette.map((swatch) => (
              <li key={swatch.code} className={styles.swatch} style={{ '--swatch': swatch.code, color: swatch.dark ? 'var(--ivory)' : 'var(--ink-base)' }}>
                <span>{swatch.name}</span><code>{swatch.code}</code>
              </li>
            ))}
          </ul>
          <p className={styles.typography}>{content.typography.map((line) => <span key={line}>{line}</span>)}</p>
          <p className={styles.criteria}>{content.criteria.map((item) => <span key={item}>{item}</span>)}</p>
        </div>
        <p className={`${styles.note} ${styles.directionNote}`}>
          {content.disclaimer.map((line) => <span key={line}>{line}</span>)}
        </p>
      </div>
    </Section>
  );
}

function EditorialList({ items }) {
  return <ul className={styles.list}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function PageScope({ content }) {
  return (
    <Section id="pagina" labelledBy="pagina-title" className={styles.scope}>
      <SectionHeader id="pagina-title" eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
      <ol className={styles.rows}>
        {content.rows.map((row, index) => (
          <Fade as="li" className={styles.row} key={row.label}>
            <span className={styles.rowNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h3>{row.label}</h3><p>{row.text}</p>
          </Fade>
        ))}
      </ol>
      <div className={styles.architectureNotes}>
        <p>{content.architectureNote}</p><p>{content.budgetNote}</p>
      </div>
      <div className={styles.scopeBlock}>
        <h3 className={styles.scopeHeading}>{content.scopeTitle}</h3>
        <div className={styles.scopeGroups}>
          {content.scopeGroups.map((group) => (
            <article className={styles.scopeGroup} key={group.title}>
              <h4>{group.title}</h4>
              <EditorialList items={group.items} />
              {group.note && <p className={styles.listNote}>{group.note}</p>}
            </article>
          ))}
        </div>
        <div className={styles.administration}>
          <div>
            <p className={styles.adminEyebrow}>{content.administration.eyebrow}</p>
            <h4>{content.administration.title}</h4>
          </div>
          <div>
            <p>{content.administration.description}</p>
            <p className={styles.listNote}>{content.administration.note}</p>
          </div>
        </div>
      </div>
      <div className={styles.secondaryScope}>
        <div><h3 className={styles.listTitle}>{content.exclusionsTitle}</h3><p>{content.exclusions}</p></div>
        <aside className={styles.optional}><h3>{content.optionalTitle}</h3><p>{content.optionalText}</p></aside>
      </div>
    </Section>
  );
}

function Investment({ content }) {
  const { price, timeline, timelineDetail, payment, paymentDetails, revisions } = content.commercial;
  return (
    <Section id="inversion" labelledBy="inversion-title" className={styles.investment}>
      <SectionHeader id="inversion-title" title={content.title} />
      <div className={styles.investmentGrid}>
        <div className={styles.pricePanel}>
          <p className={styles.priceLabel}>{content.label}</p>
          <p className={styles.price}><span>USD</span><RevealChars className={styles.figure}>{price}</RevealChars></p>
          <p className={styles.priceSummary}>{content.summary}</p>
        </div>
        <dl className={styles.terms}>
          <Fade><dt>Plazo</dt><dd><strong>{timeline}</strong><span>{timelineDetail}</span></dd></Fade>
          <Fade><dt>Forma de pago</dt><dd><strong>{payment}</strong><span>{paymentDetails}</span></dd></Fade>
          <Fade><dt>Revisiones</dt><dd><strong>{revisions}</strong></dd></Fade>
        </dl>
      </div>
    </Section>
  );
}

function FinalStep({ content }) {
  return (
    <Section id="proximo-paso" labelledBy="proximo-paso-title" className={styles.finalStep}>
      <div className={styles.finalContent}>
        <p className={styles.finalEyebrow}>{content.eyebrow}</p>
        <h2 id="proximo-paso-title"><RevealText>{content.title}</RevealText></h2>
        <Fade as="p" className={styles.finalText}>{content.text}</Fade>
        <Fade className={styles.finalAction}><CTAButton cta={content.cta} label={content.buttonLabel} variant="solid" size="lg" /></Fade>
      </div>
    </Section>
  );
}

export default function ClaudiaProposal({ data }) {
  usePrivateDocument(`Propuesta para ${data.client.name} — ${data.author.name}`);
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh); window.addEventListener('load', refresh);
    return () => window.removeEventListener('load', refresh);
  }, []);

  const labels = data.navigation.labels;
  const chapters = [
    { id: 'inicio', label: labels.intro }, { id: 'oportunidad', label: labels.opportunity },
    { id: 'direccion-visual', label: labels.visualDirection }, { id: 'pagina', label: labels.page },
    { id: 'inversion', label: labels.investment }, { id: 'proximo-paso', label: labels.nextStep },
  ];

  return <>
    <a className="skip-link" href="#contenido" data-print="hide">Saltar al contenido</a>
    <ProposalNav data={data} chapters={chapters} />
    <main id="contenido">
      <ProposalHero data={data} />
      <Opportunity content={data.opportunity} />
      <VisualDirectionSection content={data.visualDirection} />
      <PageScope content={data.page} />
      <Investment content={data.investment} />
      <DarkChapter><FinalStep content={data.finalCTA} /></DarkChapter>
    </main>
    <ProposalFooter data={data} />
  </>;
}
