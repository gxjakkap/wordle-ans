<template>
  <div
    class="
      flex
      justify-between
      text-base text-black
      bg-gray-300
      dark:text-white dark:bg-gray-900
      shadow-2xl
    "
  >
    <div class="flex items-center justify-end ml-4">
      <a href="/" class="block px-3 py-2">Home</a>
      <a
        href="https://github.com/gxjakkap/wordle-ans"
        target="_blank"
        class="block px-3 py-2"
        >GitHub</a
      >
    </div>
    <button
      id="theme-toggle"
      type="button"
      class="
        text-gray-500
        dark:text-gray-400
        hover:bg-gray-100
        dark:hover:bg-gray-700
        focus:outline-none focus:ring-4 focus:ring-gray-200
        dark:focus:ring-gray-700
        rounded-lg
        text-sm
        p-3
      "
      @click="toggleDarkMode"
    >
      <!--<font-awesome-icon icon="fa-solid fa-sun-bright" />-->
      Dark Mode
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    toggleDarkMode() {
      this.$emit('toggletheme')
    },
  },
})
</script>