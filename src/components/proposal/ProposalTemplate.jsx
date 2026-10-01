import { useEffect } from 'react';
import { usePrivateDocument } from '../../utils/usePrivateDocument.js';
import { ScrollTrigger } from '../../utils/gsap.js';
import ProposalNav from './ProposalNav.jsx';
import ProposalHero from './ProposalHero.jsx';
import UnderstandingSection from './UnderstandingSection.jsx';
import OpportunitySection from './OpportunitySection.jsx';
import ConversionJourney from './ConversionJourney.jsx';
import LandingArchitecture from './LandingArchitecture.jsx';
import VisualDirection from './VisualDirection.jsx';
import ProcessSection from './ProcessSection.jsx';
import ScopeSection from './ScopeSection.jsx';
import PricingSection from './PricingSection.jsx';
import FinalCTA from './FinalCTA.jsx';
import ProposalFooter from './ProposalFooter.jsx';
import DarkChapter from '../ui/DarkChapter.jsx';

const SECTION_DEFINITIONS = [
  { key: 'understanding', id: 'entendimiento', label: 'Lo que entendí' },
  { key: 'opportunity', id: 'oportunidad', label: 'Oportunidad' },
  { key: 'journey', id: 'recorrido', label: 'Recorrido' },
  { key: 'visualDirection', id: 'direccion-visual', label: 'Dirección visual' },
  { key: 'architecture', id: 'estructura', label: 'Estructura' },
  { key: 'process', id: 'proceso', label: 'Proceso' },
  { key: 'scope', id: 'alcance', label: 'Alcance' },
  { key: 'pricing', id: 'inversion', label: 'Inversión' },
  { key: 'finalCTA', id: 'proximo-paso', label: 'Próximo paso' },
];

const SECTION_COMPONENTS = {
  understanding: UnderstandingSection,
  opportunity: OpportunitySection,
  journey: ConversionJourney,
  architecture: LandingArchitecture,
  visualDirection: VisualDirection,
  process: ProcessSection,
  scope: ScopeSection,
  pricing: PricingSection,
  finalCTA: FinalCTA,
};

const DARK_SECTIONS = new Set(['journey', 'architecture', 'finalCTA']);

function sectionIsVisible(data, key) {
  return Boolean(data[key]) && data[key].enabled !== false;
}

/**
 * Plantilla maestra de propuestas. La composición, el movimiento y el responsive
 * viven acá y en sus componentes; el contenido y las variantes legítimas viven en data.
 */
export default function ProposalTemplate({ data }) {
  usePrivateDocument(`Propuesta para ${data.client.name} — ${data.author.name}`);

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener('load', refresh);
    return () => window.removeEventListener('load', refresh);
  }, []);

  const visible = Object.fromEntries(
    SECTION_DEFINITIONS.map(({ key }) => [key, sectionIsVisible(data, key)]),
  );
  const navigationLabels = data.navigation?.labels ?? {};
  const orderedDefinitions = (data.sectionOrder ?? SECTION_DEFINITIONS.map(({ key }) => key))
    .map((key) => SECTION_DEFINITIONS.find((definition) => definition.key === key))
    .filter(Boolean);
  const chapters = [
    { id: 'inicio', label: navigationLabels.intro ?? 'Portada' },
    ...orderedDefinitions.filter(({ key }) => visible[key]).map(({ key, id, label }) => ({
      id,
      label: navigationLabels[key] ?? label,
    })),
  ];

  return (
    <>
      <a className="skip-link" href="#contenido" data-print="hide">
        Saltar al contenido
      </a>
      <ProposalNav data={data} chapters={chapters} />
      <main id="contenido">
        <ProposalHero data={data} />
        {orderedDefinitions.filter(({ key }) => visible[key]).map(({ key }) => {
          const Component = SECTION_COMPONENTS[key];
          const section = <Component data={data} key={key} />;
          return DARK_SECTIONS.has(key) ? <DarkChapter key={key}>{section}</DarkChapter> : section;
        })}
      </main>
      <ProposalFooter data={data} />
    </>
  );
}
