<script lang="ts">
import TrailCard from "@/components/trail-card.vue";
import { useTrackStore } from "@/stores/TrackStore";

export default {
  components: {
    TrailCard,
  },
  setup() {
    const trackStore = useTrackStore();
    trackStore.fetchTracks();

    return { trackStore };
  },
};
</script>

<template>
  <div v-for="track in this.trackStore.tracks" :key="track.id" class="is-flex is-flex-direction-column">
    <TrailCard :title="track.name" :description="track.description" />
  </div>
</template>

<style></style>
