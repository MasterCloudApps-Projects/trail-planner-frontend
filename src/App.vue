<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container" id="trailplanner">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <RouterLink to="/"> Trail Planner </RouterLink>
        </div>
      </div>

      <div class="navbar-item">
        <RouterLink to="/">
          <button class="button">Track List</button>
        </RouterLink>
      </div>
      <div class="navbar-item">
        <RouterLink to="/trails/add">
          <button class="button">Add Track</button>
        </RouterLink>
      </div>
    </nav>

    <div class="section">
      <RouterView />
    </div>
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
