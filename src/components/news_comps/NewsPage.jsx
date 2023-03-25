import { createEffect, onCleanup, onMount } from "solid-js";

import ContextTitles from "../ContextTitles";

import {
  assign_heading_ids,
  autoscroll_toID,
  contextHeadings,
  generateActiveContext,
} from "../../utils";

export function NewsPage(props) {
  onMount(() => {
    const el = document.getElementById("newsContent");
    const imgs = el?.querySelectorAll("img");

    if (imgs) {
      imgs.forEach((img, index) => {
        // skip lazyloading first img
        if (index != 0) {
          img.setAttribute("loading", "lazy");
        }
      });
    }

    const onScroll = () => generateActiveContext("newsContent");
    window.addEventListener("scroll", onScroll);

    onCleanup(() => window.removeEventListener("scroll", onScroll));
  });

  //  run on route change
  createEffect(
    () => {
      setTimeout(() => {
        // create_copyIcon("DocContent");
        assign_heading_ids();
        generateActiveContext("newsContent");
        autoscroll_toID();
      }, 50);
    },
  );

  return (
    <div
      p="5 xl:10"
      class="box mx-auto flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]"
    >
      <div id="newsContent">{props.children}</div>

      {/* on this page component */}
      {contextHeadings.length > 1 && <ContextTitles />}
    </div>
  );
}
export default NewsPage;
