import VersionTwo from "../../../news/v2.0.mdx";
import VersionTwo_Migration from "../../../news/v2.0_migration.mdx";

export const news = [
  {
    heading: "NvChad v2.0 released!",
    details:
      "This release brings new UI features in our ui plugin & usage of lazy.nvim. Improvements in startuptime, using base46 theme plugin as a compiler for our themes!",
    component: <VersionTwo />,
    link: "/news/v2.0",
    cover: "v2.0.webp",
  },

  {
    heading: "Breaking changes in v2.0",
    details:
      "NvChad's v2.0 uses lazy.nvim instead of packer so there are slight differences in the plugin related syntax & some commands have been removed.",
    component: <VersionTwo_Migration />,
    link: "/news/v2.0_migration",
    cover: "v2.0_migration.svg",
  },
];
