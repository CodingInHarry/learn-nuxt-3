<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="Admin Page" />
      <PageDescription description="Admin Layout 실습을 위한 페이지" />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "admin",
  // middleware: "admin-only",
});
</script>

<style></style>
