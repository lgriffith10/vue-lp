<template>
  <ElPageHeader :icon="null">
    <template #content>
      <div class="flex items-center">
        <span class="text-lg font-semibold mr-3">
          {{ props.title }}
        </span>
        <span class="text-sm mr-2" v-if="props.description">
          {{ props.description }}
        </span>
      </div>
    </template>
  </ElPageHeader>
</template>

<script setup lang="ts">
/*import { defineProps } from 'vue';*/

import { ElPageHeader } from 'element-plus';

type Props = {
  title: string,
  description?: string
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
  }
})
</script>

<style lang="scss">

</style>