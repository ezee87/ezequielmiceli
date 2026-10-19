import { DEMO_PATH } from '../claudia/booking.js';

const LINKEDIN_URL = 'https://www.linkedin.com/in/ezequiel-miceli';

export default {
  slug: 'claudia-sanchez', template: 'claudia',
  client: { name: 'Claudia Sánchez', firstName: 'Claudia' },
  project: { title: 'Sitio web profesional para Claudia Sánchez' },
  date: '2026-10-01',
  author: { name: 'Ezequiel Miceli', role: 'Desarrollo web', monogram: 'EM', footer: {
    copyright: '© 2026 Ezequiel Miceli. Todos los derechos reservados.',
    links: [{ kind: 'linkedin', label: 'LinkedIn', href: LINKEDIN_URL }],
  } },
  cta: { enabled: false },
  navigation: { labels: { intro: 'Portada', opportunity: 'La oportunidad', structure: 'Estructura del sitio', journey: 'Recorrido del visitante', visualDirection: 'Dirección visual', scope: 'Alcance del desarrollo', investment: 'Inversión' } },
  intro: {
    eyebrow: 'PROPUESTA DE DESARROLLO WEB', title: 'Claudia Sánchez',
    titleLines: ['Claudia', 'Sánchez'], prominentTitle: true, echoPaddingTop: '0',
    disciplines: ['Sitio web profesional para Claudia Sánchez'],
    description: 'Una propuesta para reunir tu experiencia, tus servicios y tus ideas en un solo lugar, con recorridos pensados para las personas y empresas que buscan trabajar con vos.',
    meta: [{ label: 'INVERSIÓN', value: 'USD 150' }, { label: 'PLAZO ESTIMADO', value: '7 días' }],
    startLabel: 'Explorar la propuesta', startHref: '#oportunidad',
  },
  opportunity: {
    eyebrow: '01 / LA OPORTUNIDAD', title: 'Tu experiencia, tus servicios y tus ideas. Todo en un mismo lugar.',
    lead: [
      'La propuesta es desarrollar un sitio web centrado en vos y en tu marca personal, que reúna tu trayectoria, tus servicios para personas y empresas, tus testimonios y el contenido que compartís.',
      'Un espacio propio para transmitir confianza y autoridad profesional, donde cada visitante pueda encontrar lo que necesita y dar el siguiente paso.',
    ],
    highlight: 'Pensado para quienes llegan desde LinkedIn, tus publicaciones o recomendaciones.',
  },
  structure: {
    eyebrow: '02 / ESTRUCTURA DEL SITIO', title: 'Un sitio para presentar todo lo que hacés.',
    lead: [
      'Cuando alguien ingrese a tu sitio web, encontrará una página principal donde podrá conocer tu trayectoria, tu experiencia y los servicios que ofrecés.',
      'Desde el menú superior podrá acceder a las distintas páginas del sitio, según lo que necesite.',
    ],
    navigation: {
      label: 'NAVEGACIÓN PRINCIPAL', brand: 'CLAUDIA SÁNCHEZ',
      items: ['Inicio', 'Sobre mí', 'Servicios', 'Newsletter', 'Contacto'],
      services: ['Para personas', 'Para empresas'],
      title: 'Todo conectado desde un mismo sitio.',
      description: 'Todas las páginas estarán conectadas desde el menú principal.\n«Sobre mí» llevará a una sección de Inicio, sin necesidad de crear otra página.',
    },
    pages: [
      { number: '01 / INICIO', title: 'Claudia Sánchez', description: 'La página principal de tu marca personal. Un espacio para conocerte, comprender tu experiencia y descubrir cómo podés ayudar a personas y organizaciones.', listLabel: 'ESTRUCTURA DE LA PÁGINA PRINCIPAL', sections: [
        { label: 'PRESENTACIÓN', description: 'Tu nombre, fotografía y presentación profesional.' },
        { label: 'SOBRE MÍ', description: 'Tu trayectoria, experiencia y especialización.' },
        { label: 'SERVICIOS', description: 'Accesos a los servicios para personas y empresas.' },
        { label: 'MI ENFOQUE', description: 'Tu forma de trabajar, especialización y metodología.' },
        { label: 'TESTIMONIOS', description: 'Experiencias de personas que trabajaron con vos.' },
        { label: 'PUBLICACIONES', description: 'Una selección de tus artículos más recientes.' },
        { label: 'CONTACTO', description: 'Una invitación a comunicarse con vos.' },
      ] },
      { number: '02 / PERSONAS', title: 'Servicios para personas', description: 'Una página que reúne tus servicios de acompañamiento individual, para que cada persona pueda conocer las distintas formas de trabajar con vos.', listLabel: 'SECCIONES INCLUIDAS', items: ['Presentación de los servicios.', 'Descripción de cada propuesta.', 'Enfoque de acompañamiento.', 'Testimonios.', 'Opciones de consulta.'], highlight: 'Desde el servicio correspondiente se podrá acceder a la landing específica «Diseñá el futuro de tu carrera».' },
      { number: '03 / EMPRESAS', title: 'Servicios para empresas', description: 'Un espacio orientado a organizaciones que quieran conocer tus servicios corporativos y explorar oportunidades de trabajo conjunto.', listLabel: 'SECCIONES INCLUIDAS', items: ['Presentación de los servicios corporativos.', 'Experiencia y enfoque de trabajo.', 'Testimonios o referencias disponibles.', 'Formulario de contacto por email o WhatsApp.'], highlight: 'El objetivo es facilitar una consulta directa, sin llevar a las empresas a una reserva pensada para otro servicio.' },
      { number: '04 / NEWSLETTER', badge: 'SIN CARGO ADICIONAL', title: 'Tus ideas también tendrán su propio espacio.', description: 'Crearemos una sección para reunir tus artículos y reflexiones profesionales, aprovechando el contenido que ya compartiste en LinkedIn.', listLabel: 'INCLUYE', items: ['Página principal con el listado de publicaciones.', 'Carga inicial de tus 18 artículos existentes.', 'Una página individual para cada artículo.', 'Panel de administración para crear, editar y publicar nuevos contenidos.'], highlight: 'Vas a poder publicar nuevos artículos desde un panel sencillo, sin necesidad de modificar código ni depender de un desarrollador.', note: 'El newsletter contempla la publicación de artículos en el sitio web.\nNo incluye el envío automático de correos a suscriptores.' },
      { number: '05 / CONTACTO', title: 'Una forma sencilla de comunicarse con vos.', description: 'Una página que reúna los canales de contacto que prefieras ofrecer, para que cualquier visitante pueda realizar una consulta sobre tus servicios.', listLabel: 'INCLUYE', items: ['Formulario de contacto por email.', 'Acceso a WhatsApp, si decidís utilizarlo.', 'Información de contacto profesional.'] },
    ],
    complementary: { label: 'PÁGINAS COMPLEMENTARIAS', intro: 'Además del sitio institucional, incluiremos dos páginas que completan el recorrido de quienes llegan interesados en un servicio específico.', pages: [
      { number: 'COMPLEMENTARIA 01', title: 'Landing — Diseñá el futuro de tu carrera', description: 'Una página enfocada en este servicio, con su propuesta de valor, la metodología L.I.F.E., beneficios, testimonios y reserva de sesión mediante Calendly.' },
      { number: 'COMPLEMENTARIA 02', title: 'Página de agradecimiento', description: 'Una página posterior a la reserva, con un mensaje de confirmación y los próximos pasos para preparar la sesión.', note: 'Podremos incluir instrucciones, información previa o un video de bienvenida, según el contenido que definamos.' },
    ] },
  },
  journey: {
    eyebrow: '03 / RECORRIDO DEL VISITANTE', title: 'Distintos intereses. Recorridos diferentes.',
    lead: 'No todas las personas que llegan a tu sitio buscan lo mismo. Por eso, organizaremos la navegación para que cada visitante encuentre la información y el siguiente paso que corresponda a su interés.',
    paths: [
      { label: 'RECORRIDO 01', title: 'Quienes quieren conocer tus servicios.', description: 'Una persona llega desde LinkedIn o por una recomendación, conoce tu trayectoria y explora las distintas formas de trabajar con vos.', steps: ['LINKEDIN / RECOMENDACIONES', 'SITIO PRINCIPAL', 'SERVICIO DE INTERÉS', 'CONSULTA DIRECTA'], closing: 'Según su interés, podrá conocer los servicios para personas o empresas y comunicarse por el canal correspondiente.' },
      { label: 'RECORRIDO 02', title: 'Quienes ya están interesados en diseñar su futuro profesional.', description: 'Una persona que llega desde una publicación, un mensaje o una recomendación sobre este servicio puede acceder directamente a su página específica.', steps: ['ENLACE DIRECTO', 'LANDING ESPECÍFICA', 'CALENDLY', 'PÁGINA DE AGRADECIMIENTO'], closing: 'Un recorrido enfocado en comprender la propuesta y facilitar la reserva de una sesión.' },
    ],
    closingTitle: 'Un mismo sitio, con caminos conectados.', closing: 'Quien llegue a la landing también podrá conocer tu sitio principal.\nY quien explore tus servicios para personas podrá acceder a la landing específica cuando corresponda.',
  },
  visualDirection: {
    eyebrow: '04 / DIRECCIÓN VISUAL', title: 'Una primera dirección visual para tu marca.',
    lead: ['La demo que preparamos muestra una posible dirección visual para la landing «Diseñá el futuro de tu carrera».', 'Tomaremos esta referencia como punto de partida para construir una identidad coherente en todo el sitio, manteniendo a Claudia Sánchez como protagonista.'],
    demo: { label: 'Explorar la demo interactiva', href: DEMO_PATH }, previewSrc: `${DEMO_PATH}?embed=1`,
    palette: [{ name: 'Azul profundo', code: '#1B1A44', dark: true }, { name: 'Dorado', code: '#D5A64A', dark: false }, { name: 'Acento', code: '#5D5C86', dark: true }, { name: 'Marfil', code: '#F7F5F0', dark: false }],
    typography: ['Tipografía: serif editorial + sans limpia.', 'Sugerencia: Cormorant Garamond y Manrope (a validar por legibilidad).'],
    previewCaptions: { desktop: 'ESCRITORIO', mobile: 'MOBILE' },
    disclaimer: ['Esta es una propuesta visual inicial. Los textos, imágenes y detalles finales se ajustarán durante el desarrollo.'],
  },
  scope: {
    eyebrow: '05 / ALCANCE DEL DESARROLLO', title: 'Todo lo necesario para tener tu sitio listo para publicar.',
    groups: [
      { title: '01 / DISEÑO Y DESARROLLO', items: ['Diseño personalizado y adaptable a computadora, tablet y celular.', 'Desarrollo de las cinco páginas principales y las dos complementarias.', 'Integración con Calendly, WhatsApp y formulario de contacto.', 'Análisis y optimización del formulario previo a la reserva de sesiones en Calendly.', 'Sistema de administración para actualizar contenidos y publicaciones.', 'Carga inicial de los 18 artículos del newsletter, sin cargo adicional.', 'Optimización básica de rendimiento y SEO.'] },
      { title: '02 / CONFIGURACIÓN Y PUBLICACIÓN', items: ['Configuración de dominio, hosting y HTTPS.', 'Configuración básica de analítica y Google Search Console.', 'Preparación para indexación en Google.', 'Pruebas finales y publicación del sitio.', 'Explicación básica para administrar los contenidos.'], note: 'La configuración está incluida.\nEl dominio, hosting y los servicios externos de pago se contratan y abonan por separado.' },
    ],
    administration: { eyebrow: '03 / ADMINISTRACIÓN', title: 'Tu sitio, actualizado por vos.', description: 'Contarás con un panel de administración para actualizar contenidos habituales y gestionar las publicaciones del newsletter sin necesidad de modificar código.', note: 'También recibirás una explicación para utilizarlo.' },
    exclusionsTitle: 'NO INCLUIDO', exclusions: 'Páginas o funcionalidades adicionales a las detalladas, envío automático de newsletters por email, pagos online, mantenimiento continuo y rediseños posteriores.',
    optionalTitle: 'OPCIONAL — VERSIONES EN INGLÉS Y PORTUGUÉS', optionalText: 'Más adelante podemos incorporar versiones del sitio en inglés y portugués, con presupuesto independiente.',
  },
  investment: { eyebrow: '06 / INVERSIÓN', title: 'Inversión', label: 'SITIO WEB PROFESIONAL', summary: 'Un sitio web completo para tu marca personal, con servicios para personas y empresas, landing específica y newsletter incluido sin cargo adicional.', commercial: { price: '150', timeline: '7 días', timelineDetail: 'Desde la recepción de toda la información, materiales y accesos necesarios para comenzar.', payment: '50% al comenzar y 50% al finalizar.', paymentDetails: 'USD 75 al comenzar. USD 75 al finalizar.', revisions: 'Una primera versión completa y dos rondas de correcciones.', revisionsDetail: 'Las correcciones se realizan dentro del alcance acordado.' } },
  finalCTA: { title: 'Un sitio que reúna todo lo que construiste.', text: 'La idea es que tengas un espacio propio donde tu experiencia, tus servicios y tu contenido trabajen juntos para presentar tu propuesta profesional y facilitar nuevas oportunidades de contacto.', buttonLabel: 'Conversemos sobre el proyecto', cta: { type: 'url', value: LINKEDIN_URL } },
};
