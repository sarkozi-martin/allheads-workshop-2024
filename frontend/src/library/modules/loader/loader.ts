import { reactive, readonly } from 'vue';

export const loaderState = reactive({
  visible: false,
});

export const loader = () => {
  const showLoader = () => {
    loaderState.visible = true;
  };

  const hideLoader = () => {
    loaderState.visible = false;
  };

  return {
    showLoader,
    hideLoader,
    loaderState: readonly(loaderState),
  };
};
