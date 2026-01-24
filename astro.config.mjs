// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://allesgut.app',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'fr', 'es', 'it', 'pt', 'cs', 'pl', 'ja', 'ko'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: {
    format: 'directory'
  }
});
