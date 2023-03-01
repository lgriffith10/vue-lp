<script setup lang="ts">
import { useRouter } from "vue-router";
import { VueQueryDevTools } from "vue-query/devtools";
import Navbar from "@/components/organisms/navbar/Navbar.vue";

const router = useRouter();

</script>

<template>
  <navbar />
  <router-view />
  <VueQueryDevTools />
</template>
