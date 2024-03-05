import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import { vercelPreset } from "@vercel/remix/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeHighlight from "rehype-highlight";
import remarkToc from "remark-toc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

installGlobals();

export default defineConfig({
  plugins: [
    mdx({
      rehypePlugins: [rehypeHighlight({}), rehypePrettyCode],
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkToc({
          heading: "Contents",
          tight: true,
          maxDepth: 2,
        }),
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
    }),
    remix({ presets: [vercelPreset()] }),
    tsconfigPaths(),
  ],
});
