

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9981ac59.js","_app/immutable/chunks/scheduler.97daf090.js","_app/immutable/chunks/index.eac28ebb.js","_app/immutable/chunks/singletons.84c2b165.js","_app/immutable/chunks/index.a36c05d7.js"];
export const stylesheets = [];
export const fonts = [];
