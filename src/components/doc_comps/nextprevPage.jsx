import { A, useLocation } from "@solidjs/router";
import sidebar_Items from "./sidebar_Items";

let sorted_lables = [];

sidebar_Items.forEach((el) => {
  if (!Array.isArray(el)) {
    el.items.forEach((labels) => {
      sorted_lables.push(labels);
    });
  } else {
    sorted_lables.push(el);
  }
});

/* generate link labels and hrefs from sidebar_Items
arr = [
 ...
 ["Walkthrough", "config/walkthrough"],
 ["Options", "config/options"],
 ...
]
*/

function generateTxt(direction, wantLink) {
  let result = "";
  let current_path = useLocation().pathname.replace(/^\/docs\//, "");

  sorted_lables.forEach((el, index) => {
    if (current_path == el[1] && sorted_lables[index + direction]) {
      result = sorted_lables[index + direction][wantLink ? 1 : 0];
    }
  });

  return result;
}

export default () => {
  const btnClass =
    "!bg-transparent text-blue-6 dark:text-blue-4  p-3 px-5 dark:border-dark-4";
  const border = "1 solid slate-2";

  return (
    <div flex justify-between>
      {/* previous page */}
      {generateTxt(-1)
        ? (
          <A href={generateTxt(-1, true)}>
            <button border={border} class={btnClass}>
              <div i-ph:arrow-left-bold></div>
              {generateTxt(-1)}
            </button>
          </A>
        )
        : <div></div>}

      {/* next page */}
      {generateTxt(1)
        ? (
          <A href={generateTxt(1, true)}>
            <button border={border} class={btnClass}>
              {generateTxt(1)}
              <div i-ph:arrow-right-bold></div>
            </button>
          </A>
        )
        : <div></div>}
    </div>
  );
};
