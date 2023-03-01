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
            border={activeLang() == x.lang ? "2 solid blue-5" : ""}
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

let python_imgs = import.meta.glob("../../public/themes/python/*.webp");
let python_arr: Array<string> = [];

Object.keys(python_imgs).map((key) => {
  python_arr.push(key.replace("../../public", ""));
});

function ThemeGallery() {
  return (
    <div
      grid
      lg:grid-cols-3
      gap-6
      class="[&_*]:max-w-[100%] [&_*]:h-auto 2xl:grid-cols-4
"
    >
      {python_arr.map((key) => {
        const filename = key?.split("/").pop();
        const theme = filename.split(".")[0];
        const theme_type = theme.includes("light") ? "light" : "dark";

        return (
          <div softShadow grid>
            <img
              loading="lazy"
              src={key}
              rounded="lg b-none"
              shadow-b-md
            />

            <div
              class={`vertCentered justify-between rounded-t-none ${
                theme_type == "light"
                  ? "bg-dark-4 text-white-1 dark:bg-dark-3"
                  : "bg-white-1  dark:bg-dark-3 "
              }`}
              font-medium
              capitalize
              p="2 x-3"
            >
              <button i-ph-palette-bold class='dark:bg-white-2' ></button>
              {/* get theme name from theme path*/}
              {theme}
              <button i-bx:fullscreen>
              </button>
            </div>
          </div>
        );
      })}
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
