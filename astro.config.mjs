// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import { resolve } from "node:path";

const isCloudflare =
  process.env.CF_PAGES === "1" ||
  process.env.CLOUDFLARE === "1" ||
  process.env.CLOUDFLARE_ACCOUNT_ID;

export default defineConfig({
  output: "server",
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": resolve("./src"),
      },
    },
    ...(isCloudflare && {
      resolve: {
        alias: {
          "@": resolve("./src"),
          "react-dom/server": "react-dom/server.edge",
        },
      },
      ssr: {
        noExternal: ["react", "react-dom", "react-dom/server", "scheduler"],
        optimizeDeps: {
          include: ["react-dom/server.edge"],
        },
        resolve: {
          conditions: [
            "workerd",
            "worker",
            "import",
            "module",
            "node",
            "default",
          ],
        },
      },
    }),
  },

  integrations: [react()],
});