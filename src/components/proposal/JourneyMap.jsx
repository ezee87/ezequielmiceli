import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP, MQ } from '../../utils/gsap.js';
import { buildJourneyGraph } from '../../utils/journeyGraph.js';
import { curvePath } from '../../utils/journeyPaths.js';
import styles from './JourneyMap.module.css';

const round = (n) => Math.round(n * 2) / 2;

function Node({ node, lane }) {
  const isDecision = Boolean(node.branches);
  return (
    <div
      className={styles.node}
      data-jn={node.id}
      data-type={isDecision ? 'decision' : node.final ? 'final' : 'step'}
    >
      <span className={styles.dot} data-anchor="in" aria-hidden="true" />
      <div className={styles.body}>
        {lane && (
          <span className={styles.choice}>
            {lane.audience && <small>{lane.audience}</small>}
            {lane.label}
          </span>
        )}
        {node.kind && <p className={styles.kind}>{node.kind}</p>}
        <h3 className={styles.name}>{node.label}</h3>
        {node.description && <p className={styles.desc}>{node.description}</p>}
        {node.cta && (
          <span className={styles.chip}>
            {node.ctaLabel ?? 'CTA → Conversión'}
            <span className={styles.exitAnchor} data-anchor="exit" aria-hidden="true" />
          </span>
        )}
      </div>
      <span className={styles.out} data-anchor="out" aria-hidden="true" />
    </div>
  );
}

/**
 * M03 + M04 — Recorrido dibujado con ramas y convergencias.
 * El DOM es la fuente semántica; el SVG se calcula midiendo los anclajes de cada nodo.
 * Solo desktop: en pantallas angostas se usa JourneyFlow.
 */
export default function JourneyMap({ journey }) {
  const mapRef = useRef(null);
  const graph = useMemo(() => buildJourneyGraph(journey.steps), [journey.steps]);
  const [layout, setLayout] = useState(null);

  const measure = useCallback(() => {
    const root = mapRef.current;
    if (!root) return;
    const base = root.getBoundingClientRect();
    const find = (id, anchor) => root.querySelector(`[data-jn="${id}"] [data-anchor="${anchor}"]`);
    const point = (el) => {
      const r = el.getBoundingClientRect();
      return { x: round(r.left - base.left + r.width / 2), y: round(r.top - base.top + r.height / 2) };
    };

    const edges = [];
    graph.edges.forEach((edge) => {
      const from = find(edge.from, 'out');
      const to = find(edge.to, 'in');
      if (!from || !to) return;
      const a = point(from);
      const b = point(to);
      edges.push({ id: edge.id, from: edge.from, to: edge.to, d: curvePath(a, b) });
    });

    const next = { w: round(base.width), h: round(base.height), edges };
    setLayout((prev) => {
      const same = prev && JSON.stringify({ ...prev, version: 0 }) === JSON.stringify({ ...next, version: 0 });
      return same ? prev : { ...next, version: (prev?.version ?? 0) + 1 };
    });
  }, [graph]);

  useLayoutEffect(() => {
    measure();
    const root = mapRef.current;
    const ro = new ResizeObserver(() => measure());
    ro.observe(root);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [measure]);

  useGSAP(
    () => {
      if (!layout) return;
      const root = mapRef.current;
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        root.setAttribute('data-armed', '');
        const find = (id, anchor) => root.querySelector(`[data-jn="${id}"] [data-anchor="${anchor}"]`);

        root.querySelectorAll('[data-jn]').forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: 'top 74%',
            onEnter: () => el.setAttribute('data-active', ''),
            onLeaveBack: () => el.removeAttribute('data-active'),
          });
        });

        root.querySelectorAll('[data-edge]').forEach((path) => {
          const from = find(path.dataset.from, 'out');
          const to = find(path.dataset.to, 'in');
          if (!from || !to) return;
          gsap.fromTo(
            path,
            { strokeDashoffset: 1 },
            {
              strokeDashoffset: 0,
              ease: 'none',
              scrollTrigger: { trigger: from, start: 'top 68%', endTrigger: to, end: 'top 68%', scrub: true },
            },
          );
        });

        return () => {
          root.removeAttribute('data-armed');
          root.querySelectorAll('[data-active]').forEach((el) => el.removeAttribute('data-active'));
        };
      });

      return () => mm.revert();
    },
    { scope: mapRef, dependencies: [layout?.version], revertOnUpdate: true },
  );

  const { steps } = journey;

  return (
    <div className={styles.map} ref={mapRef} data-compact={journey.compact ? '' : undefined}>
      {layout && (
        <svg
          className={styles.svg}
          width={layout.w}
          height={layout.h}
          viewBox={`0 0 ${layout.w} ${layout.h}`}
          aria-hidden="true"
          focusable="false"
        >
          {layout.edges.map((e) => (
            <g key={e.id}>
              <path className={styles.base} d={e.d} />
              <path className={styles.draw} d={e.d} pathLength="1" data-edge data-from={e.from} data-to={e.to} />
            </g>
          ))}
        </svg>
      )}

      <ol className={styles.spine}>
        {steps.map((step) =>
          step.branches ? (
            <li key={step.id} className={styles.block}>
              <Node node={step} />
              <div className={styles.lanes} style={{ '--cols': step.branches.length }}>
                {step.branches.map((lane) => (
                  <section
                    key={lane.id}
                    className={styles.lane}
                    aria-label={`${lane.audience ? `${lane.audience}: ` : ''}${lane.label}`}
                  >
                    <ol className={styles.laneList}>
                      {lane.steps.map((n, i) => (
                        <li key={n.id}>
                          <Node node={n} lane={i === 0 ? lane : null} />
                        </li>
                      ))}
                    </ol>
                  </section>
                ))}
              </div>
            </li>
          ) : (
            <li key={step.id}>
              <Node node={step} />
            </li>
          ),
        )}
      </ol>
    </div>
  );
}
