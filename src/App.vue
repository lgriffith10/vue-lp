<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <router-link to="/">Homepage</router-link>
  <router-link to="/details">Details</router-link>
  <router-view />
</template>
