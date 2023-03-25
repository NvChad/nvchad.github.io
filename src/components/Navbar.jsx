import { A, useLocation } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import { showSidebar, sideBarShown } from "~/routes/(index)/docs";

// for toggling menu links, btns on mobile
const [linksShown, showLinks] = createSignal(false);

function Links() {
  return (
    <div grid md:flex gap-5>
      {/* Brand logo */}
      <A
        href="/"
        class="vertCentered !gap-3 font-bold text-grey-4 dark:text-white-2"
      >
        <img src="/logo.svg" alt="nvchad logo" w="26px" h="26px" />
        NvChad
      </A>

      {/* route links */}
      <div
        text="slate-7 dark:slate-4"
        class={`grid md:vertCentered md:!gap-5 gap-5 ${
          linksShown() ? "" : "hidden"
        }`}
      >
        <A href="/docs/quickstart/install">Docs</A>
        <A href="/docs/features">Features</A>
        <A href="/themes">Themes</A>
        <A href="/news">News</A>
      </div>
    </div>
  );
}

function DocsBtn() {
  return (
    useLocation().pathname.includes("docs") &&
    (
      <button
        xl="hidden"
        dark:bg-blue-3
        dark:text-black
        onclick={() => showSidebar(!sideBarShown())}
      >
        {sideBarShown()
          ? <div i-ic:round-close></div>
          : <div i-carbon:side-panel-close-filled></div>}
        Docs
      </button>
    )
  );
}

export const ThemeToggleBtn = (props) => {
  const [theme, setTheme] = createSignal(
    globalThis.localStorage && localStorage.theme
      ? localStorage.theme
      : "light",
  );

  return (
    <button
      onclick={() => {
        setTheme(theme() == "light" ? "dark" : "light");
        const el = document.querySelector("html");
        el.className = localStorage.theme = theme();
      }}
      class={`shadow-lg ${props.display} text-xl p-2 bg-slate-8 text-white-1 dark:bg-dark-3 rounded-full`}
      aria-label="theme toggler"
    >
      <div
        text-base
        class={theme() == "light"
          ? "i-line-md:sun-rising-twotone-loop"
          : "i-ph-moon-stars-bold"}
      >
      </div>
    </button>
  );
};

export function BtnLinks() {
  const Btns = [
    [
      "i-ph:chat-teardrop-text text-3xl",
      "#community",
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
      <DocsBtn />
      <Searchbar />

      {Btns.map((x) => (
        <A
          text="slate-8 dark:slate-4"
          href={x[1]}
          aria-label={x[2]}
          class={x[0]}
        >
          {x[0]}
        </A>
      ))}
      <ThemeToggleBtn display="hidden md:vertCentered" />
    </div>
  );
}

function Searchbar() {
  return (
    <button
      id="searchbar"
      class="vertCentered text-base w-fit p-2 px-3 rounded-lg"
      bg="slate-1 dark:dark-3"
      text="slate-6"
      onclick={() => {
        alert("This is WIP!");
      }}
    >
      <div i-ion-search></div>

      Search
      <div
        border="1 solid slate-6 dark:dark-4"
        p="1 x-2"
        class="ml-3 text-slate-7 dark:text-slate-4 text-sm rounded-lg"
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
                text-lg font-medium  p-4 py-3 max-w-[1700px] mx-auto`;

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
          <ThemeToggleBtn />
          <DocsBtn />

          <button
            class="p-2 text-xl rounded-lg"
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
