import "~/css/hljs.css";
import "~/css/markdown.css";

import { createEffect, onCleanup, onMount, Show } from "solid-js";
import { useLocation } from "@solidjs/router";
import create_copyIcon from "~/components/doc_comps/clipboard";

import ContextTitles from "~/components/ContextTitles";

import {
  assign_heading_ids,
  autoscroll_toID,
  contextHeadings,
  generateActiveContext,
} from "~/utils";

const Layout = (props) => {
  onMount(() => {
    const el = document.getElementById("DocContent");
    const imgs = el?.querySelectorAll("img");

    if (imgs) {
      imgs.forEach((img, index) => {
        // skip lazyloading first img
        if (index != 0) {
          img.setAttribute("loading", "lazy");
        }
      });
    }

    const onScroll = () => generateActiveContext("DocContent");
    window.addEventListener("scroll", onScroll);

    onCleanup(() => window.removeEventListener("scroll", onScroll));
  });

  //  run on route change
  createEffect(() => {
    const pathname = props.location.pathname;
    create_copyIcon("DocContent");
    assign_heading_ids();
    generateActiveContext("DocContent");
    autoscroll_toID();
  });

  const location = useLocation();

  return (
    <div
      p="5 xl:10"
      class="box mx-auto flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]"
      gap='xl:10'
    >
      <Show
        when={!["/news", "/news/"].includes(location.pathname)}
        fallback={props.children}
      >
        <div id="DocContent" class="news" w-full>
          {props.children}
        </div>

        {contextHeadings.length > 1 && <ContextTitles />}
      </Show>
    </div>
  );
};
export default Layout;
