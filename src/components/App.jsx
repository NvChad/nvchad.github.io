import { Route, Routes } from "@solidjs/router";

import Navbar from "./Navbar";
import Home from "./Home";
import DocRoutes from "./doc_comps/DocRoutes";
import Themes from "./themes";
import NewsRoutes from "./news_comps/newsRoutes";

import Docs from "./Docs";
import News from "./News";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />

        <Route path="/docs" component={Docs}>
          <DocRoutes />
        </Route>

        <Route path="/themes" component={Themes} />
        <Route path="/news" component={News} />
        <NewsRoutes />
      </Routes>
    </>
  );
}

export default App;
