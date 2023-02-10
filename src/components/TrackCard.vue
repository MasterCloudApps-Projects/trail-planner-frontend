<script lang="ts" setup>
defineProps<{
  title: String;
  description: String;
}>();
</script>

<template>
  <div class="w-1/5 rounded overflow-hidden shadow-lg m-6">
    <img
      class="w-full"
      src="https://v1.tailwindcss.com/img/card-top.jpg"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">
        {{ description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        <a href="#" class="card-footer-item">Edit</a>
      </span>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        <a href="#" class="card-footer-item">View</a>
      </span>
    </div>
  </div>
</template>
