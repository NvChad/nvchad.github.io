import { Route } from "@solidjs/router";
import sidebar_Items from "./sidebar_Items";

let routes_arr: Array<any> = [];

sidebar_Items.forEach((x) => {
  if (x.label) routes_arr = [...routes_arr, ...x.items];
  else {
    routes_arr.push(x);
  }
});

export default function () {
  return (
    <>
      {routes_arr.map((x) => (
        <Route
          path={x[1]}
          component={typeof (x[2]) != "string" ? x[2] : x[3]}
        />
      ))}
    </>
  );
}
