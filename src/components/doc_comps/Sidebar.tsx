import { A, useLocation } from "@solidjs/router";
import sidebar_Items from "../doc_comps/sidebar_Items";

import { createSignal, Show } from "solid-js";
import { FaSolidChevronDown, FaSolidChevronRight } from "solid-icons/fa";

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
            <div class="bg-tintBlack2 p-2 rounded-full text-red-300">
              <FaSolidChevronDown />
            </div>
          )
          : (
            <div class="bg-tintBlack2 p-2 rounded-full">
              <FaSolidChevronRight />
            </div>
          )}
      </button>

      {/* collapsable nested links */}
      <Show when={showLinks()}>
        <div class="grid pl-4 gap-3 border-tintBlack2 border-l rounded-none">
          {props.labels.map((x: any) => (
            <A activeClass="text-red-300" href={x[1]}>{x[0]}</A>
          ))}
        </div>
      </Show>
    </div>
  );
}

function SideBar() {
  return (
    <aside class="h-screen sticky top-0 bg-whiteTint dark:bg-black2 text-grey p-8 px-8 max-w-lg">
      <A href="/" class="flex items-center gap-3 mb-8 text-3xl m-auto justify-center">
        <img src="/logo.svg" alt="nvchad logo" class="w-10" />
        NvChad
      </A>

      {/* sidebar labels & links */}
      <div class="h-full flex flex-col gap-5">
        {sidebar_Items.map((item: any) => {
          return item.label
            ? <NestedLabels BtnLabel={item.label} labels={item.items} />
            : (
              <A href={item[1]} class='pl-3' activeClass="font-semibold text-white">
                {item[0]}
              </A>
            );
        })}
      </div>
    </aside>
  );
}

export default SideBar;
