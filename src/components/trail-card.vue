<script lang="ts">
export default {
  props: {
    title: String,
    description: String
  }
};
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"  alt="{{ title }}"/>
    </div>

    <div class="media-content">
      <div class="title is-4">
        {{ title }}
      </div>
    </div>

    <div class="content">
      {{ description }}
    </div>

    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">View</a>
    </footer>
  </div>
</template>
