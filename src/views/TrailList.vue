<script lang="ts" setup>
import TrackCard from "@/components/TrackCard.vue";
import { useTrackStore } from "@/stores/TrackStore";

const trackStore = useTrackStore();
trackStore.fetchTracks();
</script>

<template>
  <div
    v-for="track in trackStore.tracks"
    :key="track.id"
    class="is-flex is-flex-direction-column"
  >
    <TrackCard :title="track.name" :description="track.description" />
  </div>
</template>

<style></style>
