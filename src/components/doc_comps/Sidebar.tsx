import { A, useLocation } from "@solidjs/router";
import { createSignal, Show } from "solid-js";

export const sidebar_Items = [
  {
    label: ["Quickstart", "i-mingcute:safe-flash-fill"],
    items: [
      ["Install", "quickstart/install"],
      ["Post Install", "quickstart/post-install"],
      ["Learn basic Lua", "quickstart/learn-lua"],
    ],
  },

  {
    label: ["Customize", "i-line-md:cog-filled"],
    items: [
      ["Walkthrough", "config/walkthrough"],
      ["Manage Plugins", "config/plugins"],
      ["LSP Configuration", "config/lsp"],
      ["Mappings", "config/mappings"],
      ["Snippets", "config/snippets"],
      ["UI Plugin", "config/nvchad_ui"],
      ["Theming", "config/theming"],
    ],
  },

  ["Features", "features", "i-tabler:server-cog"],
  ["Recipes", "recipes", "i-mingcute:tool-fill"],
  ["Contributing", "contribute", "i-mdi-github"],
  ["Faq", "faq", "i-octicon:question-16"],
  ["Credits", "credits", "i-line-md:heart"],
];

export const [mobSideBar, setMobSidebar] = createSignal(false);

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
        class="rounded-xl gap-20 bg-blue-1 text-slate-7 dark:bg-dark-3 dark:text-white-2 p-2 w-full"
      >
        <div class="vertCentered" font-medium>
          <div class={props.BtnLabel[1]}></div> {props.BtnLabel[0]}
        </div>

        {/* chevron icons! */}
        <div
          class={`bg-blue-2 dark:bg-dark-4 p-1 rounded-full
                  ${showLinks() ? "dark:text-red-3" : "dark:text-white-2"}`}
        >
          {showLinks() ? (
            <div i-jam:chevron-down />
          ) : (
            <div i-jam:chevron-right />
          )}
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
  const styles = `h-fit xl:sticky z-10 xl:top-24 xl:flex flex-col
     bg-white-1 dark:bg-dark-2
     text-gray-600 dark:text-grey rounded-xl w-full lt-xl:pb5`;

  return (
    <aside class={styles} hidden={mobSideBar() ? false : true}>
      {/* sidebar labels & links */}
      <div h-full flex flex-col gap-5 class="[&_*]:text-base dark:text-slate-4">
        {sidebar_Items.map((item) => {
          return item.label ? (
            <NestedLabels BtnLabel={item.label} labels={item.items} />
          ) : (
            <A
              href={item[1]}
              class="vertCentered"
              activeClass="font-medium text-blue dark:text-blue-3"
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
