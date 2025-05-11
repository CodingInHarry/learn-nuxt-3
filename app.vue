<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
console.log("nuxtApp: ", nuxtApp);

// vue application instance
// nuxtApp.vueApp.component();
// nuxtApp.vueApp.directive();

// nuxtApp.provide("hello", (msg: string) => `hello ${msg}`);
</script>
