const SAFE_URL = /^(https?:\/\/|\/|#)/i;

/**
 * Convierte la configuración `cta` de una propuesta en un destino navegable.
 * type: 'whatsapp' | 'calendly' | 'mailto' | 'url' | 'anchor'
 */
export function resolveCta(cta = {}) {
  const { type = 'url', value = '', message = '', subject = '' } = cta;

  if (type === 'whatsapp') {
    const phone = String(value).replace(/\D/g, '');
    const text = message ? `?text=${encodeURIComponent(message)}` : '';
    return { href: `https://wa.me/${phone}${text}`, external: true };
  }

  if (type === 'mailto') {
    const params = new URLSearchParams();
    if (subject) params.set('subject', subject);
    if (message) params.set('body', message);
    const query = params.toString().replace(/\+/g, '%20');
    return { href: `mailto:${value}${query ? `?${query}` : ''}`, external: false };
  }

  if (type === 'anchor') {
    return { href: String(value).startsWith('#') ? value : `#${value}`, external: false };
  }

  // 'calendly' y 'url'
  if (!SAFE_URL.test(String(value))) return { href: '#', external: false };
  return { href: value, external: /^https?:\/\//i.test(value) };
}
