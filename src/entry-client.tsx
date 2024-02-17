import { mount, StartClient } from "@solidjs/start/client";

mount(() => <StartClient />, document.getElementById("app")!);

document.documentElement.className = localStorage.theme || "light";
