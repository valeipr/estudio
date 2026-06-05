// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const BASE = '/estudio';

/** Rehype plugin: prefix absolute internal paths in markdown with the base */
function rehypeBaseUrl() {
  return function (tree) {
    function walk(node) {
      if (node.type === 'element') {
        if (node.tagName === 'img' && node.properties?.src?.startsWith('/')) {
          node.properties.src = BASE + node.properties.src;
        }
        if (node.tagName === 'a' && typeof node.properties?.href === 'string'
            && node.properties.href.startsWith('/')
            && !node.properties.href.startsWith('//')) {
          node.properties.href = BASE + node.properties.href;
        }
      }
      if (node.children) node.children.forEach(walk);
    }
    walk(tree);
  };
}

export default defineConfig({
  site: 'https://valeipr.github.io',
  base: BASE,
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    rehypePlugins: [rehypeBaseUrl],
  },
});
