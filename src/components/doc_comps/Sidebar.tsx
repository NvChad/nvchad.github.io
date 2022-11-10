import { A, useLocation } from "@solidjs/router";
import sidebar_Items from "../doc_comps/sidebar_Items";

import { createSignal, Show } from "solid-js";
import { FaSolidChevronDown, FaSolidChevronRight } from "solid-icons/fa";
import { CgClose } from "solid-icons/cg";
import { showSidebar, sideBarShown } from "../Docs";

function NestedLabels(props: any) {
  const is_ActiveRoute =
    props.labels.filter((item: string) =>
      useLocation().pathname == `/docs/${item[1]}`
    ).length;

  const [showLinks, collapseLinks] = createSignal(
    is_ActiveRoute == 1 ? true : false,
  );

  return (
    <div class="grid gap-5">
      <button
        onclick={() => collapseLinks(showLinks() ? false : true)}
        class="gap-20 bg-blue-100 text-gray-700 dark:bg-tintBlack dark:text-white2 font-medium p-2 px-3"
      >
        <div class="vertCentered">{props.BtnLabel[1]} {props.BtnLabel[0]}</div>

        {/* dynamically show chevron */}
        <Show
          when={showLinks()}
          fallback={
            <div class="bg-blue-200 dark:bg-tintBlack2 p-2 rounded-full">
              <FaSolidChevronRight />
            </div>
          }
        >
          <div class="bg-blue-200 p-2 rounded-full dark:bg-tintBlack2 dark:text-red-300">
            <FaSolidChevronDown />
          </div>
        </Show>
      </button>

      {/* collapsable nested links */}
      <Show when={showLinks()}>
        <div class="grid pl-4 gap-3 dark:border-tintBlack2 border-l rounded-none">
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
  const styles = `h-full absolute z-10 lg:sticky xl:flex flex-col shadow-xl
    h-screen top-0 p-8 px-8 
    bg-white text-gray-600 dark:bg-black2 dark:text-grey rounded-none`;

  const LinkStyles = "pl-0 vertCentered";

  return (
    <div class={sideBarShown() ? `${styles}` : `hidden ${styles}`}>
      {/* brand logo */}
      <A
        href="/"
        class="vertCentered gap-3 mb-8 text-3xl m-auto justify-between xl:justify-center"
      >
        <div class="vertCentered">
          <img src="/logo.svg" alt="nvchad logo" class="w-10" />
          NvChad
        </div>

        <button
          class="xl:hidden dark:text-red-300 w-fit p-2 rounded-full"
          onclick={(e) => {
            e.preventDefault();
            showSidebar(false);
          }}
        >
          <CgClose />
        </button>
      </A>

      {/* sidebar labels & links */}
      <div class="h-full flex flex-col gap-5">
        {sidebar_Items.map((item: any) => {
          return item.label
            ? <NestedLabels BtnLabel={item.label} labels={item.items} />
            : (
              <A
                href={item[1]}
                inactiveClass={LinkStyles}
                activeClass={`${LinkStyles} font-medium text-red-400 dark:text-red-300`}
              >
                {item[2]}
                {item[0]}
              </A>
            );
        })}
      </div>
    </div>
  );
}

export default SideBar;
