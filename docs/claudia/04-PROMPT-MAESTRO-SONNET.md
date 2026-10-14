# PROMPT MAESTRO — Sonnet / Copilot Agent — Claudia Sánchez

Actuá como director/a de arte senior, frontend engineer especializado en React/Vite y diseñador/a de experiencias web de conversión. Tenés acceso al repositorio ya preparado para propuestas web de Ezequiel Miceli. **Ejecutá la implementación, no respondas solo con recomendaciones.** Antes de editar inspeccioná archivos, rutas, scripts, estilos, assets y skills realmente existentes. No supongas que una ruta o una skill existe porque aquí se la menciona: descubrí su ubicación y reportá excepciones.

## 0. Lee estos documentos (obligatorio y en orden)

1. `CLAUDE.md`, `PROMPT-MAESTRO.md` y las instrucciones locales de arquitectura, si están presentes.
2. `.claude/skills/proposal-motion-direction/SKILL.md` y sus `references/MOTION-LIBRARY.md`, `REFERENCES.md` si están presentes.
3. `01-COPY-WEB.md` — **FUENTE DE VERDAD PARA TODO EL COPY DEL SITIO**.
4. `02-PROPUESTA-COMERCIAL.md` — **FUENTE DE VERDAD PARA LA PROPUESTA VENDEDORA**.
5. `03-DIRECCION-VISUAL-ANIMACION-Y-TECNICA.md` — **FUENTE DE VERDAD DE DISEÑO, SKILLS Y QA**.
6. Skills externas en `.agents/skills/`: `frontend-design`, `motion`, `gsap-core`, `gsap-timeline`, `gsap-react`, `gsap-scrolltrigger`, `gsap-performance`, `react-three-fiber` y las de `21st-dev`/`react-bits` relevantes. Leer instrucciones específicas **solo al aplicarlas**. La skill de orquestación prevalece en qué recurso usar; las otras explican cómo.

Si los documentos 01/02/03/04 llegan en otra ubicación, localizalos por nombre o copialos a `docs/claudia/` manteniendo trazabilidad. No sobreescribir documentos canónicos globales.

## 1. Meta y restricciones

Construí una **página web funcional completa, premium, viva y responsive** para el concepto Claudia Sánchez, además de una **propuesta comercial mucho más corta y visual**. No es un wireframe ni un screenshot ni una demo inaccesible. Debe poder usarse como presentación navegable y, tras aprobar contenido/activos/permiso, servir de base de una web real. Pese a la calidad de producción, reutilizá agresivamente lo existente y no reinventes el sistema; priorizá hero, L.I.F.E. y acabados.

**Dos entregables diferenciados:**
- `/demo/claudia-sanchez`: web funcional, seis secciones conforme doc 01.
- `/propuesta/claudia-sanchez`: propuesta comercial, cinco secciones conforme doc 02, con acceso muy temprano a demo.

No alterar `/propuesta/clarisa-martinez`, `/propuesta/mariana-forti` ni `/propuesta/demo`. No renombrar clientes ni sobreescribir sus datos. Respeta el enrutado verdadero que encuentres. Usá arquitectura separada en datos, componentes reutilizables y CSS local para evitar regresiones.

## 2. CONTRATO INNEGOCIABLE DEL CTA DE CLAUDIA

`export const BOOKING_LABEL = 'Reservar una sesión estratégica';`
`export const BOOKING_URL = 'https://calendly.com/claudiasanchezurencio/45min?month=2026-10';`

TODAS las apariciones comerciales de CTA en la **página de Claudia** usan exactamente ese texto y ese destino, sin excepciones: header, hero, cierre, mobile y cualquier redundancia pertinente. Centralizá los valores y usá un solo componente `BookingCTA`. Comprobá todas las instancias al final. El botón `Explorar la demo interactiva` de la **propuesta de Ezequiel** es navegación hacia la demo y NO es un CTA de Claudia; no mezclar semánticas.

## 3. Arte y contenido

Tomá la referencia visual enviada por Ezequiel: composición editorial asimétrica, retrato de gran tamaño a la derecha, titular expresivo a la izquierda, espacio negativo, línea curva fina, sin copiar literalmente. No diseñar una plantilla genérica de coach ni una landing de SaaS. Colores: navy `#1B1A44` dominante, gold `#D5A64A` acento, secondary `#5D5C86`, ivory `#F7F5F0`. Serif Cormorant Garamond o alternativa sólida; sans Manrope o equivalente. Cuidar interlineado, escala fluida, párrafos breves, foco en imagen auténtica.

**Contenido:** copiar rigurosamente títulos, párrafos, microcopy y estructura del doc 01. No inventar frases motivacionales, testimonios, tarifas, credenciales, números, modalidades de programas ni resultados. La sección 02 reconoce tres situaciones; la 03 explica un enfoque en tres bloques; **no repetir información** entre ambas. El modelo L.I.F.E. contiene seis dimensiones, NO seis fases ni una expansión de las letras inventada. Descripciones sujetas a validación. Lenguaje español con tuteo; no voseo argentino. Mostrar etiqueta de demo/concepto de manera discreta fuera de la experiencia cliente o en metadatos si no es público.

## 4. Tratamiento fotográfico

Inspeccioná `public/assets` y materiales provistos. Solo fotografías realmente correspondientes a Claudia y con derecho de uso; si no están disponibles, crear placeholder elegante claramente marcado (`FOTOGRAFÍA A INCORPORAR` en entorno demo o capa de preview) y diseñar el layout para sustituirlo en minutos. **No inventar retratos ni generar parecidos con IA**. Evitar distorsiones del rostro, marcos decorativos excesivos, iconos genéricos o montajes que fingen clientes.

## 5. Arquitectura visual y animación por sección

Consultar mapa completo en doc 03. Estricto ownership: **CSS** layout/responsive/sticky y efectos simples, **Motion** estados/microinteracciones, **GSAP + ScrollTrigger** timelines/SVG/scroll. Nunca GSAP y Motion animando la misma propiedad del mismo elemento.

- **Hero:** M02 Spatial Typography + M01 reveal con GSAP Timeline, curva SVG delicada M03 si aporta, micro CTA M11. Foto/copy sin LCP perjudicado.
- **Identificación:** M01 + conexión ligera M03; sin scroll pin; mobile vertical.
- **Enfoque:** M03 Drawn Journey con path SVG y activación de tres hitos. Mobile representación vertical natural.
- **L.I.F.E.:** segunda gran experiencia: composición SVG + seis elementos DOM interactivos, M03 para dibujo inicial de líneas y Motion M11 para selección; panel de detalles estable; mouse, touch y teclado; mobile acordeón vertical. No programar un diagrama WebGL si SVG alcanza.
- **Sobre Claudia:** M01, revelado de fotografía M07 **solo simplificado CSS/GSAP** si es elegante; sin distorsión facial.
- **Cierre:** M01 editorial y quizás un acento refractivo M08 extremadamente localizado si es barato; no requisito.
- **Propuesta:** M01 + frame M05 sutil + M11; mostrar la demo mucho antes que precio. No reutilizar recorrido complejo que alargue la propuesta innecesariamente.

**Skills requeridas:** consultar `frontend-design` para diseño, `gsap-core`/`gsap-timeline`/`gsap-react`/`gsap-scrolltrigger`/`gsap-performance` según sección, `motion` en estados, `21st-dev` y `react-bits` solo como inspiración si aportan calidad sin Tailwind ni shadcn. `react-three-fiber` leer para entender coste, pero **NO incluir Canvas/WebGL/Three por obligación**. Si CSS/SVG/GSAP resuelve el efecto, eso es mejor ingeniería. M06 Sticky Build, M09 y M12 no son cuotas de uso. La página debe sentirse «con vida», nunca recargada.

## 6. Stack y calidad

React + Vite + JavaScript + CSS/CSS Modules. Prohibido introducir Tailwind, shadcn o un framework de interfaz entero sin autorización. Reutilizar infraestructura, tokens y componentes genéricos donde sea sensato, pero dar a Claudia dirección visual diferenciada de la propuesta editorial de Ezequiel.

Implementar header responsive usable, menú mobile, scroll por anclas, estado activo opcional, hero editorial, seis secciones completas, L.I.F.E. interactivo, Calendly único, footer, metadatos básicos, tipografía e imágenes optimizadas, reduced-motion. Debe verse bien a 320/375/390/768/1024/1440 px. Evitar `height:100vh` en mobile y scroll-jacking; no Lenis salvo justificación excepcional y aprobación. Sin scroll horizontal, sin secciones vacías, sin «lorem ipsum», sin TODO visibles (salvo placeholder honesto de foto). Evitar CLS y animaciones perennes; 60fps objetivo razonable desktop moderno. `gsap.context` cleanup al desmontar. Preferencia reduced-motion aplica de principio a fin.

La demo puede quedar `noindex` hasta contar con autorización de Claudia; la propuesta debe ser `noindex`. No inventar tratamiento de privacidad o medidas de seguridad no implementadas. Si no hay automatización de despliegue, limitarse a versión local lista para deploy.

## 7. Propuesta comercial, límites y transparencia

La propuesta **NO** debe repetir copy del sitio; vender el valor de tener esa web. Estructura de 5 secciones: portada → oportunidad breve → dirección visual y preview de demo → qué construiríamos → inversión y siguiente paso. Que se pueda leer en 2–3 minutos. Acceso a demo temprano, mockup desktop y mobile coherentes.

**NO inventes el precio, plazo, revisiones o pagos.** En doc 02 son placeholders pendientes. Si no los recibió el usuario, mantener bloque `Pendiente de completar` solo en modo local/no público y reportar campos antes de publicar; no desplegar una propuesta comercial abierta con `[PRECIO A DEFINIR]` visible. Usar la propuesta existente como guía estética, no copiar de Clarisa/Mariana sus USD o días.

## 8. Plan de ejecución eficiente

A. Auditar repositorio/rutas/dependencias/skills/assets y reportar resumen de 5–10 líneas.
B. Preparar componentes compartidos y data de Claudia/constantes CTA.
C. Completar hero excelente, header y tokens de estilo.
D. Construir secciones 02–06 sin exceso de copy, con L.I.F.E. interactivo.
E. Añadir animación jerarquizada y reduced motion.
F. Crear propuesta comercial corta con preview y enlace demo, marcando solo datos contractuales faltantes.
G. QA responsive, build, navegación, CTA URL, rutas anteriores. Corregir antes de declarar terminado.

**Prioridad si tenés que elegir:** funcionalidad y legibilidad → hero → L.I.F.E. → propuesta con preview → polish de animaciones → efectos opcionales. No frenes para consultar microdecisiones estéticas; elegí opciones editoriales sólidas. Preguntá solo por datos indispensables que no pueden inferirse (precio y permisos de fotos si se pretende publicar).

## 9. Reporte final obligatorio

Informá: archivos creados/modificados; rutas finales; cómo correr/compilar; assets reales vs placeholder; tabla breve sección → librería/skill aplicada; resultado build; pruebas mobile; comprobación literal de TODOS los CTA y URL; datos pendientes (foto, autorización, precio, plazo, pagos, revisión). **No afirmes pruebas que no hiciste**. No hacer commit/push ni desplegar sin instrucción explícita actual del usuario.
