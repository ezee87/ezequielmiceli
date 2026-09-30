const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

export function formatDate(value) {
  const match = ISO_DATE.exec(String(value ?? ''));
  if (!match) return String(value ?? '');
  const [, y, m, d] = match.map(Number);
  return new Intl.DateTimeFormat('es-AR', { day: 'numeric', month: 'long', year: 'numeric' }).format(
    new Date(y, m - 1, d),
  );
}

export function pad(n) {
  return String(n).padStart(2, '0');
}
