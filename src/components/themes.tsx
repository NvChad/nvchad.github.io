import { createSignal } from "solid-js";

// language labels with their icon classes
const languages = [
  {
    lang: "python",
    icon: "i-mdi:language-python",
    images: import.meta.glob("../../public/themes/python/*.webp"),
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
    lang: "c",
    icon: "i-logos:c-plusplus",
    images: import.meta.glob("../../public/themes/c/*.webp"),
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
const [galleryShown, setGalleryStatus] = createSignal(true);
const [zoomedImg, setZoomedImgPath] = createSignal("");
const [gridMode, setGridMode] = createSignal(true);

function LangListBtns() {
  return (
    <div flex justify-between gap-2>
      <div flex flex-wrap gap-3>
        {languages.map((x) => {
          return (
            <button
              class="gap-2 justify-start capitalize px-3"
              border={activeLang() == x.lang ? "2 solid blue-5" : ""}
              onclick={() => {
                setLangOpt(x.lang);
                const images = languages.find((obj) => obj.lang === x.lang)
                  ?.images;

                setImages(images);
              }}
            >
              <div class={x.icon}></div> {x.lang}
            </button>
          );
        })}
      </div>

      {/* gallery layout modes */}
      <div flex h-fit>
        <button
          bg="white-1"
          border="solid 1 blue-3 dark:dark-4 r-0"
          rounded-r-none
        >
          <div i-ri:layout-grid-line rounded-none></div> Grid
        </button>

        <button
          class="rounded-l-none text-slate-7 dark:text-blue-4"
          bg="blue-2 dark:dark-4"
          onclick={() => setGridMode(!gridMode())}
        >
          <div>
            {gridMode() && <div i-bi:toggle2-on text-xl></div>}
            {!gridMode() && <div i-bi:toggle2-off text-xl></div>}
          </div>
        </button>
      </div>
    </div>
  );
}

function ThemeGallery() {
  return (
    <div
      class={`grid gap-6 [&_*]:max-w-[100%] [&_*]:h-auto ${
        gridMode() ? "lg:grid-cols-3 2xl:grid-cols-4" : ""
      }`}
    >
      {activeImages().map((key) => {
        const filename = key?.split("/").pop();
        const theme = filename.split(".")[0];
        const theme_type = theme.includes("light") ? "light" : "dark";

        return (
          <div softShadow grid>
            {/* theme screnshot */}
            <img
              loading="lazy"
              src={key}
              rounded="lg b-none"
              shadow-b-md
              width={2560}
              height={1440}
            />

            {/* theme titles & fullscreen btn */}
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

              <button
                class="dark:bg-blue i-bx:fullscreen"
                onclick={() => {
                  setZoomedImgPath(key);
                  setGalleryStatus(!galleryShown());
                }}
              >
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ImageZoomed() {
  return (
    <div top-0 left-0 sticky>
      {/* image close btn */}
      <button
        onclick={() => setGalleryStatus(!galleryShown())}
        class="px-3 my-6 mx-auto bg-red-4 text-white-1 dark:text-red-3"
      >
        <div i-ion:close></div>
        Close
      </button>
      <img src={zoomedImg()} h-auto w-full class="z-[9999]" />
    </div>
  );
}

function Themes() {
  return (
    <div>
      {!galleryShown() && <ImageZoomed />}

      {galleryShown() &&
        (
          <div grid class="gap-5 max-w-[1700px] mx-auto my-6 px-5">
            <LangListBtns />
            <ThemeGallery />
          </div>
        )}
    </div>
  );
}

export default Themes;
