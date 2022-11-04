import { Route } from "@solidjs/router";
import { lazy } from "solid-js";
import sidebar_Items from "./sidebar_Items";

let routes_arr: Array<any> = [];

sidebar_Items.forEach((x) => {
  if (x.label) routes_arr = [...routes_arr, ...x.items];
  else {
    routes_arr.push(x);
  }
});

function createRouteName(str: string) {
  const strArr = str.split("/");
  const ParentRoute = strArr[strArr.length - 2] == "docs"
    ? ""
    : strArr[strArr.length - 2];

  return ParentRoute + "/" + strArr[strArr.length - 1].replace(/\.[^/.]+$/, "");
}

export default function () {
  let pages = import.meta.glob("../../../docs/**/*.md");

  return (
    <>
      {Object.keys(pages).map((key) => (
        <Route
          path={createRouteName(key)}
          component={lazy(pages[key])}
        />
      ))})
    </>
  );
}
