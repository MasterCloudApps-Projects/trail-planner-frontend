<script lang="ts" setup>
import Logo from "@/components/Logo.vue";
</script>

<template>
  <div class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item">
          <RouterLink to="/">
            <Logo />
          </RouterLink>
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
    </div>
  </div>
</template>
