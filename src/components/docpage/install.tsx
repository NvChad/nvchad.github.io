import { createEffect, createSignal } from "solid-js";
import create_copyIcon from "~/components/doc_comps/clipboard";

export const osInfos = [
  {
    name: "linux / macos",

    cmds: (
      <>
        <pre>
          <code class="hljs">
            git clone https://github.com/NvChad/starter ~/.config/nvim && nvim
          </code>
        </pre>
      </>
    ),
    icon: "i-mingcute:hashtag-fill",
  },

  {
    name: "flatpak",
    icon: "i-simple-icons:flatpak",
    cmds: (
      <>
        <pre>
          <code class="hljs">
            git clone https://github.com/NvChad/starter ~/.var/app/io.neovim.nvim/config/nvim && flatpak run io.neovim.nvim
          </code>
        </pre>
      </>
    ),
  },

  
  {
    name: "windows",
    icon: "i-mdi:windows",
    cmds: (
      <>
        <li>If you're using Command Prompt(CMD)</li>

        <pre>
          <code class="hljs">
            git clone https://github.com/NvChad/starter
            %USERPROFILE%\AppData\Local\nvim && nvim
          </code>
        </pre>

        <li>If you're using PowerShell(pwsh)</li>

        <pre>
          <code class="hljs">
            git clone https://github.com/NvChad/starter
            $ENV:USERPROFILE\AppData\Local\nvim; nvim
          </code>
        </pre>

        <b>If the above path doesnt work, try any of these paths :</b>
        <li>For CMD : %LOCALAPPDATA%\nvim </li>

        <pre>
          <code class="hljs">C:\Users\%USERNAME%\AppData\Local\nvim </code>
        </pre>

        <li>For PowerShell : $ENV:LocalAppData\nvim </li>

        <pre>
          <code class="hljs">C:\Users\$ENV:USERNAME\AppData\Local\nvim </code>
        </pre>
      </>
    ),
  },

  {
    name: "docker",
    icon: "i-nonicons:docker-16",
    cmd: `docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base wget --update
  git clone https://github.com/NvChad/starter ~/.config/nvim
  nvim
  '`,
  },
];

export const [os, setOS] = createSignal(osInfos[0]);

createEffect(() => {
  os();
  create_copyIcon("DocContent");
});

export default () => (
  <div flex="~ wrap" gap-5>
    {osInfos.map((x) => (
      <button
        capitalize="~"
        onClick={() => setOS(x)}
        class={
          os().name == x.name ? "bg-emerald2 dark:bg-sky3 dark:text-black" : ""
        }
      >
        <div class={x.icon}></div> {x.name}
      </button>
    ))}

    <div w="full" grid="~ gap4">
      {os()?.cmd && <pre class="hljs">{os()?.cmd}</pre>}
      {os()?.cmds && os().cmds}
    </div>
  </div>
);
