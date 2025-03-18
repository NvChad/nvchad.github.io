import { createEffect, createSignal } from "solid-js";
import create_copyIcon from "~/components/doc_comps/clipboard";

export const osNeovimInstall = [
  {
    name: "Arch Linux",

    cmds: (
      <>
        Arch Linux users can directly install neovim from the official repositories.
        <pre>
          <code class="hljs">
            sudo pacman -S neovim
          </code>
        </pre>
      </>
    ),
    icon: "i-devicon-plain:archlinux",
  },

  {
    name: "Gentoo Linux",
    icon: "i-mdi:gentoo",
    cmds: (
      <>
        Gentoo Linux users can directly install neovim from the official repositories.
        <pre>
          <code class="hljs">
            sudo emerge --av app-editors/neovim
          </code>
        </pre>
      </>
    ),
  },

  {
    name: "Tarball",
    icon: "i-octicon:file-zip-24",
    cmds: (
      <>
        If you're using a distribution like Debian, Kali Linux, or any other distro that does not have Neovim version >= 0.10.0 in the official repositories, you will need to install it manually or use other third-party package managers. Here is an example of using Neovim v0.10.4.
        <pre>
          <code class="hljs">

            {`wget https://github.com/neovim/neovim/releases/download/v0.10.4/nvim-linux-x86_64.tar.gz
tar -xzvf nvim-linux-x86_64.tar.gz
sudo mv nvim-linux-x86_64 /usr/local/
sudo ln -s /usr/local/nvim-linux-x86_64/bin/nvim /usr/local/bin/nvim

nvim --version # check neovim version`}
          </code>
        </pre>
      </>
    ),
  },
  
  {
      name: "Flatpak",
      icon: "i-simple-icons:flatpak",
      cmds: (
        <>
          Flatpak users can install Neovim using the flatpak package manager.
          <pre>
            <code class="hljs">
            flatpak install flathub io.neovim.nvim
            </code>
          </pre>
        </>
      ),
  },

  {
      name: "Snap",
      icon: "i-simple-icons:snapcraft",
      cmds: (
        <>
          Snap users can install Neovim using the snap package manager.
          <pre>
            <code class="hljs">
            sudo snap install nvim
            </code>
          </pre>
        </>
      ),
  },
  

  {
    name: "Windows",
    icon: "i-mingcute:windows-fill",
    cmds: (
      <>
        Windows user can install Neovim using the scoop package manager.
        <pre>
        <code class="hljs">
          {`scoop bucket add main
scoop install neovim`}
        </code>
        </pre>
      </>
    ),
    },

  {
    name: "MacOS",
    icon: "i-wpf:macos",
    cmds: (
      <>
        MacOS users can install Neovim using the Homebrew package manager.
        <pre>
          <code class="hljs">
            brew install neovim
          </code>
        </pre>
      </>
    ),
    },

];

export const [os, setOS] = createSignal(osNeovimInstall[0]);

createEffect(() => {
  os();
  create_copyIcon("DocContent");
});

export default () => (
  <div flex="~ wrap" gap-5>
    {osNeovimInstall.map((x) => (
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
