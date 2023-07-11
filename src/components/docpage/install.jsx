import { createSignal } from "solid-js";

export const [osname, setOS] = createSignal("Linux / Macos");

// installer commands
const unix_cmd =
  "git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim";

const windows_cmd = [
  "git clone https://github.com/NvChad/NvChad $HOME\\AppData\\Local\\nvim --depth 1 && nvim",
  `# if the above path doesnt work, try any of these paths :\n
%LOCALAPPDATA%\\nvim\ \n
%USERPROFILE%\AppData\Local\\nvim \n
C:\Users\%USERNAME%\AppData\Local\\nvim`,
];

export const docker_cmd =
  `docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base wget --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
  nvim
  '`;

export const [oscmd, setOSCMD] = createSignal(unix_cmd);

const Btn = (props) => {
  const { cmd, os, icon } = props;

  return (
    <button
      class={`!text-vsm ${
        osname() == os
          ? "text-white-1 bg-blue-6 dark:bg-blue-3 dark:text-dark-1"
          : "bg-slate-1"
      }`}
      onclick={() => {
        setOS(os);
        setOSCMD(cmd);
      }}
    >
      <div class={icon} text-base></div>
      {os}
    </button>
  );
};

export default () => {
  return (
    <div grid gap-5>
      <div flex flex-wrap class="[&_button]:p-3" gap-3>
        <Btn os="Linux / Macos" cmd={unix_cmd} icon="i-mingcute:hashtag-fill" />
        <Btn os="Windows" cmd={windows_cmd} icon="i-mdi:windows" />
        <Btn os="Docker" cmd={docker_cmd} icon="i-nonicons:docker-16" />
      </div>

      {typeof (oscmd()) === "string"
        ? <pre class="hljs"> {oscmd()}</pre>
        : oscmd().map((x) => <pre class="hljs"> {x}</pre>)}
    </div>
  );
};
