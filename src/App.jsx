import { lazy, Suspense, useEffect } from 'react';
import ProposalPage from './pages/ProposalPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { ScrollTrigger } from './utils/gsap.js';

// Demos funcionales de cada cliente (/demo/<slug>). Se cargan de forma diferida: no pesan en las propuestas.
const DEMO_ROUTE = /^\/demo\/([^/]+)\/?$/;
const DEMOS = {
  'claudia-sanchez': lazy(() => import('./components/claudia/ClaudiaSite.jsx')),
};

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

function parseDemo(pathname) {
  const match = DEMO_ROUTE.exec(pathname);
  if (!match) return null;
  try {
    const slug = decodeURIComponent(match[1]);
    return Object.hasOwn(DEMOS, slug) ? DEMOS[slug] : null;
  } catch {
    return null;
  }
}

export default function App() {
  const Demo = parseDemo(window.location.pathname);
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

  if (Demo) {
    return (
      <Suspense fallback={null}>
        <Demo />
      </Suspense>
    );
  }
  if (!slug) return <NotFoundPage />;
  return <ProposalPage slug={slug} />;
}
