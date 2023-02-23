import { Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

import Navbar from "./Navbar";
import Home from "./Home";
import DocRoutes from "./doc_comps/DocRoutes";

function App() {
  return (
    <>
       <Navbar />

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/docs" component={lazy(() => import("./Docs"))}>
          <DocRoutes />
        </Route>
      </Routes>
    </>
  );
}

export default App;
