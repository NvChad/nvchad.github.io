import { A, Outlet } from "@solidjs/router";
import { createSignal } from "solid-js";
import Sidebar from "./doc_comps/Sidebar";
import { BtnLinks, ThemeToggleBtn } from "./Navbar";
import { FiSearch } from "solid-icons/fi";
import { FiMenu } from "solid-icons/fi";

// for context bar on the right
export const [activeContext_Heading, setActiveContext_Heading] = createSignal(
  "",
);

export const generateActiveContext = () => {
  let docs_Elements = document.getElementById("DocContent")?.childNodes;

  let visible_Elements: Array<Array<number>> = [];
  let resultIndex = 0;

  docs_Elements?.forEach((el, index) =>
    visible_Elements.push([index, el.offsetTop])
  );

  for (let i = 0; i < visible_Elements.length; i++) {
    if (window.pageYOffset < visible_Elements[i][1]) {
      resultIndex = i;
      break;
    }
  }

  docs_Elements?.forEach((el, index) => {
    if (
      (el.localName == "h2" || el.localName == "h3") &&
      index <= resultIndex
    ) {
      setActiveContext_Heading(el.innerText);
    }
  });
};

window.addEventListener("scroll", () => generateActiveContext());

function TopBar() {
  const Searchbar = () => (
    <div class="vertCentered justify-between bg-pale dark:bg-tintBlack p-2 pr-4 w-full whitespace-nowrap">
      <div class="vertCentered w-full">
        <div class="bg-white2 text-black dark:bg-tintBlack2 p-3 rounded-full dark:text-red-300">
          <FiSearch />
        </div>

        <input
          placeholder="search documentation"
          class="p-2 w-full bg-pale dark:bg-tintBlack"
        />
      </div>

      <div>Ctrl + K</div>
    </div>
  );

  return (
    <div class="top-0 vertCentered justify-between text-lg mx-3 mt-5 gap-5">
      <Searchbar />
      <BtnLinks styles="hidden" /> {/* hide on mobiles only */}
    </div>
  );
}

export const [sideBarShown, showSidebar] = createSignal(false);

// final component!
function Docs() {
  const MobileNav = () => (
    <nav class="my-5 mx-5 flex justify-between md:hidden">
      <A href="/" class="vertCentered gap-3 font-semibold ">
        <img src="/logo.svg" alt="nvchad logo" class="w-7" />
        NvChad
      </A>

      {/* btns */}
      <div class="vertCentered">
        <ThemeToggleBtn />
        <button
          class="p-2 bg-whiteTint dark:bg-tintBlack2 md:hidden w-fit"
          onclick={() => showSidebar(sideBarShown() ? false : true)}
        >
          <FiMenu />
        </button>
      </div>
    </nav>
  );

  return (
    <div class="relative grid grid-cols-[auto_1fr]">
      <Sidebar />

      <div class="md:mx-10">
        <MobileNav />
        <TopBar />
        <Outlet /> {/* doc content */}
      </div>
    </div>
  );
}

export default Docs;
