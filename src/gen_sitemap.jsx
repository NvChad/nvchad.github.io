import doc_links from "./components/doc_comps/sidebar_Items";
import { news } from "./components/news_comps/newsData";

let links = [];

const gen_url_tag = (link) => (
  `<url>
     <loc>https://nvchad.com${link}</loc>
     <changefreq>weekly</changefreq>
     <priority>0.5</priority>
</url>
`
);

export default () => {
  let site_urls = "";

  news.map((x) => {
    links.push(x.link);
  });

  doc_links.map((x) => {
    if (Array.isArray(x)) {
      site_urls = site_urls + gen_url_tag(`/docs/${x[1]}`);
    } // get link path names from nested links

    else {
      x.items.map((y) => {
        site_urls = site_urls + gen_url_tag(`/docs/${y[1]}`);
      });
    }
  });

  let sitemap = `
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${site_urls}
   </urlset>
   `;

  console.log(sitemap);
};
