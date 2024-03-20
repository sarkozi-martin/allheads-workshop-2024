import type { GColor } from '@/library/modules/theme/colors';

export const toRem = (pixels: number) => `${pixels / 16}rem`;

export const color = (colorName: GColor, opacity = 1) =>
  `rgba(var(--v-theme-${colorName}), ${opacity})`;
