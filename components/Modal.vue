<template>
  <div
    class="
      fixed
      bg-white
      dark:bg-slate-800
      flex
      justify-center
      items-center
      h-screen
      w-screen
    "
  >
    <div
      class="
        bg-slate-100
        dark:bg-slate-800
        shadow
        flex flex-col
        overflow-x-auto
      "
    >
      <section class="relative px-20 py-10 w-full">
        <div class="flex text-center justify-center">
          <h1
            class="
              text-5xl text-center
              justify-center
              flex
              py-2
              mb-2
              lg:mb-5
              text-red-500
              sm:py-3
              md:py-5
              lg:py-5
              xl:py-5
              2xl:py-5
            "
          >
            !!SPOILER ALERT!!
          </h1>
        </div>

        <p
          class="
            text-xl text-center
            justify-center
            ml-auto
            mr-auto
            w-full
            sm:w-4/5
            md:w-4/5
            lg:w-3/5
            xl:w-3/5
            2xl:w-3/5
            break-words
            dark:text-slate-100
          "
        >
          By clicking "I Acknowledge", I accept that I'll be spoiled about
          today's Wordle answer. The maker (Jakkaphat Ch.) of this website (<a
            href="https://wordle-ans.vercel.app"
            >https://wordle-ans.vercel.app</a
          >) will not be responsible in anyway.
        </p>
        <br />
        <div class="flex text-center justify-center">
          <button
            type="button"
            class="
              bg-green-600
              text-white
              justify-center
              mr-auto
              ml-auto
              w-1/2
              sm:w-1/3
              md:w-1/4
              lg:w-1/4
              2xl:w-1/4
            "
            @click="close"
          >
            I Acknowledge
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>