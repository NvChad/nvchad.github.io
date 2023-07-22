import { Outlet, useLocation } from "solid-start";
import { createEffect, createSignal, on, onCleanup, onMount } from "solid-js";
import Sidebar from "~/components/doc_comps/Sidebar";
import NextPrevPageBtns from "~/components/doc_comps/nextprevPage";

import "~/css/hljs.css";
import "~/css/markdown.css";

import create_copyIcon from "~/components/doc_comps/clipboard";

import {
  assign_heading_ids,
  autoscroll_toID,
  contextHeadings,
  generateActiveContext,
} from "~/utils";

import ContextTitles from "~/components/ContextTitles";

export const [sideBarShown, showSidebar] = createSignal(false);

// final component!
function Docs() {
  onMount(() => {
    window.addEventListener(
      "scroll",
      () => generateActiveContext("DocContent"),
    );

    onCleanup(() =>
      window.removeEventListener(
        "scroll",
        () => generateActiveContext("DocContent"),
      )
    );
  });

  //  run on route change
  createEffect(
    on(
      () => useLocation().pathname,
      () => {
        setTimeout(() => {
          create_copyIcon("DocContent");
          assign_heading_ids();
          generateActiveContext("DocContent");
          autoscroll_toID();
        }, 50);
      },
    ),
  );

  return (
    <div grid class="xl:grid-cols-[auto_1fr] max-w-[1700px] mx-auto mb-8 px-4">
      <Sidebar />

      <main class="xl:blur-none" blur={sideBarShown() ? "sm" : ""}>
        <div class="flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]" mt-6>
          <div xl:px-10>
            <div id="DocContent" w-full>
              <Outlet />
            </div>
            <NextPrevPageBtns />
          </div>

          {/* on this page component */}
          {contextHeadings.length > 1 && <ContextTitles />}
        </div>
      </main>
    </div>
  );
}

export default Docs;
