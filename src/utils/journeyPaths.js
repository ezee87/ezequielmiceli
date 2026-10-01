// Curva en S entre dos puntos (layout ancho, ramas en columnas).
export function curvePath(a, b, tension = 0.55) {
  if (Math.abs(a.x - b.x) < 1) return `M${a.x} ${a.y}L${b.x} ${b.y}`;
  const dy = (b.y - a.y) * tension;
  return `M${a.x} ${a.y}C${a.x} ${a.y + dy} ${b.x} ${b.y - dy} ${b.x} ${b.y}`;
}
