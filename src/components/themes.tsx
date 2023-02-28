import { createSignal } from "solid-js";

const languages = [
  {
    lang: "python",
    icon: "i-logos:python",
  },

  {
    lang: "html",
    icon: "i-vscode-icons:file-type-html",
  },
  {
    lang: "javascript",
    icon: "i-skill-icons:javascript",
  },

  {
    lang: "haskell",
    icon: "i-logos:haskell-icon",
  },
  {
    lang: "c / c++",
    icon: "i-logos:c-plusplus",
  },
  {
    lang: "rust",
    icon: "i-logos:rust dark:i-skill-icons:rust",
  },
  {
    lang: "zig",
    icon: "i-skill-icons:zig-dark",
  },

  {
    lang: "lua",
    icon: "i-logos:lua dark:i-skill-icons:lua-light",
  },
];

const [activeLang, setLangOpt] = createSignal("python");

let python_imgs = import.meta.glob("../../public/themes/python/*.webp");

function LangSidebar() {
  return (
    <div flex flex-wrap gap-3>
      {languages.map((x) => {
        return (
          <button
            w-fit
            capitalize
            px-3
            class="gap-2 justify-start"
            bg={activeLang() == x.lang ? "!blue-6" : ""}
            onclick={() => setLangOpt(x.lang)}
          >
            <div class={x.icon}>
            </div>
            {x.lang}
          </button>
        );
      })}
    </div>
  );
}

function ThemeGallery() {
  return (
    <div
      grid
      lg:grid-cols-3
      xl:grid-cols-4
      gap-6
      class="[&_*]:max-w-[100%] [&_*]:h-auto"
    >
      {Object.keys(python_imgs).map((key) => (
        <img loading="lazy" src={key} rounded-lg softShadow />
      ))}
    </div>
  );
}

function Themes() {
  return (
    <div grid class="gap-5 max-w-[1700px] mx-auto my-6 px-5">
      <LangSidebar />
      <ThemeGallery />
    </div>
  );
}

export default Themes;
