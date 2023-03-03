<template>
  <ElMenu
    default-active="1"
  >
    <ElMenuItem
      v-for="(link) in links"
      :key="link.name"
      :index="link.path"
    >
      <router-link :to= "link.path">
        <ElIcon v-if="link.icon">
          <component :is="link.icon"></component>
        </ElIcon>
        {{ link.name }}
      </router-link>
    </ElMenuItem>
  </ElMenu>
</template>

<script setup lang="ts">
import {
  shallowRef,
  Component as ComponentType,
  Ref
} from 'vue';

import {
  ElMenu,
  ElMenuItem,
  ElIcon
} from 'element-plus';

import { Search, HomeFilled } from "@element-plus/icons-vue";

type Link = {
  name: string;
  path: string;
  icon?: ComponentType;
};

const links: Ref<Link[]> = shallowRef([
  {
    path: '/',
    name: 'Home',
    icon: HomeFilled,
  },
  {
    path: '/search',
    name: 'Search',
    icon: Search,
  }
])
</script>