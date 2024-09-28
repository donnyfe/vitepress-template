// import { loadEnv } from 'vite'
import { defineConfig } from "vitepress";
import nav from "./config/nav";
import sidebar from "./config/sidebar";

export default ({ mode }) => {
  // const base = loadEnv(mode, process.cwd()).VITE_APP_BASE_URL
  const base = mode === "development" ? "/" : "/docs/";

  return defineConfig({
    base,
    title: "AI-Prompt",
    description: "文档库",
    // Use git commit to get the timestamp
    lastUpdated: true,
    // When set to true, VitePress will not fail builds due to dead links.
    ignoreDeadLinks: true,
    head: [
      [
        "link",
        { rel: "icon", type: "image/svg+xml", href: "/assets/logo.svg" },
      ],
    ],
    themeConfig: {
      nav,
      sidebar,
      outlineTitle: "快速前往",
      socialLinks: [
        { icon: "github", link: "https://github.com/vuejs/vitepress" },
      ],
      footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2024-present",
      },
    },
    // docs: https://vitepress.vuejs.org/config/app-configs.html#markdown
    markdown: {
      theme: "github-dark",
      lineNumbers: false,
    },
  });
};
