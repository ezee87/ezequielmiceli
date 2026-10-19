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
      <Fade as="p" className={`${styles.note} ${styles.opportunityHighlight}`}>{content.highlight}</Fade>
    </Section>
  );
}

function SiteStructure({ content }) {
  return <Section id="estructura" labelledBy="estructura-title" className={styles.structure}>
    <SectionHeader id="estructura-title" eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
    <ol className={styles.sitePages}>
      {content.pages.map((page) => <Fade as="li" className={styles.sitePage} key={page.number}>
        <div className={styles.sitePageIntro}>
          <p className={styles.pageNumber}>{page.number} {page.badge && <span className={styles.newsletterBadge}>{page.badge}</span>}</p>
          <h3>{page.title}</h3><p>{page.description}</p>
        </div>
        <div className={styles.sitePageDetails}>
          <p className={styles.listTitle}>{page.listLabel}</p><EditorialList items={page.items} />
          {page.highlight && <p className={styles.pageHighlight}>{page.highlight}</p>}
          {page.note && <p className={`${styles.listNote} ${page.badge ? styles.inlineBreak : ''}`}>{page.note}</p>}
        </div>
      </Fade>) }
    </ol>
    <div className={styles.complementary}>
      <p className={styles.listTitle}>{content.complementary.label}</p>
      <p className={styles.complementaryIntro}>{content.complementary.intro}</p>
      <div className={styles.complementaryPages}>{content.complementary.pages.map((page) => <article key={page.number}>
        <p className={styles.pageNumber}>{page.number}</p><h3>{page.title}</h3><p>{page.description}</p>
        {page.note && <p className={styles.listNote}>{page.note}</p>}
      </article>)}</div>
    </div>
  </Section>;
}

function VisitorJourney({ content }) {
  return <Section id="recorrido" labelledBy="recorrido-title" className={styles.visitorJourney}>
    <SectionHeader id="recorrido-title" eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
    <div className={styles.paths}>{content.paths.map((path) => <article className={styles.path} key={path.label}>
      <p className={styles.pageNumber}>{path.label}</p><h3>{path.title}</h3><p>{path.description}</p>
      <ol className={styles.pathSteps}>{path.steps.map((step) => <li key={step}>{step}</li>)}</ol>
      <p className={styles.pathClosing}>{path.closing}</p>
    </article>)}</div>
    <div className={styles.connected}><h3>{content.closingTitle}</h3><p className={styles.inlineBreak}>{content.closing}</p></div>
  </Section>;
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
    <Section id="alcance" labelledBy="alcance-title" className={styles.scope}>
      <SectionHeader id="alcance-title" eyebrow={content.eyebrow} title={content.title} />
      <div className={styles.scopeBlock}>
        <div className={styles.scopeGroups}>
          {content.groups.map((group) => (
            <article className={styles.scopeGroup} key={group.title}>
              <h4>{group.title}</h4>
              <EditorialList items={group.items} />
              {group.note && <p className={`${styles.listNote} ${styles.inlineBreak}`}>{group.note}</p>}
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
  const { price, timeline, timelineDetail, payment, paymentDetails, revisions, revisionsDetail } = content.commercial;
  return (
    <Section id="inversion" labelledBy="inversion-title" className={styles.investment}>
      <SectionHeader id="inversion-title" eyebrow={content.eyebrow} title={content.title} />
      <div className={styles.investmentGrid}>
        <div className={styles.pricePanel}>
          <p className={styles.priceLabel}>{content.label}</p>
          <p className={styles.price}><span>USD</span><RevealChars className={styles.figure}>{price}</RevealChars></p>
          <p className={styles.priceSummary}>{content.summary}</p>
        </div>
        <dl className={styles.terms}>
          <Fade><dt>Plazo</dt><dd><strong>{timeline}</strong><span>{timelineDetail}</span></dd></Fade>
          <Fade><dt>Forma de pago</dt><dd><strong>{payment}</strong><span>{paymentDetails}</span></dd></Fade>
          <Fade><dt>Revisiones</dt><dd><strong>{revisions}</strong><span>{revisionsDetail}</span></dd></Fade>
        </dl>
      </div>
    </Section>
  );
}

function FinalStep({ content }) {
  return (
    <Section id="proximo-paso" labelledBy="proximo-paso-title" className={styles.finalStep}>
      <div className={styles.finalContent}>
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
    { id: 'estructura', label: labels.structure }, { id: 'recorrido', label: labels.journey },
    { id: 'direccion-visual', label: labels.visualDirection }, { id: 'alcance', label: labels.scope },
    { id: 'inversion', label: labels.investment },
  ];

  return <>
    <a className="skip-link" href="#contenido" data-print="hide">Saltar al contenido</a>
    <ProposalNav data={data} chapters={chapters} />
    <main id="contenido">
      <ProposalHero data={data} />
      <Opportunity content={data.opportunity} />
      <SiteStructure content={data.structure} />
      <VisitorJourney content={data.journey} />
      <VisualDirectionSection content={data.visualDirection} />
      <PageScope content={data.scope} />
      <Investment content={data.investment} />
      <DarkChapter><FinalStep content={data.finalCTA} /></DarkChapter>
    </main>
    <ProposalFooter data={data} />
  </>;
}
