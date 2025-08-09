import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: 'https://ametsmartui.github.io/Astro', // root domain
  integrations: [tailwind(), react(), icon(), astroI18next()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "eu", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});