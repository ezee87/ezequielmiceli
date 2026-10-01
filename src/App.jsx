import { useEffect } from 'react';
import ProposalPage from './pages/ProposalPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { ScrollTrigger } from './utils/gsap.js';

const PROPOSAL_ROUTE = /^\/propuesta\/([^/]+)\/?$/;
const LEGACY_PROPOSAL_SLUGS = {
  clarisa: 'clarisa-martinez',
};

function parseSlug(pathname) {
  const match = PROPOSAL_ROUTE.exec(pathname);
  if (!match) return null;
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return null;
  }
}

export default function App() {
  const requestedSlug = parseSlug(window.location.pathname);
  const slug = LEGACY_PROPOSAL_SLUGS[requestedSlug] ?? requestedSlug;

  useEffect(() => {
    if (requestedSlug && slug !== requestedSlug) {
      window.history.replaceState(null, '', `/propuesta/${slug}${window.location.search}${window.location.hash}`);
    }
  }, [requestedSlug, slug]);

  // Al imprimir se revierten los estados animados para que el PDF muestre el contenido final.
  useEffect(() => {
    const before = () => ScrollTrigger.getAll().forEach((t) => t.disable(true));
    const after = () => {
      ScrollTrigger.getAll().forEach((t) => t.enable());
      ScrollTrigger.refresh();
    };
    window.addEventListener('beforeprint', before);
    window.addEventListener('afterprint', after);
    return () => {
      window.removeEventListener('beforeprint', before);
      window.removeEventListener('afterprint', after);
    };
  }, []);

  if (!slug) return <NotFoundPage />;
  return <ProposalPage slug={slug} />;
}
