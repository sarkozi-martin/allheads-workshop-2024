/* NOTE: 
   `*Options as const` being converted to types are here because of storybook.
   Storybook selects can't work with types, so we use the *Options arrays.
   We can't convert type to array so we do it the other way around.
*/

export const headingLevels = ['1', '2', '3', '4'] as const;
export type GHeadingLevel = (typeof headingLevels)[number];

export const headingColors = [
    'text-primary',
    'text-secondary',
    'text-inverted',
] as const;
export type GHeadingColor = (typeof headingColors)[number];

export const textSizes = [
    '10',
    '12',
    '14',
    '16',
    '18',
    '24',
    '32',
    '48',
] as const;
export type GTextSize = (typeof textSizes)[number];

export const textWeights = ['regular', 'medium', 'semibold', 'bold'] as const;
export type GTextWeight = (typeof textWeights)[number];
