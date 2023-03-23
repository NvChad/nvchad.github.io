import { Dynamic } from "solid-js/web";
import { useParams } from "solid-start";
import { sidebarMap } from "~/components/doc_comps/sidebar_Items";

export default function () {
  const params = useParams();
  return <Dynamic component={sidebarMap[params.path]} />;
}
