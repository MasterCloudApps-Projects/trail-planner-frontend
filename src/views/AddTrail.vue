<script setup lang="ts">
import { useTrackStore } from "@/stores/TrackStore";
import { Ref, ref } from "vue";

let name: string = "";
let description: string = "";
let type: string = "";
let file: File;
const fileName: Ref = ref<string>("");

const trackStore = useTrackStore();

function addTrackAndClear() {
  trackStore.addTrack(name, description, type, file);
}

function handleFileUpload(event: any) {
  file = event.target.files[0];
  fileName.value = file.name;
}
</script>

<template>
  <div>
    <form @submit.prevent="addTrackAndClear">
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
            <input
              class="file-input"
              type="file"
              accept=".gpx"
              @change="handleFileUpload($event)"
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label"> Choose a gpx file… </span>
            </span>
            <span class="file-name">{{ fileName }} </span>
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

<style></style>
