import { createSignal } from "solid-js";

const [osname, setOS] = createSignal("Linux / Macos");

// installer commands
const unix_cmd =
  "git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim";

const windows_cmd =
  "git clone https://github.com/NvChad/NvChad $HOME\\AppData\\Local\\nvim --depth 1 && nvim";

const docker_cmd = `docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep alpine-sdk --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
  nvim
  '`;

const [oscmd, setOSCMD] = createSignal(unix_cmd);

const Btn = (props: any) => {
  const { cmd, os } = props;

  return (
    <button
      bg={osname() == os ? "blue-1 dark:blue-5" : ""}
      onclick={() => {
        setOS(os);
        setOSCMD(cmd);
      }}
    >
      {os}
    </button>
  );
};

export default () => {
  return (
    <div grid gap-5>
      <div class="[&_*]:rounded-lg [&_*]:px-5 [&_*]:p-3  [&_*]:w-fit vertCentered !gap-5">
        <Btn os="Linux / Macos" cmd={unix_cmd} />
        <Btn os="Windows" cmd={windows_cmd} />
        <Btn os="Docker" cmd={docker_cmd} />
      </div>

      <pre class="hljs">{oscmd}</pre>
    </div>
  );
};
