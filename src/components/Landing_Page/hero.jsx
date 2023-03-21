import { A } from "@solidjs/router";
import { setOS } from "../docpage/install";

function BtnLinks() {
  const linkStyles = "vertCentered bg-onedark w-fit p-3 px-4 rounded-full";

  return (
    <div class="mx-auto flex gap-3 text-sm md:text-lg text-white-2 [&_a]:shadow-xl">
      <A href="/docs/quickstart/install" class={linkStyles}>
        <div class="i-grommet-icons-install-option"></div> Install
      </A>

      <A
        href="/docs/quickstart/install"
        class={linkStyles}
        onclick={() => setOS("Docker")}
      >
        <div class="i-mdi-docker"></div> Docker
      </A>
    </div>
  );
}

function HeroText() {
  return (
    <div text-slate-8 grid text-center mx-auto mb-10>
      <h1 mb-0>
        Enhance your Neovim workflow
      </h1>

      <p font-medium text-base md:text-xl>
        Blazing fast Neovim config providing solid defaults and a beautiful UI
      </p>

      <BtnLinks />
    </div>
  );
}

function Hero() {
  let redGradient = "bg-gradient-to-r dark:from-red-4  dark:to-violet-4";
  let blueGradient = "bg-gradient-to-r from-blue-3 to-blue-5";

  return (
    <div
      class={`grid shadow-md p-10 pb-15 pt-0 justify-center rounded-none ${blueGradient} dark:${redGradient}`}
    >
      <HeroText />

      <div>
        {/* banner img */}
        <img
          src="/banner.webp"
          alt="NvChad screenshot"
          class="rounded-lg md:rounded-xl max-w-[90vw] 2xl:max-w-[1700px] softshadow m-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
