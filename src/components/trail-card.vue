<script lang="ts">
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>

<template>
  <v-card class="ma-6" width="800">
    <v-img
      class="align-end text-white"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      max-height="200"
      cover
    >
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ title }}
    </v-card-subtitle>

    <v-card-text>
      {{ description }}
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange"> Edit </v-btn>

      <v-btn color="orange"> View </v-btn>
    </v-card-actions>
  </v-card>
</template>
