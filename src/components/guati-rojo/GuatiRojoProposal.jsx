import { useEffect } from 'react';
import '@fontsource-variable/dm-sans';
import { ScrollTrigger } from '../../utils/gsap.js';
import { usePrivateDocument } from '../../utils/usePrivateDocument.js';
import ProposalNav from '../proposal/ProposalNav.jsx';
import ProposalHero from '../proposal/ProposalHero.jsx';
import ProposalFooter from '../proposal/ProposalFooter.jsx';
import Section from '../ui/Section.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import CTAButton from '../ui/CTAButton.jsx';
import { Fade, RevealChars, RevealText } from '../ui/Reveal.jsx';
import styles from './GuatiRojoProposal.module.css';

const journey = [
  ['01', 'CONOCER LA FIRMA', ['Trayectoria y', 'experiencia.'], ['Una presentación clara de', 'quiénes son y qué los distingue.']],
  ['02', 'EXPLORAR SU EXPERIENCIA', ['Áreas, profesionales y', 'clientes.'], ['Información organizada para conocer', 'sus especialidades y equipo.']],
  ['03', 'TOMAR CONTACTO', ['Un siguiente paso', 'accesible.'], ['Canales de comunicación', 'fáciles de encontrar.']],
];

const pageGroups = [
  ['PÁGINAS PRINCIPALES', ['Inicio', 'La Firma', 'Áreas de práctica', 'Oportunidades', 'Contacto']],
  ['PÁGINAS DE ESPECIALIDADES', ['Constitucional y Amparo', 'Civil y Mercantil', 'Corporativo', 'Regulatorio', 'Recuperación de Cartera', 'Familiar']],
];

const scope = [
  ['01 / DISEÑO Y DESARROLLO', ['Modernización visual de la página principal y las páginas internas incluidas.', 'Diseño adaptable a computadoras, tablets y celulares.', 'Reorganización de contenidos y navegación.', 'Integración de fotografías, información institucional y áreas de práctica.', 'Optimización técnica básica para buscadores (SEO): títulos, metadescripciones, estructura de encabezados y revisión de indexación.', 'Configuración o revisión de Google Analytics y Google Search Console para verificar la medición del tráfico y el seguimiento de la presencia del sitio en Google.']],
  ['02 / CONFIGURACIÓN Y PUBLICACIÓN', ['Implementación sobre WordPress, conservando la tecnología actual.', 'Configuración y adaptación de las páginas y sus contenidos.', 'Pruebas de funcionamiento y navegación.', 'Publicación de la versión final en el sitio existente.']],
];

function EditorialList({ items }) {
  return <ul className={styles.list}>{items.map((item) => <li key={item}><span className={styles.listText}>{item}</span></li>)}</ul>;
}

function ScopeHeading({ number, title }) {
  return <header className={styles.scopeHeading}>
    <div className={styles.scopeHeadingTop}><span className={styles.scopeNumber}>{number}</span><span className={styles.scopeRule} aria-hidden="true" /></div>
    <h3>{title}</h3>
  </header>;
}

function ResponsiveLines({ lines }) {
  return <>{lines.map((line) => <span className={styles.desktopLine} key={line}>{line}</span>)}</>;
}

function Opportunity() {
  return <Section id="oportunidad" labelledBy="oportunidad-title" className={styles.opportunity}>
    <SectionHeader className={styles.opportunityHeader} id="oportunidad-title" eyebrow="01 / LA OPORTUNIDAD" title={['Una trayectoria consolidada.', 'Una presencia digital a su altura.']} lead={[
      'GRSS ya cuenta con los elementos más importantes para transmitir confianza: experiencia, profesionales especializados, diversas áreas de práctica y clientes reconocidos.',
      'La oportunidad está en presentar todo ese valor de una manera más actual y organizada, para que quienes visiten el sitio puedan conocer la firma, explorar sus servicios y encontrar fácilmente cómo contactarla.',
    ]} />
    <ol className={styles.journey}>{journey.map(([number, stage, title, detail]) => <Fade as="li" className={styles.journeyStep} key={number}>
      <span className={styles.journeyIndex}>{number}</span><p className={styles.journeyStage}>{stage}</p><h3><ResponsiveLines lines={title} /></h3><p className={styles.journeyDetail}><ResponsiveLines lines={detail} /></p>
    </Fade>)}</ol>
    <p className={styles.note}><ResponsiveLines lines={['Esta propuesta parte de la información y los contenidos actuales de GRSS.', 'La organización definitiva se trabajará en conjunto durante el desarrollo.']} /></p>
  </Section>;
}

function Mockup({ kind, number, label, file }) {
  return <figure className={kind === 'desktop' ? styles.slotDesktop : styles.slotMobile} data-kind={kind}>
    <img className={styles.mockupImage} src={`/assets/grss/${file}`} alt={`Captura ${label.toLowerCase()} de la demo publicada de GRSS`} loading="lazy" />
    <figcaption><span>{number}</span> / {label}</figcaption>
  </figure>;
}

function VisualDirection({ demoHref }) {
  const palette = [['Rojo GRSS', '#C83F42', true], ['Blanco', '#FFFFFF', false], ['Gris suave', '#F5F5F3', false], ['Grafito', '#242629', true]];
  return <Section id="direccion-visual" labelledBy="direccion-title" className={styles.direction}><div>
    <div className={styles.directionHero} data-stage>
      <div className={styles.directionIntro}>
        <SectionHeader id="direccion-title" eyebrow="02 / PRIMERA DIRECCIÓN VISUAL" title="Una presencia institucional a la altura de su trayectoria." lead={[
          'Tomamos como punto de partida la identidad de GRSS y el contenido de su sitio actual para desarrollar una propuesta visual más moderna, clara y organizada.',
          'El diseño combina los tonos institucionales de la firma, fotografías de sus profesionales y una estructura que da mayor protagonismo a sus áreas de práctica, equipo y clientes.',
        ]} />
        <div className={styles.demoAction}><CTAButton href={demoHref} label="Explorar la demo interactiva" variant="solid" size="lg" target="_blank" rel="noopener noreferrer" /></div>
      </div>
      <Mockup kind="desktop" number="01" label="VERSIÓN DE ESCRITORIO" file="mockup_desktop.png" />
      <div className={styles.directionBottom}>
        <Mockup kind="mobile" number="02" label="VERSIÓN MÓVIL" file="mockup_mobile.png" />
        <div className={styles.system}>
          <div className={styles.paletteBlock}><p className={styles.listTitle}>PALETA VISUAL</p><ul className={styles.palette} aria-label="Paleta visual de GRSS">{palette.map(([name, code]) => <li key={code}><span className={styles.swatch} style={{ '--swatch': code }} aria-hidden="true" /><strong>{name}</strong><code>{code}</code></li>)}</ul></div>
          <div className={styles.typeSystem}><p className={styles.listTitle}>TIPOGRAFÍAS DEL SITIO</p><div><strong className={styles.instrumentSerif}>Instrument Serif</strong><span>Títulos y encabezados.</span></div><div><strong className={styles.dmSans}>DM Sans</strong><span>Textos, navegación y elementos de interfaz.</span></div></div>
        </div>
      </div>
    </div>
    <aside className={styles.disclaimer}>
      <div><strong>SOBRE ESTA PROPUESTA VISUAL</strong><p>Esta demo es una primera dirección visual, creada para mostrar cómo podría verse la imagen renovada de GRSS. No representa una versión definitiva del sitio: los textos, imágenes, secciones y su organización podrán modificarse y ajustarse en conjunto durante el desarrollo.</p><p>Por este motivo, la demo presenta únicamente la página de Inicio.</p></div>
      <div><strong>FOTOGRAFÍA PARA LA VERSIÓN DEFINITIVA</strong><p>Las fotografías utilizadas provienen del sitio actual de la firma y fueron retocadas para esta demo. Para la versión definitiva, recomendamos realizar una nueva sesión fotográfica del equipo y sus instalaciones.</p></div>
    </aside>
  </div></Section>;
}

function SiteArchitecture() {
  return <Section id="sitio" labelledBy="sitio-title" className={styles.architecture}>
    <SectionHeader className={styles.architectureHeader} id="sitio-title" eyebrow="03 / EL SITIO" title={['Una experiencia completa.', 'Una identidad consistente.']} lead="La modernización contempla tanto la página principal como las páginas internas de GRSS, manteniendo una misma línea visual y una navegación clara en todo el sitio." />
    <div className={styles.pageGroups}>{pageGroups.map(([title, items]) => <article key={title}><h3>{title}</h3><ol>{items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ol></article>)}</div>
    <p className={styles.courseNote}>El acceso a Cursos conservará su enlace a la plataforma externa actual, sin modificaciones.</p>
    <div className={styles.architectureNote}><p>La demo interactiva presenta una primera dirección visual de la página de Inicio.</p></div>
  </Section>;
}

function Scope() {
  return <Section id="alcance" labelledBy="alcance-title" className={styles.scope}>
    <SectionHeader id="alcance-title" eyebrow="04 / ALCANCE DEL DESARROLLO" title="Alcance del desarrollo" />
    <div className={styles.scopeGrid}>
      {scope.map(([heading, items]) => {
        const [number, title] = heading.split(' / ');
        return <article className={styles.scopeListBlock} key={heading}><ScopeHeading number={number} title={title} /><EditorialList items={items} /></article>;
      })}
      <article className={styles.scopeFeature}><ScopeHeading number="03" title="ADMINISTRACIÓN" /><h4>El mismo WordPress.<br />Una experiencia renovada.</h4><div className={styles.featureCopy}><p>GRSS continuará utilizando WordPress para administrar su sitio.</p><p>Los textos, imágenes y contenidos habituales podrán actualizarse desde el panel de administración, sin necesidad de solicitar cada cambio a un desarrollador.</p></div></article>
      <article className={styles.scopeFeature}><ScopeHeading number="04" title="COMUNICACIÓN" /><h4>Una propuesta que vamos a construir juntos.</h4><div className={styles.featureCopy}><p>La demo es el punto de partida, no un diseño cerrado.</p><p>Durante el desarrollo mantendremos una comunicación constante para revisar avances, ajustar contenidos y definir los detalles visuales y funcionales del sitio.</p></div></article>
    </div>
    <div className={styles.exclusions}><p className={styles.listTitle}>NO INCLUIDO</p><p>Nuevas funcionalidades o desarrollos no contemplados en el alcance acordado, servicios externos de pago y mantenimiento posterior a la entrega.</p></div>
  </Section>;
}

function Investment() {
  return <Section id="inversion" labelledBy="inversion-title" className={styles.investment}>
    <SectionHeader id="inversion-title" eyebrow="05 / INVERSIÓN" title="Inversión" />
    <div className={styles.investmentGrid}><div><p className={styles.priceLabel}>MODERNIZACIÓN DEL SITIO INSTITUCIONAL</p><p className={styles.price}><span>USD</span><RevealChars className={styles.figure}>250</RevealChars></p><p className={styles.priceSummary}>Modernización integral del sitio web de GRSS, incluyendo la página principal, sus páginas internas y la implementación sobre WordPress.</p></div>
      <dl className={styles.terms}><Fade><dt>PLAZO DE DESARROLLO</dt><dd><strong>14 días.</strong><span>Desde la recepción de los materiales, accesos e información necesarios para comenzar.</span></dd></Fade><Fade><dt>FORMA DE PAGO</dt><dd><strong>50 % al comenzar y 50 % al finalizar.</strong><span>USD 125 al iniciar. USD 125 al finalizar.</span></dd></Fade><Fade><dt>REVISIONES</dt><dd><strong>Una primera versión completa y dos rondas de correcciones.</strong><span>Los avances se compartirán durante el desarrollo para revisar y ajustar el trabajo en conjunto.</span></dd></Fade></dl>
    </div>
  </Section>;
}

function Closing() {
  return <Section id="cierre" labelledBy="cierre-title" className={styles.closing}><div className={styles.closingContent}>
    <h2 id="cierre-title"><RevealText>Gracias por conocer esta propuesta.</RevealText></h2>
    <Fade as="p">Esta primera dirección visual busca mostrar las posibilidades de renovar la presencia digital de GRSS, respetando su identidad y dando mayor protagonismo a la trayectoria, experiencia y profesionales de la firma.</Fade>
    <Fade as="strong">Esperamos que sea el punto de partida para construir un sitio que los represente.</Fade>
  </div></Section>;
}

export default function GuatiRojoProposal({ data }) {
  usePrivateDocument(`Propuesta para ${data.client.name} — ${data.author.name}`);
  useEffect(() => { const refresh = () => ScrollTrigger.refresh(); document.fonts?.ready.then(refresh); window.addEventListener('load', refresh); return () => window.removeEventListener('load', refresh); }, []);
  const showInvestment = data.investment?.enabled !== false;
  const chapters = [{ id: 'inicio', label: 'Portada' }, { id: 'oportunidad', label: 'La oportunidad' }, { id: 'direccion-visual', label: 'Dirección visual' }, { id: 'sitio', label: 'El sitio' }, { id: 'alcance', label: 'Alcance' }, ...(showInvestment ? [{ id: 'inversion', label: 'Inversión' }] : [])];
  return <><a className="skip-link" href="#contenido" data-print="hide">Saltar al contenido</a><ProposalNav data={data} chapters={chapters} /><main id="contenido" className={styles.page}><div className={styles.heroSurface}><ProposalHero data={data} /></div><Opportunity /><VisualDirection demoHref={data.demoHref} /><SiteArchitecture /><Scope />{showInvestment && <Investment />}<Closing /></main><div className={styles.guatiFooter}><ProposalFooter data={data} /></div></>;
}
