<template>
  <slot />
</template>

<script setup lang="ts">

import { provide } from "vue";

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  model: {}
}>()

provide('model', props.model)

</script>