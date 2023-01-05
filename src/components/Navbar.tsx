import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { showSidebar, sideBarShown } from "./Docs";

// for toggling menu links, btns on mobile
const [linksShown, showLinks] = createSignal(false);

function Links() {
  return (
    <div grid md:flex gap-5>
      {/* Brand logo */}
      <A href="/" class="vertCentered !gap-4 font-bold">
        <img src="/logo.svg" alt="nvchad logo" w-7 />
        NvChad
      </A>

      {/* route links */}
      <div class="grid md:vertCentered md:!gap-5 gap-5" hidden={!linksShown()}>
        <A href="/docs/quickstart/install">Docs</A>
        <A href="/Features">Features</A>
        <A href="/Themes">Themes</A>
      </div>
    </div>
  );
}

export const ThemeToggleBtn = (props: any) => {
  const [theme, setTheme] = createSignal(
    localStorage && localStorage.theme ? localStorage.theme : "light"
  );

  return (
    <button
      onclick={() => {
        setTheme(theme() == "light" ? "dark" : "light");
        const el = document.querySelector("html")!;
        el.className = localStorage.theme = theme();
      }}
      class={`${props.display} text-xl p-2 bg-pale dark:bg-tintBlack-2 rounded-full`}
    >
      <div
        class={theme() == "light" ? "i-carbon-sun" : "i-ph-moon-stars-bold"}
      ></div>
    </button>
  );
};

export function BtnLinks() {
  const Btns: Array<Array<any>> = [
    ["i-ph-telegram-logo", "https://t.me/nvchad_tg", "Telegram group link"],
    [
      "i-ic-baseline-discord",
      "https://discord.com/invite/gADmkJb9Fb",
      "Discord server",
    ],

    ["i-mdi-github", "https://github.com/NvChad/NvChad", "Github repo"],
    [
      "i-tabler-brand-matrix",
      "https://matrix.to/#/#nvchad:matrix.org",
      "Matrix space",
    ],
  ];

  return (
    <div
      class={`md:vertCentered !gap-5 text-2xl ${
        linksShown() ? "vertCentered" : "hidden"
      }`}
    >
      {/* hide links by default on mobile */}

      {Btns.map((x) => (
        <a href={x[1]} target="_blank" aria-label={x[2]} class={x[0]}>
          {x[0]}
        </a>
      ))}

      <ThemeToggleBtn display="hidden md:vertCentered" />
    </div>
  );
}

export const MobileNav = () => (
  <nav py-3 flex justify-between xl="hidden" text-xl sticky h-10 top-0 z-50 bg-white-1 dark:bg-black-1>
    <A href="/" class="vertCentered gap-3 font-semibold ">
      <img src="/logo.svg" alt="nvchad logo" class="w-7" />
      NvChad
    </A>

    {/* btns */}
    <div class="vertCentered">
      <ThemeToggleBtn />
      <button
        class="p-2 bg-whiteTint dark:bg-tintBlack-2 xl:hidden w-fit rounded-lg text-xl"
        onclick={() => showSidebar(!sideBarShown())}
      >
        <div i-material-symbols-menu-rounded></div>
      </button>
    </div>
  </nav>
);

function Navbar() {
  const styles = `sticky top-0 z-50
                flex md:vertCentered gap-5 justify-between 
                bg-white-1 dark:bg-black-1 
                text-xl p-4 md:px-0 py-3 shadow-xl dark:softShadow`;

  return (
    <nav class={styles}>
      <div
        md="flex gap-3 max-w-[90vw] mx-auto"
        class="grid justify-between w-full gap-5"
      >
        <Links />
        <BtnLinks />
      </div>

      {/* shown only on mobile */}
      <div class="vertCentered h-fit">
        <ThemeToggleBtn display="md:hidden" />

        <button
          class="p-2 text-xl bg-whiteTint rounded-lg dark:bg-tintBlack-2 md:hidden"
          onclick={() => showLinks(linksShown() ? false : true)}
        >
          <div i-material-symbols-menu-rounded></div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
