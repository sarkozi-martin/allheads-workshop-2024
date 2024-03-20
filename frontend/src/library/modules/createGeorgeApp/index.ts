import { type Component, createApp } from 'vue'
import { vuetify } from '@/library/modules/theme/theme'

export const createGeorgeApp = (
  rootComponent: Component,
  options?: Record<string, unknown>,
) => {
  const app = createApp(rootComponent, options);

  app.use(vuetify);

  return app;
}