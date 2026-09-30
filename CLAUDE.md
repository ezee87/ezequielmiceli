# CLAUDE.md — Proposal System

Before implementing anything:

1. Read `PROMPT-MAESTRO.md` completely.
2. Read `.claude/skills/proposal-motion-direction/SKILL.md`.
3. Read `references/MOTION-LIBRARY.md`.
4. Read `references/REFERENCES.md`.
5. Use installed external skills when their domain applies:
   - Anthropic frontend-design for visual craft.
   - Official GreenSock GSAP skills for GSAP, ScrollTrigger, React integration and performance.
   - Motion skill for UI state/microinteractions.
   - React Three Fiber skill only for effects that genuinely need 3D/WebGL.
   - 21st.dev / React Bits as searchable component references, not as a reason to assemble a template from unrelated effects.

## Priority order

When instructions overlap:
1. The commercial/functional requirements in `PROMPT-MAESTRO.md`.
2. The project-specific art/motion direction in `proposal-motion-direction`.
3. Official library skills/documentation.
4. Third-party skills/component libraries.
5. Generic model preferences.

## Core principle

Sophistication comes from contrast, not quantity.

Alternate quiet editorial sections with a small number of technically ambitious moments.
Every advanced animation must communicate at least one of:
hierarchy, progression, relationship, decision, transformation, or conversion.

Do not add an effect merely because a library makes it possible.

## Technology decision ladder

1. Can CSS/DOM solve it at comparable quality? Use CSS/DOM.
2. Is it a UI microinteraction/layout transition? Use Motion.
3. Is it timeline-, SVG-, or scroll-storytelling-heavy? Use GSAP/ScrollTrigger.
4. Does it genuinely require spatial rendering/shaders? Consider R3F/Three/WebGL/WebGPU.
5. Every advanced effect needs a mobile/reduced-motion/static fallback.

Important commercial copy should remain DOM text whenever practical.
