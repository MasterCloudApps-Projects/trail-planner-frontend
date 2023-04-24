<script lang="ts" setup>
import { useTrackStore } from "@/stores/TrackStore";
import type { Ref } from "vue";
import { ref } from "vue";
import router from "@/router";

let name: string = "";
let description: string = "";
let type: string = "";
let file: File;
const fileName: Ref = ref<string>("");

const trackStore = useTrackStore();

function addTrackAndClear() {
  trackStore.addTrack(name, description, type, file);
  router.push("/");
}

function handleFileUpload(event: any) {
  file = event.target.files[0];
  fileName.value = file.name;
}
</script>

<template>
  <div class="container mx-auto mt-12">
    <form class="w-full max-w-xl" @submit.prevent="addTrackAndClear">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            id="inline-name"
            v-model="name"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-description"
          >
            Description
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            id="inline-description"
            v-model="description"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-type"
          >
            Type
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            id="inline-type"
            v-model="type"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-type"
          >
            GPX File
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            id="inline-file"
            accept=".gpx"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="file"
            @change="handleFileUpload($event)"
          />
        </div>
      </div>

      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style></style>
