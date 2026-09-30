// Cada archivo `<slug>.js` de esta carpeta (excepto `_template.js` e `index.js`) es una propuesta.
// Se cargan de forma diferida: una ruta inexistente no revela qué slugs existen.
const loaders = import.meta.glob(['./*.js', '!./_*.js', '!./index.js']);

const registry = new Map(Object.entries(loaders).map(([path, load]) => [path.slice(2, -3), load]));

export async function loadProposal(slug) {
  const load = registry.get(slug);
  if (!load) return null;
  const mod = await load();
  return mod.default ?? null;
}
