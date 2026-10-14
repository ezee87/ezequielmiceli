# Claudia Sánchez — Dirección visual, interacción y arquitectura técnica

## Principio de diseño

Experiencia **premium, editorial, ejecutiva y viva**, no un showcase de efectos. Animaciones con jerarquía: 2 momentos principales (Hero y L.I.F.E.), 1 secundario (Enfoque), restantes discretos. Tomar **composición** de referencia del hero aportado: texto grande izquierda, retrato auténtico derecha, mucho aire, curva sutil; adaptarla a audiencia 40+ y a un H1 comercial, sin copiar el sitio ajeno.

## Tokens

- `--navy: #1B1A44` — fondos hero/enfoque/cierre.
- `--gold: #D5A64A` — subrayado, numeración, líneas SVG, pequeños acentos.
- `--violet-muted: #5D5C86` — secundarios discretos, NO fondo principal.
- `--ivory: #F7F5F0` — secciones claras.
- `--white: #FBFAF7`; `--ink: #1B1A44`.
- Serif display: `Cormorant Garamond` (o alternativa validada por lectura). Sans: `Manrope` (o similar). Prevenir FOUT/CLS; usar `font-display: swap`. Titulares con `clamp`; párrafo 16–19 px. Contraste AA; gold sobre marfil solo decorativo o con contraste validado.

**Composición:** contenedor ancho ~1240–1360 px, columnas asimétricas, espacios consistentes, separación entre secciones suficiente; no llenar espacio con ornamentación. Hero 100svh SOLO cuando no recorte CTA; mobile flujo natural. Preferir `min-height` a `height` fija.

## Asignación exacta de skills, librerías y motion IDs

| Zona | Recurso principal | Skill que se consulta | Motion | Regla |
| --- | --- | --- | --- | --- |
| Sistema visual, layout, tipo, responsive | CSS / CSS Modules | `frontend-design`, `proposal-motion-direction` | M01 | Aplicar criterio editorial, nunca framework UI por defecto. |
| Hero: timeline tipográfica y curva SVG | GSAP + SVG + CSS | `gsap-core`, `gsap-timeline`, `gsap-react`, `gsap-performance` | M02 + M01 | `gsap.context`, cleanup, solo en viewport; no clip caro. |
| Header/menu/botones/focus | CSS + Motion opcional | `motion` | M11 | Solo microinteracciones y estados; GSAP no controla mismos props. |
| Escenarios en sección 02 | CSS + GSAP ScrollTrigger | `gsap-scrolltrigger`, `gsap-react` | M01/M03 | Entrada ligera, sin pin. |
| Enfoque: conexión 3 etapas | SVG + GSAP ScrollTrigger | `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance` | M03 | Trazo scroll-driven suave; fallback estático. |
| L.I.F.E. red SVG + nodos | SVG/DOM + GSAP inicial + Motion estado | `gsap-core`, `gsap-scrolltrigger`, `motion` | M03 + M11, M04 como composición | GSAP dibuja líneas al entrar; Motion controla **solo** estados de selección en elementos distintos; teclado/touch; no modelo de etapas. |
| Sobre Claudia, revelado foto | CSS clip-path / GSAP simple | `frontend-design`, `gsap-core` | M07 simplificado | No WebGL por defecto, nada que altere rostro. |
| Final y footer | CSS + GSAP ligero | `gsap-core` | M01, quizá M08 decorativo | Sobriedad; CTA claro. |
| Propuesta comercial separada | Componentes existentes + CSS/GSAP leve | `proposal-motion-direction`, `frontend-design` | M01 M05 M11 | Mockup visible pronto; no usar Journey larga. |
| Revisión de componentes de inspiración | Lectura puntual | `21st-ai`, `ui-explore`, `ui-review`, `react-bits` | — | **Referencias**; no copiar blobs, no introducir Tailwind/shadcn. |
| 3D / WebGL opcional | Three / React Three Fiber | `react-three-fiber` | M07/M08 si justificado | **No usar salvo mejora visual clara e insustituible**; lazy-load y fallback estático. |

**Skills disponibles pero NO forzar su uso:** `gsap-frameworks`, `gsap-plugins`, `gsap-utils`, `21st-dev/*` y `react-bits` sirven como guías/revisores/referencias; no constituyen una cuota de efectos. Revisar el `proposal-motion-direction` del proyecto como autoridad de selección. M06 Sticky Build y M09 Interactive Surface pueden omitirse: no aportan automáticamente a esta página. M10 Atmosphere Transition como cambio sobrio claro/oscuro entre secciones. M12 Progress Line opcional y preferentemente excluir para no saturar. M05 Depth Stack reservado para frame de mockup de propuesta, NO parallax invasivo en retrato.

## Ownership de animación

CSS para layout, hover elemental, sticky, responsive y perspectiva leve. Motion para estado de componente (menú, selección L.I.F.E., focus/hover). GSAP para timelines y scroll/SVG. **Nunca dos librerías animando simultáneamente la misma propiedad del mismo elemento.** No Lenis inicialmente. Mantener scroll nativo y anclas normales. Activar animación solo cuando componente visible. Animación ornamental pausa o finaliza fuera de viewport.

## Funcionalidad: completa significa utilizable

- Vite + React + JavaScript + CSS Modules/plain CSS. Respetar estructura existente, router y datos separados de presentación.
- Construir `/demo/claudia-sanchez` como página real y totalmente responsive, NO screenshot/iframe vacío. Navegación por anclas, CTA navegable, interactividad L.I.F.E., imágenes optimizadas, keyboard/focus/aria, reduced motion.
- Integrar `/propuesta/claudia-sanchez` reutilizando plantilla. No romper `/propuesta/clarisa-martinez`, `/propuesta/mariana-forti`, `/propuesta/demo` ni servicios existentes.
- Añadir pruebas automatizadas si ya existe framework; si no, smoke tests y checklist de QA. `npm run build` debe pasar. Evitar errores en consola y links rotos.
- Prevenir CLS; lazy load secciones pesadas; no retrasar LCP hero; 60fps objetivo en equipo moderno, sin prometer perfecto en todos los dispositivos. Anular scroll animado en reduced-motion. Sin `onScroll` con escrituras sin control ni blur masivo.
- SEO básico, títulos y meta description, OpenGraph solo si se dispone de imagen autorizada, favicon real o placeholder explícito, robots/noindex en propuesta privada; estrategia de indexación de la demo **a decidir**, por defecto `noindex` hasta consentimiento para publicar identidad ajena.
- Accesibilidad AA: semántica, encabezados, contraste, focus visible, tamaño target, `<button>` real para dimensiones L.I.F.E., `aria-expanded`/`aria-pressed`, estados, Escape en menú, test teclado.
- Seguir `prefers-reduced-motion`; renderizar todo el contenido sin animación; no ocultar nodos hasta que GSAP inicialice. Si JS falla, CTA aún accesible con HTML funcional siempre que el montaje React se haga.
- Puede haber CTA en varios lugares, pero **etiqueta y URL idénticos** mediante componente compartido.

## Imagen y verdad comercial

Usar solo retratos provistos o con permiso de utilización; si no hay, usar un placeholder explícito con silueta/espacio reservado o recurso propio legítimo. **No usar una persona generada como si fuera Claudia.** Sin testimonios falsos, empresas cliente no verificadas, resultados, números de conversiones ni estudios de caso inventados. La demo es un **concepto de trabajo no contratado**; si se reutiliza como portfolio, identificar como concepto y obtener autorización para su identidad/imagen.

## QA de entrega

- Desktop 1440/1280/1024, tablet 768 y mobile 390/375/320 sin scroll horizontal.
- Header sticky correcto, anchors exactas, CTA repetido siempre label+URL único.
- L.I.F.E. clic, teclado y mobile acordeón funciona.
- Hero foto carga sin desplazamiento y texto legible.
- Las animaciones no entorpecen contenido; `prefers-reduced-motion` desactiva desplazamientos no esenciales.
- Lighthouse/DevTools cuando esté disponible; revisar performance real, CLS y LCP.
- Navegador sin errores críticos, build válido, rutas anteriores sin regresiones.
- Vista de propuesta muestra demo temprano y accesible, sin copiar precios no aprobados.
