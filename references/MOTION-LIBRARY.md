# MOTION LIBRARY

Approved primitives for the proposal system.

## M01 — Editorial Reveal
Use: important headings, section labels, selective statements.
Tech: CSS mask/overflow + GSAP or Motion.
Character: precise, short, calm.
Avoid applying to every paragraph.

## M02 — Spatial Typography
Use: Hero.
Tech: CSS perspective + GSAP.
Character: restrained Z-depth, tiny rotation/pointer response.
Fallback: static editorial typography.

## M03 — Drawn Journey
Use: strategic customer journey.
Tech: SVG path + GSAP ScrollTrigger.
Behavior: path reveals with progress; nodes activate as reached.
Fallback: complete static path.

## M04 — Branch Split / Convergence
Use: decisions, multiple offers/audiences.
Tech: SVG + GSAP timeline/ScrollTrigger.
Behavior: branches grow from a shared decision node and may reconverge.
Fallback: vertical semantic branch layout.

## M05 — Depth Stack
Use: landing architecture.
Tech: CSS 3D + GSAP.
Behavior: earlier modules recede subtly while architecture accumulates.
Fallback: editorial vertical blueprint.

## M06 — Sticky Build
Use: architecture/process where progression matters.
Tech: CSS sticky first; ScrollTrigger only for synchronization.
Never pin just for decoration.

## M07 — Media Materialization
Use: conceptual mockup/visual direction.
Tech: R3F/Three/shader only if justified.
Behavior: subtle spatial/distorted surface resolves to crisp mockup.
Fallback: normal image reveal.

## M08 — Refractive Accent
Use: at most one or two high-impact moments, preferably final CTA.
Tech: shader/WebGL/WebGPU if robust.
Must not impair text readability.
Fallback: subtle CSS translucent/spatial accent.

## M09 — Interactive Surface
Use: optional desktop-only localized interaction.
Tech: pointer field/shader or restrained CSS.
Never global. Never required for comprehension.
Disable for coarse pointer/reduced motion.

## M10 — Atmosphere Transition
Use: transition between light/dark chapters.
Tech: CSS variables + GSAP where scroll-linked interpolation adds value.
Character: slow and nearly invisible.

## M11 — Precision Microinteraction
Use: buttons, links, navigation.
Tech: Motion or CSS.
Character: fast, tactile, accessible.

## M12 — Progress Line
Use: proposal navigation/progress.
Tech: Motion or GSAP.
Must remain subtle.

# Rhythm

Recommended intensity:
Hero: high
Understanding: low
Opportunity: medium
Journey: very high
Architecture: high
Visual direction: medium/high
Process: low/medium
Scope: low
Investment: medium
Final CTA: high but restrained

Do not let adjacent high-intensity sections visually exhaust the reader.
