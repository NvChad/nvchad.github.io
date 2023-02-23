import { A, useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";
import { showSidebar, sideBarShown } from "./Docs";

// for toggling menu links, btns on mobile
const [linksShown, showLinks] = createSignal(false);

function Links() {
  return (
    <div grid md:flex gap-5>
      {/* Brand logo */}
      <A href="/" class="vertCentered !gap-4 font-bold  mr-2">
        <img src="/logo.svg" alt="nvchad logo" w-7 />
        NvChad
      </A>

      {/* route links */}
      <div class="grid md:vertCentered md:!gap-5 gap-5 inactiveColor" hidden={!linksShown()}>
        <A activeClass="activeNavLink" href="/docs/quickstart/install">Docs</A>
        <A activeClass="activeNavLink" href="/Features">Features</A>
        <A activeClass="activeNavLink" href="/Themes">Themes</A>
      </div>
    </div>
  );
}

export const ThemeToggleBtn = (props: any) => {
  const [theme, setTheme] = createSignal(
    localStorage && localStorage.theme ? localStorage.theme : "light",
  );

  return (
    <button
      onclick={() => {
        setTheme(theme() == "light" ? "dark" : "light");
        const el = document.querySelector("html")!;
        el.className = localStorage.theme = theme();
      }}
      class={`${props.display} text-xl p-2 bg-slate-1 dark:bg-tintBlack-2 rounded-full`}
    >
      <div
        class={theme() == "light"
          ? "i-carbon-sun"
          : "i-ph-moon-stars-bold text-blue-4"}
      >
      </div>
    </button>
  );
};

export function BtnLinks() {
  const Btns: Array<Array<any>> = [
    [
      "i-ph:chat-teardrop-text text-3xl",
      "#communities",
      "nvchad discussions",
    ],
    ["i-bi:github  ", "https://github.com/NvChad/NvChad", "Github repo"],
  ];

  return (
    <div
      class={`md:vertCentered !gap-5 text-2xl ${
        linksShown() ? "vertCentered" : "hidden"
      }`}
    >
      {/* hide links by default on mobile */}

      <Searchbar />

      {Btns.map((x) => (
        <a href={x[1]} target="_blank" aria-label={x[2]} class={x[0]}>
          {x[0]}
        </a>
      ))}
      <ThemeToggleBtn display="hidden md:vertCentered" />
    </div>
  );
}

function Searchbar() {
  return (
    <button class="vertCentered text-base w-fit p-2 px-3 rounded-lg" bg="slate-1 dark:dark-3" >
      <div i-ion-search></div>

      Search
      <div
        border="1 solid dark:dark-4"
        p="1 x-2"
        class="ml-3 text-slate-5 dark:text-slate-4 text-sm rounded-lg"
      >
        Ctrl + k
      </div>
    </button>
  );
}

function Navbar() {
  const styles = `sticky top-0 z-50
                flex md:vertCentered gap-5 justify-between 
                bg-white-1 dark:bg-dark-2 
                text-xl p-4 max-w-[1800px] mx-auto`;

  return (
    <div border="0 b solid slate-2 dark:dark-4">
      <nav class={styles}>
        <div
          md="flex gap-3 mx-auto"
          class="grid justify-between w-full gap-5"
        >
          <Links />
          <BtnLinks />
        </div>

        {/* shown only on mobile */}
        <div class="vertCentered h-fit md:!hidden">
          {useLocation().pathname.includes("docs") &&
            (
              <button
                rounded-lg
                dark:bg-blue-3
                dark:text-black-2
                onclick={() => showSidebar(!sideBarShown())}
              >
                <div i-ic:round-menu-open></div>

                Docs
              </button>
            )}
          <ThemeToggleBtn />

          <button
            class="p-2 text-xl bg-whiteTint rounded-lg dark:bg-tintBlack-2"
            onclick={() => showLinks(linksShown() ? false : true)}
          >
            <div i-material-symbols-menu-rounded></div>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
