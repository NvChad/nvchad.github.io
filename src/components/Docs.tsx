import { Outlet, useLocation } from "@solidjs/router";
import { createStore } from "solid-js/store";
import { createEffect, createSignal, on } from "solid-js";
import Sidebar from "./doc_comps/Sidebar";
import { BtnLinks, MobileNav } from "./Navbar";
import { FiSearch } from "solid-icons/fi";

import "highlight.js/styles/base16/onedark.css";

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

  const [contextLabelsShown, toggleContextLabels] = createSignal(false);
  const [contextHeadings, setHeadings] = createStore([]);

  // filter out all h2 elements for Context SideBar
  // this will run on route change
  createEffect(on(() => useLocation().pathname, () => {
    setTimeout(() => {
      let docs = document.getElementById("DocContent")?.childNodes;
      let result: Array<Array<string>> = [];

      docs?.forEach((item: any) => {
        if (item.localName == "h2" || item.localName == "h3") {
          item.id = item.innerText;
          result.push([item.localName, item.innerText]);
        }
      });

      setHeadings(result);
      generateActiveContext();
    }, 50);
  }));

  function generateStyles(x: any) {
    const labelStyles = "lg:border-l-2 p-1 px-5";
    let styles = activeContext_Heading() == x[1]
      ? `${labelStyles} border-purple-300 bg-purple-100 text-purple-800 dark:border-blue-300 dark:text-blue-300 dark:bg-tintBlack2`
      : `${labelStyles} dark:border-tintBlack3 text-darkgrey`;
    return x[0] == "h3" ? `pl-9 ${styles}` : `${styles}`;
  }

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

        <div class="flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]">
          <div id="DocContent">
            <Outlet />
          </div>

          {/* on this page component */}
          {contextHeadings.length > 1 &&
            (
              <div class="sticky my-5 xl:grid xl:pt-10 xl:h-[calc(100vh-4rem)] xl:top-16 ">
                <div class="h-fit grid border-grey dark:border-tintBlack3 border xl:border-none">
                  <button
                    class="text-lg font-medium py-2 lg:pb-2 pl-5 dark:border-tintBlack3 lg:border-l-2 lg:rounded-none "
                    onclick={() =>
                      toggleContextLabels(contextLabelsShown() ? false : true)}
                  >
                    On this page
                  </button>

                  {/* labels */}
                  <div class={contextLabelsShown() ? "grid" : "hidden xl:grid"}>
                    {contextHeadings.map((x: any) => (
                      <a
                        href={"#" + x[1]}
                        class={generateStyles(x)}
                        onclick={() => setActiveContext_Heading(x[1])}
                      >
                        {x[1]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Docs;
