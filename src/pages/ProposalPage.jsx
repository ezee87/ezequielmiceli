import { useEffect, useState } from 'react';
import NotFoundPage from './NotFoundPage.jsx';
import { loadProposal } from '../data/proposals/index.js';
import { usePrivateDocument } from '../utils/usePrivateDocument.js';
import { ScrollTrigger } from '../utils/gsap.js';
import ProposalNav from '../components/proposal/ProposalNav.jsx';
import ProposalHero from '../components/proposal/ProposalHero.jsx';
import UnderstandingSection from '../components/proposal/UnderstandingSection.jsx';
import OpportunitySection from '../components/proposal/OpportunitySection.jsx';
import ConversionJourney from '../components/proposal/ConversionJourney.jsx';
import LandingArchitecture from '../components/proposal/LandingArchitecture.jsx';
import VisualDirection from '../components/proposal/VisualDirection.jsx';
import ProcessSection from '../components/proposal/ProcessSection.jsx';
import ScopeSection from '../components/proposal/ScopeSection.jsx';
import PricingSection from '../components/proposal/PricingSection.jsx';
import FinalCTA from '../components/proposal/FinalCTA.jsx';
import ProposalFooter from '../components/proposal/ProposalFooter.jsx';
import DarkChapter from '../components/ui/DarkChapter.jsx';

function Proposal({ data }) {
  usePrivateDocument(`Propuesta para ${data.client.name} — ${data.author.name}`);

  // Fuentes e imágenes cambian las alturas: se recalculan las posiciones de scroll al terminar de cargar.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener('load', refresh);
    return () => window.removeEventListener('load', refresh);
  }, []);

  const showVisual = data.visualDirection?.enabled !== false && Boolean(data.visualDirection);

  const chapters = [
    { id: 'inicio', label: 'Portada' },
    { id: 'entendimiento', label: 'Lo que entendí' },
    { id: 'oportunidad', label: 'Oportunidad' },
    { id: 'recorrido', label: 'Recorrido' },
    { id: 'estructura', label: 'Estructura' },
    ...(showVisual ? [{ id: 'direccion-visual', label: 'Dirección visual' }] : []),
    { id: 'proceso', label: 'Proceso' },
    { id: 'alcance', label: 'Alcance' },
    { id: 'inversion', label: 'Inversión' },
    { id: 'proximo-paso', label: 'Próximo paso' },
  ];

  return (
    <>
      <a className="skip-link" href="#contenido" data-print="hide">
        Saltar al contenido
      </a>
      <ProposalNav data={data} chapters={chapters} />
      <main id="contenido">
        <ProposalHero data={data} />
        <UnderstandingSection data={data} />
        <OpportunitySection data={data} />
        <DarkChapter>
          <ConversionJourney data={data} />
          <LandingArchitecture data={data} />
        </DarkChapter>
        {showVisual && <VisualDirection data={data} />}
        <ProcessSection data={data} />
        <ScopeSection data={data} />
        <PricingSection data={data} />
        <DarkChapter>
          <FinalCTA data={data} />
        </DarkChapter>
      </main>
      <ProposalFooter />
    </>
  );
}

export default function ProposalPage({ slug }) {
  const [state, setState] = useState({ status: 'loading', data: null });

  useEffect(() => {
    let alive = true;
    setState({ status: 'loading', data: null });
    loadProposal(slug)
      .then((data) => alive && setState(data ? { status: 'ready', data } : { status: 'missing', data: null }))
      .catch(() => alive && setState({ status: 'missing', data: null }));
    return () => {
      alive = false;
    };
  }, [slug]);

  if (state.status === 'loading') return null;
  if (state.status === 'missing') return <NotFoundPage />;
  return <Proposal data={state.data} />;
}
