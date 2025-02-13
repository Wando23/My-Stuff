

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D6S0RVAc.js","_app/immutable/chunks/BzH45Zlb.js","_app/immutable/chunks/D1LESAtf.js"];
export const stylesheets = [];
export const fonts = [];
