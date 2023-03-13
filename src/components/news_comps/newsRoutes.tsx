import { Route } from "@solidjs/router";
import { createEffect, createSignal, on, onCleanup, onMount } from "solid-js";

import VersionTwo from "../../../news/v2_0.mdx";
import ContextTitles from "../ContextTitles";

import {
  assign_heading_ids,
  autoscroll_toID,
  contextHeadings,
  generateActiveContext,
} from "../../utils";

// data
export const blogs: any = [
  {
    heading: "NvChad v2.0 released!",
    details:
      "This release builds gets on with new UI features in our ui plugin & usage of lazy.nvim. Improvements in startuptime & cachifying our theme plugin,  base46 totally",
    component: <VersionTwo />,
    link: "/news/v2.0",
    cover: "v2.0.webp",
  },
];

function NewsPage(props: any) {
  const { component } = props;

  onMount(() =>
    window.addEventListener(
      "scroll",
      () => generateActiveContext("newsContent"),
    )
  );

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
      {blogs.map((x: any) => (
        <Route
          path={x.link}
          element={<NewsPage component={x.component} />}
        />
      ))}
    </>
  );
}

export default NewsRoutes;
