import { Route } from "@solidjs/router";
import { createEffect, onCleanup, onMount } from "solid-js";

import ContextTitles from "../ContextTitles";
import { news } from "./newsData";

import {
  assign_heading_ids,
  autoscroll_toID,
  contextHeadings,
  generateActiveContext,
} from "../../utils";

function NewsPage(props) {
  const { component } = props;

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

    window.addEventListener(
      "scroll",
      () => generateActiveContext("newsContent"),
    );
  });

  onCleanup(() =>
    window.removeEventListener(
      "scroll",
      () => generateActiveContext("newsContent"),
    )
  );

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
      <div id="newsContent">{component}</div>

      {/* on this page component */}
      {contextHeadings.length > 1 && <ContextTitles />}
    </div>
  );
}

function NewsRoutes() {
  return (
    <>
      {news.map((x) => (
        <Route
          path={x.link}
          element={<NewsPage component={x.component} />}
        />
      ))}
    </>
  );
}

export default NewsRoutes;
