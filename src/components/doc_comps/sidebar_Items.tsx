import { BiSolidRocket } from "solid-icons/bi";
import { ImCog } from "solid-icons/im";
import { FaSolidHeart } from "solid-icons/fa";
import { FaBrandsGithub } from "solid-icons/fa";
import { FaSolidBug } from "solid-icons/fa";

const sidebar_Items: Array<any> = [
  {
    label: ["Quickstart", <BiSolidRocket />],
    items: [
      ["Install", "quickstart/install"],
      ["Post Install", "quickstart/post-install"],
      ["Learn basic Lua", "quickstart/learn-lua"],
      ["Nvim Lua guide", "quickstart/Nvim lua"],
    ],
  },
  {
    label: ["Custom config", <ImCog />],

    items: [
      ["Walkthrough", "config/Walkthrough"],
      ["Options", "config/options"],
      ["Manage Plugins", "config/plugins"],
      ["LSP Configuration", "config/Lsp"],
      ["Format & Lint", "config/format_lint"],
      ["Mappings", "config/mappings"],
      ["UI Customization", "config/nvchad_ui"],
      ["Themeing", "config/theming"],
    ],
  },

  ["Debugging config", "debugging-config", <FaSolidBug />],
  ["Contributing", "contribute", <FaBrandsGithub />],
  ["Credits", "credits", <FaSolidHeart />],
];

export default sidebar_Items;
