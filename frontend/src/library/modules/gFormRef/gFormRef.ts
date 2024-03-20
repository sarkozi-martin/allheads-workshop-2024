import { ref } from 'vue';
import type { GFormOptions } from '@/library/components/GForm/types';

export const gFormRef = () => {
  return ref<GFormOptions | null>(null);
};
