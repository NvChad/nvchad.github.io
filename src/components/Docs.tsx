import { A, Outlet, useLocation } from "@solidjs/router";
import sidebar_Items from "./doc_comps/sidebar_Items";

import { createSignal, Show } from "solid-js";
import { FaSolidChevronDown, FaSolidChevronRight } from "solid-icons/fa";
import { isElement_Visible } from "../utils";

function NestedLabels(props: any) {
  const is_ActiveRoute =
    props.labels.filter((item: string) =>
      useLocation().pathname == `/docs/${item[1]}`
    ).length;

  const [showLinks, collapseLinks] = createSignal(
    is_ActiveRoute == 1 ? true : false,
  );

  return (
    <div class="flex flex-col items-start gap-5">
      <button
        onclick={() => collapseLinks(showLinks() ? false : true)}
        class="gap-20 bg-tintBlack p-2 px-3"
      >
        {props.BtnLabel} {showLinks()
          ? (
            <div class="bg-tintBlack2 p-2 rounded-full">
              <FaSolidChevronDown />
            </div>
          )
          : (
            <div class="bg-tintBlack2 p-2 rounded-full">
              <FaSolidChevronRight
              />
            </div>
          )}
      </button>

      {/* collapsable nested links */}
      <Show when={showLinks()}>
        <div class="grid pl-4 gap-3 border-tintBlack2 border-l rounded-none">
          {props.labels.map((x: any) => (
            <A activeClass="font-bold" href={x[1]}>{x[0]}</A>
          ))}
        </div>
      </Show>
    </div>
  );
}

function SideBar() {
  return (
    <aside class="h-screen sticky top-0 bg-whiteTint dark:bg-black2">
      <A href="/" class="flex items-center gap-3 font-semibold p-5 ">
        <img src="/logo.svg" alt="nvchad logo" class="w-7" />
        NvChad
      </A>

      {/* sidebar labels & links */}
      <div class="h-full flex flex-col gap-5 p-5 px-10">
        {sidebar_Items.map((item) => {
          return item.label
            ? <NestedLabels BtnLabel={item.label} labels={item.items} />
            : <A href={item[1]} activeClass="font-bold">{item[0]}</A>;
        })}
      </div>
    </aside>
  );
}

export const [activeContext_Heading, setActiveContext_Heading] = createSignal(
  "",
);

window.addEventListener("scroll", function () {
  let docs_Elements = document.getElementById("DocContent")?.childNodes;

  let visible_Elements: Array<number> = [];

  docs_Elements?.forEach((el, index) => {
    if (isElement_Visible(el)) visible_Elements.push(index);
  });

  docs_Elements?.forEach((el, index) => {
    if (
      (el.localName == "h2" || el.localName == "h3") &&
      index <= visible_Elements[0]
    ) {
      setActiveContext_Heading(el.innerText);
    }
  });
});

// final component!
function Docs() {
  return (
    <div class="grid grid-cols-[auto_1fr]">
      <SideBar />

      {/* doc content */}
      <Outlet />
    </div>
  );
}

export default Docs;
