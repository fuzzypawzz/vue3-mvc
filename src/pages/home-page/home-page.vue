<template>
  <div class="wrapper">
    <p>Hello from the the vue component!</p>
    <p>This is a server side rendered .NET MVC application running Vue 3 as the front-end.</p>

    <p class="dotnet">{{ viewModel.teaser }}</p>

    <switch-toggle initially-on>{{ viewModel.toggleLabel }}</switch-toggle>

    <p>{{ viewModel.customerName }}</p>
    <p>{{ viewModel.customerAge }}</p>
  </div>
</template>

<script setup lang="ts">
import { useHomePagePresenter } from "@/pages/home-page/home-page.presenter";

const { viewModel } = useHomePagePresenter()

</script>

<style src="./home-page.css"></style>
