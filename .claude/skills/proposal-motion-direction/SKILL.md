---
name: proposal-motion-direction
description: Project-specific art and motion direction for the interactive commercial proposal system. Use whenever designing, animating, reviewing, or refactoring proposal pages.
---

# Proposal Motion Direction

## Visual thesis

Create an editorial, premium, contemporary proposal experience with Swiss-inspired structure and spatial motion. It should feel designed by a high-end digital studio, not like SaaS, a slide deck, an agency template, or an experimental demo.

Base mood:
- warm ivory / near-black / desaturated olive
- strong typography
- generous negative space
- asymmetric but controlled composition
- quiet sections contrasted with a few memorable spatial moments
- no decorative technology for its own sake

## Motion hierarchy

### Hero — Spatial Editorial
Preferred: DOM/CSS perspective + GSAP.
Use layered typography with restrained Z-depth and subtle pointer response. Scroll may separate planes slightly.
Do not introduce Three.js merely for the hero.

### Understanding — Quiet Editorial
Use typography, whitespace, separators and restrained line/text reveals.
No spectacle.

### Opportunity — Transformation
Show the difference between observed journey and proposed opportunity as a transformation where useful, not merely two generic flowcharts.
GSAP/Flip may be considered when it genuinely clarifies the transition.

### Customer Journey — Primary wow moment
Preferred: semantic DOM labels + SVG paths + GSAP ScrollTrigger.
The path should progressively reveal as the reader moves through the strategy.
Support decisions, branches, early CTA exits, convergence and conversion.
Branches originate visibly from the decision node.
Nodes activate as the path reaches them.
Optional subtle 2.5D depth is allowed.
Never use React Flow, UML/BPMN styling, engineering boxes/arrows, or mandatory horizontal scrolling.

### Architecture — Secondary wow moment
Use sticky storytelling and progressive construction.
The future landing architecture should appear to assemble while scrolling.
Prefer CSS 3D + GSAP over a WebGL scene.
Previous sections may recede subtly in Z while new sections join the composition.
At completion the reader should understand the whole landing architecture.

### Visual Direction — Materialization
This is the preferred place for a shader/WebGL/R3F effect if an actual mockup exists.
Concept: slightly distorted/material surface resolves into a crisp interface.
Keep distortion elegant; no glitch, RGB split, hacker aesthetics, or gratuitous particles.

### Process
Quiet sticky narrative or elegant timeline. Do not compete with Journey/Architecture.

### Scope
Minimal motion. Optimize scanning.

### Investment
Typography-led reveal. Price is the visual event.

### Final CTA
Allow a restrained spatial/refractive accent if it performs well and has graceful fallback.

## Approved motion primitives

Use the IDs and definitions in `references/MOTION-LIBRARY.md`.
Do not invent additional major effects before checking whether an approved primitive already solves the need.

## Tool boundaries

GSAP:
- scroll-linked storytelling
- complex timelines
- SVG path drawing
- pinning/sticky synchronization
- spatial sequencing
- Flip when appropriate

Motion:
- hover/tap/focus feedback
- layout/state transitions
- small viewport reveals
- simple progress UI

CSS:
- layout
- sticky where native CSS is enough
- perspective/3D transforms where sufficient
- simple transitions

R3F/Three/WebGL/WebGPU:
- only where DOM/CSS/SVG cannot reach comparable quality
- primarily visual-direction/media materialization or one restrained refractive accent
- never render essential commercial copy only inside canvas

## Responsive behavior

Desktop can use real branching, depth and sticky compositions.
Mobile must be redesigned, not shrunk:
- no mandatory horizontal scroll
- simplify depth
- remove pointer-only behavior
- transform branching into legible vertical structures where needed
- disable expensive effects on weak contexts when appropriate

## Reduced motion

With reduced motion:
- preserve all information and hierarchy
- remove scrub/pinning that creates unnecessary movement
- show final SVG/path states
- remove pointer/parallax effects
- replace shader reveals with static media
- keep only essential state feedback

## Performance

Prefer transform and opacity.
Scope and clean up GSAP correctly in React.
Avoid multiple libraries controlling the same property on the same element.
Lazy-load expensive 3D/WebGL code.
Do not keep a WebGL canvas running through the whole site if only one section needs it.
Avoid permanent `will-change`.
Measure before adding complexity.

## Forbidden defaults

Do not:
- fade-up every paragraph
- animate every section equally
- use generic glassmorphism
- add purple/blue SaaS gradients
- use particles/blobs as filler
- use glitch/datamosh/ASCII/hacker motifs
- add long horizontal-scroll showcases
- pin sections just to appear sophisticated
- combine blur + scale + rotation + opacity without narrative reason
- turn the proposal into an Awwwards experiment at the expense of sales clarity

The reader should remember the strategy first and the technology second.
