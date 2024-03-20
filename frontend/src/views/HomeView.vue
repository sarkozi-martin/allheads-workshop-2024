<script setup lang="ts">
import GButton from '@/library/components/GButton/GButton.vue';
import GInfoPage from '@/library/components/GInfoPage/GInfoPage.vue';
import GText from '@/library/components/GTypography/GText.vue';
import GInput from '@/library/components/GInput/GInput.vue';
import GForm from '@/library/components/GForm/GForm.vue';
import { reactive } from 'vue';
import { gFormRef } from '@/library/modules/gFormRef/gFormRef';
import { authorization } from '@/library/modules/authorization/authorization';
import { quizController } from '@/library/modules/quizController/quizController';
import { loader } from '@/library/modules/loader/loader';

const { authorize } = authorization();
const { starQuiz } = quizController();
const { showLoader } = loader();

const state = reactive({
  name: '',
  email: '',
});

const submit = async () => {
  showLoader();

  await authorize({
    ...state,
  });

  await starQuiz();
};

const form = gFormRef();
</script>

<template>
  <GInfoPage title="Georgeov Kvíz">
    <GText color="text-inverted" class="mb-6">
      Pre pokračovanie, vyplňte prosím nasledujúce údaje:
    </GText>

    <GForm @submit.prevent="submit" ref="form">
      <GInput v-model="state.name" label="Meno" required />
      <GInput v-model="state.email" label="Email" required />
      <GButton invert :disabled="!form?.isValid" type="submit">Začať kvíz</GButton>
    </GForm>
  </GInfoPage>
</template>
