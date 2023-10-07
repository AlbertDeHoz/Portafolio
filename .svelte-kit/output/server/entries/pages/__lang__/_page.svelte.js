import { c as create_ssr_component, v as validate_component, g as getContext, e as escape, f as each, b as add_attribute, h as null_to_empty } from "../../../chunks/ssr.js";
import { I as Icon, G as Github } from "../../../chunks/header.svelte_svelte_type_style_lang.js";
const Gitlab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "gitlab" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Gitlab$1 = Gitlab;
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    ],
    [
      "rect",
      {
        "width": "4",
        "height": "12",
        "x": "2",
        "y": "9"
      }
    ],
    ["circle", { "cx": "4", "cy": "4", "r": "2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "linkedin" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Linkedin$1 = Linkedin;
const footer_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".social-media.svelte-1ysbwjg.svelte-1ysbwjg{padding-block:var(--size-4);display:flex;align-items:center;justify-content:center;gap:var(--size-5)}.social-media.svelte-1ysbwjg a.svelte-1ysbwjg{font-weight:var(--font-weight-6);font-size:24px;padding:0;margin:0}.social-media.svelte-1ysbwjg a.twitter.svelte-1ysbwjg{position:relative;top:0.2rem}p.svelte-1ysbwjg.svelte-1ysbwjg{margin-inline:auto;text-align:center}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const translate = getContext("translate");
  $$result.css.add(css$4);
  return `<footer><ul class="social-media svelte-1ysbwjg"><li><a href="/" class="svelte-1ysbwjg"><span>${validate_component(Github, "Github").$$render($$result, {}, {}, {})}</span></a></li> <li><a href="/" class="svelte-1ysbwjg">${validate_component(Gitlab$1, "Gitlab").$$render($$result, {}, {}, {})}</a></li> <li><a href="/" class="svelte-1ysbwjg">${validate_component(Linkedin$1, "Linkedin").$$render($$result, {}, {}, {})}</a></li> <li data-svelte-h="svelte-1fc66ay"><a class="twitter svelte-1ysbwjg" href="/">𝕏</a></li></ul> <p class="svelte-1ysbwjg">${escape(translate("footer.footerprint"))} ${escape((/* @__PURE__ */ new Date()).getUTCFullYear())}</p> </footer>`;
});
const projects = [
  {
    name: "Todo React App",
    description: "todo_react_app_description",
    url: "https://albertdehoz.github.io/todo-react-typescript/",
    repository: "https://github.com/AlbertDeHoz/todo-react-typescript",
    tools: [
      "react",
      "typescript"
    ],
    image: "todo-react"
  },
  {
    name: "Tic-Tac-Vue",
    description: "tic_tac_vue_description",
    url: "https://brave-kirch-0bb5a0.netlify.app/",
    repository: "https://github.com/AlbertDeHoz/front-vue-exercise",
    tools: [
      "vue",
      "javascript",
      "vite"
    ],
    image: "tic-tac-vue"
  },
  {
    name: "TODOjs",
    description: "todojs_description",
    url: "https://github.com/AlbertDeHoz/JS-TodoList",
    repository: "https://github.com/AlbertDeHoz/JS-TodoList",
    image: "todo-js"
  }
];
const image_todo_js = "/_app/immutable/assets/js.banner.1e84d1b7.png";
const image_todo_react = "/_app/immutable/assets/todo-react-typescript.e0f3b47f.png";
const image_tic_tac_vue = "/_app/immutable/assets/smt.banner.5f428dae.png";
const projects_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "h2.svelte-110f2b1.svelte-110f2b1{padding-block-end:var(--size-5)}.card-container.svelte-110f2b1.svelte-110f2b1{display:grid;gap:var(--size-3)}.card-item.svelte-110f2b1.svelte-110f2b1{padding:var(--size-3);display:grid;gap:var(--size-1);box-shadow:var(--shadow-2);border-radius:var(--radius-2);border:var(--border-size-1) solid var(--surface-3)}.card-item.svelte-110f2b1 img.svelte-110f2b1{width:100%;aspect-ratio:var(--ratio-golden)}.call-to-action.svelte-110f2b1.svelte-110f2b1{display:flex;gap:var(--size-1)}@media(min-width: 480px){.card-item.svelte-110f2b1.svelte-110f2b1{grid-template-columns:1fr 4fr}}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const translate = getContext("translate");
  const images = {
    "todo-js": image_todo_js,
    "todo-react": image_todo_react,
    "tic-tac-vue": image_tic_tac_vue
  };
  $$result.css.add(css$3);
  return `<section class="container"><h2 class="svelte-110f2b1">${escape(translate("projects.title"))}</h2> <div class="card-container svelte-110f2b1">${each(projects, (project) => {
    return `<div class="card-item svelte-110f2b1"><img${add_attribute("src", `${images[project.image]}`, 0)}${add_attribute("alt", project.name, 0)} class="svelte-110f2b1"> <div class="card-item__body"><h3>${escape(project.name)}</h3> <p>${escape(translate(`projects.${project.description}`))}</p> <div class="call-to-action svelte-110f2b1"><a class="button"${add_attribute("href", project.url, 0)}>${escape(translate("general.goto_repo"))}</a> <a class="button"${add_attribute("href", project.repository, 0)}>${escape(translate("general.goto_page"))}</a> </div></div> </div>`;
  })}</div> </section>`;
});
const summary_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "p.svelte-18mgd9r{margin-inline:auto}",
  map: null
};
const Summary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const translate = getContext("translate");
  $$result.css.add(css$2);
  return `<section class="container"><h2>${escape(translate("summary.title"))}</h2> <p class="svelte-18mgd9r">${escape(translate("summary.parragraph"))}</p> </section>`;
});
const tools = [
  {
    name: "React",
    icon_name: "devicon-react-original",
    color: "cyan"
  },
  {
    name: "Svelte",
    icon_name: "devicon-svelte-plain",
    color: "orange"
  },
  {
    name: "Storybook",
    icon_name: "devicon-storybook-plain",
    color: "pink"
  },
  {
    name: "javascript",
    icon_name: "devicon-javascript-plain",
    color: "yellow"
  },
  {
    name: "typescript",
    icon_name: "devicon-typescript-plain",
    color: "blue"
  },
  {
    name: "MySQL",
    icon_name: "devicon-mysql-plain",
    color: "indigo"
  },
  {
    name: "flutter",
    icon_name: "devicon-flutter-plain",
    color: "cyan"
  },
  {
    name: "MongoDB",
    icon_name: "devicon-mongodb-plain",
    color: "green"
  },
  {
    name: "python",
    icon_name: "devicon-python-plain",
    color: "yellow"
  },
  {
    name: "Linux",
    icon_name: "devicon-linux-plain",
    color: "gray"
  },
  {
    name: "Bash",
    icon_name: "devicon-bash-plain",
    color: "gray"
  },
  {
    name: "Flask",
    icon_name: "devicon-flask-plain",
    color: "gray"
  }
];
const tools_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".tools.svelte-73jbi3 ul.svelte-73jbi3.svelte-73jbi3{display:flex;justify-content:center;flex-wrap:wrap;gap:var(--size-2)}.tools.svelte-73jbi3 ul.svelte-73jbi3>li.svelte-73jbi3{padding:var(--size-3);border:var(--border-size-1) solid;border-radius:var(--radius-2)}.tools.svelte-73jbi3 ul>li i.svelte-73jbi3.svelte-73jbi3{font-size:var(--font-size-fluid-2)}",
  map: null
};
const Tools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const translate = getContext("translate");
  $$result.css.add(css$1);
  return `<section class="container tools svelte-73jbi3"><h2>${escape(translate("tools.title"))}</h2> <ul class="svelte-73jbi3">${each(tools, (tool) => {
    return `<li${add_attribute("style", `color:var(--${tool.color})`, 0)}${add_attribute("title", tool.name, 0)} class="svelte-73jbi3" data-svelte-h="svelte-j7hnpa"><i class="${escape(null_to_empty(tool.icon_name), true) + " svelte-73jbi3"}"></i> </li>`;
  })}</ul> </section>`;
});
const experience_svelte_svelte_type_style_lang = "";
const css = {
  code: ".experiences.svelte-kxju6v.svelte-kxju6v.svelte-kxju6v{display:grid;gap:var(--size-5)}section.svelte-kxju6v ul.svelte-kxju6v.svelte-kxju6v{display:grid;gap:var(--size-2)}section.svelte-kxju6v ul.svelte-kxju6v>li.svelte-kxju6v{background:var(--surface-3);border-radius:var(--size-2);padding:var(--size-3)}@media screen and (min-width:768px){.experiences.svelte-kxju6v.svelte-kxju6v.svelte-kxju6v{grid-template-columns:1fr 1fr}}",
  map: null
};
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const translate = getContext("translate");
  $$result.css.add(css);
  return `<section class="container svelte-kxju6v"><h2>${escape(translate("experience.title"))}</h2> <section class="experiences svelte-kxju6v"><section class="experience_item svelte-kxju6v"><h3>${escape(translate("experience.frontend.title"))}</h3> <ul class="svelte-kxju6v">${each(translate("experience.frontend.resources"), (item) => {
    return `<li class="svelte-kxju6v">${escape(item)}</li>`;
  })}</ul></section> <section class="experience_item svelte-kxju6v"><h3>${escape(translate("experience.backend.title"))}</h3> <ul class="svelte-kxju6v">${each(translate("experience.backend.resources"), (item) => {
    return `<li class="svelte-kxju6v">${escape(item)}</li>`;
  })}</ul></section> <section class="experience_item svelte-kxju6v"><h3>${escape(translate("experience.automation.title"))}</h3> <ul class="svelte-kxju6v">${each(translate("experience.automation.resources"), (item) => {
    return `<li class="svelte-kxju6v">${escape(item)}</li>`;
  })}</ul></section></section> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Experience, "Experience").$$render($$result, {}, {}, {})} ${validate_component(Summary, "Summary").$$render($$result, {}, {}, {})} ${validate_component(Tools, "Tools").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
