import { onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";

const Docs = () => {
  onMount(() => {
    const navigate = useNavigate();
    navigate("/docs/quickstart/install", { replace: true });
  });

  return <></>;
};

export default Docs;
