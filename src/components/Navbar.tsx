import { createEffect, createSignal, onMount } from "solid-js";
import { mobSideBar, setMobSidebar } from "~/components/doc_comps/Sidebar";

import docsearch from "@docsearch/js";
import "@docsearch/css";

// for toggling menu links, btns on mobile
const [linksShown, showLinks] = createSignal(false);

function Links() {
  return (
    <div grid md:flex gap-5>
      {/* Brand logo */}
      <a
        href="/"
        class="vertCentered !gap-3 font-bold text-grey-4 dark:text-white-2"
      >
        <img src="/logo.svg" alt="nvchad logo" w="26px" h="26px" />
        NvChad
      </a>

      {/* route links */}
      <div
        text="slate-7 dark:slate-4"
        class={`grid md:vertCentered md:!gap-5 gap-5 ${
          linksShown() ? "" : "hidden"
        }`}
      >
        <a href="/docs/quickstart/install">Docs</a>
        <a href="/docs/features">Features</a>
        <a href="/themes">Themes</a>
        <a href="/news">News</a>
      </div>
    </div>
  );
}

export const ThemeToggleBtn = (props) => {
  const [theme, setTheme] = createSignal("");

  onMount(() => {
    const localTheme = localStorage.theme;
    setTheme(localTheme);
  });

  return (
    <button
      onclick={() => {
        setTheme(theme() == "light" ? "dark" : "light");
        const html = document.querySelector("html");
        html.className = localStorage.theme = theme();
      }}
      class={`shadow-lg ${props.display} text-xl p-2 bg-slate-8 text-white-1 dark:bg-dark-3 rounded-full`}
      aria-label="theme toggler"
    >
      <div
        text-base
        class={
          theme() == "light"
            ? "i-line-md:sun-rising-twotone-loop"
            : "i-ph-moon-stars-bold"
        }
      ></div>
    </button>
  );
};

function Searchbar() {
  createEffect(() => {
    // setup algolia docsearch
    docsearch({
      appId: "BOJS19CH35",
      apiKey: "c74ee96af1dea95b6e189501983733f8",
      indexName: "nvchad",
      container: "#docsearch",
    });
  });

  return (
    <button
      id="searchbar"
      class="vertCentered text-base w-fit p-2 px-3 rounded-lg"
      bg="slate-1 dark:dark-3"
      text="slate-6"
      onclick={() => document.querySelector(".DocSearch").click()}
    >
      <div i-ion-search></div>
      Search
    </button>
  );
}

export function BtnLinks() {
  const links = [
    [
      "i-ph:chat-teardrop-text text-xl md:text-3xl",
      "/#community",
      "nvchad discussions",
    ],
    ["i-bi:github  ", "https://github.com/NvChad/NvChad", "Github repo"],
  ];

  return (
    <div
      class={`md:vertCentered !gap-5 md:text-2xl ${
        linksShown() ? "vertCentered" : "hidden"
      }`}
    >
      <div hidden id="docsearch"></div>
      <Searchbar />
      {links.map((x) => (
        <a
          text="slate-8 dark:slate-4"
          href={x[1]}
          aria-label={x[2]}
          class={x[0]}
        >
          {x[0]}
        </a>
      ))}

      <ThemeToggleBtn display="hidden md:vertCentered" />
    </div>
  );
}

interface Proptypes {
  pathname: string;
}

function Navbar(props: Proptypes) {
  const styles = `
                flex md:vertCentered gap-5 justify-between 
                text-lg font-medium  p-4 py-3 max-w-[1700px] mx-auto`;

  return (
    <nav class="sticky top-0 z-50 shadow-md" bg="dark:dark-3">
      <div class={styles}>
        <div md="flex gap-3 mx-auto" class="grid justify-between w-full gap-5">
          <Links />
          <BtnLinks />
        </div>

        {/* shown only on mobile */}

        <div class="vertCentered h-fit md:!hidden">
          <ThemeToggleBtn />

          {/* sidebar toggle btn */}
          {props.pathname.includes("docs") && (
            <button
              dark:bg-blue-3
              dark:text-black
              onclick={() => setMobSidebar(!mobSideBar())}
            >
              {mobSideBar() ? (
                <div i-ic:round-close />
              ) : (
                <div i-carbon:side-panel-close-filled />
              )}
            </button>
          )}
          <button
            class="p-2 text-xl rounded-lg"
            onclick={() => showLinks(linksShown() ? false : true)}
          >
            <div i-material-symbols-menu-rounded></div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
