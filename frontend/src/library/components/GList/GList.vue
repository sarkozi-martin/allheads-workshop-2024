<script setup lang="ts">
import { VAvatar, VList, VListItem, VIcon } from 'vuetify/components';
import GText from '@/library/components/GTypography/GText.vue';
import CheckIcon from '@/library/assets/icons/Check.svg';

type GListModel = string | number | boolean | null;

export type GListProps = {
  readonly?: boolean;
  modelValue?: GListModel;
  correctValue?: GListModel | undefined;
  options: {
    code: GListModel;
    label: string;
  }[];
};

const props = withDefaults(defineProps<GListProps>(), {
  readonly: false,
  modelValue: undefined,
  correctValue: undefined,
});

const getValidityClass = (value: GListModel) => {
  if (props.correctValue === undefined || props.correctValue === null) {
    return '';
  }

  if (value === props.correctValue) {
    return 'g-list-item--positive';
  }

  if (props.modelValue !== props.correctValue && value === props.modelValue) {
    return 'g-list-item--negative';
  }

  return '';
};

const getAlphabetLetter = (value: number) => (value + 1 + 9).toString(36).toUpperCase();
</script>

<template>
  <VList :model-value="props.modelValue" lines="three" class="g-list">
    <VListItem
      v-for="(option, index) in options"
      :key="`list-item-${option.code}`"
      :class="`g-list-item mb-2 ${getValidityClass(option.code)}`"
      :ripple="false"
      @click="() => !props.readonly && $emit('update:modelValue', option.code)"
    >
      <template #prepend>
        <VAvatar color="state-active">
          <GText weight="medium" color="text-inverted">
            {{ getAlphabetLetter(index) }}
          </GText>
        </VAvatar>
      </template>

      <template #default>{{ option.label }}</template>

      <template #append>
        <VIcon
          v-show="props.modelValue === option.code"
          :icon="CheckIcon"
          class="mt-2"
          color="state-active"
        />
      </template>
    </VListItem>
  </VList>
</template>

<style lang="scss">
@use '@/library/assets/scss/utils';
@use 'vuetify/settings';

.g-list {
  & &-item {
    min-height: utils.toRem(58);
    padding-top: utils.toRem(0);
    padding-bottom: utils.toRem(0);
    background: utils.color('surface-primary');
    border-radius: settings.$border-radius-root;
    border: 1px solid transparent;

    &--positive {
      background: utils.color('state-positive-weak');
      border: 1px solid utils.color('state-positive');
    }

    &--negative {
      background: utils.color('state-negative-weak');
      border: 1px solid utils.color('state-negative');
    }

    .v-list-item__overlay {
      display: none;
    }

    .v-list-item__append > .v-icon {
      opacity: 1;
    }
  }
}
</style>
