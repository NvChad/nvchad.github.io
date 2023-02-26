import { Outlet, useLocation } from "@solidjs/router";
import { createStore } from "solid-js/store";
import { createEffect, createSignal, on } from "solid-js";
import Sidebar from "./doc_comps/Sidebar";

import "../css/hljs.css";
import "../css/markdown.css";

import create_copyIcon from "./doc_comps/clipboard";

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

  //  run on route change
  createEffect(
    on(
      () => useLocation().pathname,
      () => {
        setTimeout(() => {
          create_copyIcon();

          const docs = document.getElementById("DocContent");
          const headingElements = docs?.querySelectorAll("h2, h3");
          const headings: Array<Array<string>> = [];

          headingElements?.forEach((item: any) => {
            item.id = item.innerText;
            headings.push([item.localName, item.innerText]);
          });

          setHeadings(headings);
          generateActiveContext();
        }, 50);
      },
    ),
  );

  function generateStyles(x: any) {
    let styles =
      `rounded-r-lg py-2  px-5 text-darkgrey xl:border-solid border-0 border-l-2 border-slate-2 dark:border-dark-3 ${
        activeContext_Heading() == x[1]
          ? "!border-blue-5 bg-slate-2 xl:bg-sky-1 !text-blue-7 font-medium dark:bg-dark-3 dark:!text-blue-3 dark:border-blue-4"
          : ""
      }`;

    return x[0] == "h3" ? `pl-10 ${styles}` : `${styles}`;
  }

  return (
    <div
      grid
      class="xl:grid-cols-[auto_1fr] max-w-[1700px] mx-auto mt-8 xl:px-5"
    >
      <Sidebar />

      <div class="px-5  xl:pl-10  xl:blur-none" blur={sideBarShown() ? "sm" : ""}>
        <div class="flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]">
          <div id="DocContent">
            <Outlet />
          </div>

          {/* on this page component */}
          {contextHeadings.length > 1 && (
            <div class="sticky my-5 xl:grid xl:h-[calc(100vh-4rem)] ">
              <div class="h-fit grid">
                {/* on this page btn, shows only on small screens*/}
                <button
                  class="rounded-lg text-lg bg-blue-1 dark:bg-dark-3 mb-3"
                  m="t-[-2rem]"
                  xl="rounded-none pb-2 border-l-solid mb-0 pt-0 bg-transparent dark:bg-transparent"
                  onclick={() => toggleContextLabels(!contextLabelsShown())}
                >
                  Page Contents
                  <div class="i-mdi-chevron-down-circle text-2xl xl:hidden text-slate-7">
                  </div>
                </button>

                {/* labels */}
                <div
                  text="slate-5"
                  class={`grid xl:grid py-3 xl:py-0 bg-slate-1 dark:bg-dark-3 xl:bg-transparent xl:dark-bg-transparent ${
                    contextLabelsShown() ? "" : "hidden"
                  }`}
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
