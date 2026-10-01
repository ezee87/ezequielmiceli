// Propuesta de demostración para una profesional ficticia. Sirve como ejemplo completo del sistema.
export default {
  slug: 'demo',

  client: {
    name: 'Lucía Berenguer',
    firstName: 'Lucía',
    business: 'Estudio Berenguer',
    role: 'Arquitecta e interiorista',
  },

  project: {
    title: 'Landing de conversión para Estudio Berenguer',
  },

  date: '2026-09-30',

  author: {
    name: 'Ezequiel Miceli',
    role: 'Diseño y desarrollo web',
    monogram: 'EM',
  },

  cta: {
    type: 'mailto',
    value: 'demo@example.com',
    subject: 'Propuesta Estudio Berenguer — primera conversación',
    message: 'Hola Ezequiel, vi la propuesta y me gustaría coordinar una primera conversación.',
    label: 'Agendar una conversación',
  },

  intro: {
    eyebrow: 'Propuesta personalizada',
    pretitle: 'Una propuesta para',
    disciplines: ['Estrategia', 'Diseño', 'Desarrollo'],
    startLabel: 'Ver propuesta',
  },

  understanding: {
    eyebrow: 'Lo que entendí',
    title: 'Un estudio que se decide en conversaciones largas.',
    lead: 'Tu trabajo se define en visitas, planos y decisiones compartidas. La web tiene que preparar esa conversación para que empiece más adelante, no para reemplazarla.',
    paragraphs: [
      'Estudio Berenguer trabaja dos frentes que tienen poco en común a la hora de decidir: personas que quieren reformar su casa y dueños de locales u oficinas que necesitan un espacio que funcione para su negocio. Los primeros llegan con dudas emocionales y de presupuesto; los segundos, con plazos, metros cuadrados y una operación que no puede detenerse.',
      'Hoy ambos públicos llegan por los mismos canales (recomendaciones y redes) y se encuentran con el mismo mensaje. Esa es la tensión principal que veo: un solo discurso para dos decisiones distintas.',
    ],
    highlights: [
      {
        label: 'Dos públicos',
        text: 'Vivienda y comercial no se convencen con los mismos argumentos ni con los mismos casos.',
      },
      {
        label: 'Venta consultiva',
        text: 'Nadie contrata una obra desde una página. El objetivo de la web es lograr una primera conversación bien calificada.',
      },
      {
        label: 'El portfolio es la prueba',
        text: 'Las obras terminadas son el argumento más fuerte, siempre que se muestren con contexto y no solo con fotos.',
      },
      {
        label: 'Tráfico de confianza',
        text: 'Quien llega por recomendación ya tiene una idea previa: necesita confirmarla rápido, no que le expliquen todo de nuevo.',
      },
    ],
    observations: [
      'El estudio ofrece proyecto, dirección de obra y equipamiento; hoy se presentan como una sola lista de servicios.',
      'Las consultas llegan con información incompleta (metros, presupuesto estimado, plazo), lo que alarga la primera reunión.',
      'Existe una oportunidad clara de filtrar y preparar la consulta antes de que llegue a tu agenda.',
    ],
    disclaimer:
      'Este análisis parte de información pública y de nuestra conversación inicial. Se profundiza y se corrige en la primera etapa de trabajo.',
  },

  opportunity: {
    eyebrow: 'La oportunidad',
    title: 'De un perfil que invita a escribir a una página que prepara la conversación.',
    lead: 'El interés ya existe: llega por contenido y por recomendación. Lo que falta es un lugar donde ese interés se convierta en comprensión y confianza antes del primer mensaje.',
    observed: {
      label: 'Recorrido observado',
      caption: 'Hoy',
      steps: [
        { id: 'content', label: 'Contenido' },
        { id: 'interest', label: 'Interés' },
        { id: 'profile', label: 'Perfil y mensaje' },
        { id: 'talk', label: 'Conversación' },
      ],
    },
    proposed: {
      label: 'Recorrido propuesto',
      caption: 'Propuesta',
      steps: [
        { id: 'content', label: 'Contenido' },
        { id: 'interest', label: 'Interés' },
        { id: 'landing', label: 'Landing', replaces: 'profile' },
        { id: 'understanding', label: 'Comprensión' },
        { id: 'trust', label: 'Confianza' },
        { id: 'cta', label: 'CTA' },
        { id: 'conversion', label: 'Conversión', replaces: 'talk' },
      ],
    },
    insight:
      'El perfil pasa a ser la puerta de entrada. La landing se ocupa de explicar, mostrar y calificar antes de que exista un mensaje.',
  },

  journey: {
    eyebrow: 'Hipótesis inicial del recorrido',
    title: 'Un objetivo, varias oportunidades de alcanzarlo.',
    lead: 'El recorrido no es una línea recta. Hay una acción principal y varios momentos donde tomarla, sin obligar a nadie a leer la página completa.',
    note: 'Esta estructura es una hipótesis inicial. Se valida en la etapa 01 investigando oferta, cliente, tráfico, recorrido comercial, objeciones y puntos de abandono.',
    conversion: {
      label: 'Conversión',
      description: 'Reserva de una primera conversación de 30 minutos.',
    },
    steps: [
      {
        id: 'hero',
        label: 'Hero',
        kind: 'Entrada',
        description: 'Una promesa clara sobre qué hace el estudio y para quién. La acción principal ya está a la vista.',
        cta: true,
      },
      {
        id: 'proof',
        label: 'Prueba social',
        kind: 'Confianza',
        description: 'Obras reales con nombre y contexto, antes de cualquier explicación. Quien ya está convencido puede avanzar desde acá.',
        cta: true,
      },
      {
        id: 'decision',
        label: '¿Qué necesitás?',
        kind: 'Decisión',
        description: 'Una sola pregunta. Cada visitante elige su situación y recibe el contenido que le corresponde.',
        branches: [
          {
            id: 'home',
            label: 'Reformar mi casa',
            audience: 'Residencial',
            steps: [
              {
                id: 'home-method',
                label: 'Cómo se trabaja una vivienda',
                description: 'Etapas, tiempos y las decisiones que van a tener que tomar en cada una.',
              },
              {
                id: 'home-quiz',
                label: 'Cinco preguntas para empezar',
                kind: 'Ejercicio',
                description: 'Un cuestionario breve para ordenar prioridades, presupuesto y plazos antes de la primera reunión.',
              },
            ],
          },
          {
            id: 'business',
            label: 'Equipar un local u oficina',
            audience: 'Comercial',
            steps: [
              {
                id: 'biz-cases',
                label: 'Casos comerciales',
                description: 'Espacios resueltos: qué necesitaba la operación, qué se decidió y cómo quedó.',
                cta: true,
              },
              {
                id: 'biz-brief',
                label: 'Brief del espacio',
                kind: 'Ejercicio',
                description: 'Metros, plazos, horarios de obra y restricciones, para llegar a la reunión con lo esencial resuelto.',
              },
            ],
          },
        ],
      },
      {
        id: 'method',
        label: 'Método de trabajo',
        kind: 'Convergencia',
        description: 'Las dos ramas vuelven a un proceso común: diagnóstico, proyecto y dirección de obra.',
      },
      {
        id: 'cases',
        label: 'Proyectos',
        description: 'Una selección corta y bien contada de obras terminadas.',
      },
      {
        id: 'faq',
        label: 'Preguntas frecuentes',
        description: 'Honorarios, plazos, visitas y qué se necesita para empezar.',
      },
      {
        id: 'final',
        label: 'CTA final',
        kind: 'Cierre',
        description: 'Una invitación simple a reservar la primera conversación.',
        cta: true,
        final: true,
      },
    ],
  },

  architecture: {
    eyebrow: 'Estructura propuesta',
    title: 'La estrategia, traducida en diez bloques.',
    lead: 'Cada bloque tiene un objetivo dentro del recorrido. La página se construye de arriba hacia abajo, y cada parte sabe qué le debe a la anterior.',
    sections: [
      {
        number: '01',
        name: 'Hero',
        shape: 'hero',
        objective: 'Que en cinco segundos se entienda qué hace el estudio, para quién y qué hacer a continuación.',
        description: 'Titular directo, una imagen de obra terminada y la acción principal.',
        cta: 'Pedir una primera conversación',
        journeyRef: 'hero',
      },
      {
        number: '02',
        name: 'Prueba social',
        shape: 'proof',
        objective: 'Dar confianza antes de pedir atención.',
        description: 'Tres obras con nombre, ubicación y una línea de contexto. Sin adjetivos.',
        cta: 'Ver proyectos',
        note: 'Primer punto de conversión temprana.',
        journeyRef: 'proof',
      },
      {
        number: '03',
        name: 'Selector de situación',
        shape: 'split',
        objective: 'Separar los dos públicos con una única pregunta.',
        description: 'Dos opciones grandes y claras. Cada una conduce a un tramo propio de la página.',
        note: 'Este bloque bifurca la estructura.',
        journeyRef: 'decision',
        subpaths: [
          { label: 'Vivienda', blocks: ['Cómo se trabaja una vivienda', 'Cinco preguntas para empezar'] },
          { label: 'Comercial', blocks: ['Casos comerciales', 'Brief del espacio'] },
        ],
      },
      {
        number: '04',
        name: 'Método de trabajo',
        shape: 'grid',
        objective: 'Mostrar que el proceso es ordenado, sea cual sea el punto de partida.',
        description: 'Diagnóstico, proyecto y dirección de obra, con lo que se entrega en cada etapa.',
        journeyRef: 'method',
      },
      {
        number: '05',
        name: 'Proyectos',
        shape: 'grid',
        objective: 'Sostener la promesa con obras terminadas.',
        description: 'Selección corta. Cada proyecto cuenta el problema, la decisión y el resultado construido.',
        cta: 'Consultar por un proyecto similar',
        journeyRef: 'cases',
      },
      {
        number: '06',
        name: 'Quién está detrás',
        shape: 'text',
        objective: 'Poner una cara y una manera de pensar a la relación.',
        description: 'Una presentación breve de Lucía y del equipo. Criterio de trabajo, no currículum.',
      },
      {
        number: '07',
        name: 'Servicios y alcance',
        shape: 'text',
        objective: 'Aclarar qué incluye cada tipo de encargo.',
        description: 'Proyecto, dirección de obra y equipamiento, explicados como partes de un mismo proceso.',
      },
      {
        number: '08',
        name: 'Preguntas frecuentes',
        shape: 'faq',
        objective: 'Resolver objeciones antes de que se conviertan en un mensaje.',
        description: 'Honorarios, plazos, visitas, materiales y qué se necesita para empezar.',
        journeyRef: 'faq',
      },
      {
        number: '09',
        name: 'Cierre con acción',
        shape: 'cta',
        objective: 'Convertir el interés acumulado en una conversación.',
        description: 'Una invitación simple y el mismo destino que el resto de los CTA.',
        cta: 'Agendar una conversación',
        journeyRef: 'final',
      },
      {
        number: '10',
        name: 'Contacto y datos',
        shape: 'footer',
        objective: 'Dar una salida alternativa a quien prefiere otro canal.',
        description: 'Correo, teléfono, ubicación y redes. Información práctica y nada más.',
      },
    ],
  },

  visualDirection: {
    enabled: true,
    eyebrow: 'Primera dirección',
    title: 'Una primera dirección para tu página.',
    lead: 'Una vista inicial de cómo la dirección editorial puede convertirse en una experiencia real, tanto en desktop como en mobile.',
    reference: {
      label: 'Demostración visual',
      title: 'Una página que se puede recorrer.',
      note: 'En una propuesta real, este espacio contiene capturas y mockups preparados específicamente para el proyecto. Las imágenes actuales se usan solo como assets de demostración.',
    },
    desktop: {
      src: '/assets/proposals/demo/oscar-desktop.png',
      alt: 'Captura de la versión desktop de una landing real: titular en tres líneas, texto de apoyo, botón de acción principal y un retrato dentro de un marco redondeado.',
      width: 2528,
      height: 1328,
    },
    mobile: {
      src: '/assets/proposals/demo/oscar-mobile.png',
      alt: 'Captura de la versión mobile de la misma landing: logotipo centrado, titular, texto, botón de acción y el retrato debajo.',
      width: 434,
      height: 954,
    },
    principles: [
      {
        title: 'Jerarquía tipográfica',
        text: 'El titular organiza la página. El resto se ordena alrededor de él.',
      },
      {
        title: 'Una acción principal',
        text: 'Un solo botón, visible y con el mismo lenguaje en desktop y mobile.',
      },
      {
        title: 'Mobile pensado aparte',
        text: 'No es la versión de escritorio reducida: la composición se reordena para leerse de arriba hacia abajo.',
      },
    ],
  },

  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'Seis etapas, una decisión por vez.',
    lead: 'Cada etapa cierra con algo concreto que podés revisar antes de pasar a la siguiente.',
    stages: [
      {
        number: '01',
        name: 'Entender',
        summary: 'Antes de diseñar, entender cómo se vende hoy el estudio.',
        items: ['Cliente y oferta', 'Productos y tickets', 'Adquisición y recorrido', 'Objeciones y preguntas frecuentes', 'Materiales disponibles'],
      },
      {
        number: '02',
        name: 'Definir',
        summary: 'Una cadena simple que ordena todo lo demás.',
        items: ['Tráfico', 'Mensaje', 'Recorrido', 'CTA', 'Acción posterior'],
      },
      {
        number: '03',
        name: 'Estructurar',
        summary: 'La arquitectura de la landing y su jerarquía de contenido.',
        items: ['Bloques y orden', 'Contenido por bloque', 'Puntos de conversión'],
      },
      {
        number: '04',
        name: 'Diseñar',
        summary: 'Dirección visual aplicada a cada bloque, en desktop y mobile.',
        items: ['Sistema tipográfico y color', 'Composición de bloques', 'Versión mobile'],
      },
      {
        number: '05',
        name: 'Desarrollar',
        summary: 'Implementación rápida, accesible y fácil de mantener.',
        items: ['Desarrollo responsive', 'Formularios y acciones', 'Rendimiento y accesibilidad'],
      },
      {
        number: '06',
        name: 'Publicar',
        summary: 'Revisión final y lanzamiento con lo necesario para medir.',
        items: ['Revisión con vos', 'Integraciones y analítica', 'Publicación'],
      },
    ],
  },

  scope: {
    eyebrow: 'Qué incluye',
    title: 'Lo que está dentro de esta propuesta.',
    areas: [
      {
        id: 'strategy',
        name: 'Estrategia',
        enabled: true,
        items: [
          'Análisis de oferta, públicos y recorrido actual',
          'Hipótesis de recorrido con decisiones y puntos de conversión',
          'Arquitectura de contenido de la landing',
          'Definición del mensaje para cada público',
        ],
      },
      {
        id: 'design',
        name: 'UX y diseño',
        enabled: true,
        items: [
          'Dirección visual y sistema tipográfico',
          'Diseño de todos los bloques en desktop y mobile',
          'Tratamiento de las fotografías de obra',
          'Microinteracciones y estados de los elementos interactivos',
        ],
      },
      {
        id: 'development',
        name: 'Desarrollo',
        enabled: true,
        items: [
          'Landing responsive lista para publicar',
          'Formulario de consulta y enlace de agenda',
          'Optimización de imágenes y velocidad de carga',
          'Analítica básica de conversiones',
        ],
      },
      {
        id: 'copywriting',
        name: 'Redacción',
        enabled: false,
        items: ['Redacción completa de textos'],
      },
    ],
  },

  pricing: {
    eyebrow: 'Inversión',
    title: 'Un precio, con todo lo necesario para publicar.',
    currency: 'USD',
    amount: '1.800',
    label: 'Inversión única',
    summary: 'Estrategia, diseño y desarrollo de la landing completa.',
    timeline: '4 a 5 semanas',
    payment: '50 % al aprobar la propuesta · 50 % al publicar',
    validity: 'Válida hasta el 30 de octubre de 2026',
    extras: [
      {
        label: 'Redacción de textos',
        detail: 'Si preferís que me encargue del copy de todos los bloques.',
        price: 'USD 420',
      },
      {
        label: 'Mantenimiento mensual',
        detail: 'Cambios menores, actualización de proyectos y monitoreo.',
        price: 'USD 90 / mes',
      },
    ],
  },

  finalCTA: {
    eyebrow: 'Próximo paso',
    title: 'Si el recorrido te hace sentido, lo validamos juntos.',
    text: 'Con una conversación de treinta minutos alcanza para confirmar el punto de partida y arrancar con la etapa 01.',
    buttonLabel: 'Agendar la primera conversación',
    signature: 'Ezequiel Miceli — Diseño y desarrollo web',
  },
};
