import { createEffect, createSignal, on, onCleanup, onMount } from "solid-js";
import Sidebar, { mobSideBar } from "~/components/doc_comps/Sidebar";
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

// final component!
function Docs(props) {
  onMount(() => {
    window.addEventListener("scroll", () =>
      generateActiveContext("DocContent"),
    );

    onCleanup(() =>
      window.removeEventListener("scroll", () =>
        generateActiveContext("DocContent"),
      ),
    );
  });

  //  run on route change
  createEffect(() => {
    const pathname = props.location.pathname;
    create_copyIcon("DocContent");
    assign_heading_ids();
    generateActiveContext("DocContent");
    autoscroll_toID();
  });

  return (
    <div
      grid="~ xl:cols-[auto_1fr]"
      class="max-w-[1700px] mx-auto mb-8 p-4 py6 relative"
    >
      <Sidebar />

      <main class={`xl:blur-none ${mobSideBar() ? "blur-sm" : ""}`}>
        <div class="flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]">
          <div xl:px-10>
            <div id="DocContent" w-full>
              {props.children}
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
