import { Outlet } from "@solidjs/router";

import { createSignal } from "solid-js";

import Sidebar from "./doc_comps/Sidebar";

// for context bar on the right
export const [activeContext_Heading, setActiveContext_Heading] = createSignal(
  "",
);

export const generateActiveContext = () => {
  let docs_Elements = document.getElementById("DocContent")?.childNodes;

  let visible_Elements: Array<Array<number>> = [];
  let resultIndex = 0;

  docs_Elements?.forEach((el, index) =>
    visible_Elements.push([index, el.offsetTop])
  );

  for (let i = 0; i < visible_Elements.length; i++) {
    if (window.pageYOffset < visible_Elements[i][1]) {
      resultIndex = i;
      break;
    }
  }

  docs_Elements?.forEach((el, index) => {
    if (
      (el.localName == "h2" || el.localName == "h3") &&
      index <= resultIndex
    ) {
      setActiveContext_Heading(el.innerText);
    }
  });
};

window.addEventListener("scroll", () => generateActiveContext());

// final component!
function Docs() {
  return (
    <div class="grid grid-cols-[auto_1fr]">
      <Sidebar />
      <Outlet /> {/* doc content */}
    </div>
  );
}

export default Docs;
