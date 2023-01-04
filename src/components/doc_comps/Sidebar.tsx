import { A, useLocation } from "@solidjs/router";
import sidebar_Items from "../doc_comps/sidebar_Items";

import { createSignal, Show } from "solid-js";
import { showSidebar, sideBarShown } from "../Docs";

function NestedLabels(props: any) {
  const is_ActiveRoute = props.labels.filter(
    (item: string) => useLocation().pathname == `/docs/${item[1]}`
  ).length;

  const [showLinks, collapseLinks] = createSignal(
    is_ActiveRoute == 1 ? true : false
  );

  return (
    <div class="grid gap-5">
      <button
        onclick={() => collapseLinks(showLinks() ? false : true)}
        class="rounded-full gap-20 bg-blue-100 text-gray-700 dark:bg-tintBlack-1 dark:text-white2 font-medium p-2 px-3"
      >
        <div class="vertCentered">
          <div class={props.BtnLabel[1]}></div> {props.BtnLabel[0]}
        </div>

        {/* dynamically show chevron */}

        <div
          class={`text-xl bg-blue-200 dark:bg-tintBlack-2 p-1 rounded-full
                  ${showLinks() ? "dark:text-red-300" : ""}`}
        >
          <div
            class={
              showLinks() ? "i-mdi-chevron-down" : "i-ic-round-chevron-right"
            }
          ></div>
        </div>
      </button>

      {/* collapsable nested links */}
      <Show when={showLinks()}>
        <div class="grid pl-4 gap-3 dark:border-tintBlack-2 border-l rounded-none">
          {props.labels.map((x: any) => (
            <A
              activeClass="text-red-400 dark:text-red-300 font-medium"
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
  const styles = `h-full absolute xl:sticky z-10 top-0  xl:flex flex-col shadow-xl
    h-screen top-0 p-8 px-8 
    bg-white-1 text-gray-600 dark:bg-black-2 dark:text-grey rounded-none`;

  const LinkStyles = "pl-0 vertCentered";

  return (
    <div class={styles} hidden={sideBarShown() ? false : true}>
      {/* brand logo */}
      <A
        href="/"
        class="vertCentered gap-3 mb-8 text-3xl m-auto justify-between xl:justify-center"
      >
        <div class="vertCentered">
          <img src="/logo.svg" alt="nvchad logo" w-10 />
          NvChad
        </div>

        {/* close btn */}
        <button
          class="bg-tintBlack-2 xl:hidden dark:text-red-300 w-fit p-2 rounded-full"
          onclick={(e) => {
            e.preventDefault();
            showSidebar(false);
          }}
        >
          <div i-material-symbols-close-rounded></div>
        </button>
      </A>

      {/* sidebar labels & links */}
      <div h-full flex flex-col gap-5 class='[&_*]:text-base'>
        {sidebar_Items.map((item: any) => {
          return item.label ? (
            <NestedLabels BtnLabel={item.label} labels={item.items} />
          ) : (
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
