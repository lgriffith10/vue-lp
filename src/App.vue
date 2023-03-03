<script setup lang="ts">
import { useRouter } from "vue-router";
import { VueQueryDevTools } from "vue-query/devtools";
import Navbar from "@/components/organisms/navbar/Navbar.vue";

const router = useRouter();
</script>

<template>
    <div class="flex h-full overflow-hidden">
      <Navbar class="navbar" />
      <router-view class="w-full overflow-y-scroll" />
    </div>
    <VueQueryDevTools />
</template>

<style lang="scss">
.navbar {
  @apply w-56 h-full;
}
</style>
