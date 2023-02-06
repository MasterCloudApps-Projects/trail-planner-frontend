<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>


<template>
  <v-app id="trailplanner">
    <v-app-bar>
      <RouterLink to="/"><v-toolbar-title>Trail Planner</v-toolbar-title></RouterLink>
      <RouterLink to="/"><v-btn variant="text">Trail List</v-btn></RouterLink>
      <RouterLink to="/trails/add"><v-btn variant="text">Add Trail</v-btn></RouterLink>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
