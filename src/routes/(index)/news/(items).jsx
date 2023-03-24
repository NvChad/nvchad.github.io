import { Outlet } from "solid-start";
import NewsPage from "~/components/news_comps/NewsPage";

export default function Items() {
  return (
    <NewsPage>
      <Outlet />
    </NewsPage>
  );
}
