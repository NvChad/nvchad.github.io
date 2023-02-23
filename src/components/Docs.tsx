import { Outlet, useLocation } from "@solidjs/router";
import { createStore } from "solid-js/store";
import { createEffect, createSignal, on } from "solid-js";
import Sidebar from "./doc_comps/Sidebar";

import "../css/hljs.css"; // css for highlighting codeblock syntaxes!

// for context bar on the right
export const [activeContext_Heading, setActiveContext_Heading] = createSignal(
  "",
);

// On this page component uses this
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

export const [sideBarShown, showSidebar] = createSignal(false);

// final component!
function Docs() {
  const [contextLabelsShown, toggleContextLabels] = createSignal(false);
  const [contextHeadings, setHeadings] = createStore([]);

  // filter out all h2 elements for Context SideBar
  // this will run on route change
  createEffect(
    on(
      () => useLocation().pathname,
      () => {
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
      },
    ),
  );

  function generateStyles(x: any) {
    let styles =
      ` py-2 xl:py-1 px-5 text-darkgrey xl:border-solid border-0 border-l-2 border-gray-3 dark:border-tintBlack-3 ${
        activeContext_Heading() == x[1]
          ? "!border-purple-5 bg-purple-1 text-purple-8 dark:bg-tintBlack-2 dark:text-blue-3"
          : ""
      }`;

    return x[0] == "h3" ? `pl-9 ${styles}` : `${styles}`;
  }

  return (
    <div
      grid
      class="lg:grid-cols-[auto_1fr] max-w-[1800px] mx-auto mt-10  md:px-5"
    >
      <Sidebar />

      <div class="px-5 xl:px-10 xl:blur-none" blur={sideBarShown() ? "sm" : ""}>
        <div class="flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]">
          <div id="DocContent">
            <Outlet />
          </div>

          {/* on this page component */}
          {contextHeadings.length > 1 && (
            <div class="sticky my-5 xl:gid  xl:h-[calc(100vh-4rem)] ">
              <div class="h-fit grid border-grey dark:border-tintBlack-3 border xl:border-none">
                <button
                  class="rounded-lg text-lg bg-purple-1 dark:bg-tintBlack-2 font-medium py-2 pl-5 mb-3 "
                  m="t-[-2rem]"
                  xl="rounded-none pb-2 border-l-solid mb-0 pt-0 bg-transparent dark:bg-transparent"
                  border="none l-2 gray-3"
                  dark="border-tintBlack-3"
                  onclick={() =>
                    toggleContextLabels(contextLabelsShown() ? false : true)}
                >
                  On this page
                  <div i-mdi-chevron-down-circle text-2xl xl:hidden></div>
                </button>

                {/* labels */}
                <div
                  class="grid xl:grid py-3 xl:py-0 bg-slate-1 dark:bg-tintBlack-1 xl:bg-transparent xl:dark-bg-transparent"
                  hidden={!contextLabelsShown()}
                >
                  {contextHeadings.map((x: any) => (
                    <a
                      href={`#${x[1]}`}
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
