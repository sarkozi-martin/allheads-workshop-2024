import { createVuetify } from 'vuetify';
import { colorsMobileLight } from '@/library/modules/theme/colors';
import { mobileVariables } from '@/library/modules/theme/variables';

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: { ...colorsMobileLight },
        variables: {
          ...mobileVariables,
        },
      },
    },
  },
  // icons: {},
  display: {
    thresholds: {
      xs: 0,
    },
  },
});
