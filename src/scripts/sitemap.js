const glob = new Bun.Glob("./src/routes/**");

let files = [];

for (const file of glob.scanSync(".")) {
  if (file.includes("index")) continue;

  let route = file.replace("./src/routes/", "");
  route = route.substring(0, route.lastIndexOf(".")); // rm extension

  files.push(route);
}

files.splice(2, 1); // remove [...404] page
files.unshift(""); // add / i.e home route

// generate xml tags
let site_urls = files.map(
  (x) =>
    `<url>
     <loc>https://nvchad.com/${x}</loc>
     <changefreq>weekly</changefreq>
     <priority>0.5</priority>
     </url>`,
);

site_urls = site_urls.join("");

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
   ${site_urls}
    </urlset>`;

Bun.write("./public/sitemap.xml", sitemap);
