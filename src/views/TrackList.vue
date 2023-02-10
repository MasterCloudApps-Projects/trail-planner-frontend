<script lang="ts" setup>
import TrackCard from "@/components/TrackCard.vue";
import { useTrackStore } from "@/stores/TrackStore";

const trackStore = useTrackStore();
trackStore.fetchTracks();
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <TrackCard
        v-for="track in trackStore.tracks"
        :key="track.id"
        :title="track.name"
        :description="track.description"
      />
    </div>
  </div>
</template>

<style></style>
