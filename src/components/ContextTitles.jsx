import { A, useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";

import {
  activeContext_Heading,
  contextHeadings,
  setActiveContext_Heading,
} from "../utils";

// style inactive/active title differently
function generateStyles(x) {
  let styles =
    `rounded-r-lg py-2  px-5 text-darkgrey xl:border-solid border-0 border-l-2 border-slate-2 dark:border-dark-3 ${
      activeContext_Heading() == x[1]
        ? "!border-blue-5 bg-slate-2 xl:bg-sky-1 !text-blue-7 font-medium dark:bg-dark-3 dark:!text-blue-3 dark:border-blue-4"
        : ""
    }`;

  return x[0] == "h3" ? `pl-10 ${styles}` : `${styles}`;
}

// for context bar on the right
function ContextTitles() {
  const [contextLabelsShown, toggleContextLabels] = createSignal(false);

  return (
      <div h-fit mt-6 xl='sticky top-30'>
        {/* on this page btn, shows only on small screens*/}
        <button
          class="rounded-lg text-lg bg-blue-1 dark:bg-dark-3 mb-3 w-full"
          m="t-[-2rem]"
          xl="rounded-none pb-2 border-l-solid mb-0 pt-0 bg-transparent dark:bg-transparent"
          onclick={() => toggleContextLabels(!contextLabelsShown())}
        >
          Page Contents
          <div class="i-mdi-chevron-down-circle text-2xl xl:hidden text-slate-7 dark:bg-blue-3">
          </div>
        </button>

        {/* labels */}
        <div
          text="slate-5"
          class={`grid xl:grid py-3 xl:py-0 bg-slate-1 dark:bg-dark-3 xl:bg-transparent xl:dark-bg-transparent ${
            contextLabelsShown() ? "" : "hidden"
          }`}
        mb-5
        >
          {contextHeadings.map((x) => (
            <A
              href={`${useLocation().pathname}#${
                x[1].replaceAll(/[ .&]/g, "_").toLowerCase()
              }`}
              class={generateStyles(x)}
              onclick={() => setActiveContext_Heading(x[1])}
            >
              {x[1]}
            </A>
          ))}
        </div>
      </div>
  );
}

export default ContextTitles;
