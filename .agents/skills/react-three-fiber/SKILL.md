---
name: react-three-fiber
description: React Three Fiber (R3F) — declarative Three.js for React. Use when the user is building 3D scenes with `@react-three/fiber`, working with `<Canvas>`, `useFrame`, `useThree`, `useLoader`, hits performance issues (jank, frozen shaders, GC stutter, re-renders in the render loop), or asks about R3F pitfalls, instancing, ref-based animation, or memoizing uniforms with Leva.
---

# React Three Fiber

Declarative Three.js as React components. The render loop runs *outside* React — `useFrame` fires every frame, but React reconciliation does not. Most R3F bugs and perf problems come from forgetting that boundary.

## Performance pitfalls

The single most important rule: **don't drive the render loop through React state**. Everything below is a corollary.

- **No `setState` in `useFrame` or fast event handlers.** Each setState triggers reconciliation; at 60fps you'll re-render the whole subtree 60 times per second. Mutate refs instead. Use the `delta` arg from `useFrame` for refresh-rate-independent motion.

- **Animate in `useFrame` (lerp/damp) or with `react-spring`.** Both run outside React. Driving an animation through React state is the most common source of R3F jank.

- **Don't reactively subscribe components to fast-changing store state.** Selector subscriptions re-render on every change. Inside `useFrame`, read with `store.getState()` directly — no subscription, no re-render.

- **Share materials and geometries.** Each unique material/geometry is a shader compile and a GPU upload. Reuse them across meshes. For many similar meshes, use instancing (`<instancedMesh>` or drei's `<Instances>`).

- **Avoid remounting expensive subtrees.** Toggle `visible` instead of conditionally rendering. Mounting recompiles materials and re-uploads geometry.

- **Hoist temp objects.** Allocating a `new THREE.Vector3()` inside `useFrame` allocates 60 objects per second per call site. The GC pause shows up as periodic stutter. Hoist `Vector3`/`Matrix4`/`Color` outside the frame callback and reuse via `.set()`.

- **Use `useLoader` for assets.** Loaders cache globally by URL — calling `useLoader(GLTFLoader, url)` from multiple components hits the cache. For GLTF scenes you reuse heavily, prefer `gltfjsx`-generated components: the JSX is immutable and the underlying buffers are shared.

- **For expensive state changes, wrap in `startTransition`.** Concurrent mode de-prioritizes the work so the render loop stays responsive while the heavy update lands on a later commit.

- **Memoize uniforms objects.** A new uniforms object every render means `useFrame` mutates a stale reference while the material reads from a fresh one — the shader appears frozen even though `uniforms.uTime.value` is incrementing. `useMemo` it once with `[]` deps.

## Leva + uniforms

The pattern for live-tweaking uniforms with Leva without re-rendering. All five rules below collapse to one principle: the uniforms object is mutated, never replaced.

- **Memoize the uniforms object** with `[]` deps so the reference is stable for the lifetime of the component.
- **Drive Leva via `onChange`**, not the return value. Mutate `uniforms.*.value` directly; never call `setState`.
- **Mutate per-frame in `useFrame`.** Update `.value` in place — no new objects, no `setState`.
- **Memoize the Leva control schema** if it's computed from props or state, so `useControls` doesn't tear down and rebuild the panel.
- **Reuse `Color` and `Vector` instances.** `color.set(hex)` and `vec.set(x, y, z)` mutate in place; assigning a fresh instance allocates and orphans the old one.

```tsx
import { useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three'

function Scene() {
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#ff0') },
    }),
    [],
  )

  useControls({
    color: {
      value: '#ff0',
      onChange: (v: string) => uniforms.uColor.value.set(v),
    },
  })

  useFrame((_, delta) => {
    uniforms.uTime.value += delta
  })

  // ...pass `uniforms` into a ShaderMaterial
}
```

For heavy work triggered by a control change, debounce the `onChange` or push the work into `useFrame` via a ref — never block the Leva input thread.

## Canonical sources

- [R3F pitfalls](https://r3f.docs.pmnd.rs/advanced/pitfalls) — the upstream pitfalls page; mirrors most of the above and adds details.
- [Discover Three.js — tips](https://discoverthreejs.com/tips-and-tricks) — Three.js-level guidance that applies underneath R3F.

WebFetch these when a question reaches beyond the curated wisdom above (e.g. specific drei component APIs, post-processing, or render targets).
