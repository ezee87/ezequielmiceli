# Sistema de propuestas comerciales

React + Vite + JavaScript, CSS Modules. Cada propuesta vive en `/propuesta/:slug` y se alimenta de un único archivo de datos.

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
  pages/            ProposalPage (resuelve el slug) y NotFoundPage
  components/
    proposal/       Secciones: Hero, Understanding, Opportunity, ConversionJourney (JourneyMap),
                    LandingArchitecture, VisualDirection, Process, Scope, Pricing, FinalCTA, Nav
    ui/             CTAButton, Section, SectionHeader, Reveal, DarkChapter
  data/proposals/   _template.js (documentado), demo.js y una propuesta por archivo
  styles/           tokens.css y global.css (incluye @media print)
  utils/            gsap.js (registro y media queries), cta.js, journeyGraph.js, journeyPaths.js
public/assets/proposals/<slug>/   imágenes de cada propuesta
```

## Crear una propuesta

1. Duplicá `src/data/proposals/_template.js` como `src/data/proposals/<slug>.js`. El nombre del archivo es el slug.
2. Completá los datos. Los archivos que empiezan con `_` no se publican.
3. Copiá los assets a `public/assets/proposals/<slug>/` y referencialos como `/assets/proposals/<slug>/archivo.png`.
4. Abrí `/propuesta/<slug>`.

Las secciones con `enabled: false` (`visualDirection`, áreas de `scope`) se omiten. El CTA principal se configura en `cta` (`whatsapp`, `calendly`, `mailto`, `url` o `anchor`).

### Recorrido (`journey`)

Estructura serie-paralelo: un paso con `branches` es una decisión y todas sus ramas convergen en el paso siguiente. `cta: true` agrega una salida a la conversión. En desktop solo se dibuja la línea de salida de los nodos del tronco y de la última rama; en mobile el recorrido se rediseña en vertical.

## Privacidad

Privacidad por no descubribilidad, no autenticación: `noindex, nofollow` (meta, `robots.txt` y cabecera `X-Robots-Tag` en `vercel.json`), sin sitemap ni listados, y una ruta inexistente muestra un estado neutro que no revela qué slugs existen.

## Despliegue en Vercel

`vercel.json` reescribe todas las rutas a `index.html` para que el refresh de `/propuesta/:slug` funcione.

## Movimiento

CSS para layout, sticky y perspectiva. Motion para microinteracciones y reveals pequeños. GSAP + ScrollTrigger para el storytelling (hero, oportunidad, recorrido, arquitectura, materialización de medios). Sin WebGL ni Lenis. Con `prefers-reduced-motion` se conserva toda la información en una composición estática.
