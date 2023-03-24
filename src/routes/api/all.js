import { json } from "solid-start";
import { sidebarMap } from "~/components/doc_comps/sidebar_Items";
import { newsMap } from "~/components/news_comps/newsData";
export const GET = () =>
  json([
    ...Object.keys(newsMap),
    ...Object.keys(sidebarMap).map((v) => "/docs/" + v),
  ]);
