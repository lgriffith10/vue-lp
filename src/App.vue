<script setup lang="ts">
import { useRouter } from "vue-router";
import { VueQueryDevTools } from "vue-query/devtools";

import { useGetCountries } from "@/entities/country/hooks";
import { onUpdated } from "vue";

const router = useRouter();

const { data } = useGetCountries();
</script>

<template>
  <router-view />
  <VueQueryDevTools />
</template>
