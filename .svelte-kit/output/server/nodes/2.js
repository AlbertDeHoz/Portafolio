import * as server from '../entries/pages/__lang__/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/__lang__/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/[[lang]]/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.bfbe1a69.js","_app/immutable/chunks/scheduler.97daf090.js","_app/immutable/chunks/index.eac28ebb.js","_app/immutable/chunks/header.svelte_svelte_type_style_lang.6af5cada.js","_app/immutable/chunks/index.a36c05d7.js"];
export const stylesheets = ["_app/immutable/assets/2.d65feea6.css","_app/immutable/assets/header.3dcc1e89.css"];
export const fonts = ["_app/immutable/assets/jetbrains-mono-cyrillic-400-normal.9f48e746.woff2","_app/immutable/assets/jetbrains-mono-cyrillic-400-normal.9fbeb3ad.woff","_app/immutable/assets/jetbrains-mono-greek-400-normal.4e44607d.woff2","_app/immutable/assets/jetbrains-mono-greek-400-normal.f95fabcf.woff","_app/immutable/assets/jetbrains-mono-vietnamese-400-normal.42e6680f.woff","_app/immutable/assets/jetbrains-mono-latin-ext-400-normal.a6e389bf.woff2","_app/immutable/assets/jetbrains-mono-latin-ext-400-normal.3087ce38.woff","_app/immutable/assets/jetbrains-mono-latin-400-normal.7c53386f.woff2","_app/immutable/assets/jetbrains-mono-latin-400-normal.f1ba9869.woff"];
