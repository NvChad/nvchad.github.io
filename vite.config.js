import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';
import mdx from '@mdx-js/rollup';
import rehypeHighlight from 'rehype-highlight';
import solid from 'solid-start/vite';

export default defineConfig({
  plugins: [
    Unocss(),
    {
      ...(await mdx({
        jsxImportSource: 'solid-js',
        jsx: true,
        providerImportSource: '/node_modules/solid-mdx',
        rehypePlugins: [rehypeHighlight],
      })),
      enforce: 'pre',
    },
    solid({
      adapter: (await import('solid-start-static')).default(),
      extensions: ['.md', '.mdx'],
      prerenderRoutes: [
        '/news/v2.0',
        '/news/v2.0_migration',
        '/docs/quickstart/install',
        '/docs/quickstart/post-install',
        '/docs/quickstart/learn-lua',
        '/docs/config/walkthrough',
        '/docs/config/options',
        '/docs/config/plugins',
        '/docs/config/Lsp',
        '/docs/config/format_lint',
        '/docs/config/mappings',
        '/docs/config/nvchad_ui',
        '/docs/config/theming',
        '/docs/features',
        '/docs/api',
        '/docs/debugging-config',
        '/docs/contribute',
        '/docs/credits',
      ],
    }),
  ],
});
