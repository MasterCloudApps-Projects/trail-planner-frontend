<script lang="ts">
import { useTrackStore } from "@/stores/TrackStore";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const trackStore = useTrackStore();

    function addTrackAndClear(
      name: string,
      description: string,
      type: string,
      file: any
    ) {
      trackStore.addTrack(name, description, type, file);
    }

    return { addTrackAndClear };
  },
  data: () => ({
    name: "",
    description: "",
    type: "",
    file: [],
    nameRules: [
      (value: string) => {
        return value ? true : "You must enter a track name.";
      },
    ],
    descriptionRules: [
      (value: string) => {
        return value ? true : "You must enter a track description.";
      },
    ],
    typeRules: [
      (value: string) => {
        return value ? true : "You must enter a track type.";
      },
    ],
    gpxRules: [
      (value: any) => {
        return value ? true : "You must upload a valid GPX file";
      },
    ],
  }),
});
</script>

<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="addTrackAndClear(name, description, type, file)">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Track name"
      ></v-text-field>
      <v-text-field
        v-model="description"
        :rules="descriptionRules"
        label="Track name"
      ></v-text-field>
      <v-text-field
        v-model="type"
        :rules="typeRules"
        label="Track type"
      ></v-text-field>

      <v-file-input
        clearable
        label="Track GPX file"
        :rules="gpxRules"
        accept=".gpx"
        v-model="file"
      ></v-file-input>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
