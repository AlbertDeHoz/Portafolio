

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/__lang__/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e26b0d4a.js","_app/immutable/chunks/scheduler.97daf090.js","_app/immutable/chunks/index.eac28ebb.js","_app/immutable/chunks/header.svelte_svelte_type_style_lang.6af5cada.js","_app/immutable/chunks/index.a36c05d7.js"];
export const stylesheets = ["_app/immutable/assets/3.fee9e8e4.css","_app/immutable/assets/header.3dcc1e89.css"];
export const fonts = [];
