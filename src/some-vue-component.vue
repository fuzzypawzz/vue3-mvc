<template>
  <div class="wrapper">
    <p>Hello from the the vue component!</p>
    
    <p class="dotnet">{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const content = ref('dotnet.... 👳🏾‍')

</script>

<style scoped>
.wrapper {
  width: fit-content;
  margin: 10px 0;
  border: 2px solid mediumvioletred;
  border-radius: 8px;
  padding: 2px 18px;
}

.dotnet {
  padding: 14px;
  border: 2px solid royalblue;
  border-radius: 8px;
}
</style>
