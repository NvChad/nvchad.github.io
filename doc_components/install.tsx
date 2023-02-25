import { createSignal } from "solid-js";

const [osname, setOS] = createSignal("unix");

// installer commands
const unix_cmd =
  "git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim";

const windows_cmd =
  "git clone https://github.com/NvChad/NvChad $HOME\\AppData\\Local\\nvim --depth 1 && nvim";

const [oscmd, setOSCMD] = createSignal(unix_cmd);

export default () => {
  return (
    <div grid gap-5>
      <div class="[&_*]:rounded-lg [&_*]:p-4  [&_*]:w-fit vertCentered !gap-5">
        {/* unix btn */}
        <button
          bg={osname() == "unix" ? "blue-2" : ""}
          onclick={() => {
            setOS("unix");
            setOSCMD(unix_cmd);
          }}
        >
          Linux / MacOS
        </button>

        {/* windows btn */}
        <button
          bg={osname() == "windows" ? "blue-2" : ""}
          onclick={() => {
            setOS("windows");
            setOSCMD(windows_cmd);
          }}
        >
          Windows
        </button>
      </div>

      <pre class="hljs">{oscmd}</pre>
    </div>
  );
};
