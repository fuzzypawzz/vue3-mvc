<template></template>

<script setup lang="ts">
import { onBeforeMount, onUnmounted } from "vue";
import { usePageLoader } from "@/components/loader";

const pageLoader = usePageLoader()

onBeforeMount(() => {
  pageLoader.addAwaitingModule()
})

onUnmounted(() => {
  pageLoader.removeAwaitingModule()
})
</script>