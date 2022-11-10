import { A } from "@solidjs/router";
import { FaBrandsDocker } from "solid-icons/fa";
import { BsArrowDownCircle } from "solid-icons/bs";

function BannerText() {
  const BtnLinks = () => {
    const styles =
      "vertCentered shadow-soft bg-onedark w-fit p-2 md:p-4 md:px-6 rounded-full";

    return (
      <div class="bannerBtns flex gap-3 m-auto text-sm md:text-xl text-indigo-300">
        <A href="/docs/quickstart/install#pre-requisites" class={styles}>
          <BsArrowDownCircle /> Install
        </A>

        <A
          href="/docs/quickstart/install#try-in-docker-container"
          class={styles}
        >
          <FaBrandsDocker /> Docker
        </A>
      </div>
    );
  };

  return (
    <div class="grid justify-center gap-5 text-center mb-6">
      <h1 class="text-3xl md:text-5xl lg:text-6xl text-white">
        Enhance your Neovim workflow
      </h1>

      <p class="font-medium text-base md:text-xl text-black">
        Blazing fast Neovim config providing solid defaults and a beautiful UI
      </p>

      <BtnLinks />
    </div>
  );
}

function Banner() {
  return (
    <div class="banner blueGradient dark:redGradient grid p-10 pt-6 justify-center rounded-none">
      <BannerText />

      {/* banner img */}
      <img
        src="/banner.webp"
        alt="NvChad screenshot"
        class="rounded-xl shadow-soft lg:max-w-[94%] m-auto"
      />
    </div>
  );
}

export default Banner;
