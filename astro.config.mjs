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
          href: "https://github.com/Baconway/DXPI-web",
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
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "Token",
              items: ["reference/token/segaid", "reference/token/embed"],
            },
            {
              label: "User",
              items: [
                "reference/user/user",
                "reference/user/user_stats",
                "reference/user/user_album",
              ],
            },

            {
              label: "Songs",
              items: [
                "reference/songs/song",
                "reference/songs/recent",
                "reference/songs/top_plays",
              ],
            },

            {
              label: "Collection",
              items: [
                "reference/collection/cosmetics",
                "reference/collection/members",
              ],
            },

            {
              label: "Circle",
              items: ["reference/social/own", "reference/social/ranking"],
            },
          ],
        },
      ],
    }),
  ],
});
