import { c as create_ssr_component, v as validate_component, a as subscribe, b as add_attribute, g as getContext, e as escape, s as setContext } from "../../../chunks/ssr.js";
import { B as BROWSER, w as writable } from "../../../chunks/index.js";
import { I as Icon, G as Github } from "../../../chunks/header.svelte_svelte_type_style_lang.js";
const browser = BROWSER;
const openProps_min = "";
const normalize_min = "";
const buttons_min = "";
const app = "";
const autor = "Alberto Alonso";
const me_photo = "/_app/immutable/assets/profil_web.5ee26da3.png";
const Languages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m5 8 6 6" }],
    ["path", { "d": "m4 14 6-6 2-3" }],
    ["path", { "d": "M2 5h12" }],
    ["path", { "d": "M7 2h1" }],
    ["path", { "d": "m22 22-5-10-5 10" }],
    ["path", { "d": "M14 18h6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "languages" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const LanguagesIcon = Languages;
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "moon" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Moon$1 = Moon;
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "sun" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Sun$1 = Sun;
const userTheme = browser;
const theme = writable(userTheme);
const css$2 = {
  code: ".toggle.svelte-27mzro{display:grid;place-content:center;padding:0;border:none;border-radius:var(--radius-round);box-shadow:none;background-color:inherit;aspect-ratio:1}",
  map: null
};
const ToggleTheme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$2);
  $$unsubscribe_theme();
  return `<button class="toggle svelte-27mzro" aria-label="Toggle theme" title="Toggle theme">${$theme === "light" ? `<span>${validate_component(Sun$1, "Sun").$$render($$result, {}, {}, {})}</span>` : `<span>${validate_component(Moon$1, "Moon").$$render($$result, {}, {}, {})}</span>`} </button>`;
});
const css$1 = {
  code: '.select-language.svelte-jk8pzp.svelte-jk8pzp{position:relative;display:grid;align-items:center}.select-language.svelte-jk8pzp button.svelte-jk8pzp{background-color:inherit;box-shadow:none;border:none;aspect-ratio:1;padding:0}.select-language.svelte-jk8pzp menu.svelte-jk8pzp{position:absolute;align-self:start;right:-1rem;margin-block-start:2rem;min-width:8rem;display:flex;flex-direction:column;list-style:none;padding:var(--size-3);border-radius:var(--radius-2);background-color:var(--surface-3);box-shadow:var(--shadow-4)}.select-language.svelte-jk8pzp menu a.svelte-jk8pzp{padding:0;margin:0}.select-language.svelte-jk8pzp [aria-hidden="true"].svelte-jk8pzp{display:none}',
  map: null
};
const SelectLanguage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menuExpanded = false;
  $$result.css.add(css$1);
  return `<div class="select-language svelte-jk8pzp"><button${add_attribute("aria-expanded", menuExpanded, 0)} class="svelte-jk8pzp">${validate_component(LanguagesIcon, "LanguagesIcon").$$render($$result, {}, {}, {})}</button> <menu data-sveltekit-reload${add_attribute("aria-hidden", !menuExpanded, 0)} class="svelte-jk8pzp"><li data-svelte-h="svelte-lokw4a"><a href="/ES" class="svelte-jk8pzp">Español (ES)</a></li> <li data-svelte-h="svelte-1le2nst"><a href="/" class="svelte-jk8pzp">English (US)</a></li> <li data-svelte-h="svelte-1v24szy"><a href="/FR" class="svelte-jk8pzp">Français (FR)</a></li></menu> </div>`;
});
const css = {
  code: 'h1.svelte-1bh8d32.svelte-1bh8d32{font-weight:var(--font-weight-4)}h3.svelte-1bh8d32.svelte-1bh8d32{font-weight:var(--font-weight-2)}.menu.svelte-1bh8d32.svelte-1bh8d32{display:flex;gap:var(--size-4);align-content:center}.menu.svelte-1bh8d32 .actions.svelte-1bh8d32{display:grid;place-content:center;padding:0;border:none;border-radius:var(--radius-round);box-shadow:none;background-color:inherit;aspect-ratio:1}header.svelte-1bh8d32 span.svelte-1bh8d32{color:var(--secondary);white-space:nowrap}nav.svelte-1bh8d32.svelte-1bh8d32{display:flex;justify-content:flex-end;align-items:center;padding-block-end:var(--size-9)}header.svelte-1bh8d32.svelte-1bh8d32{width:100%;padding-block-end:var(--size-9);display:grid;grid-template-columns:1fr;place-items:center}@media(min-width: 380){}@media(min-width: 740px){header.svelte-1bh8d32.svelte-1bh8d32{grid-template-columns:1fr 1fr;grid-template-areas:"title profile";gap:var(--size-8)}header.svelte-1bh8d32 .title.svelte-1bh8d32{grid-area:title}header.svelte-1bh8d32 .profile.svelte-1bh8d32{grid-area:profile}}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const translate = getContext("translate");
  $$result.css.add(css);
  return `<nav class="svelte-1bh8d32"><div class="menu svelte-1bh8d32">${validate_component(ToggleTheme, "ToggleTheme").$$render($$result, {}, {}, {})} ${validate_component(SelectLanguage, "SelectLanguage").$$render($$result, {}, {}, {})} <a class="actions svelte-1bh8d32" href="https://github.com/AlbertDeHoz/Portafolio" title="Source on GitHub">${validate_component(Github, "Github").$$render($$result, {}, {}, {})}</a></div></nav> <header class="svelte-1bh8d32"><div class="profile svelte-1bh8d32" data-svelte-h="svelte-iwxgfy"><img${add_attribute("src", me_photo, 0)} alt="Alberto Alonso Profile"></div> <div class="title svelte-1bh8d32"><h1 class="svelte-1bh8d32">${escape(translate("general.title"))}, <span class="svelte-1bh8d32">${escape(autor)}</span></h1> <h3 class="svelte-1bh8d32">${escape(translate("general.subtitle"))}</h3></div> </header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const _translate = (path, module) => {
    const keys = path.split(".");
    let curr = module ?? data.translation;
    for (const key of keys) {
      if (curr && typeof curr === "object" && key in curr) {
        curr = curr[key];
      }
    }
    return curr;
  };
  setContext("translate", _translate);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
