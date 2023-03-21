import Install from "../../../docs/quickstart/install.mdx";
import PostInstall from "../../../docs/quickstart/post-install.mdx";
import LearnLua from "../../../docs/quickstart/learn-lua.mdx";

import Walkthrough from "../../../docs/config/Walkthrough.mdx";
import Options from "../../../docs/config/options.mdx";
import Plugins from "../../../docs/config/plugins.mdx";
import Lsp from "../../../docs/config/lsp.mdx";
import Formatter from "../../../docs/config/format_lint.mdx";
import Mappings from "../../../docs/config/mappings.mdx";
import Ui from "../../../docs/config/nvchad_ui.mdx";
import Theming from "../../../docs/config/theming.mdx";

import Features from "../../../docs/features.mdx";
import Api from "../../../docs/api.mdx";
import Debug from "../../../docs/debugging-config.mdx";
import Contribute from "../../../docs/contribute.mdx";
import Credits from "../../../docs/credits.mdx";

const sidebar_Items = [
  {
    label: ["Quickstart", "i-mingcute:safe-flash-fill"],
    items: [
      ["Install", "quickstart/install", Install],
      ["Post Install", "quickstart/post-install", PostInstall],
      ["Learn basic Lua", "quickstart/learn-lua", LearnLua],
    ],
  },
  {
    label: ["Custom config", "i-mdi-cog"],

    items: [
      ["Walkthrough", "config/walkthrough", Walkthrough],
      ["Options", "config/options", Options],
      ["Manage Plugins", "config/plugins", Plugins],
      ["LSP Configuration", "config/Lsp", Lsp],
      ["Format & Lint", "config/format_lint", Formatter],
      ["Mappings", "config/mappings", Mappings],
      ["UI Customization", "config/nvchad_ui", Ui],
      ["Customize colors", "config/theming", Theming],
    ],
  },

  ["Features", "features", "i-tabler:server-cog", Features],
  ["Api Functions", "api", "i-mdi:atom-variant", Api],
  ["Debug config", "debugging-config", "i-ri-bug-line", Debug],
  ["Contributing", "contribute", "i-mdi-github", Contribute],
  ["Credits", "credits", "i-line-md:heart", Credits],
];

export default sidebar_Items;
