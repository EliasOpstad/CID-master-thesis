import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  output: "server",

  adapter: vercel({
    webAnalytics: { enabled: true },
  }),

  integrations: [
    starlight({
      title: "Velkommen til CI/CD",

      logo: {
        light: "./src/assets/Git-Icon-Black.svg",
        dark: "./src/assets/Git-Icon-White.svg",
        replacesTitle: false,
      },

      sidebar: [
        { label: "Velkommen!", link: "/" },
        { label: "CI/CD", autogenerate: { directory: "/CICD/" } },
        { label: "Git", autogenerate: { directory: "/git/", collapsed: true } },
      ],

      tableOfContents: false,

      locales: {
        root: {
          label: "Norsk",
          lang: "nb",
        },
      },

      components: {
        // Override the default `Head` component to add tracking.
        SocialIcons: "./src/components/TrackingHead.astro",

        // Override the default `Footer` component to add cookie-info.
        Footer: "./src/components/CookieFooter.astro",

        // Override the default `Sidebar` component to add a custom sidebar with feedback form.
        Sidebar: "./src/components/FeedbackNavbar.astro",
      },
    }),
  ],
});
