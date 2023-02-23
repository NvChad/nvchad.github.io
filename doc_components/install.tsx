import { createSignal } from "solid-js";

const [txt, setxt] = createSignal("abc");

export default () => {
  return (
    <button p-3 rounded-2 w-fit onclick={() => setxt("hi")}>
      {txt}
    </button>
  );
};
