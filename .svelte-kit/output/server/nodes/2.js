

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BcnRGU93.js","_app/immutable/chunks/scheduler.VrTUKpSc.js","_app/immutable/chunks/index.Cb11SN46.js","_app/immutable/chunks/button.CpCQkCuK.js","_app/immutable/chunks/index.luoHnVav.js"];
export const stylesheets = ["_app/immutable/assets/2.CTwkSMvw.css"];
export const fonts = [];
