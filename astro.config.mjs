// @ts-check
import { defineConfig } from 'astro/config';
import configToAlias from '@astropub/config-to-alias/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    configToAlias()
  ]
});
