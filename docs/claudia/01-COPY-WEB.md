# Claudia Sánchez — Página web: copy y estructura v2.0

**Estado:** propuesta de copy para prototipo funcional, NO texto aprobado por Claudia. Público: directores, VPs y C-level 40+. Español internacional con **tuteo**, sin voseo ni promesas de empleo.

## Contrato global de conversión

**ÚNICA ETIQUETA:** `Reservar una sesión estratégica`.
**ÚNICO DESTINO:** `https://calendly.com/claudiasanchezurencio/45min?month=2026-10`.
Ambos valores como constantes centrales `BOOKING_LABEL` y `BOOKING_URL`. Mismo texto y destino en header, hero, cierre, menú mobile y cualquier CTA intermedio. Prohibidas variantes «Hablemos», «Agendar», «Conversemos». No inventar otros destinos. No afirmar que la sesión es gratuita.

**Header:** marca `Claudia Sánchez` + anclas `Enfoque`, `Modelo L.I.F.E.`, `Sobre mí` + CTA único. Menú mobile accesible.

## 01 Hero / #inicio

**Eyebrow:** `CLAUDIA SÁNCHEZ · EXECUTIVE CAREER COACH & ADVISOR`

**H1:** `No solo diseñes tu carrera. Diseña lo que sigue.`

**Subtítulo:** `Acompaño a directores, VPs y ejecutivos C-Level de 40+ a definir su siguiente movimiento profesional con claridad, estrategia y un plan de acción concreto.`

**Botón:** `Reservar una sesión estratégica`

**Complemento:** `Career Longevity · Estrategia de carrera ejecutiva`

**Composición:** fondo azul profundo, tipografía serif editorial en el H1, retrato real grande a la derecha, copy a la izquierda. La referencia de hero compartida inspira el balance, pero no se copia. Retrato real autorizado o placeholder marcado, nunca persona artificial haciéndose pasar por Claudia. **Movimiento:** entrada tipográfica GSAP M02 + aparición M01; línea fina dorada SVG con dibujo suave; microinteracción del botón CSS/Motion. No impedir clic durante la intro. Mobile con CTA temprano, sin scroll exagerado.

## 02 Identificación / #situaciones

**Eyebrow:** `EL SIGUIENTE MOVIMIENTO`

**H2:** `Has construido una carrera. ¿Qué quieres construir ahora?`

**Introducción:** `Después de años tomando decisiones profesionales, quizá la siguiente ya no se trata de subir otro escalón. Puede tratarse de crecer, cambiar de dirección o construir nuevas opciones con la experiencia que tienes.`

**Tres escenarios:**

- `01 · SEGUIR CRECIENDO` — `Quieres asumir nuevos desafíos dentro del mundo corporativo, con una dirección más clara.`
- `02 · PREPARAR UNA TRANSICIÓN` — `Estás considerando un cambio de empresa, rol, industria o país y necesitas ordenar tus opciones.`
- `03 · AMPLIAR TUS OPCIONES` — `Quieres explorar consultoría, advisory o nuevas formas de aportar valor desde tu experiencia.`

**Cierre:** `No necesitas esperar a una transición para empezar a diseñar lo que sigue.`

**Regla editorial:** esta sección SOLO ayuda a que el visitante se reconozca; no describir el método aquí. **Visual:** marfil, tres columnas editoriales con números dorados, nada de tarjetas SaaS. **Movimiento:** revelado progresivo M01 y línea conectora sencilla M03 en desktop; en mobile lista vertical natural y movimiento moderado.

## 03 Enfoque / #enfoque

**Eyebrow:** `CÓMO TRABAJO`

**H2:** `Primero claridad. Después, una estrategia para avanzar.`

**Introducción:** `Antes del CV, LinkedIn o la búsqueda de oportunidades, trabajamos sobre tu experiencia, tus fortalezas y lo que quieres construir. Con esa dirección, las herramientas dejan de ser el punto de partida y pasan a servir a una estrategia.`

- `01 · CLARIDAD` — `Reconocer tu trayectoria, tus prioridades y aquello que quieres para los próximos años.`
- `02 · ESTRATEGIA` — `Explorar opciones, definir tu posicionamiento y tomar decisiones con criterio.`
- `03 · MOVIMIENTO` — `Convertir la dirección elegida en conversaciones, herramientas y próximos pasos concretos.`

**Regla editorial:** SOLO explica su enfoque; no repetir los escenarios de la sección 02. `Claridad → Estrategia → Movimiento` es una síntesis editorial, NO metodología oficial ni promesa de tres sesiones. **Visual:** navy, diagrama lineal tipográfico dorado. **Movimiento:** SVG path draw M03 vía GSAP ScrollTrigger, sin secuestrar scroll, mobile vertical.

## 04 Modelo L.I.F.E. / #life

**Eyebrow:** `MODELO L.I.F.E.`

**H2:** `Una carrera sostenible necesita más que un buen puesto.`

**Introducción:** `Tu siguiente etapa no se decide de manera aislada. Las decisiones profesionales conviven con tu identidad, tu bienestar, tus recursos, tus relaciones y aquello que quieres dejar construido.`

**Apoyo:** `Seis dimensiones para mirar la carrera con mayor perspectiva.`

**Dimensiones — textos propuestos; validar definiciones con Claudia:**

- `IDENTIDAD` — `Quién eres más allá de un cargo y cómo quieres definir esta etapa.`
- `SALUD` — `Tu energía y bienestar al pensar decisiones sostenibles.`
- `FINANZAS` — `Los recursos y condiciones que influyen en tus opciones.`
- `RELACIONES` — `Las personas y conexiones que forman parte de tus próximos movimientos.`
- `CARRERA` — `Tu experiencia, posicionamiento y oportunidades posibles.`
- `LEGADO` — `Lo que quieres aportar y construir con los años que vienen.`

**Cierre:** `No se trata solo de llegar al siguiente rol. Se trata de decidir cómo quieres vivir y sostener tu carrera.`

**Reglas:** no presentar dimensiones como etapas secuenciales, ni inventar acrónimo expandido, ni prometer asesoramiento sanitario o financiero. **Visual:** diagrama editorial interactivo con nodo central L.I.F.E. y seis nodos en desktop; panel textual DOM estable al seleccionar con click/teclado; en mobile lista/acordeón elegante en vez de círculo comprimido. **Movimiento:** SVG draw M03, transición de estado M11 con Motion; M04 solo como inspiración de relaciones, no secuencia de etapas. Sin rotación infinita, ni WebGL obligatorio.

## 05 Sobre Claudia / #sobre-mi

**Eyebrow:** `SOBRE MÍ`

**H2:** `Conozco el mundo corporativo. También lo que significa construir una carrera más allá de él.`

**Párrafo 1:** `Soy Claudia Sánchez. Durante más de 20 años he trabajado con organizaciones y líderes en procesos de cambio y transformación.`

**Párrafo 2:** `Mi trayectoria incluye liderazgo en Recursos Humanos en compañías como Diageo y Kraft Foods, responsabilidades regionales en Latinoamérica y experiencias profesionales en distintos países.`

**Párrafo 3:** `También he rediseñado mi propia carrera. Hoy acompaño a ejecutivos senior a tomar decisiones sobre lo que sigue, combinando experiencia corporativa, coaching y una mirada práctica y humana.`

**Datos sujetos a verificación antes de publicación final:** `20+ años de trayectoria profesional` y `500+ ejecutivos acompañados`. No mencionar horas de coaching sin confirmar cifras. No inventar acreditaciones, logos o testimonios. **Visual:** retrato genuino editorial, datos sobrios, fondo claro. **Movimiento:** M01; M07 efecto de revelado fotográfico con CSS/GSAP si es mejor que WebGL; jamás distorsionar el rostro.

## 06 Conversión / #reservar

**Eyebrow:** `TU SIGUIENTE MOVIMIENTO`

**H2:** `¿Qué quieres construir con los próximos años de tu carrera?`

**Texto:** `Si estás evaluando un cambio, explorando nuevas opciones o buscando mayor claridad sobre tu siguiente etapa, podemos comenzar con una conversación.`

**CTA:** `Reservar una sesión estratégica`

**Footer:** `Claudia Sánchez · Executive Career Coach & Advisor` + LinkedIn `https://www.linkedin.com/in/careertransitioncoachclau/` + © 2026. Sin otras vías de contacto inventadas. **Visual:** azul profundo, pocas palabras, botón marfil. **Movimiento:** M01, un acento M08 solo si no afecta legibilidad ni rendimiento.

## Control de calidad del copy

- Un solo H1; headings semánticos; `lang="es"`; contrastes AA.
- Sección 02 = situaciones; sección 03 = modo de acompañar; ninguna repite a la otra.
- Nada de párrafos adicionales para llenar huecos visuales. La versión móvil puede resumir disposición, pero **no cambiar el sentido** del copy.
- Todas las afirmaciones y descripciones del servicio son copy propuesto basado en la comunicación compartida; **Claudia no lo aprobó**.
- La web real y el portfolio requieren autorización para usar nombre, identidad, textos/fotos como trabajo realizado. Si no existe, demo identificada claramente como concepto independiente no encargado; jamás presentarla como cliente o caso real.
