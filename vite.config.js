import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Refresh URLs automatically when a mockup is replaced under the same filename.
const grssAssets = new URL('./public/assets/grss/', import.meta.url);
const grssAssetVersions = Object.fromEntries(
  readdirSync(grssAssets, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map(({ name }) => [name, createHash('sha256').update(readFileSync(new URL(name, grssAssets))).digest('hex').slice(0, 12)]),
);

export default defineConfig({
  plugins: [react()],
  define: {
    __GRSS_ASSET_VERSIONS__: JSON.stringify(grssAssetVersions),
  },
  build: {
    chunkSizeWarningLimit: 600,
  },
});
