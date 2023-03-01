<template>
  <breadcrumb :items="links" />
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';

import Breadcrumb from '@/components/molecules/breadcrumb';

onMounted(() => {
  console.log('navbar')
})

const links = ref([
  {
    name: 'Accueil',
    path: '/',
  },
  {
    name: 'Details',
    path: '/details'
  }
])
</script>