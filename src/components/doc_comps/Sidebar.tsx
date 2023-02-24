import { A, useLocation } from "@solidjs/router";
import sidebar_Items from "../doc_comps/sidebar_Items";

import { createSignal, Show } from "solid-js";
import { sideBarShown } from "../Docs";

function NestedLabels(props: any) {
  const is_ActiveRoute = props.labels.filter(
    (item: string) => useLocation().pathname == `/docs/${item[1]}`,
  ).length;

  const [showLinks, collapseLinks] = createSignal(
    is_ActiveRoute == 1 ? true : false,
  );

  return (
    <div class="grid gap-5">
      <button
        onclick={() => collapseLinks(showLinks() ? false : true)}
        class="rounded-full gap-20 bg-sky-1 text-gray-700 dark:bg-tintBlack-1 dark:text-white2 font-medium p-2 px-3"
      >
        <div class="vertCentered">
          <div class={props.BtnLabel[1]}></div> {props.BtnLabel[0]}
        </div>

        {/* chevron icons! */}
        <div
          class={`text-xl bg-slate-6 text-white-1 dark:bg-tintBlack-2 p-1 rounded-full
                  ${showLinks() ? "dark:text-red-300" : ""}`}
        >
          <div
            class={`i-line-md:chevron-small-${showLinks() ? "down" : "right"}`}
          >
          </div>
        </div>
      </button>

      {/* collapsable nested links */}
      <Show when={showLinks()}>
        <div class="grid pl-4 gap-3 dark:border-tintBlack-2 border-l rounded-none">
          {props.labels.map((x: any) => (
            <A
              activeClass="text-slate-9 dark:text-red-300 font-medium"
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
  const styles = `h-full absolute xl:sticky z-10 top-0  xl:flex flex-col
    h-screen top-0 bg-white-1 dark:bg-dark-2
     text-gray-600 dark:text-grey rounded-none`;

  const LinkStyles = "pl-0 vertCentered";

  return (
    <div class={styles} hidden={sideBarShown() ? false : true}>
      {/* sidebar labels & links */}
      <div h-full flex flex-col gap-5 class="[&_*]:text-base">
        {sidebar_Items.map((item: any) => {
          return item.label
            ? <NestedLabels BtnLabel={item.label} labels={item.items} />
            : (
              <A
                href={item[1]}
                inactiveClass={LinkStyles}
                activeClass={`${LinkStyles} font-medium text-red-400 dark:text-red-300`}
              >
                <div class={item[2]}></div>
                {item[0]}
              </A>
            );
        })}
      </div>
    </div>
  );
}

export default SideBar;
