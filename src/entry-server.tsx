import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* favicon & font */}
          <link rel="icon" type="image/svg+xml" href="/logo.svg" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          {assets}

          {/* Check if a theme is saved in localStorage, if not, set it based on the system's theme preference */}
          <script>
            if (!localStorage.theme)
              localStorage.theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            document.querySelector("html").className = localStorage.theme;
          </script>
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
