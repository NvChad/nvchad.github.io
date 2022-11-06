import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

import { FaBrandsDiscord, FaBrandsGithub } from "solid-icons/fa";
import { BiLogosTelegram } from "solid-icons/bi";

import { SiMatrix } from "solid-icons/si";
import { TbMoon, TbSun } from "solid-icons/tb";

function Links() {
  return (
    <div class="flex gap-5">
      <A href="/" class="vertCentered gap-3 font-semibold ">
        <img src="/logo.svg" alt="nvchad logo" class="w-7" />
        NvChad
      </A>
      <A href="/docs/quickstart/install">Docs</A>
      <A href="/Features">Features</A>
      <A href="/Themes">Themes</A>
    </div>
  );
}

const tmpTheme = localStorage && localStorage.theme
  ? localStorage.theme
  : "light";

const [theme, setTheme] = createSignal(tmpTheme);

export function BtnLinks() {
  const Btns: Array<Array<any>> = [
    [<FaBrandsGithub />, "https://github.com/NvChad/NvChad"],
    [<BiLogosTelegram />, "https://t.me/DE_WM"],
    [<FaBrandsDiscord />, "https://discord.com/invite/gADmkJb9Fb"],
    [<SiMatrix />, "https://matrix.to/#/#nvchad:matrix.org"],
  ];

  return (
    <div class="vertCentered gap-5 text-2xl">
      {Btns.map((x) => <a href={x[1]} target="_blank">{x[0]}</a>)}

      {/* theme toggle */}
      <button
        onclick={() => {
          setTheme(theme() == "light" ? "dark" : "light");

          const el = document.querySelector("html")!;
          el.className = localStorage.theme = theme();
        }}
        title="Theme Toggle"
      >
        <div class="p-2 bg-pale dark:bg-tintBlack2 rounded-full">
          {theme() == "light" ? <TbSun /> : <TbMoon />}
        </div>
      </button>
    </div>
  );
}

function Navbar() {
  const styles = `sticky top-0 z-50
                vertCentered gap-5 justify-between 
                bg-white dark:bg-black font-medium 
                text-xl p-8 py-5`;

  return (
    <nav class={styles}>
      <Links />
      <BtnLinks />
    </nav>
  );
}

export default Navbar;
