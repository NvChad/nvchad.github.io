import { Outlet } from "@solidjs/router";
import { createSignal } from "solid-js";
import Sidebar from "./doc_comps/Sidebar";
import { BtnLinks, MobileNav } from "./Navbar";
import { FiSearch } from "solid-icons/fi";

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

function SearchBar() {
  const InputBar = () => (
    <div class="xl:my-6 vertCentered justify-between bg-pale dark:bg-tintBlack p-2 pr-4 w-full whitespace-nowrap">
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
    <div class="vertCentered justify-between text-lg gap-5">
      <InputBar />
      <BtnLinks styles="hidden xl:flex" /> {/* hide on mobiles only */}
    </div>
  );
}

export const [sideBarShown, showSidebar] = createSignal(false);

// final component!
function Docs() {
  const docContentStyles = "px-5 xl:px-10 xl:blur-none";
  const docStyles = "grid grid-cols-[auto_1fr]";

  return (
    <div
      class={sideBarShown()
        ? `${docStyles} p-4 pl-0 pt-0`
        : `${docStyles} p-4 pl-0 pt-0`}
    >
      <Sidebar />

      <div
        class={sideBarShown()
          ? `${docContentStyles} blur-sm`
          : docContentStyles}
      >
        <MobileNav />
        <SearchBar />
        <Outlet /> {/* doc content */}
      </div>
    </div>
  );
}

export default Docs;
