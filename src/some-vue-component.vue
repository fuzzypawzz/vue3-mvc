<template>
  <div class="wrapper">
    <p>Hello from the the vue component!</p>
    
    <p class="dotnet">{{ content }}</p>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

const content = ref('dotnet.... 👳🏾‍')

</script>

<style scoped>
.wrapper {
  margin: 10px;
  border: 2px solid orangered;
  border-radius: 8px;
  padding: 8px;
}

.dotnet {
  padding: 14px;
  border: 2px solid royalblue;
  border-radius: 8px;
}
</style>
