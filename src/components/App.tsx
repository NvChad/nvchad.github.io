import { Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

import Navbar from "./Navbar";
import Home from "./Home";
import DocRoutes from "./doc_comps/DocRoutes";
import Themes from "./themes";
import NewsRoutes from "./news_comps/newsRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />

        <Route path="/docs" component={lazy(() => import("./Docs"))}>
          <DocRoutes />
        </Route>

        <Route path="/themes" component={Themes} />
        <Route path="/news" component={lazy(() => import("./News"))} />
        <NewsRoutes />
      </Routes>
    </>
  );
}

export default App;
