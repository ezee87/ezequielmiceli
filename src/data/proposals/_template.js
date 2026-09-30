/**
 * PLANTILLA DE PROPUESTA
 *
 * 1. Duplicá este archivo como `src/data/proposals/<slug>.js` (el nombre del archivo ES el slug).
 * 2. Completá los campos. La propuesta queda disponible en `/propuesta/<slug>`.
 * 3. Los assets van en `public/assets/proposals/<slug>/` y se referencian como
 *    `/assets/proposals/<slug>/archivo.png`.
 *
 * Reglas:
 * - Los archivos que empiezan con `_` no se publican.
 * - Cualquier sección con `enabled: false` se omite por completo.
 * - Nada de esto debe vivir dentro de los componentes.
 */
export default {
  // Debe coincidir con el nombre del archivo.
  slug: 'nombre-apellido',

  client: {
    name: 'Nombre Apellido', // Se usa en portada, navegación y <title>.
    firstName: 'Nombre',
    business: 'Nombre del negocio',
    role: 'Profesión o rol',
  },

  project: {
    title: 'Nombre completo del proyecto',
  },

  // ISO `YYYY-MM-DD` (se formatea a es-AR) o texto libre.
  date: '2026-01-01',

  author: {
    name: 'Ezequiel Miceli',
    role: 'Diseño y desarrollo web',
    monogram: 'EM',
  },

  /**
   * Acción de conversión principal. Se repite de forma contextual.
   * type: 'whatsapp' (value: teléfono internacional) | 'calendly' | 'url' (value: https://… o /ruta)
   *     | 'mailto' (value: email) | 'anchor' (value: id de sección)
   * message / subject: texto precargado (whatsapp y mailto).
   */
  cta: {
    type: 'mailto',
    value: 'correo@example.com',
    subject: 'Propuesta — primera conversación',
    message: '',
    label: 'Agendar una conversación',
  },

  // Portada.
  intro: {
    eyebrow: 'Propuesta personalizada',
    pretitle: 'Una propuesta para',
    disciplines: ['Estrategia', 'Diseño', 'Desarrollo'],
    startLabel: 'Ver propuesta',
  },

  // Demuestra comprensión del negocio; no es una biografía.
  understanding: {
    eyebrow: 'Lo que entendí',
    title: 'Título de la sección',
    lead: 'Frase principal que resume lo que entendiste.',
    paragraphs: ['Párrafo 1.', 'Párrafo 2.'],
    highlights: [{ label: 'Etiqueta', text: 'Observación breve.' }],
    observations: ['Observación o oferta detectada.'],
    disclaimer:
      'Este análisis parte de información pública y de nuestra conversación inicial. Se profundiza en la primera etapa.',
  },

  // Recorrido observado vs propuesto. Un paso propuesto con el mismo `id` que uno observado
  // (o con `replaces: '<id observado>'`) "viaja" desde ese paso; el resto entra como nuevo.
  opportunity: {
    eyebrow: 'La oportunidad',
    title: 'Título de la sección',
    lead: 'Qué cambia entre el recorrido actual y el propuesto.',
    observed: {
      label: 'Recorrido observado',
      steps: [
        { id: 'a', label: 'Paso A' },
        { id: 'b', label: 'Paso B' },
      ],
    },
    proposed: {
      label: 'Recorrido propuesto',
      steps: [
        { id: 'a', label: 'Paso A' },
        { id: 'c', label: 'Paso nuevo', replaces: 'b' },
        { id: 'd', label: 'Conversión' },
      ],
    },
    insight: 'Conclusión en una frase.',
  },

  /**
   * Hipótesis de recorrido. Estructura serie-paralelo:
   *  - un paso normal es un nodo;
   *  - un paso con `branches` es una decisión: cada rama tiene sus propios `steps` y todas
   *    convergen en el paso siguiente;
   *  - `cta: true` agrega una salida a la conversión (en desktop solo se dibuja la línea para
   *    nodos del tronco y de la última rama; las demás muestran la etiqueta);
   *  - el último paso suele ser `final: true`.
   */
  journey: {
    eyebrow: 'Hipótesis inicial del recorrido',
    title: 'Título de la sección',
    lead: 'Un objetivo principal y múltiples oportunidades de alcanzarlo.',
    note: 'Esta estructura es una hipótesis inicial. Se valida investigando oferta, cliente, tráfico, recorrido comercial, objeciones y puntos de abandono.',
    conversion: { label: 'Conversión', description: 'Acción principal.' },
    steps: [
      { id: 'hero', label: 'Hero', kind: 'Entrada', description: 'Descripción.', cta: true },
      {
        id: 'decision',
        label: '¿Qué necesitás?',
        kind: 'Decisión',
        description: 'Descripción.',
        branches: [
          { id: 'a', label: 'Camino A', audience: 'Público A', steps: [{ id: 'a1', label: 'Paso A1', description: '…' }] },
          {
            id: 'b',
            label: 'Camino B',
            audience: 'Público B',
            steps: [{ id: 'b1', label: 'Paso B1', description: '…', cta: true }],
          },
        ],
      },
      { id: 'final', label: 'CTA final', kind: 'Cierre', description: 'Descripción.', cta: true, final: true },
    ],
  },

  /**
   * Arquitectura de la landing (8–10 bloques recomendados).
   * shape: 'hero' | 'proof' | 'split' | 'text' | 'grid' | 'faq' | 'cta' | 'footer' (dibujo abstracto)
   * journeyRef: id de un nodo del recorrido al que responde el bloque.
   * subpaths: bloques propios de una rama (cuando una sección bifurca).
   */
  architecture: {
    eyebrow: 'Estructura propuesta',
    title: 'Título de la sección',
    lead: 'Cómo se traduce el recorrido en bloques concretos.',
    sections: [
      {
        number: '01',
        name: 'Hero',
        shape: 'hero',
        objective: 'Objetivo del bloque.',
        description: 'Qué contiene.',
        cta: 'Texto del CTA',
        note: 'Nota opcional.',
        journeyRef: 'hero',
        subpaths: [{ label: 'Rama', blocks: ['Bloque 1', 'Bloque 2'] }],
      },
    ],
  },

  // Opcional. Con `enabled: false` se omite. Las imágenes son capturas reales.
  visualDirection: {
    enabled: true,
    eyebrow: 'Dirección visual',
    title: 'Título de la sección',
    lead: 'Cómo se traduce la estrategia en ejecución visual.',
    reference: {
      label: 'Trabajo previo',
      title: 'Nombre del trabajo',
      note: 'Aclaración de que es una referencia de ejecución.',
      relatesTo: { number: '01', name: 'Hero' },
    },
    desktop: { src: '/assets/proposals/<slug>/desktop.png', alt: 'Descripción.', width: 1440, height: 760 },
    mobile: { src: '/assets/proposals/<slug>/mobile.png', alt: 'Descripción.', width: 390, height: 844 },
    principles: [{ title: 'Principio', text: 'Explicación breve.' }],
  },

  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'Título de la sección',
    lead: 'Seis etapas, una decisión por vez.',
    stages: [{ number: '01', name: 'Entender', summary: 'Resumen.', items: ['Punto 1', 'Punto 2'] }],
  },

  // Cada área es activable/desactivable; lo no incluido no se muestra.
  scope: {
    eyebrow: 'Qué incluye',
    title: 'Título de la sección',
    areas: [{ id: 'strategy', name: 'Estrategia', enabled: true, items: ['Ítem 1', 'Ítem 2'] }],
  },

  // Un precio principal. No son planes.
  pricing: {
    eyebrow: 'Inversión',
    title: 'Título de la sección',
    currency: 'USD',
    amount: '0.000',
    label: 'Inversión única',
    summary: 'Estrategia, diseño y desarrollo.',
    timeline: '4 a 5 semanas',
    payment: '50 % al inicio · 50 % al publicar',
    validity: 'Válida hasta el …',
    extras: [{ label: 'Extra opcional', detail: 'Detalle', price: 'USD 000' }],
  },

  finalCTA: {
    eyebrow: 'Próximo paso',
    title: 'Frase de cierre.',
    text: 'Texto breve.',
    buttonLabel: 'Agendar la primera conversación',
    signature: 'Ezequiel Miceli — Diseño y desarrollo web',
  },
};
