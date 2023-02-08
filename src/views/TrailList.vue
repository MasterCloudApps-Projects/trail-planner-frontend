<script lang="ts">
import TrailCard from "@/components/trail-card.vue";

export default {
  components: {
    TrailCard,
  },
  data() {
    return {
      trailList: [],
    }
  }
};
</script>

<template>
  <div v-for="trail in this.trailList" v-bind="trail.id">
    <TrailCard title="{{trail.title}}" description="{{trail.description}}" />
  </div>
</template>

<style></style>
