const toMeta = (v) =>
  Object.entries(v).map(([link, mod]) => ({
    link: link.slice(0, link.lastIndexOf(".")),
    ...mod.meta,
  }));

export const news = toMeta(import.meta.glob("./*.mdx", { eager: true }));
