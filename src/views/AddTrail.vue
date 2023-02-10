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
  }),
});
</script>

<template>
  <div>
    <form @submit.prevent="addTrackAndClear(name, description, type, file)">
      <div class="field">
        <input
          class="input"
          type="text"
          placeholder="Track name"
          v-model="name"
        />
      </div>

      <div class="field">
        <textarea
          class="textarea"
          rows="5"
          v-model="description"
          placeholder="Track description"
        />
      </div>

      <div class="field">
        <input
          class="input"
          v-model="type"
          type="text"
          placeholder="Track type"
        />
      </div>

      <div class="field">
        <div class="file has-name is-info is-fullwidth">
          <label class="file-label">
            <input class="file-input" type="file" name="file" accept=".gpx" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label"> Choose a gpx file… </span>
            </span>
            <span class="file-name">
            </span>
          </label>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  </div>
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
