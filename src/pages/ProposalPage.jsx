import { useEffect, useState } from 'react';
import NotFoundPage from './NotFoundPage.jsx';
import { loadProposal } from '../data/proposals/index.js';
import ProposalTemplate from '../components/proposal/ProposalTemplate.jsx';

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
  return <ProposalTemplate data={state.data} />;
}
