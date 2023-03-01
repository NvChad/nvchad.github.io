import { createSignal } from "solid-js";

// language labels with their icon classes
const languages = [
  {
    lang: "python",
    icon: "i-logos:python",
    images: import.meta.glob("../../public/themes/python/*.webp"),
  },
  {
    lang: "html",
    icon: "i-vscode-icons:file-type-html",
    images: import.meta.glob("../../public/themes/html/*.webp"),
  },
  {
    lang: "javascript",
    icon: "i-skill-icons:javascript",
    images: import.meta.glob("../../public/themes/javascript/*.webp"),
  },
  {
    lang: "haskell",
    icon: "i-logos:haskell-icon",
    images: import.meta.glob("../../public/themes/haskell/*.webp"),
  },
  {
    lang: "c / c++",
    icon: "i-logos:c-plusplus",
    images: import.meta.glob("../../public/themes/cpp/*.webp"),
  },
  {
    lang: "rust",
    icon: "i-logos:rust dark:i-skill-icons:rust",
    images: import.meta.glob("../../public/themes/rust/*.webp"),
  },
  {
    lang: "zig",
    icon: "i-skill-icons:zig-dark",
    images: import.meta.glob("../../public/themes/zig/*.webp"),
  },
  {
    lang: "lua",
    icon: "i-logos:lua dark:i-skill-icons:lua-light",
    images: import.meta.glob("../../public/themes/lua/*.webp"),
  },
];

// remove "../../public" from image pathnames
languages.map((lang, i) => {
  const lang_imglist = lang.images;

  let arr: Array<string> = [];

  Object.keys(lang_imglist).map((key) => {
    arr.push(key.replace("../../public", ""));
  });

  languages[i].images = arr;
});

const [activeLang, setLangOpt] = createSignal("python");
const [activeImages, setImages] = createSignal(languages[0].images);

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
            onclick={() => {
              setLangOpt(x.lang);
              const images = languages.find((obj) => obj.lang === x.lang)
                ?.images;

              setImages(images);
            }}
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
      gap-6
      class="[&_*]:max-w-[100%] [&_*]:h-auto 2xl:grid-cols-4
"
    >
      {activeImages().map((key) => {
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
              width={2560}
              height={1440}
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
              <button i-ph-palette-bold class="dark:bg-white-2"></button>
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
