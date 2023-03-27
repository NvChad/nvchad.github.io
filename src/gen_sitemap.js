import fs from "fs";
import path from "path";

function getFileNames(dirPath) {
  const result = [];
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      result.push(...getFileNames(filePath));
    } else {
      result.push(filePath);
    }
  }

  return result;
}

// genegerate route names from file paths
const news_files = getFileNames("./src/routes/(index)/news/(items)");

let news_routes = news_files
  .filter((x) => x.endsWith(".mdx"))
  .map((x) => x.replace("(items)/", "")); // remove (items from filename)

let files = [
  ...getFileNames("./src/routes/(index)/docs"),
  ...news_routes,
];

files = files.map((x) => {
  const route = x.split("/").slice(3);
  return route.join("/").slice(0, -4); // remove .mdx extension too
});

files.push("news");

// generate xml tags
let site_urls = "";

const gen_url_tag = (link) => (
  `<url>
     <loc>https://nvchad.com/${link}</loc>
     <changefreq>weekly</changefreq>
     <priority>0.5</priority>
   </url>
  `
);

let links = files.map((x) => {
  site_urls = site_urls + gen_url_tag(x);
});

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
   ${site_urls}
    </urlset>`;

// save sitemap only to dist dir
fs.writeFileSync("./dist/sitemap.xml", sitemap);
