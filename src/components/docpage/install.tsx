import { createEffect, createSignal } from "solid-js";
import create_copyIcon from "~/components/doc_comps/clipboard";

export const osInfos = [
  {
    name: "linux / macos",
    cmd: "git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim",
    icon: "i-mingcute:hashtag-fill",
  },
  {
    name: "windows",
    icon: "i-mdi:windows",
    cmds: (
      <>
        <li>If you're using Command Prompt(CMD)</li>

        <pre class="hljs">
          git clone https://github.com/NvChad/NvChad
          %USERPROFILE%\AppData\Local\nvim --depth 1 && nvim
        </pre>

        <li>If you're using PowerShell(pwsh)</li>

        <pre class="hljs">
          git clone https://github.com/NvChad/NvChad
          $ENV:USERPROFILE\AppData\Local\nvim --depth 1 && nvim
        </pre>

        <b>If the above path doesnt work, try any of these paths :</b>
        <li>For CMD : %LOCALAPPDATA%\nvim </li>
        <pre class="hljs">C:\Users\%USERNAME%\AppData\Local\nvim</pre>
        <li>For CMD : %LOCALAPPDATA%\nvim </li>
        <pre class="hljs">C:\Users\$ENV:USERNAME\AppData\Local\nvim</pre>
      </>
    ),
  },

  {
    name: "docker",
    icon: "i-nonicons:docker-16",
    cmd: `docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base wget --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
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
        onClick={() => setOS(x)}
        class={
          os().name == x.name ? "bg-emerald2 dark:bg-sky3 dark:text-black" : ""
        }
      >
        <div class={x.icon}></div> {x.name}
      </button>
    ))}

    <div w="full" grid='~ gap3'>
      {os()?.cmd && <pre class="hljs">{os()?.cmd}</pre>}
      {os()?.cmds && os().cmds}
    </div>
  </div>
);
