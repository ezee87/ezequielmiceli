const R = 14;

// Curva en S entre dos puntos (layout ancho, ramas en columnas).
export function curvePath(a, b) {
  if (Math.abs(a.x - b.x) < 1) return `M${a.x} ${a.y}L${b.x} ${b.y}`;
  const dy = (b.y - a.y) * 0.55;
  return `M${a.x} ${a.y}C${a.x} ${a.y + dy} ${b.x} ${b.y - dy} ${b.x} ${b.y}`;
}

// Layout vertical: baja por el tronco y gira hacia la rama a la altura del primer nodo.
export function branchElbow(a, b) {
  const dir = Math.sign(b.x - a.x) || 1;
  const r = Math.max(0, Math.min(R, Math.abs(b.x - a.x), b.y - a.y));
  return `M${a.x} ${a.y}L${a.x} ${b.y - r}Q${a.x} ${b.y} ${a.x + dir * r} ${b.y}L${b.x} ${b.y}`;
}

// Layout vertical: la rama vuelve al tronco con un giro corto y baja por el tronco hasta el nodo de convergencia.
export function mergeElbow(a, b) {
  const drop = 24;
  const y = a.y + drop;
  const dir = Math.sign(b.x - a.x) || -1;
  const r = Math.min(R, Math.abs(b.x - a.x));
  return `M${a.x} ${a.y}L${a.x} ${y - r}Q${a.x} ${y} ${a.x + dir * r} ${y}L${b.x - dir * r} ${y}Q${b.x} ${y} ${b.x} ${y + r}L${b.x} ${b.y}`;
}
