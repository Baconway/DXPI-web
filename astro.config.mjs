// @ts-nocheck
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import StarlightCatppuccin from "@catppuccin/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "DXPI",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      plugins: [
        StarlightCatppuccin({
          dark: { flavor: "macchiato", accent: "sapphire" },
        }),
      ],
      sidebar: [
        { label: "API Link", slug: "reference/link" },
        {
          label: "Example",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting your Token", slug: "guides/token" },
            { label: "Getting user data", slug: "guides/user" },
            { label: "Using song data", slug: "guides/song" },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "User",
              items: [
                "reference/user",
                "reference/user_stats",
                "reference/user_album",
              ],
            },

            {
              label: "Songs",
              items: ["reference/song", "reference/song_scores"],
            },

            {
              label: "Plays",
              items: ["reference/recent", "reference/top_plays"],
            },

            {
              label: "Collection",
              items: ["reference/cosmetics", "reference/members"],
            },
          ],
        },

        { label: "Miscellaneous", items: ["misc/cors"] },
      ],
    }),
  ],
});
