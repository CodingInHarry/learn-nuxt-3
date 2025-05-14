<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const title = ref('Vue & Nuxt');
const description = ref('짐코딩과 함께 Nuxt3');
useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description.value,
    },
  ],
});
useSeoMeta({
  title,
  description,
  ogTitle: title.value,
  ogDescription: description.value,
  ogType: 'website',
  ogImage: '/img/og-iamge.png',
});
</script>
