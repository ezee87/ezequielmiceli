// Propuesta comercial para Claudia Sánchez. Fuente: docs/claudia/02-PROPUESTA-COMERCIAL.md.
// `template: 'claudia'` mantiene esta composición aislada del resto de las propuestas.
import { DEMO_PATH } from '../claudia/booking.js';

const LINKEDIN_URL = 'https://www.linkedin.com/in/ezequiel-miceli';

export default {
  slug: 'claudia-sanchez',
  template: 'claudia',
  client: { name: 'Claudia Sánchez', firstName: 'Claudia' },
  project: { title: 'Página web de Claudia Sánchez' },
  date: '2026-10-01',
  author: {
    name: 'Ezequiel Miceli', role: 'Desarrollo web', monogram: 'EM',
    footer: {
      copyright: '© 2026 Ezequiel Miceli. Todos los derechos reservados.',
      links: [{ kind: 'linkedin', label: 'LinkedIn', href: LINKEDIN_URL }],
    },
  },
  cta: { enabled: false },
  navigation: { labels: {
    intro: 'Portada', opportunity: 'Oportunidad', visualDirection: 'Dirección visual',
    page: 'La página', investment: 'Inversión', nextStep: 'Próximo paso',
  } },
  intro: {
    eyebrow: 'PROPUESTA DE DESARROLLO WEB', title: 'Claudia Sánchez', titleLines: ['Claudia', 'Sánchez'], prominentTitle: true,
    echoPaddingTop: '0.5rem',
    disciplines: ['Octubre 2026'],
    meta: [
      { label: 'Proyecto', value: 'Página web personal' },
      { label: 'Por', value: 'Ezequiel Miceli', secondary: 'Desarrollo web' },
    ],
    startLabel: 'Explorar la propuesta', startHref: '#oportunidad',
  },
  opportunity: {
    eyebrow: 'LA OPORTUNIDAD',
    title: ['Tu propuesta ya está construida.', 'Hagamos que se entienda en un solo recorrido.'],
    lead: 'Hoy comunicás tu experiencia, tu visión de Career Longevity y tu metodología a través de LinkedIn, newsletters y otros recursos. Una página propia puede reunir ese contenido esencial, ayudar a que un ejecutivo entienda si tu acompañamiento es para él y facilitar el siguiente paso hacia tu sesión estratégica.',
    journey: [
      { stage: 'Puntos de entrada', label: 'LinkedIn, newsletters y recomendaciones', detail: 'El interés que ya generás.' },
      { stage: 'Página propia', label: 'Tu propuesta, en un solo lugar', detail: 'Un espacio para comprender tu enfoque.' },
      { stage: 'Siguiente paso', label: 'Reserva de sesión estratégica', detail: 'Una forma clara de avanzar.' },
    ],
    transparency: [
      'Es una hipótesis inicial basada en tu comunicación pública;',
      'el contenido final se termina de ajustar contigo.',
    ],
  },
  visualDirection: {
    eyebrow: 'PRIMERA DIRECCIÓN VISUAL', title: 'Una presencia editorial a la altura de tu trayectoria.',
    lead: 'Tomé como punto de partida los colores y recursos que ya utilizás: azul profundo, dorado y una comunicación pensada para ejecutivos senior. El objetivo no es cambiar tu identidad, sino trasladarla a una experiencia web donde tu mensaje y tu imagen sean protagonistas.',
    demo: { label: 'Explorar la demo interactiva', href: DEMO_PATH }, previewSrc: `${DEMO_PATH}?embed=1`,
    palette: [
      { name: 'Azul profundo', code: '#1B1A44', dark: true },
      { name: 'Dorado', code: '#D5A64A', dark: false },
      { name: 'Acento', code: '#5D5C86', dark: true },
      { name: 'Marfil', code: '#F7F5F0', dark: false },
    ],
    typography: [
      'Tipografía: serif editorial + sans limpia.',
      'Sugerencia: Cormorant Garamond y Manrope (a validar por legibilidad).',
    ],
    previewCaptions: { desktop: 'Escritorio', mobile: 'Mobile' },
    criteria: ['Jerarquía editorial', 'Fotografía protagonista', 'Movimiento discreto', 'Reserva accesible'],
    disclaimer: [
      'Es una primera dirección de diseño y contenido.',
      'La versión definitiva se desarrolla y valida después de acordar el proyecto.',
    ],
  },
  page: {
    eyebrow: 'LA PÁGINA', title: 'Una página completa. Un objetivo claro.',
    lead: 'Una página principal responsive, con las secciones que acordemos para presentar tu acompañamiento y facilitar la reserva de una sesión estratégica.',
    rows: [
      { label: 'Posicionamiento', text: 'Presentación de Claudia, su propuesta y acceso a la reserva.' },
      { label: 'Identificación', text: 'Situaciones profesionales en las que puede reconocerse su público.' },
      { label: 'Enfoque', text: 'Cómo acompaña las decisiones y transiciones profesionales.' },
      { label: 'Testimonios', text: 'Experiencias que aportan contexto y confianza.' },
      { label: 'Modelo L.I.F.E.', text: 'Presentación interactiva de sus seis dimensiones.' },
      { label: 'Sobre Claudia', text: 'Trayectoria, experiencia y posicionamiento profesional.' },
      { label: 'Reserva', text: 'Llamados a la acción y acceso a Calendly.' },
    ],
    architectureNote: 'Esta es una primera estructura propuesta. El orden, la cantidad de secciones y el contenido definitivo se terminan de definir juntos antes de comenzar.',
    budgetNote: 'El presupuesto contempla una página principal con las secciones que acordemos, tomando esta demo como referencia inicial. Las páginas independientes adicionales o las funcionalidades que excedan el alcance acordado se presupuestan aparte.',
    scopeTitle: 'Alcance del desarrollo',
    scopeGroups: [
      {
        title: '01 / Diseño y desarrollo',
        items: [
          'Página web principal diseñada a medida.',
          'Diseño adaptable a computadora, tablet y celular.',
          'Secciones e interacciones acordadas, incluyendo el modelo L.I.F.E. y testimonios.',
          'Integración con Calendly.',
          'Optimización básica de rendimiento y SEO.',
        ],
      },
      {
        title: '02 / Configuración y publicación',
        items: [
          'Configuración de dominio, hosting y HTTPS.',
          'Publicación y pruebas finales.',
          'Configuración básica de analítica y Google Search Console.',
          'Preparación para indexación.',
        ],
        note: 'La configuración está incluida. El dominio, hosting y los servicios externos de pago se contratan y abonan por separado.',
      },
    ],
    administration: {
      eyebrow: '03 / Administración',
      title: 'Una página que vas a poder actualizar.',
      description: 'La página incluirá un sistema de administración para que puedas actualizar textos, testimonios y otros contenidos habituales sin depender de mí para cada cambio.',
      note: 'También recibirás una explicación para utilizarlo.',
    },
    exclusionsTitle: 'No incluido',
    exclusions: 'Páginas adicionales, funcionalidades no acordadas, pagos online, blog o newsletters, mantenimiento continuo y rediseños posteriores.',
    optionalTitle: 'Opcional — Versión en inglés',
    optionalText: 'Podemos incorporar una versión en inglés más adelante, con presupuesto independiente.',
  },
  investment: {
    title: 'Inversión',
    label: 'Página web personal',
    summary: 'Una página principal diseñada a medida, lista para publicar.',
    commercial: {
      price: '100', timeline: '7 días',
      timelineDetail: 'Desde la recepción de toda la información, materiales y accesos necesarios para comenzar.',
      payment: '50% al comenzar y 50% al finalizar.', paymentDetails: 'USD 50 al comenzar. USD 50 al finalizar.',
      revisions: 'Una primera versión completa y dos rondas completas de correcciones.',
    },
  },
  finalCTA: {
    eyebrow: 'PARA AVANZAR', title: 'Próximo paso',
    text: 'Si esta propuesta va en línea con lo que buscás, podemos conversar por LinkedIn, resolver cualquier duda y terminar de definir juntos los detalles de la página.',
    buttonLabel: 'Responder por LinkedIn', cta: { type: 'url', value: LINKEDIN_URL },
  },
};
