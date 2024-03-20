import { reactive } from 'vue';

export const authState = reactive<{
  token?: string;
  isAuthorized: boolean;
}>({
  token: undefined,
  isAuthorized: false,
});
