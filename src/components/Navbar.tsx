import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

import { FaBrandsDiscord, FaBrandsGithub } from "solid-icons/fa";
import { BiLogosTelegram } from "solid-icons/bi";

import { SiMatrix } from "solid-icons/si";
import { TbMoon, TbSun } from "solid-icons/tb";
import { FiMenu } from 'solid-icons/fi'

// for toggling menu links, btns on mobile
const [linksShown, showLinks] = createSignal(false);

function Links() {
  return (
    <div class="grid md:flex gap-5">
      <A href="/" class="vertCentered gap-3 font-semibold ">
        <img src="/logo.svg" alt="nvchad logo" class="w-7" />
        NvChad
      </A>

      {/* route links */}
      <div
        class={linksShown()
          ? "grid md:vertCentered gap-4 md:bg-red-200"
          : "hidden md:vertCentered md:gap-5"}
      >
        <A href="/docs/quickstart/install">Docs</A>
        <A href="/Features">Features</A>
        <A href="/Themes">Themes</A>
      </div>
    </div>
  );
}

const tmpTheme = localStorage && localStorage.theme
  ? localStorage.theme
  : "light";

export const ThemeToggleBtn = (props:any) => (
  <button
    onclick={() => {
      setTheme(theme() == "light" ? "dark" : "light");

      const el = document.querySelector("html")!;
      el.className = localStorage.theme = theme();
    }}
    title="Theme Toggle"
  >
    <div class={`${props.display} p-2 bg-pale dark:bg-tintBlack2 rounded-full`}>
      {theme() == "light" ? <TbSun /> : <TbMoon />}
    </div>
  </button>
);

const [theme, setTheme] = createSignal(tmpTheme);

export function BtnLinks(props:any) {
  const Btns: Array<Array<any>> = [
    [<FaBrandsGithub />, "https://github.com/NvChad/NvChad"],
    [<BiLogosTelegram />, "https://t.me/DE_WM"],
    [<FaBrandsDiscord />, "https://discord.com/invite/gADmkJb9Fb"],
    [<SiMatrix />, "https://matrix.to/#/#nvchad:matrix.org"],
  ];

  const btnStyles = `lg:vertCentered gap-5 md:gap-5 text-2xl ${props.styles}`;

  return (
    <div class={linksShown() ? btnStyles : `hidden ${btnStyles}`}>
      {/* hide links by default on mobile */}

      {Btns.map((x) => <a href={x[1]} target="_blank">{x[0]}</a>)}
      <ThemeToggleBtn display="hidden md:flex" />
    </div>
  );
}

function Navbar() {
  const styles = `sticky top-0 z-50
                flex md:vertCentered gap-5 justify-between 
                bg-white dark:bg-black font-medium 
                text-xl p-8 py-5`;

  return (
    <nav class={styles}>
      <div class="grid gap-5 md:flex md:gap-3 justify-between w-full">
        <Links />
        <BtnLinks />
      </div>

      {/* shown only on mobile */}
      <div class="vertCentered h-fit">
        <ThemeToggleBtn display="md:hidden"/>

        <button
          class="p-2 bg-whiteTint dark:bg-tintBlack2 md:hidden"
          onclick={() => showLinks(linksShown() ? false : true)}
        >
          <FiMenu />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
