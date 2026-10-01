export default {
  slug: 'clarisa',

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
    paragraphs: [
      'Cuando te escribí, mi primera idea fue pensar una página que ayudara a ordenar ENCONTRAR y DISEÑAR como dos recorridos diferentes.',
      'Al profundizar en tu comunicación para preparar esta propuesta, encontré en AVANZA una oportunidad más concreta para construir una herramienta que puedas utilizar hoy.',
    ],
    highlights: [
      {
        label: 'La primera idea',
        text: 'ENCONTRAR y DISEÑAR planteaban una posibilidad interesante: ayudar a cada persona a identificar rápidamente qué recorrido encajaba mejor con el momento profesional que estaba atravesando.',
      },
      {
        label: 'Lo que encontré',
        text: 'Al investigar más tu comunicación, AVANZA apareció como una propuesta mucho más desarrollada: tiene una problemática clara, una metodología propia, una forma de trabajo y distintos contenidos que explican qué puede llevarse una persona de la experiencia.',
      },
      {
        label: 'Por qué este enfoque',
        text: 'Por eso decidí desarrollar esta propuesta alrededor de AVANZA. La idea de organizar ENCONTRAR y DISEÑAR no queda descartada. Podemos retomarla si al conversar vemos que tiene sentido construir una presencia digital más amplia alrededor de tus distintas propuestas.',
      },
    ],
    observations: [],
    disclaimer: 'Esta es una hipótesis inicial construida a partir de tu comunicación pública y de nuestra conversación. Antes de desarrollar la página, validamos juntos la información, el recorrido y el objetivo.',
  },

  opportunity: {
    eyebrow: 'La oportunidad',
    title: 'AVANZA ya genera interés. La página puede encargarse de desarrollarlo.',
    lead: 'Hoy AVANZA se comunica a través de distintas publicaciones, historias y piezas que explican partes diferentes de la propuesta: el problema que trabaja, la metodología, la dinámica, lo que puede llevarse una persona y la invitación a consultar. La oportunidad es reunir todo ese recorrido en un único lugar.',
    observed: {
      label: 'Recorrido actual',
      caption: 'Hoy',
      steps: [
        { id: 'content', label: 'Contenido' },
        { id: 'interest', label: 'Interés' },
        { id: 'pieces', label: 'Información distribuida' },
        { id: 'talk', label: 'Consulta' },
      ],
    },
    proposed: {
      label: 'Recorrido propuesto',
      caption: 'Página AVANZA',
      gapLabel: 'Un recorrido reunido en un solo lugar',
      steps: [
        { id: 'content', label: 'Contenido' },
        { id: 'interest', label: 'Interés' },
        { id: 'page', label: 'Página AVANZA', replaces: 'pieces' },
        { id: 'understanding', label: 'Comprensión' },
        { id: 'fit', label: 'Reconocimiento' },
        { id: 'next', label: 'Próximo paso', replaces: 'talk' },
      ],
    },
    insight: 'El objetivo no es simplemente explicar AVANZA. Es convertir el interés en una acción concreta.',
  },

  journey: {
    eyebrow: 'Hipótesis inicial del recorrido',
    title: 'Una página para acompañar la decisión.',
    lead: 'Distintos puntos de entrada pueden llevar a una misma página y a un recorrido claro.',
    note: 'La página no reemplaza la conversación. Hace que la conversación empiece con una persona que ya entiende AVANZA. Las oportunidades para avanzar aparecen cuando naturalmente tienen sentido, no después de cada sección.',
    conversion: {
      label: 'Próximo paso',
      description: 'Una consulta por el canal que definamos con Clarisa.',
    },
    steps: [
      {
        id: 'entries',
        label: 'Puntos de entrada',
        kind: 'Entrada',
        description: 'Contenido, conversaciones y, si se utilizan ahora o en el futuro, campañas.',
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
                description: 'Si utilizás publicidad ahora o en el futuro, la página puede funcionar como destino específico para las personas que lleguen desde esos anuncios.',
              },
            ],
          },
        ],
      },
      {
        id: 'avanza',
        label: 'AVANZA',
        kind: 'Convergencia',
        description: 'Todos los puntos de entrada llegan a una misma página.',
      },
      {
        id: 'interest',
        label: 'Me interesa',
        description: 'La propuesta principal abre el recorrido.',
      },
      {
        id: 'understand',
        label: 'Entiendo qué es',
        description: 'La persona comprende la propuesta sin depender de información dispersa.',
      },
      {
        id: 'problem',
        label: 'Me reconozco en el problema',
        description: 'Identifica si AVANZA encaja con su momento.',
      },
      {
        id: 'operation',
        label: 'Entiendo cómo funciona',
        description: 'Conoce el formato, la dinámica y qué sucede durante el proceso.',
      },
      {
        id: 'method',
        label: 'Conozco el método',
        description: 'Comprende la metodología propia de AVANZA.',
      },
      {
        id: 'outcome',
        label: 'Sé qué puedo obtener',
        description: 'Reconoce los posibles resultados del proceso sin promesas exageradas.',
      },
      {
        id: 'fit',
        label: 'Confirmo que es para mí',
        description: 'La página ya aportó la información necesaria para tomar posición.',
      },
      {
        id: 'final',
        label: 'Quiero dar el siguiente paso',
        kind: 'Cierre',
        description: 'La persona elige avanzar por el canal que se defina con Clarisa.',
        final: true,
      },
    ],
  },

  architecture: {
    eyebrow: 'Estructura propuesta',
    title: 'La estrategia, traducida en ocho bloques.',
    lead: 'Esta estructura es una hipótesis inicial. El contenido y el orden definitivo se validan con Clarisa antes de desarrollar.',
    sections: [
      {
        number: '01',
        name: 'Propuesta principal',
        shape: 'hero',
        objective: 'Explicar rápidamente qué es AVANZA, qué propone y para quién está pensado.',
        description: 'Incluye una primera posibilidad de avanzar para las personas que ya llegan decididas.',
        journeyRef: 'interest',
      },
      {
        number: '02',
        name: 'El problema + para quién es',
        shape: 'text',
        objective: 'Ayudar a que la persona se reconozca en las situaciones que AVANZA trabaja y pueda identificar si la propuesta encaja con su momento.',
        description: 'Puede incluir falta de foco, decisiones postergadas, ideas que no terminan de concretarse y necesidad de nuevas perspectivas. Es una sección natural para ofrecer una posibilidad de avanzar.',
        journeyRef: 'problem',
      },
      {
        number: '03',
        name: 'Qué es AVANZA + cómo funciona',
        shape: 'text',
        objective: 'Explicar claramente el formato y la dinámica.',
        description: 'El recorrido conceptual es: traés un desafío, lo ponemos sobre la mesa, aparecen preguntas y nuevas perspectivas, se trabaja sobre decisiones y se transforma en acciones. Si Clarisa confirma que sigue vigente en su comunicación, se incorpora el concepto “No es un curso”.',
        journeyRef: 'operation',
      },
      {
        number: '04',
        name: 'Método AVANZA',
        shape: 'grid',
        objective: 'Convertir la metodología propia en uno de los elementos distintivos de la página.',
        description: 'A — Analizar · V — Visualizar · A — Alinear · N — Navegar · Z — Zona de decisión · A — Accionar. Puede convertirse en uno de los principales momentos visuales y luego ofrecer una posibilidad de avanzar o consultar.',
        journeyRef: 'method',
      },
      {
        number: '05',
        name: 'Qué te llevás + acompañamiento',
        shape: 'grid',
        objective: 'Mostrar qué puede obtener una persona del proceso y cómo continúa el acompañamiento.',
        description: 'Claridad, nuevas perspectivas, prioridades, decisiones, plan de acción y seguimiento son conceptos sujetos a validación. No se afirmarán detalles específicos del acompañamiento sin confirmarlos.',
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
        description: 'Modalidad, duración, dinámica, cupos, para quién es, qué sucede después y cómo participar son ejemplos sujetos a validación.',
        journeyRef: 'fit',
      },
      {
        number: '08',
        name: 'Próximo paso',
        shape: 'cta',
        objective: 'Facilitar la acción cuando la persona ya entiende qué es AVANZA, cómo funciona, para quién es, qué metodología utiliza, qué puede obtener y quién acompaña el proceso.',
        description: 'El canal definitivo puede ser WhatsApp, formulario, reserva u otro mecanismo que Clarisa ya utilice; se valida antes de decidirlo. Debajo, un pie de página puede reunir Clarisa Martínez / AVANZA, contacto, redes, enlaces necesarios e información legal si corresponde, sin inventar datos no confirmados.',
        journeyRef: 'final',
      },
    ],
  },

  visualDirection: {
    enabled: false,
    eyebrow: 'Dirección visual',
    title: 'Una identidad que AVANZA ya empezó a construir.',
    lead: 'La idea no es inventar una identidad nueva. AVANZA ya utiliza un lenguaje visual reconocible: tonos cálidos, verdes naturales, tipografía editorial, fotografías humanas, vegetación y espacios de trabajo. La propuesta es trasladar ese lenguaje a la web, dándole más jerarquía, consistencia y espacio para desarrollar el contenido.',
    reference: {
      label: 'Primera propuesta visual',
      title: 'Una dirección editorial, humana y cálida.',
      note: 'Este espacio queda preparado para incorporar las capturas específicas de AVANZA cuando estén disponibles.',
    },
    desktop: {
      src: '/assets/proposals/clarisa/clarisa-desktop.png',
      alt: 'Primera propuesta visual de AVANZA en computadora.',
      width: 1440,
      height: 900,
    },
    mobile: {
      src: '/assets/proposals/clarisa/clarisa-mobile.png',
      alt: 'Primera propuesta visual de AVANZA en celular.',
      width: 390,
      height: 844,
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
        summary: 'Definimos el recorrido de la página, la acción principal y qué necesita saber una persona antes de avanzar.',
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
          'No requiere un mantenimiento mensual obligatorio',
          'Solo sería necesario evaluar un nuevo trabajo ante cambios estructurales importantes, nuevas funcionalidades o una modificación considerable del diseño',
        ],
      },
    ],
  },

  pricing: {
    eyebrow: 'Inversión',
    title: 'Inversión',
    currency: 'USD',
    amount: '150',
    label: 'Página web AVANZA',
    summary: 'Una única página completa. Incluye una primera versión completa y dos rondas completas de correcciones. En cada ronda podés reunir y enviar todos los cambios que quieras marcar sobre diseño, textos, imágenes y contenido, siempre dentro del alcance acordado. No requiere mantenimiento mensual obligatorio. Dominio y hosting se contratan y abonan por separado; su configuración y puesta en funcionamiento sí están incluidas en los USD 150.',
    timeline: '7 días, contados desde que se recibe toda la información y los materiales necesarios para comenzar.',
    payment: 'A acordar antes de comenzar.',
    validity: 'Válida para el alcance detallado en esta propuesta.',
    extras: [],
  },

  finalCTA: {
    eyebrow: 'Próximo paso',
    title: 'Próximo paso',
    text: 'Esta propuesta es una primera hipótesis de cómo convertir AVANZA en una página que puedas usar activamente dentro de tu forma actual de comunicar y vender. Si la dirección te cierra, seguimos nuestra conversación por LinkedIn y definimos juntos los detalles necesarios para empezar.',
    buttonLabel: '',
    signature: 'Ezequiel Miceli — Diseño y desarrollo web',
  },
};
