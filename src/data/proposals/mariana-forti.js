export default {
  slug: 'mariana-forti',

  client: {
    name: 'Mariana Forti',
    firstName: 'Mariana',
    business: 'MEF Consulting',
  },

  project: {
    title: 'Sitio web de MEF Consulting',
  },

  date: '2026-10-01',

  author: {
    name: 'Ezequiel Miceli',
    role: 'Desarrollo web',
    monogram: 'EM',
    footer: {
      copyright: '© 2026 Ezequiel Miceli. Todos los derechos reservados.',
      links: [
        { kind: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ezequiel-miceli' },
        { kind: 'whatsapp', label: 'WhatsApp', href: 'http://wa.me/5492284574707' },
      ],
    },
  },

  cta: {
    enabled: false,
    type: 'anchor',
    value: 'entendimiento',
    label: '',
  },

  intro: {
    mobileRelaxed: true,
    eyebrow: 'PROPUESTA WEB · MEF CONSULTING',
    title: 'MEF Consulting',
    titleLines: ['MEF', 'Consulting'],
    prominentTitle: true,
    echoPaddingTop: '0.5rem',
    startLabel: 'Ver propuesta',
    disciplines: ['Sitio institucional', 'Empresas', 'Candidatos'],
    meta: [
      { label: 'Proyecto', value: 'Sitio web de MEF Consulting' },
      { label: 'Fecha', value: 'Octubre 2026' },
      { label: 'Por', value: 'Ezequiel Miceli', secondary: 'Diseño y desarrollo web' },
    ],
  },

  sectionOrder: [
    'understanding',
    'opportunity',
    'journey',
    'architecture',
    'visualDirection',
    'process',
    'scope',
    'pricing',
    'finalCTA',
  ],

  navigation: {
    labels: {
      intro: 'Inicio',
      understanding: 'Punto de partida',
      opportunity: 'Oportunidad',
      journey: 'Recorrido',
      architecture: 'Estructura',
      visualDirection: 'Dirección visual',
      process: 'Proceso',
      scope: 'Alcance',
      pricing: 'Inversión',
      finalCTA: 'Próximo paso',
    },
  },

  understanding: {
    compact: true,
    eyebrow: 'PUNTO DE PARTIDA',
    title: 'MEF ya tiene experiencia, servicios y una comunidad activa alrededor de sus búsquedas.',
    lead: 'Hoy gran parte de esa presencia vive en LinkedIn: ahí presentás tu experiencia profesional, compartís búsquedas y recibís consultas tanto de empresas como de personas que están buscando una oportunidad laboral.',
    paragraphs: [
      'La idea no es reemplazar ese canal, sino construir un espacio propio para MEF que pueda organizar y desarrollar mejor todo lo que ya sucede alrededor de él.',
    ],
    observations: [
      {
        label: 'LA EXPERIENCIA YA ESTÁ',
        text: 'Más de 15 años en selección, trabajo con organizaciones de distintos rubros y una forma de abordar cada búsqueda que pone en valor tanto el resultado para la empresa como a la persona detrás de cada CV.',
      },
      {
        label: 'DOS PÚBLICOS DIFERENTES',
        text: [
          'Una empresa llega porque necesita encontrar a la persona adecuada. Un candidato llega porque vio una búsqueda y quiere conocerla o postularse.',
          'Hoy ambos recorridos conviven dentro de una misma presencia.',
        ],
      },
      {
        label: 'LA WEB PUEDE ORDENAR LO QUE SUCEDE DESPUÉS',
        text: 'MEF puede tener un espacio institucional donde presentar su experiencia y sus servicios y, desde ahí, ofrecer un recorrido específico para las empresas que necesitan talento y otro para quienes quieren postularse.',
      },
    ],
    showObservationsHeader: false,
    disclaimer: 'Esta propuesta parte de tu perfil, tus publicaciones recientes y la idea que conversamos inicialmente. Antes de desarrollar el sitio definimos juntos la información institucional, los servicios y el contenido final de cada página.',
  },

  opportunity: {
    layout: 'split-centered',
    eyebrow: 'LA OPORTUNIDAD',
    title: 'Que LinkedIn genere el interés y la web se encargue de desarrollarlo.',
    lead: [
      'LinkedIn puede seguir siendo el lugar donde compartís búsquedas, construís visibilidad y conectás con empresas y candidatos.',
      'La web suma algo diferente: un lugar propio donde una empresa puede conocer MEF antes de consultar y donde un candidato puede pasar de ver una vacante a postularse de forma clara y directa.',
    ],
    observed: {
      label: 'RECORRIDO ACTUAL',
      steps: [
        { id: 'linkedin-referencias', label: 'LinkedIn / Referencias' },
        { id: 'perfil-publicaciones', label: 'Perfil y publicaciones' },
        { id: 'interes', label: 'Interés' },
        { id: 'mensaje-email', label: 'Mensaje o email' },
      ],
      note: 'Representación simplificada a partir de la presencia pública actual de MEF.',
    },
    proposed: {
      label: 'RECORRIDO PROPUESTO',
      steps: [
        { id: 'entradas', label: 'LinkedIn · Referencias · Otros puntos de entrada' },
        { id: 'mef', label: 'MEF Consulting' },
      ],
      decision: '¿Qué necesitás?',
      branches: [
        {
          id: 'talento',
          label: 'NECESITO TALENTO',
          audience: 'Empresas',
          steps: [
            { id: 'conocer-mef', label: 'Conocer MEF' },
            { id: 'entender-servicios', label: 'Entender los servicios' },
            { id: 'iniciar-consulta', label: 'Iniciar una consulta' },
          ],
        },
        {
          id: 'postularme',
          label: 'QUIERO POSTULARME',
          audience: 'Candidatos',
          steps: [
            { id: 'ver-vacantes', label: 'Ver vacantes' },
            { id: 'conocer-detalles', label: 'Conocer los detalles' },
            { id: 'enviar-postulacion', label: 'Enviar mi postulación' },
          ],
        },
      ],
    },
      insight: {
        align: 'left',
        title: 'La web no reemplaza lo que hoy funciona.\nLe da un siguiente paso más claro.',
        text: 'Una empresa puede llegar a la conversación entendiendo mejor qué hace MEF y cómo trabaja.\nUn candidato puede encontrar la búsqueda que le interesa y postularse sin tener que reconstruir el proceso entre publicaciones, referencias y emails.',
    },
  },

  journey: {
    mobileRelaxed: true,
    eyebrow: 'RECORRIDO PROPUESTO',
    title: ['Una misma marca.', 'Dos recorridos diseñados para necesidades diferentes.'],
    lead: 'El sitio funciona como la casa digital de MEF. Desde ahí, cada visitante puede avanzar según lo que vino a buscar.',
    note: 'Dos públicos diferentes. Una experiencia clara para cada uno.',
    compact: true,
    deepEntry: true,
    curveTension: 0.68,
    mobileBranches: 'expanded',
    showMergeLabels: false,
    steps: [
      {
        id: 'entry-points',
        label: 'PUNTOS DE ENTRADA',
        branches: [
          { id: 'linkedin', label: 'LinkedIn', audience: '', labelOnly: true, steps: [{ id: 'linkedin-source', label: 'LinkedIn' }] },
          { id: 'references', label: 'Referencias', audience: '', labelOnly: true, steps: [{ id: 'references-source', label: 'Referencias' }] },
          { id: 'other-channels', label: 'Otros canales', audience: '', labelOnly: true, steps: [{ id: 'other-source', label: 'Otros canales' }] },
        ],
      },
      { id: 'mef-consulting', label: 'MEF Consulting' },
      { id: 'meet', label: 'Conozco la consultora' },
      { id: 'services', label: 'Entiendo qué hace y qué servicios ofrece' },
      { id: 'experience', label: 'Conozco su experiencia y forma de trabajo' },
      {
        id: 'need',
        label: '¿QUÉ NECESITO?',
        branches: [
          {
            id: 'company',
            label: 'EMPRESA',
            audience: '',
            steps: [
              { id: 'company-talent', label: 'Necesito talento' },
              { id: 'company-solutions', label: 'Conozco las soluciones disponibles' },
              { id: 'company-method', label: 'Entiendo cómo trabaja MEF' },
              { id: 'company-questions', label: 'Resuelvo mis principales dudas' },
              { id: 'company-contact', label: 'Inicio una consulta', final: true },
            ],
          },
          {
            id: 'candidate',
            label: 'CANDIDATO',
            audience: '',
            steps: [
              { id: 'candidate-apply', label: 'Quiero postularme' },
              { id: 'candidate-openings', label: 'Veo las vacantes abiertas' },
              { id: 'candidate-choice', label: 'Elijo la que me interesa' },
              { id: 'candidate-details', label: 'Conozco el puesto y sus requisitos' },
              { id: 'candidate-form', label: 'Completo mis datos y adjunto mi CV' },
              { id: 'candidate-send', label: 'Envío mi postulación', final: true },
            ],
          },
        ],
      },
    ],
  },

  architecture: {
    eyebrow: 'ESTRUCTURA INICIAL',
    title: 'Seis páginas. Cada una con una función concreta.',
    lead: 'La propuesta combina una presencia institucional para MEF con dos recorridos específicos: uno comercial para empresas y otro práctico para candidatos.',
    showJourneyRefs: false,
    readableInactive: true,
    sections: [
      {
        number: '01', name: 'INICIO', shape: 'hero', objective: 'Presentar MEF Consulting',
        description: 'Una primera visión de la consultora: qué hace, experiencia, principales servicios, forma de trabajo y accesos claros a los recorridos para empresas y candidatos.',
      },
      {
        number: '02', name: 'NOSOTROS', shape: 'text', objective: 'Poner contexto y confianza detrás de la marca',
        description: 'La historia de MEF, tu recorrido profesional, experiencia, valores y la forma en que entendés la selección de personas.',
      },
      {
        number: '03', name: 'SERVICIOS', shape: 'grid', objective: 'Explicar cómo puede ayudar MEF a una empresa',
        description: 'Un espacio para desarrollar selección, headhunting y los demás servicios que definamos juntos, explicando qué resuelve cada uno y en qué situaciones puede ser útil.',
      },
      {
        number: '04', name: 'NECESITO TALENTO', shape: 'cta', objective: 'Convertir una necesidad en una consulta',
        description: 'Una página específicamente pensada para empresas: presentar el problema, explicar cómo puede intervenir MEF, desarrollar su forma de trabajo, responder dudas y facilitar el contacto.',
      },
      {
        number: '05', name: 'QUIERO POSTULARME', shape: 'split', objective: 'Reunir las vacantes y simplificar la postulación',
        description: 'Un espacio donde una persona pueda consultar las búsquedas abiertas, elegir la que le interesa, conocer sus detalles y postularse adjuntando su CV.',
        callout: 'Mariana podrá publicar, editar y actualizar las vacantes de forma sencilla sin depender de mí para cada cambio.',
      },
      {
        number: '06', name: 'CONTACTO', shape: 'footer', objective: 'Dejar siempre un canal directo',
        description: 'Información de contacto y un formulario general para consultas que no comiencen desde alguno de los dos recorridos anteriores.',
      },
    ],
    note: 'La estructura es una propuesta inicial. Antes de desarrollar el sitio validamos juntos el contenido definitivo de cada página y la información que MEF quiera comunicar.',
  },

  visualDirection: {
    enabled: true,
    compactMobileShowcase: true,
    mobileEditorialStack: true,
    scrollMobileMockups: true,
    eyebrow: 'PRIMERA PROPUESTA VISUAL',
    title: 'Profesional en la forma. Humana en la experiencia.',
    lead: [
      'La dirección inicial toma como punto de partida elementos que MEF ya utiliza —verdes profundos, tonos cálidos y una estética sobria— y los lleva a una experiencia web más amplia, clara y contemporánea.',
      'La intención no es cambiar la identidad de MEF, sino darle un sistema visual capaz de acompañar tanto su presentación institucional como los recorridos de empresas y candidatos.',
    ],
    mockups: [
      {
        id: 'home', kind: 'desktop', label: 'HOME · DESKTOP', title: 'Una presencia institucional para MEF.',
        description: 'El primer concepto muestra cómo podría presentarse la consultora, desarrollar su posicionamiento y abrir desde el inicio los dos recorridos principales.',
        src: '/assets/proposals/mariana-forti/mariana-desktop.png', alt: 'Mockup temporal de la home institucional de MEF en computadora.', width: 1671, height: 941, available: true,
      },
      {
        id: 'talent', kind: 'mobile', label: 'NECESITO TALENTO · MOBILE', title: 'Una experiencia orientada a empresas.',
        titleLines: ['Una experiencia', 'orientada a empresas.'],
        description: 'Una página más directa, pensada para que una empresa entienda cómo puede ayudarla MEF y tenga un camino claro hacia la consulta.',
        src: '/assets/proposals/mariana-forti/mariana-mobile.png', alt: 'Mockup temporal del recorrido Necesito talento en celular.', width: 841, height: 1870, available: true,
      },
      {
        id: 'candidate', kind: 'mobile', label: 'QUIERO POSTULARME · MOBILE', title: 'Las búsquedas, ordenadas en un solo lugar.',
        titleLines: ['Las búsquedas,', 'ordenadas en un solo lugar.'],
        description: 'Una experiencia donde el candidato puede encontrar vacantes abiertas, consultar la información relevante y comenzar su postulación desde el celular.',
        src: '/assets/proposals/mariana-forti/mariana-mobile2.png', alt: 'Mockup temporal del recorrido Quiero postularme en celular.', width: 841, height: 2062, available: true,
      },
    ],
  },

  process: {
    eyebrow: 'PROCESO',
    title: 'De la información actual a un sitio listo para usar.',
    stages: [
      { number: '01', name: 'ENTENDER', summary: 'Reunimos la información de MEF que hoy no es pública o necesita mayor detalle: historia, servicios, forma de trabajo, contenidos y objetivos del sitio.', items: [] },
      { number: '02', name: 'DEFINIR', summary: 'Validamos las seis páginas, qué información necesita cada una y cómo deben funcionar los recorridos de empresas y candidatos.', items: [] },
      { number: '03', name: 'ESTRUCTURAR', summary: 'Organizo el contenido y preparo la jerarquía, los mensajes y los llamados a la acción de cada página.', items: [] },
      { number: '04', name: 'DISEÑAR', summary: 'Desarrollo la propuesta visual completa y su adaptación a computadora, tablet y celular.', items: [] },
      { number: '05', name: 'DESARROLLAR', summary: 'Construyo el sitio e implemento la gestión de vacantes y el sistema simple de postulación con CV.', items: [] },
      { number: '06', name: 'REVISAR Y PUBLICAR', summary: 'Realizamos las dos rondas de revisión acordadas, hacemos las pruebas finales y dejamos el sitio publicado y funcionando.', items: [] },
    ],
  },

  scope: {
    eyebrow: 'ALCANCE',
    title: 'Un sitio completo para presentar MEF, recibir consultas y gestionar sus búsquedas.',
    lead: 'El proyecto incluye el diseño, desarrollo y publicación del sitio, junto con las herramientas necesarias para que puedas actualizar el contenido habitual y administrar las vacantes una vez publicado.',
    areas: [
      {
        id: 'site', name: 'SITIO WEB', subtitle: '6 páginas completas', enabled: true,
        items: ['Inicio', 'Nosotros', 'Servicios', 'Necesito talento', 'Quiero postularme', 'Contacto', 'Diseño y desarrollo a medida.', 'Adaptación completa a computadora, tablet y celular.'],
      },
      {
        id: 'openings', name: 'VACANTES', subtitle: 'Un sistema simple para publicar y mantener las búsquedas', enabled: true, layout: 'split', splitAt: 3,
        items: ['Crear nuevas vacantes.', 'Editar su información.', 'Publicarlas cuando estén abiertas.', 'Cambiar su estado cuando una búsqueda se complete o finalice.', 'Mostrar la información necesaria para que el candidato pueda decidir si quiere postularse.'],
      },
      {
        id: 'applications', name: 'POSTULACIONES', subtitle: 'Del interés al CV, dentro del mismo recorrido', enabled: true,
        items: ['El candidato selecciona una vacante.', 'Consulta sus detalles y requisitos.', 'Completa un formulario con sus datos.', 'Adjunta su CV.', 'La postulación identifica la búsqueda seleccionada.', 'La información y el CV llegan al email definido por Mariana.'],
      },
      {
        id: 'management', name: 'AUTOGESTIÓN', subtitle: 'Preparado para que MEF pueda mantenerlo actualizado', enabled: true, layout: 'split', splitAt: 2,
        items: ['Podrás modificar los textos, imágenes e información editable habitual del sitio.', 'Podrás publicar, editar y actualizar vacantes sin depender de mí para cada cambio.', 'No existe una suscripción mensual conmigo por mantener la web.', 'Los cambios estructurales, nuevas funcionalidades o rediseños importantes se presupuestan aparte.'],
      },
      {
        id: 'publication', name: 'PUBLICACIÓN', subtitle: 'Configuración y puesta online', enabled: true, layout: 'split', splitAt: 2,
        items: ['Configuración del dominio y hosting.', 'Publicación del sitio.', 'Pruebas finales en computadora y celular.', 'Configuración del formulario de contacto y de las postulaciones.'],
        notesPlacement: 'heading',
        notes: ['El dominio y el hosting no están incluidos en el precio.\nMariana los contrata y abona directamente, incluyendo sus futuras renovaciones.', 'La configuración y puesta en funcionamiento sí están incluidas.'],
      },
    ],
  },

  pricing: {
    eyebrow: '',
    title: 'Inversión',
    currency: 'USD',
    amount: '200',
    label: 'Sitio web de MEF Consulting',
    summaryWidth: '31ch',
    summary: '6 páginas + gestión simple de vacantes + sistema de postulación con CV.',
    includes: ['Primera versión completa del sitio.', 'Dos rondas completas de revisión.', 'Configuración y publicación.'],
    timeline: '14 días',
    timelineDetail: 'A partir de la recepción de toda la información y los materiales necesarios para comenzar.',
    payment: '50% + 50%',
    paymentDetails: ['USD 100 para comenzar.', 'USD 100 al finalizar el proyecto.'],
  },

  finalCTA: {
    eyebrow: 'PARA AVANZAR',
    title: 'Próximo paso',
    text: 'Si esta propuesta va en línea con lo que buscás, el próximo paso es conversar sobre los detalles, completar la información de MEF y terminar de definir juntos la estructura del sitio.',
    buttonLabel: '',
  },
};
