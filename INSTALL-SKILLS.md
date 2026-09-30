# INSTALL-SKILLS.md

External skills/plugins are intentionally NOT vendored in this starter ZIP.
Install them from their maintained upstream sources so you get current versions and preserve their licenses/update path.

## Recommended

### Anthropic Frontend Design
Official Anthropic plugin/skill.
Source:
https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design

Use the Claude Code plugin mechanism available in your installation.

### Official GSAP skills
Recommended:
npx skills add https://github.com/greensock/gsap-skills

Source:
https://github.com/greensock/gsap-skills

Includes gsap-core, gsap-timeline, gsap-scrolltrigger, gsap-plugins, gsap-utils, gsap-react, gsap-performance, etc.

### 21st.dev
Cross-agent skills:
npx skills add 21st-dev/skill

Source:
https://github.com/21st-dev/skill

For Claude Code with MCP, use:
https://github.com/21st-dev/claude-code-plugin

Note: MCP/component-code/generation features may require a 21st.dev API key/account.

### Motion
Source:
https://github.com/secondsky/claude-skills/tree/main/plugins/motion/skills/motion

The upstream repo documents its Claude plugin installation. Prefer upstream install rather than copying an old snapshot.

### React Three Fiber
Source:
https://github.com/lklyne/skills/tree/main/react-three-fiber

Install/copy using the method documented by the upstream repo/your skills CLI.

### React Bits
Community live-registry skill:
https://github.com/Philotheephilix/reactbits.dev-skill

Claude Code commands documented upstream:
claude plugin marketplace add Philotheephilix/reactbits.dev-skill
claude plugin install react-bits@reactbits.dev-skill

This skill fetches current React Bits component source rather than relying on model memory.

## Important
Do not install overlapping animation mega-skills unless there is a demonstrated gap.
Our project-specific `.claude/skills/proposal-motion-direction/SKILL.md` decides WHEN each technology is appropriate; external skills explain HOW to use their libraries correctly.
