const toMeta = (v) =>
  Object.entries(v).map(([link, mod]) => ({
    link: link.replace(/^\.\/|\.mdx$/g, ""),
    ...mod.meta,
  }));

export const news = toMeta(import.meta.glob("./*.mdx", { eager: true }));
