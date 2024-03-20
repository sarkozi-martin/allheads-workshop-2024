const defaultColorsLight = {
  'g-color-grey-100': '#EEF0F4',
  'g-color-grey-200': '#E4EAF0',
  'g-color-grey-300': '#A3B5C9',
  'g-color-grey-400': '#537091',

  'g-color-blue-100': '#EEF4FE',
  'g-color-blue-200': '#A2CEFF',
  'g-color-blue-300': '#135EE2',
  'g-color-blue-400': '#0A285C',
  'g-color-blue-bright': '#2870ED',
  'g-color-blue-navigation': '#022E67',

  'g-color-yellow-100': '#FFF4D5',
  'g-color-yellow-200': '#F2A91E',
  'g-color-yellow-300': '#AD5700',

  'g-color-green-100': '#ECFFE7',
  'g-color-green-200': '#07A721',

  'g-color-red-100': '#FEEBEA',
  'g-color-red-200': '#CF2A1E',

  'g-color-ui-grey-100': '#EFF1F5',
  'g-color-ui-grey-200': '#5D6A97',

  'g-color-ui-blue-100': '#E7EFFD',
  'g-color-ui-blue-200': '#135EE2',

  'g-color-neutral-100': '#FFFFFF',
  'g-color-neutral-200': '#E5E5E5',
  'g-color-neutral-300': '#C4C4C4',
  'g-color-neutral-400': '#000000',
};

export const stateColorsLight = {
  'state-active': defaultColorsLight['g-color-blue-300'],
  'state-active-weak': defaultColorsLight['g-color-blue-100'],
  'state-positive': defaultColorsLight['g-color-green-200'],
  'state-positive-weak': defaultColorsLight['g-color-green-100'],
  'state-negative': defaultColorsLight['g-color-red-200'],
  'state-negative-weak': defaultColorsLight['g-color-red-100'],
  'state-warning': defaultColorsLight['g-color-yellow-300'],
  'state-warning-mid': defaultColorsLight['g-color-yellow-200'],
  'state-warning-weak': defaultColorsLight['g-color-yellow-100'],
  'state-info': defaultColorsLight['g-color-ui-blue-200'],
  'state-info-weak': defaultColorsLight['g-color-ui-blue-100'],
  'state-default': defaultColorsLight['g-color-ui-grey-200'],
  'state-default-weak': defaultColorsLight['g-color-ui-grey-100'],

  error: '#ffec58',
};

export const uiColorsLight = {
  'surface-background': defaultColorsLight['g-color-grey-100'],
  'surface-primary': defaultColorsLight['g-color-neutral-100'], // white
  'surface-secondary': defaultColorsLight['g-color-grey-200'],
  'surface-shadow': defaultColorsLight['g-color-neutral-400'], // black
  'surface-brand': defaultColorsLight['g-color-blue-bright'],
  'surface-navigation': defaultColorsLight['g-color-blue-navigation'],

  'fill-primary': defaultColorsLight['g-color-blue-300'],
  'fill-secondary': defaultColorsLight['g-color-grey-400'],
  'fill-inverted': defaultColorsLight['g-color-neutral-100'],
  'fill-disabled': defaultColorsLight['g-color-neutral-200'],

  'text-primary': defaultColorsLight['g-color-blue-300'],
  'text-secondary': defaultColorsLight['g-color-grey-400'],
  'text-inverted': defaultColorsLight['g-color-neutral-100'],
  'text-placeholder': defaultColorsLight['g-color-grey-300'],
  'text-link': defaultColorsLight['g-color-blue-300'],
};

const typographyColors = {
  'text-primary': defaultColorsLight['g-color-blue-400'],
};

export type GColor = keyof typeof stateColorsLight | keyof typeof uiColorsLight;

export const colorsMobileLight = {
  ...stateColorsLight,
  ...uiColorsLight,
  ...typographyColors,
};
