<template>
  <div class="flex justify-center pt-20">
    <Modal v-if="isModalVisible" @close="closeModal" />

    <div class="fixed items-top overflow-hidden text-center" v-else>
      <div class="flex text-center justify-center">
        <h1 class="text-5xl text-center flex py-5 text-red-400">
          Wordle Answer
        </h1>
      </div>
      <hr class="h-5" />
      <p class="flex justify-center text-center text-xl">{{ day }}</p>
      <h2 class="flex justify-center text-center mt-5 text-2xl">
        Today's Answer:
      </h2>
      <h2 class="text-4xl mt-3 flex justify-center text-center">{{ word }}</h2>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Modal from '~/components/Modal.vue'
import wl from '~/static/words.json'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Modal,
  },
  data() {
    const epochDate = 1624060800000
    const today = new Date()
    const day = Math.floor((today.getTime() - epochDate) / 86400000)
    const word = wl.words
    return {
      isModalVisible: true,
      day: day,
      word: word[day],
    }
  },
  methods: {
    closeModal() {
      this.isModalVisible = false
    },
  },
})
</script>
