import { lazy, Suspense, useEffect, useState } from 'react';
import NotFoundPage from './NotFoundPage.jsx';
import { loadProposal } from '../data/proposals/index.js';
import ProposalTemplate from '../components/proposal/ProposalTemplate.jsx';

// Propuestas con composición propia (p. ej. la versión corta de Claudia) se cargan de forma diferida.
const TEMPLATES = {
  claudia: lazy(() => import('../components/claudia/proposal/ClaudiaProposal.jsx')),
};

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
  const Custom = state.data.template ? TEMPLATES[state.data.template] : null;
  if (Custom) {
    return (
      <Suspense fallback={null}>
        <Custom data={state.data} />
      </Suspense>
    );
  }
  return <ProposalTemplate data={state.data} />;
}
