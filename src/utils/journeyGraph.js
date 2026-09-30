/**
 * Convierte `journey.steps` (estructura serie-paralelo) en una lista plana de nodos y aristas.
 * Las ramas de un paso con `branches` convergen en el paso siguiente.
 */
export function buildJourneyGraph(steps = []) {
  const nodes = new Map();
  const edges = [];
  let frontier = []; // ids cuyo `out` conecta con el próximo paso
  let frontierKind = 'flow';

  const link = (from, to, kind, extra = {}) => edges.push({ id: `${from}>${to}`, from, to, kind, ...extra });

  steps.forEach((step) => {
    nodes.set(step.id, { ...step, lane: null, eligibleExit: Boolean(step.cta) });
    frontier.forEach((from) => link(from, step.id, frontierKind));

    if (!step.branches?.length) {
      frontier = [step.id];
      frontierKind = 'flow';
      return;
    }

    const lanes = step.branches.length;
    const ends = [];
    step.branches.forEach((lane, laneIndex) => {
      let previous = step.id;
      lane.steps.forEach((node, i) => {
        nodes.set(node.id, {
          ...node,
          lane: laneIndex,
          // En desktop solo se dibuja la salida de nodos de la última rama (no cruza otras ramas).
          eligibleExit: Boolean(node.cta) && laneIndex === lanes - 1,
        });
        link(previous, node.id, i === 0 ? 'branch' : 'flow', { lane: laneIndex });
        previous = node.id;
      });
      ends.push(previous);
    });
    frontier = ends;
    frontierKind = 'merge';
  });

  const exits = [...nodes.values()].filter((n) => n.eligibleExit).map((n) => n.id);
  const lastId = steps.length ? steps[steps.length - 1].id : null;
  return { nodes, edges, exits, lastId };
}
