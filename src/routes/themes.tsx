import { createSignal } from "solid-js";

const imagePaths = import.meta.glob("../../public/themes/*.webp");

let arr = Object.keys(imagePaths).map((key) => key.replace("../../public", ""));

const [galleryShown, setGalleryStatus] = createSignal(true);
const [zoomedImg, setZoomedImgPath] = createSignal("");
const [gridMode, setGridMode] = createSignal(true);
const [scrollPosition, setScrollPosition] = createSignal(0);

const ToggleBtn = () => (
  <div flex items-center bg="slate-1" px3 h-fit justify-between>
    <h3 font="medium">Theme Gallery</h3>

    {/* gallery layout modes */}
    <div flex>
      <button
        bg="white-1"
        border="solid 1 blue-4 dark:dark-4 r-0"
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

function Gallery() {
  return (
    <div
      class={`grid gap-6 [&_*]:max-w-[100%] [&_*]:h-auto ${
        gridMode() ? "lg:grid-cols-3 2xl:grid-cols-4" : ""
      }`}
    >
      {arr.map((key) => {
        const filename = key?.split("/").pop();
        const theme = filename.split(".")[0];
        const theme_type = theme.includes("light") ? "light" : "dark";

        const label_position = gridMode()
          ? "top-0 right-0 rounded-br-none rounded-tl-none"
          : "bottom-0 left-1/2 transform -translate-x-1/2 rounded-b-none";

        const label_color =
          theme_type == "dark"
            ? "bg-slate-1 bur-sm text-dark-3"
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
              hover='cursor-pointer'
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
          setGalleryStatus(!galleryShown());
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

const Themes = () => (
  <div class="max-w-[1700px] mx-auto">
    {!galleryShown() && <ImageZoomed />}

    {galleryShown() && (
      <div grid class="gap-5 my-6" p="x-4 2xl:0">
        <ToggleBtn />
        <Gallery />
      </div>
    )}
  </div>
);

export default Themes;
