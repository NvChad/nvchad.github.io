import { A, useLocation } from "@solidjs/router";
import sidebar_Items from "../doc_comps/sidebar_Items";

import { createSignal, Show } from "solid-js";
import { sideBarShown } from "~/routes/(index)/docs";

function NestedLabels(props) {
  const is_ActiveRoute = props.labels.filter(
    (item) => useLocation().pathname == `/docs/${item[1]}`,
  ).length;

  const [showLinks, collapseLinks] = createSignal(
    is_ActiveRoute == 1 ? true : false,
  );

  return (
    <div class="grid gap-5">
      {/* collapse btn */}
      <button
        onclick={() => collapseLinks(showLinks() ? false : true)}
        class="rounded-xl gap-20 bg-sky-1 text-slate-7 dark:bg-dark-3 dark:text-white-2 p-2 w-full"
      >
        <div class="vertCentered" font-medium>
          <div class={props.BtnLabel[1]}></div> {props.BtnLabel[0]}
        </div>

        {/* chevron icons! */}
        <div
          class={`text-xl bg-slate-6 text-slate-1 dark:bg-dark-4 p-1 rounded-full
                  ${showLinks() ? "dark:text-red-3" : "dark:text-white-2"}`}
        >
          {showLinks()
            ? <div i-octicon:chevron-down-12></div>
            : <div i-octicon:chevron-right-12></div>}
        </div>
      </button>

      {/* collapsable nested links */}
      <Show when={showLinks()}>
        <div
          class="grid pl-4 gap-3 rounded-none"
          border="0 l solid slate-2 dark:dark-4"
          ml-3
          pl-5
        >
          {props.labels.map((x) => (
            <A
              activeClass="text-slate-7 dark:text-white-2 font-bold"
              href={x[1]}
            >
              {x[0]}
            </A>
          ))}
        </div>
      </Show>
    </div>
  );
}

function SideBar() {
  const styles = `h-fit fixed xl:sticky z-10 xl:top-24 xl:flex flex-col
     bg-white-1 dark:bg-dark-2
     text-gray-600 dark:text-grey rounded-xl p-5 xl:p-0`;

  return (
    <aside class={styles} hidden={sideBarShown() ? false : true}>
      {/* sidebar labels & links */}
      <div h-full flex flex-col gap-5 class="[&_*]:text-base dark:text-slate-4">
        {sidebar_Items.map((item) => {
          return item.label
            ? <NestedLabels BtnLabel={item.label} labels={item.items} />
            : (
              <A
                href={item[1]}
                class="vertCentered"
                activeClass="font-medium text-blue-5 dark:text-blue-3"
              >
                <div class={item[2]}></div>
                {item[0]}
              </A>
            );
        })}
      </div>
    </aside>
  );
}

export default SideBar;
