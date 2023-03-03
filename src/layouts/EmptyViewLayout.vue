<template>
  <div class="layout">
    <div class="layout__top" v-if="props.topHeader">
      <TopHeader :title="props.title" :description="props.description" />
    </div>

    <div class="layout__content">
      <slot default></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import TopHeader from "@/components/molecules/topHeader/TopHeader.vue";

type Props = {
  title: string,
  description?: string,
  topHeader: boolean,
}

const props: Props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Title'
  },
  description: {
    type: String,
    required: false,
  },
  topHeader: {
    type: Boolean,
    required: true,
    default: true,
  }
})
</script>

<style lang="scss">
.layout {
  @apply flex flex-col h-full;

  &__top {
    @apply w-full py-5 px-3 border-b border-gray-200;
  }

  &__content {
    @apply flex-1 flex flex-col px-3 py-5;
  }
}
</style>