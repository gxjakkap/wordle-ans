<template>
  <div class="flex justify-center overflow-y-scroll">
    <Modal v-if="isModalVisible" @close="closeModal" />
    <div
      class="
        fixed
        items-top
        text-center
        h-screen
        w-screen
        bg-white
        dark:bg-slate-800
      "
      v-else
    >
      <NavBar class="items-left" @toggletheme="toggleTheme" />
      <div class="flex text-center justify-center">
        <h1 class="text-5xl text-center flex py-5 text-red-400">
          Wordle Answer
        </h1>
      </div>
      <hr class="h-5" />
      <p class="flex justify-center text-center text-xl dark:text-slate-300">
        {{ day }}
      </p>
      <h2
        class="
          flex
          justify-center
          text-center
          mt-5
          text-2xl
          dark:text-slate-300
        "
      >
        <b>Today's Answer:</b>
      </h2>
      <h2
        class="
          text-4xl
          mt-3
          flex
          justify-center
          text-center
          dark:text-slate-300
        "
      >
        {{ word }}
      </h2>
      <br />
      <div class="justify-center text-center items-center">
        <h2 class="text-xl mt-3 justify-center ml-5 dark:text-slate-300">
          <b>Pronunciation:</b> {{ pronunciation }}
          <font-awesome-icon
            icon="fa-solid fa-volume-high"
            @click="playVoice"
            v-if="audioAvailable"
            class="cursor-pointer"
          />
        </h2>
        <h2
          class="
            text-xl
            mt-3
            justify-center
            break-words
            ml-5
            dark:text-slate-300
          "
        >
          <b>Definition:</b> <i>{{ pos }}</i> <br />
          {{ definition }}
        </h2>
        <h2 class="text-lg mt-3 justify-centerml-5 dark:text-slate-300">
          see more
          <a
            :href="this.link"
            class="text-lg underline text-blue-500 hover:text-blue-400"
            >here</a
          >
        </h2>
      </div>
    </div>
    <br />
    <Footer v-if="!isModalVisible" />
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
      pronunciation: '',
      definition: '',
      pos: '',
      link: '',
      audioLink: '',
      audioAvailable: false,
    }
  },
  mounted() {
    this.$axios
      .$get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`)
      .then((x) => {
        let meanings = x[0].meanings[0]
        console.log(x[0])
        this.definition = meanings.definitions[0].definition
        this.pos = meanings.partOfSpeech
        this.link = x[0].sourceUrls[0]
        // still kinda messy ;-; i need some help here. too dumb to understand my own code.
        if (x[0].phonetic && !x[0].phonetics) {
          this.pronunciation = x[0].phonetic
        } else if (!x[0].phonetic || x[0].phonetics) {
          this.pronunciation = x[0].phonetics[0].text
          let i = 0
          do {
            if (!(x[0].phonetics[i].audio == '')) {
              this.audioLink = x[0].phonetics[i].audio
              this.pronunciation = x[0].phonetics[i].text
              this.audioAvailable = true
            }
            i++
          } while (i <= x[0].phonetics.length)
        }
      })
  },
  methods: {
    closeModal() {
      this.isModalVisible = false
    },
    playVoice() {
      let audio = new Audio(this.audioLink)
      audio.play()
    },
    toggleTheme() {
      console.log(this.$colorMode.preference, this.$colorMode.value)
      switch (this.$colorMode.preference) {
        case 'light':
          this.$colorMode.preference = 'dark'
          break
        case 'dark':
          this.$colorMode.preference = 'light'
          break
        case 'system':
          switch (this.$colorMode.value) {
            case 'light':
              this.$colorMode.preference = 'dark'
              this.$colorMode.value = 'dark'
              break
            case 'dark':
              this.$colorMode.preference = 'light'
              this.$colorMode.value = 'light'
              break
          }
        default:
          this.$colorMode.preference = 'dark'
          break
      }
    },
  },
})
</script>
