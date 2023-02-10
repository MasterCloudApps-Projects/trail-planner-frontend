<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="section">
    <div class="container">
      <NavBar />
      <RouterView />
    </div>
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
