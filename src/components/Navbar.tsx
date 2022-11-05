import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

import {
  FaBrandsDiscord,
  FaBrandsGithub,
  FaBrandsTelegram,
} from "solid-icons/fa";
import { SiMatrix } from "solid-icons/si";
import { TbMoon, TbSun } from "solid-icons/tb";

function Links() {
  return (
    <div class="flex gap-5">
      <A href="/" class="flex items-center gap-3 font-semibold ">
        <img src="/logo.svg" alt='nvchad logo' class="w-7" />
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

function BtnLinks() {
  return (
    <div class="flex gap-5 text-2xl">
      <FaBrandsGithub />
      <FaBrandsTelegram />
      <FaBrandsDiscord />
      <SiMatrix />

      {/* theme toggle */}
      <button
        onclick={() => {
          setTheme(theme() == "light" ? "dark" : "light");

          const el = document.querySelector("html")!;
          el.className = localStorage.theme = theme();
        }}

        title="Theme Toggle"

      >
        {theme() == "light" ? <TbSun /> : <TbMoon />}
      </button>
    </div>
  );
}

function Navbar() {
  return (
    <nav class="sticky top-0 z-50 flex gap-5 text-xl p-8 py-5 items-center justify-between bg-black border-b-2 border-tintBlack font-medium">
      <Links />
      <BtnLinks />
    </nav>
  );
}

export default Navbar;
