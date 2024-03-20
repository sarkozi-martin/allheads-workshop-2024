import { reactive, readonly } from 'vue';

export type LayoutVariant = 'default' | 'info';
export type LayoutVariantClass = 'page-variant--info' | 'page-variant--default';

export type LayoutState = {
  variant: LayoutVariant;
};

const stateToClassMap: Record<LayoutVariant, LayoutVariantClass> = {
  default: 'page-variant--default',
  info: 'page-variant--info',
};

const state = reactive<LayoutState>({
  variant: 'default',
});

export const layout = () => {
  const setLayoutVariant = (variant: LayoutVariant) => {
    state.variant = variant;

    Object.values(stateToClassMap).forEach((item) => document.body.classList.remove(item));
    document.body.classList.add(stateToClassMap[variant]);
  };

  return {
    setLayoutVariant,
    layoutState: readonly(state),
  };
};
