import { render } from "solid-js/web";

import "./css/style.css";
import App from "./components/App";
import { Router } from "@solidjs/router";

const root = document.getElementById("app");

// set site theme
const el = document.querySelector("html")!;
el.className = localStorage.theme;

render(() => (
  <Router>
    <App />
  </Router>
), root);
