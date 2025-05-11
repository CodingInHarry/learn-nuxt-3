<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "admin-only",
});
</script>

<style></style>
