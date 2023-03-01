<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="item in items"
      :key="item.name"
      :to="{ path: item.link }"
    >
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus";
import { ArrowRight } from '@element-plus/icons-vue';

type BreacrumbItem = {
  name: string;
  link: string;
};

type Props = {
  items: BreacrumbItem[]
}

const props: Props = defineProps({
  items: {
    type: [] as PropType<BreacrumbItem[]>,
    required: true,
  },
})
</script>