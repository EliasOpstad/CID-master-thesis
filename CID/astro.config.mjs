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
      title: "Introduksjon til DevOps",

      logo: {
        light: "/public/images/Git/Git-Icon-Black.svg",
        dark: "/public/images/Git/Git-Icon-White.svg",
        replacesTitle: false,
      },

      sidebar: [
        { label: "Velkommen!", link: "/" },
        { label: "Git", autogenerate: { directory: "/git/", collapsed: true } },
        { label: "CI/CD", autogenerate: { directory: "/CICD/" } },
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
