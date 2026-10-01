# Sistema de propuestas comerciales

React + Vite + JavaScript, CSS Modules. Todas las propuestas usan la misma plantilla maestra y cada cliente vive en un único archivo de datos.

## Uso

```bash
npm install
npm run dev      # http://localhost:5173/propuesta/demo
npm run build    # genera dist/
npm run preview  # sirve dist/
```

## Estructura

```
src/
  pages/            ProposalPage (carga los datos del slug) y NotFoundPage
  components/
    proposal/       ProposalTemplate (composición maestra) y secciones: Hero, Understanding,
                    Opportunity, ConversionJourney (JourneyMap),
                    LandingArchitecture, VisualDirection, Process, Scope, Pricing, FinalCTA, Nav
    ui/             CTAButton, Section, SectionHeader, Reveal, DarkChapter
  data/proposals/   _template.js (documentado), demo.js y una propuesta por archivo
  styles/           tokens.css y global.css (incluye @media print)
  utils/            gsap.js (registro y media queries), cta.js, journeyGraph.js, journeyPaths.js
public/assets/proposals/<slug>/   imágenes de cada propuesta
```

## Crear una propuesta

1. Duplicá `src/data/proposals/_template.js` como `src/data/proposals/<slug>.js`; el archivo y `data.slug` deben usar el mismo slug.
2. Completá textos, labels, recorridos, alcance, inversión, CTA y datos de publicación.
3. Copiá los assets a `public/assets/proposals/<slug>/` y referencialos como `/assets/proposals/<slug>/archivo.png`.
4. Marcá con `enabled: false` las secciones o áreas que no correspondan y usá variantes solo cuando exista una diferencia estructural real.
5. Abrí `/propuesta/<slug>` y verificá desktop, 440 px y aproximadamente 390 px, incluidas las versiones con movimiento reducido.
6. Ejecutá `npm run build`.
7. Confirmá título/noindex, enlaces, CTA, imágenes y ausencia de overflow antes de compartir la URL.

`ProposalTemplate` define el orden, layout, navegación, movimiento, responsive, print y privacidad. Los archivos de `data/proposals/` contienen todo lo variable por cliente. Las secciones principales y las áreas de `scope` con `enabled: false` se omiten. El CTA principal se configura en `cta` (`whatsapp`, `calendly`, `mailto`, `url` o `anchor`).

Clarisa es la referencia visual y consume esta misma plantilla desde `/propuesta/clarisa-martinez`. La URL histórica `/propuesta/clarisa` se reemplaza por el slug canónico en el navegador para conservar compatibilidad.

### Recorrido (`journey`)

Estructura serie-paralelo: un paso con `branches` es una decisión y todas sus ramas convergen en el paso siguiente. `cta: true` agrega una salida a la conversión. En desktop solo se dibuja la línea de salida de los nodos del tronco y de la última rama; en mobile el recorrido se rediseña en vertical.

## Privacidad

Privacidad por no descubribilidad, no autenticación: `noindex, nofollow` (meta, `robots.txt` y cabecera `X-Robots-Tag` en `vercel.json`), sin sitemap ni listados, y una ruta inexistente muestra un estado neutro que no revela qué slugs existen.

## Despliegue en Vercel

`vercel.json` reescribe todas las rutas a `index.html` para que el refresh de `/propuesta/:slug` funcione.

## Movimiento

CSS para layout, sticky y perspectiva. Motion para microinteracciones y reveals pequeños. GSAP + ScrollTrigger para el storytelling (hero, oportunidad, recorrido, arquitectura, materialización de medios). Sin WebGL ni Lenis. Con `prefers-reduced-motion` se conserva toda la información en una composición estática.
