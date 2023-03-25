import { mount, StartClient } from "solid-start/entry-client";

document.documentElement.className = localStorage.theme || "light";

mount(() => <StartClient />, document);
