# PROMPT MAESTRO — SISTEMA WEB DE PROPUESTAS COMERCIALES

Antes de implementar:
1. Lee `CLAUDE.md`.
2. Lee `.claude/skills/proposal-motion-direction/SKILL.md`.
3. Lee `references/MOTION-LIBRARY.md` y `references/REFERENCES.md`.
4. Usa las skills externas instaladas cuando corresponda.
5. No empieces a programar hasta comprender la arquitectura, dirección visual y jerarquía de movimiento.

## 1. Objetivo
Construí desde cero un sistema web reutilizable para enviar propuestas comerciales personalizadas a prospectos de servicios de landing pages orientadas a conversión.

Rutas objetivo:
`/propuesta/clarisa-martinez`
`/propuesta/mariana-forti`
y futuras `/propuesta/:slug`.

La primera implementación debe quedar terminada, responsive, funcional y lista para Vercel. No es un wireframe.

## 2. Stack
- React + Vite + JavaScript
- CSS propio o CSS Modules
- GSAP + ScrollTrigger como motor principal de storytelling/scroll
- Motion para microinteracciones y transiciones UI
- Lucide React si hace falta
- Three.js / React Three Fiber únicamente cuando un efecto espacial/shader lo justifique
- Lenis solo si mejora realmente la experiencia y se integra correctamente con ScrollTrigger

No usar Tailwind salvo razón técnica fuerte. No usar frameworks UI completos.

## 3. Arquitectura
Separar completamente presentación y datos. No hardcodear clientes en componentes.

Estructura sugerida:
src/components/proposal/
src/components/ui/
src/data/proposals/_template.js
src/data/proposals/demo.js
src/pages/
src/styles/
src/utils/
public/assets/proposals/

`/propuesta/:slug` resuelve los datos. Ruta inexistente: estado elegante sin revelar slugs existentes.

## 4. Datos
El schema debe soportar al menos:
slug, client, project, date, intro, understanding, opportunity, journey, architecture, visualDirection, process, scope, pricing, finalCTA.

Crear `_template.js` documentado y `demo.js` completo, realista, sin lorem ipsum.

## 5. Dirección visual
Editorial premium, contemporánea, Swiss-inspired, con spatial motion. Fondo cálido marfil aprox. #F4F2ED, texto #161616, acento oliva desaturado aprox. #65705B. Mucho espacio negativo, composición deliberada y tipografía protagonista.

No debe parecer SaaS, PowerPoint web, agencia agresiva, dashboard, web hacker/programador ni template comprado. Evitar grids de cards como solución por defecto.

La experiencia alterna calma editorial con pocos momentos técnicamente ambiciosos. Seguir estrictamente `proposal-motion-direction`.

## 6. Portada
Viewport inicial. Eyebrow PROPUESTA PERSONALIZADA, “Una propuesta para [nombre]”, Estrategia · Diseño · Desarrollo, proyecto, fecha, Ezequiel Miceli y CTA “Ver propuesta”.

Efecto protagonista: M02 Spatial Typography. DOM/CSS 3D + GSAP, no Three.js por defecto.

## 7. Lo que entendí
Personalizada: título, introducción, párrafos, highlights, ofertas y observaciones. Debe demostrar comprensión del negocio, no ser una biografía.

Aclaración configurable: el análisis parte de información pública/conversación y se profundiza en la primera etapa.

Movimiento bajo: M01 selectivo.

## 8. La oportunidad
Representar recorrido observado vs oportunidad propuesta desde datos. Puede transformarse/morfear cuando aporte comprensión, en vez de dos flowcharts rígidos.

Ejemplo conceptual:
Contenido → Interés → Perfil/Mensaje → Conversación
versus
Contenido → Interés → Landing → Comprensión → Confianza → CTA → Conversión.

## 9. Hipótesis inicial del recorrido
Sección estratégica principal. El journey NO es necesariamente lineal.

Debe soportar:
- nodos
- conexiones
- decisiones
- bifurcaciones
- convergencias
- CTA
- conversiones tempranas
- múltiples CTAs hacia una misma conversión
- variantes de recorrido

Principio: un objetivo principal de conversión + múltiples oportunidades contextuales de realizarlo.

Ejemplo:
HERO ─ CTA → CONVERSIÓN
↓
PRUEBA SOCIAL
↓
¿QUÉ NECESITÁS?
↙             ↘
RECORRIDO A   RECORRIDO B
↘             ↙
MÉTODO
↓
CASOS
↓
FAQ
↓
CTA FINAL → CONVERSIÓN

No obligar al visitante a consumir toda la landing antes de convertir.

Implementación visual preferida: M03 + M04, SVG semánticamente acompañado por DOM + GSAP ScrollTrigger. Debe sentirse como mapa estratégico, no UML/BPMN/React Flow.

Desktop puede usar bifurcaciones reales. Mobile debe rediseñarlas verticalmente, sin scroll horizontal obligatorio.

Aclarar que la estructura es hipótesis inicial y se valida investigando oferta, cliente, tráfico, recorrido comercial, objeciones y puntos de abandono.

## 10. Estructura propuesta
Blueprint editorial vertical de la futura landing. Cada sección soporta number, name, objective, description, cta, note y opcionalmente subrecorridos.

No asumir lista lineal: una sección puede bifurcar en ofertas/audiencias.

Efecto protagonista: M05 + M06. La arquitectura se construye progresivamente con scroll; preferir CSS 3D + GSAP sobre WebGL.

## 11. Dirección visual
Opcional con `enabled`. Soporta mockups desktop/mobile, lazy loading y placeholders locales.

Si hay mockup real, este es el lugar preferido para M07 Media Materialization. WebGL/R3F solo si aporta calidad imposible de lograr razonablemente con DOM/CSS. Si falla o hay reduced motion, mostrar imagen estática premium.

## 12. Cómo trabajaremos
Etapas:
01 Entender — cliente, oferta, productos, tickets, adquisición, recorrido, objeciones, FAQs, venta, materiales.
02 Definir — Tráfico → Mensaje → Recorrido → CTA → Acción posterior.
03 Estructurar — arquitectura, contenido, jerarquía, conversión.
04 Diseñar.
05 Desarrollar.
06 Publicar — revisión, integraciones, analítica, lanzamiento.

Timeline/narrativa visual, no seis cards idénticas. Movimiento bajo/medio.

## 13. Qué incluye
Data-driven y activable/desactivable:
Estrategia, UX/Diseño, Desarrollo. No mostrar lo no incluido. Movimiento mínimo.

## 14. Inversión
Un precio principal, no planes SaaS. Mostrar inversión, estrategia+diseño+desarrollo, plazo, pago, validez y extras opcionales. Tipografía protagonista; M01/reveal preciso.

## 15. Próximo paso
Cierre minimalista. CTA configurable: WhatsApp, Calendly, mailto, URL interna/externa. Firma Ezequiel Miceli — Diseño y desarrollo web.

Puede usar M08 refractive accent solo si es robusto, sutil y con fallback.

## 16. CTA
Una acción principal de conversión repetida contextualmente. Botones pueden ir al destino, final CTA o inversión. No llenar la página de botones.

## 17. Navegación
No navbar corporativa. Nombre/monograma, “Propuesta para [cliente]”, progreso y CTA discreto. M12 para progreso.

## 18. Responsive y accesibilidad
Mobile-first real: 360, 390, 430, tablet, 1366, 1440, large. Sin overflow. Journeys y profundidad se rediseñan en mobile.

HTML semántico, contraste, teclado, focus visible, aria cuando corresponda y `prefers-reduced-motion`.

## 19. Performance
Pocas dependencias, lazy-load de imágenes y 3D, transforms/opacity, cleanup correcto de GSAP en React, nada de canvases pesados corriendo globalmente sin necesidad. No permitir que GSAP y Motion controlen simultáneamente la misma propiedad.

## 20. Atmósfera
Puede alternar capítulos marfil/oscuros con M10 Atmosphere Transition. No convertir cada sección en un tema distinto.

## 21. Privacidad
Metadata por cliente: `Propuesta para [Cliente] — Ezequiel Miceli`.
`robots: noindex, nofollow`.
Sin sitemap de propuestas, directorio público, enlaces entre clientes ni revelación de slugs.

## 22. Print/PDF
`@media print`: ocultar navegación/elementos interactivos, eliminar animaciones, evitar cortes malos y conservar jerarquía.

## 23. Demo obligatoria
`/propuesta/demo` debe ser una propuesta completa para una profesional ficticia premium con al menos dos recorridos/ofertas.

Debe probar:
- parte lineal
- CTA Hero
- prueba social alta
- decisión/bifurcación
- dos caminos con contenido propio
- convergencia
- conversión temprana
- CTA intermedio
- CTA final
- múltiples CTA a misma conversión
- 8–10 secciones de arquitectura
- metodología, alcance, precio, plazo
- Journey desktop y mobile
- arquitectura con subrecorridos

No lorem ipsum.

## 24. Componentes
Componentes razonables como ProposalNav, ProposalHero, UnderstandingSection, OpportunitySection, JourneyComparison, ConversionJourney, LandingArchitecture, VisualDirection, ProcessSection, ScopeSection, PricingSection, FinalCTA, SectionHeader, CTAButton. Ajustar si una arquitectura mejor lo exige.

## 25. Uso de recursos externos
Antes de inventar un componente complejo, podés consultar 21st.dev/React Bits mediante sus skills instaladas. No copies una estética completa ni armes un Frankenstein de componentes. La dirección del proyecto tiene prioridad.

## 26. README
Explicar npm install/npm run dev, estructura, cómo duplicar `_template.js`, completar datos/assets y probar `/propuesta/slug`.

## 27. Terminación
Antes de finalizar:
- instalar dependencias
- ejecutar build y corregir errores
- revisar warnings relevantes
- probar demo e inexistente
- contemplar refresh Vercel
- revisar jerarquía y responsive
- comprobar overflow
- optional visualDirection false
- datos variables
- bifurcaciones/convergencias
- early conversion
- mobile journey
- architecture subpaths
- reduced motion
- print
- metadata/noindex
- performance razonable

No dejar TODOs necesarios para funcionar.

## 28. Resultado esperado
La primera versión debe sentirse como un producto terminado que podríamos enviar hoy a un cliente: moderna, premium, animada, responsive, clara, estratégicamente convincente y capaz de representar recorridos complejos.

Prioridad:
1. calidad visual
2. claridad estratégica
3. experiencia de lectura
4. reutilización
5. responsive
6. performance
7. mantenibilidad

Al terminar informar:
1. estructura final
2. decisiones visuales
3. sistema de datos
4. bifurcaciones/convergencias
5. cómo crear propuesta
6. rutas
7. resultado build
8. decisiones relevantes tomadas
