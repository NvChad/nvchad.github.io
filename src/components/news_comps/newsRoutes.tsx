import { Route } from "@solidjs/router";

import VersionTwo from "../../../news/v2_0.mdx";

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

function NewsRoutes() {
  return (
    <>
      {blogs.map((x: any) => (
        <Route
          path={x.link}
          element={
            <div p-10 class="max-w-[1400px] mx-auto">{x.component}</div>
          }
        />
      ))}
    </>
  );
}

export default NewsRoutes;
