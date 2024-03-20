import { fileURLToPath, URL } from 'node:url';
import vuetify from 'vite-plugin-vuetify';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: false,
      styles: {
        configFile: 'src/library/assets/scss/vuetify-settings.scss',
      },
    }),
    vueJsx(),
    svgLoader({
      defaultImport: 'component',
      svgoConfig: {
        plugins: [
          // Transformations needed on SVGs exported from Figma
          // - remove hardcoded height/width
          'removeDimensions',
          // - replace gray fill by adaptive currentColor
          {
            name: 'convertColors',
            params: { currentColor: true },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
