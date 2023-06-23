import { createSignal } from "solid-js";

// language labels with their icon classes
const languages = [
  {
    lang: "python",
    icon: "i-mdi:language-python",
    images: import.meta.glob("../../../public/themes/python/*.webp"),
  },
  {
    lang: "javascript",
    icon: "i-skill-icons:javascript",
    images: import.meta.glob("../../../public/themes/javascript/*.webp"),
  },
  {
    lang: "haskell",
    icon: "i-logos:haskell-icon",
    images: import.meta.glob("../../../public/themes/haskell/*.webp"),
  },
  {
    lang: "c",
    icon: "i-logos:c-plusplus",
    images: import.meta.glob("../../../public/themes/c/*.webp"),
  },
  {
    lang: "lua",
    icon: "i-logos:lua dark:i-skill-icons:lua-light",
    images: import.meta.glob("../../../public/themes/lua/*.webp"),
  },
];

// remove "../../public" from image pathnames
languages.map((lang, i) => {
  const lang_imglist = lang.images;

  let arr = [];

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
const [scrollPosition, setScrollPosition] = createSignal(0);

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

function Gallery() {
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

        const label_position = (gridMode())
          ? "top-0 right-0 rounded-br-none rounded-tl-none"
          : "bottom-0 left-1/2 transform -translate-x-1/2 rounded-b-none";

        const label_color = (theme_type == "dark")
          ? "bg-white-1 text-dark-3"
          : " bg-dark-4 text-white-1";

        return (
          <div softShadow grid relative>
            {/* theme screnshot */}
            <img
              loading="lazy"
              src={key}
              rounded="lg"
              shadow-b-md
              width={2560}
              height={1440}
              onclick={() => {
                setScrollPosition(window.scrollY);
                setZoomedImgPath(key);
                setGalleryStatus(!galleryShown());
              }}
            />

            {/* theme titles & fullscreen btn */}
            <div
              class={`absolute vertCentered justify-between ${label_position} ${label_color}`}
              font-medium
              capitalize
              p="2 x-3"
            >
              {/* get theme name from theme path*/}
              {theme}
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
        onclick={() => {
            setGalleryStatus(!galleryShown())
            window.scrollTo(0, scrollPosition());
        }}
        class="px-3 my-6 mx-auto bg-red-4 text-white-1 dark:text-red-3"
      >
        <div i-ion:close></div>
        Close
      </button>
      <img
        src={zoomedImg()}
        class="z-[9999] rounded-lg softShadow h-auto w-full"
      />
    </div>
  );
}

function Themes() {
  return (
    <div class="max-w-[1700px] mx-auto">
      {!galleryShown() && <ImageZoomed />}

      {galleryShown() &&
        (
          <div grid class="gap-5 my-6" p="x-4 2xl:0">
            <LangListBtns />
            <Gallery />
          </div>
        )}
    </div>
  );
}

export default Themes;
