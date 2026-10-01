export default {
  slug: 'clarisa-martinez',

  client: {
    name: 'Clarisa Martínez',
    firstName: 'Clarisa',
    business: 'Proyecto AVANZA',
    role: 'Facilitadora de AVANZA',
  },

  project: {
    title: 'Página web para Proyecto AVANZA',
  },

  date: '2026-09-30',

  author: {
    name: 'Ezequiel Miceli',
    role: 'Diseño y desarrollo web',
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
    label: 'Ver propuesta',
  },

  intro: {
    eyebrow: 'Propuesta web',
    pretitle: 'Una propuesta para',
    disciplines: ['Estrategia', 'Diseño', 'Desarrollo'],
    startLabel: 'Ver propuesta',
  },

  understanding: {
    eyebrow: 'Lo que entendí',
    title: 'La idea inicial evolucionó al conocer mejor tu propuesta.',
    lead: 'Una página pensada para transformar el interés que ya genera AVANZA en personas que entienden la propuesta, reconocen si es para ellas y llegan preparadas para dar el siguiente paso.',
    compact: true,
    observationsCopySize: 'small',
    observations: [
      {
        label: 'De dónde partimos',
        text: [
          'Cuando te escribí, mi primera idea fue pensar una página que ayudara a ordenar ENCONTRAR y DISEÑAR como dos recorridos diferentes.',
          'Al profundizar en tu comunicación para preparar esta propuesta, encontré en AVANZA una oportunidad más concreta para construir una herramienta que puedas utilizar hoy.',
        ],
      },
      {
        label: 'Lo que encontré',
        text: 'Al investigar más tu comunicación, AVANZA apareció como una propuesta mucho más desarrollada: tiene una problemática clara, una metodología definida, una forma de trabajo y distintos contenidos que explican la experiencia.',
      },
      {
        label: 'Por qué este enfoque',
        text: [
          'AVANZA ya tiene una propuesta definida sobre la que podemos construir una página con un objetivo concreto: ayudar a que las personas entiendan la experiencia y lleguen mejor preparadas al siguiente paso.',
          'ENCONTRAR y DISEÑAR pueden retomarse más adelante si tiene sentido construir una presencia digital más amplia.',
        ],
      },
    ],
    showObservationsHeader: false,
    disclaimer: 'Esta es una propuesta inicial construida a partir de tu comunicación pública y de nuestra conversación. Antes de desarrollar la página, definimos juntos la información y los detalles finales.',
  },

  opportunity: {
    eyebrow: 'La oportunidad',
    title: 'AVANZA ya genera interés. La página puede encargarse de desarrollarlo.',
    lead: [
      'Hoy AVANZA se comunica a través de publicaciones, historias y conversaciones que explican distintas partes de la propuesta.',
      'La oportunidad es reunir ese recorrido en un lugar donde cada persona pueda reconocerse, comprender cómo funciona AVANZA y resolver sus dudas antes de consultar.',
    ],
    observed: {
      label: 'Recorrido actual',
      caption: 'Hoy',
      steps: [
        { id: 'content', label: 'Contenido' },
        { id: 'conversation', label: 'Conversación' },
        { id: 'talk', label: 'Consulta' },
      ],
    },
    proposed: {
      label: 'Recorrido propuesto',
      caption: 'Página AVANZA',
      gapLabel: 'Un recorrido reunido en un solo lugar',
      steps: [
        { id: 'content', label: 'Contenido' },
        { id: 'page', label: 'Página AVANZA' },
        { id: 'fit', label: 'Me identifico' },
        { id: 'understanding', label: 'Entiendo la propuesta' },
        { id: 'operation', label: 'Conozco cómo funciona' },
        { id: 'questions', label: 'Resuelvo dudas' },
        { id: 'next', label: 'Consulta', replaces: 'talk' },
      ],
    },
    insight: 'La página no reemplaza la conversación: permite que empiece con una persona que ya comprendió mejor la propuesta y pudo reconocer si AVANZA puede ser para ella.',
  },

  journey: {
    eyebrow: 'Recorrido propuesto',
    title: 'Una página para acompañar la decisión.',
    lead: 'Distintos puntos de entrada pueden llevar a una misma página y a un recorrido claro.',
    note: 'La página no reemplaza la conversación.\nHace que la conversación empiece con una persona que ya entiende AVANZA.',
    convergenceLabel: 'Los distintos puntos de entrada vuelven a encontrarse',
    compact: true,
    steps: [
      {
        id: 'entries',
        label: 'Puntos de entrada',
        kind: 'Entrada',
        description: 'Contenido y conversaciones; una campaña también podría sumarse como punto de entrada en el futuro.',
        branches: [
          {
            id: 'content-entry',
            label: 'Contenido',
            audience: 'Publicaciones e historias',
            steps: [
              {
                id: 'content-source',
                label: 'Contenido',
                description: 'Una persona descubre AVANZA desde Instagram, una publicación o una historia y accede a un lugar donde entender la propuesta completa.',
              },
            ],
          },
          {
            id: 'conversation-entry',
            label: 'Conversaciones',
            audience: 'Consultas por mensaje',
            steps: [
              {
                id: 'conversation-source',
                label: 'Conversación',
                description: 'Si alguien pregunta por AVANZA por mensaje, podés compartirle la página para que conozca cómo funciona antes de continuar la conversación.',
              },
            ],
          },
          {
            id: 'campaign-entry',
            label: 'Campañas',
            audience: 'Uso posible',
            steps: [
              {
                id: 'campaign-source',
                label: 'Campaña posible',
                description: 'Si más adelante decidís utilizar publicidad, la página puede funcionar como destino específico para esas campañas.',
              },
            ],
          },
        ],
      },
      {
        id: 'avanza',
        label: 'Página AVANZA',
        kind: 'Convergencia',
        description: 'Todos los puntos de entrada llegan a una misma página.',
      },
      {
        id: 'problem',
        label: 'Reconozco si el problema me representa',
        description: 'La persona identifica si AVANZA encaja con el momento que está atravesando.',
      },
      {
        id: 'understand',
        label: 'Entiendo qué es AVANZA',
        description: 'Comprende la propuesta sin depender de información dispersa.',
      },
      {
        id: 'operation',
        label: 'Comprendo cómo funciona',
        description: 'Conoce el formato, la dinámica y qué sucede durante el proceso.',
      },
      {
        id: 'method',
        label: 'Conozco el método',
        description: 'Conoce la metodología AVANZA y el rol que cumple dentro del proceso.',
      },
      {
        id: 'questions',
        label: 'Resuelvo dudas',
        description: 'Encuentra respuestas a las preguntas que podrían frenar su decisión.',
      },
      {
        id: 'final',
        label: 'Consulta',
        kind: 'Cierre',
        description: 'La persona decide consultar porque ya cuenta con la información necesaria.',
        final: true,
      },
    ],
  },

  architecture: {
    eyebrow: 'Estructura propuesta',
    title: 'La estrategia, traducida en ocho bloques.',
    lead: 'Ocho partes para explicar AVANZA con claridad y acompañar a la persona hasta la consulta.',
    showJourneyRefs: false,
    readableInactive: true,
    sections: [
      {
        number: '01',
        name: 'Presentación de AVANZA',
        shape: 'hero',
        objective: 'Explicar rápidamente qué es AVANZA, qué propone y para quién está pensado.',
        description: 'Incluye una primera posibilidad de avanzar para las personas que ya llegan decididas.',
        journeyRef: 'interest',
      },
      {
        number: '02',
        name: 'El problema y para quién es',
        shape: 'text',
        objective: 'Ayudar a que la persona se reconozca en las situaciones que AVANZA trabaja y pueda identificar si la propuesta encaja con su momento.',
        description: 'Puede incluir falta de foco, decisiones postergadas, ideas que no terminan de concretarse y necesidad de nuevas perspectivas. Es una sección natural para ofrecer una posibilidad de avanzar.',
        journeyRef: 'problem',
      },
      {
        number: '03',
        name: 'Qué es AVANZA y cómo funciona',
        shape: 'text',
        objective: 'Explicar claramente el formato y la dinámica.',
        description: 'El recorrido conceptual es: traés un desafío, lo ponemos sobre la mesa, aparecen preguntas y nuevas perspectivas, se trabaja sobre decisiones y se transforma en acciones. Si Clarisa confirma que sigue vigente en su comunicación, se incorpora el concepto “No es un curso”.',
        journeyRef: 'operation',
      },
      {
        number: '04',
        name: 'Método AVANZA',
        shape: 'grid',
        objective: 'Convertir la metodología AVANZA en uno de los elementos distintivos de la página.',
        description: 'A — Analizar · V — Visualizar · A — Alinear · N — Navegar · Z — Zona de decisión · A — Accionar. Puede convertirse en uno de los principales momentos visuales y luego ofrecer una posibilidad de avanzar o consultar.',
        journeyRef: 'method',
      },
      {
        number: '05',
        name: 'Qué te llevás + acompañamiento',
        shape: 'grid',
        objective: 'Mostrar qué puede obtener una persona del proceso y cómo continúa el acompañamiento.',
        description: 'Claridad, nuevas perspectivas, prioridades, decisiones, plan de acción y seguimiento son conceptos por confirmar. No se afirmarán detalles específicos del acompañamiento sin acordarlos con Clarisa.',
        journeyRef: 'outcome',
      },
      {
        number: '06',
        name: 'Sobre Clarisa',
        shape: 'text',
        objective: 'Presentar quién facilita AVANZA, desde qué experiencia trabaja y cuál es su rol dentro del proceso.',
        description: 'Una presentación breve que aporte confianza y contexto, sin convertirse en una biografía extensa.',
      },
      {
        number: '07',
        name: 'Preguntas frecuentes',
        shape: 'faq',
        objective: 'Resolver las dudas que todavía podrían impedir que una persona avance.',
        description: 'Modalidad, duración, dinámica, cupos, para quién es, qué sucede después y cómo participar son ejemplos por confirmar.',
        journeyRef: 'fit',
      },
      {
        number: '08',
        name: 'Consulta / próximo paso',
        shape: 'cta',
        objective: 'Facilitar la acción cuando la persona ya entiende qué es AVANZA, cómo funciona, para quién es, qué metodología utiliza, qué puede obtener y quién acompaña el proceso.',
        description: 'El canal definitivo puede ser WhatsApp, formulario, reserva u otro mecanismo que Clarisa ya utilice; se valida antes de decidirlo. Debajo, un pie de página puede reunir Clarisa Martínez / AVANZA, contacto, redes, enlaces necesarios e información legal si corresponde, sin inventar datos no confirmados.',
        journeyRef: 'final',
      },
    ],
  },

  visualDirection: {
    enabled: true,
    eyebrow: 'Primera propuesta visual',
    title: 'Una dirección editorial, humana y cálida.',
    lead: 'Este primer concepto toma elementos que AVANZA ya viene utilizando —tonos cálidos, verdes naturales, tipografía editorial y una presencia muy humana— y los lleva a una experiencia pensada específicamente para web.',
    reference: {
      label: 'Dirección inicial',
      title: 'Una primera pantalla pensada para comprender y avanzar.',
      note: 'En una landing, cada elemento del hero cumple una función: el eyebrow da contexto, el título comunica la propuesta principal, el subtítulo aterriza el beneficio y el CTA convierte ese interés en una acción. Por eso el mensaje es más directo que en una pieza de contenido: mantiene el tono humano de AVANZA y ayuda a que alguien que llega por primera vez entienda rápidamente qué es, qué puede encontrar y cuál es el siguiente paso.',
    },
    desktop: {
      src: '/assets/proposals/clarisa-martinez/clarisa-desktop.png',
      alt: 'Primera propuesta visual de AVANZA en computadora.',
      width: 1671,
      height: 941,
      available: true,
    },
    mobile: {
      src: '/assets/proposals/clarisa-martinez/clarisa-mobile.png',
      alt: 'Primera propuesta visual de AVANZA en celular.',
      width: 883,
      height: 1782,
      available: true,
    },
    principles: [
      { title: 'Editorial', text: 'Una jerarquía clara para desarrollar el contenido con calma.' },
      { title: 'Humana y cálida', text: 'Fotografías, tonos y espacios que acompañan la propuesta.' },
      { title: 'Clara y estratégica', text: 'Cada decisión visual ayuda a comprender el recorrido.' },
    ],
  },

  process: {
    eyebrow: 'Cómo trabajaríamos',
    title: 'Del análisis a una página publicada.',
    lead: 'Seis etapas para comprender AVANZA, definir el recorrido y dejar la página funcionando.',
    stages: [
      {
        number: '01',
        name: 'Entender',
        summary: 'Investigación y conversación para comprender AVANZA, su público, cómo llegan hoy las consultas y cómo se transforma el interés en una venta.',
        items: [],
      },
      {
        number: '02',
        name: 'Definir',
        summary: 'Definimos qué necesita entender una persona antes de consultar y en qué orden conviene mostrárselo.',
        items: [],
      },
      {
        number: '03',
        name: 'Estructurar',
        summary: 'Organizo el contenido y preparo la arquitectura de la página.',
        items: [],
      },
      {
        number: '04',
        name: 'Diseñar',
        summary: 'Desarrollo la dirección visual respetando y refinando la identidad existente de AVANZA.',
        items: [],
      },
      {
        number: '05',
        name: 'Desarrollar',
        summary: 'Construyo la página completa y la adapto a computadora, tablet y celular.',
        items: [],
      },
      {
        number: '06',
        name: 'Publicar',
        summary: 'Configuramos dominio y hosting, hacemos las pruebas finales y dejamos la página online.',
        items: [],
      },
    ],
  },

  scope: {
    eyebrow: 'Qué incluye',
    title: 'Una página lista para usar y administrar.',
    lead: 'Diseño y desarrollo de una página única para AVANZA, creada a medida y adaptada a computadora, tablet y celular.',
    areas: [
      {
        id: 'page',
        name: 'Página AVANZA',
        enabled: true,
        items: [
          'Diseño personalizado y desarrollo completo',
          'Adaptación a computadora, tablet y celular',
          'Estructura orientada a convertir el interés en una acción concreta',
          'Adaptación de la identidad visual existente',
          'Configuración del canal de contacto acordado',
          'Configuración básica de medición',
        ],
      },
      {
        id: 'publication',
        name: 'Publicación',
        enabled: true,
        layout: 'split',
        splitAt: 3,
        items: [
          'Configuración de dominio y hosting',
          'Publicación y pruebas finales',
          'Dominio y hosting no están incluidos en el precio: Clarisa contrata y abona esos servicios y sus futuras renovaciones directamente',
          'La configuración y puesta en funcionamiento sí están incluidas en la propuesta',
        ],
      },
      {
        id: 'management',
        name: 'Después de publicarla, podés administrarla por tu cuenta',
        enabled: true,
        items: [
          'La página quedará preparada para modificar títulos, textos, imágenes, fechas y la información editable habitual sin depender de mí para cada cambio',
          'No existe una suscripción mensual conmigo por mantener la página',
          'Los cambios estructurales, las nuevas funcionalidades o los rediseños importantes se presupuestan aparte',
        ],
      },
    ],
  },

  pricing: {
    eyebrow: '',
    title: 'Inversión',
    currency: 'USD',
    amount: '150',
    label: 'Página web AVANZA',
    summary: 'Una única página completa. Incluye una primera versión completa y dos rondas completas de correcciones.',
    timeline: '7 días desde que se recibe toda la información y los materiales necesarios.',
    payment: '50% al comenzar y 50% al finalizar el proyecto.',
    extras: [],
  },

  finalCTA: {
    eyebrow: 'Para avanzar',
    title: 'Próximo paso',
    text: 'Si esta propuesta va en línea con lo que buscás, el próximo paso es conversar sobre los detalles y terminar de definir juntos la página.',
    buttonLabel: '',
    signature: 'Ezequiel Miceli — Diseño y desarrollo web',
  },
};
