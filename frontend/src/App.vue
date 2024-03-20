<script setup lang="ts">
import { RouterView } from 'vue-router';
import GRoot from '@/library/components/GRoot/GRoot.vue';
import { fetchFactory } from '@/library/modules/fetch/fetchFactory';

const { setBaseURL } = fetchFactory();
setBaseURL('https://ec2-3-76-40-32.eu-central-1.compute.amazonaws.com:8443');
</script>

<template>
  <GRoot>
    <RouterView />
  </GRoot>
</template>
