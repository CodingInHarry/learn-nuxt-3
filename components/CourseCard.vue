<template>
  <q-card class="my-card" @click="$emit('click')">
    <img :src="thumbnail" />

    <q-card-section>
      <div class="text-h6 ellipsis">{{ title }}</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        {{ subtitle }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
interface Props {
  thumbnail: string;
  title: string;
  subtitle: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  click: [];
}>();
</script>
