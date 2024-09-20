// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Navbar from "~/components/Navbar";
import "virtual:uno.css";
import "~/css/style.css";

import { Meta, Title, MetaProvider } from "@solidjs/meta";

const routes = import.meta.glob("./routes/**/*.{md,mdx,tsx}", {
  eager: true,
});

const metaData: any = {};

const defaultMeta = {
  title: "NvChad",
  desc: "Blazing fast Neovim config providing solid defaults and a beautiful UI, enhancing your Neovim experience.",
  ogimg: "v2.5.jpeg",
};

for (const path in routes) {
  let route = path.replace("./routes", "").replace(/\.[^.]+$/, "");
  route = route.replace("index", "");
  const moduleMeta = routes[path]?.meta || defaultMeta; // Accessing the meta property of the module

  moduleMeta.ogimg = moduleMeta.cover
    ? moduleMeta.cover.split(".")[0] + '.jpeg'
    : defaultMeta.ogimg;

  metaData[route] = moduleMeta;
}

metaData["/themes/"] = metaData["/themes"];

export default function App() {

  return (
    <Router
      base={import.meta.env.SERVER_BASE_URL}
      root={(props) => {

       return (
        <MetaProvider>
          <Title>{metaData[props.location.pathname]?.title}</Title>

          <Meta property="og:URL" content="https://www.rankmath.com" />

          <Meta
            name="description"
            content={metaData[props.location.pathname]?.desc}
          />

          <Meta name="twitter:card" content="summary_large_image" />

          <Meta
            name="twitter:image:src"
            content={metaData[props.location.pathname]?.ogimg}
          />

          <Meta
            property="og:image"
            content={metaData[props.location.pathname]?.ogimg}
          />

          <Navbar pathname={props.location.pathname} />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}}
    >
      <FileRoutes />
    </Router>
  );
}
