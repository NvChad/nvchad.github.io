import { Dynamic } from "solid-js/web";
import { useLocation } from "solid-start";
import { newsMap } from "~/components/news_comps/newsData";
import NewsPage from "~/components/news_comps/NewsPage";

export default function NewsRoutes() {
  const location = useLocation();
  return (
    <NewsPage>
      <Dynamic component={newsMap[location.pathname]} />
    </NewsPage>
  );
}
