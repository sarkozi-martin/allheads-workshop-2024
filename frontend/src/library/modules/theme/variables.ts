import { color, toRem } from '@/library/modules/theme/utils';

const defaultVariables = {
  'theme-surface': color('surface-background'),
  'field-border-opacity': 1,
};

export const typographyThemeVariablesMobile = {
  'heading-1-size': toRem(32),
  'heading-1-line-height': toRem(40),
  'heading-1-font-weight': 700,
  'heading-2-size': toRem(24),
  'heading-2-line-height': toRem(32),
  'heading-2-font-weight': 700,
  'heading-3-size': toRem(20),
  'heading-3-line-height': toRem(24),
  'heading-3-font-weight': 700,
  'heading-4-size': toRem(18),
  'heading-4-line-height': toRem(24),
  'heading-4-font-weight': 700,
};

export const mobileVariables = {
  ...defaultVariables,
  ...typographyThemeVariablesMobile,
};
