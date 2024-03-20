<script setup lang="ts">
import { VBtn } from 'vuetify/components';

export type GButtonProps = {
  invert?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'submit' | 'button';
};

const props = withDefaults(defineProps<GButtonProps>(), {
  invert: false,
  fullWidth: true,
  disabled: false,
  type: 'button',
});

const emit = defineEmits(['click']);
</script>

<template>
  <VBtn
    :color="props.invert ? 'white' : 'fill-primary'"
    variant="flat"
    :ripple="false"
    :class="{ 'g-btn--full': props.fullWidth, 'text-fill-primary': props.invert }"
    :disabled="props.disabled"
    @click="emit('click')"
    :type="props.type"
  >
    <slot />
  </VBtn>
</template>

<style lang="scss">
.g-btn {
  &--full {
    width: 100%;
  }
}
</style>
