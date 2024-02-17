// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import Navbar from "~/components/Navbar";
import "virtual:uno.css";
import "~/css/style.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <main>
          <Navbar />
          <Suspense>{props.children}</Suspense>
        </main>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
