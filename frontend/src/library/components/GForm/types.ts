import type { ComputedRef, Ref, ShallowRef } from 'vue';

export interface GFormOptions {
  errors: Ref<
    {
      id: string | number;
      errorMessages: string[];
    }[]
  >;
  isDisabled: ComputedRef<boolean>;
  isReadonly: ComputedRef<boolean>;
  isValidating: ShallowRef<boolean>;
  isValid: Ref<boolean | undefined> & {
    readonly externalValue: boolean | undefined;
  };
  items: Ref<
    {
      id: string | number;
      validate: () => Promise<string[]>;
      reset: () => void;
      resetValidation: () => void;
      isValid: boolean | undefined;
      errorMessages: string[];
    }[]
  >;
  validate: () => Promise<{
    valid: boolean;
    errors: {
      id: string | number;
      errorMessages: string[];
    }[];
  }>;
  reset: () => void;
  resetValidation: () => void;
}
