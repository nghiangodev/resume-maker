<template>
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/3 p-4">
      <div class="flex justify-between items-center mb-9">
        <div class="text-2xl text-red-500 font-extrabold">CV Configs</div>
        <a href="https://www.buymeacoffee.com/nghiango2901" class="inline-block border-gradient">
          <img class="w-[120px]" src="/images/kofi5.webp">
        </a>
      </div>
      <div class="grid grid-cols-2 gap-2 mb-5">
        <button type="button" class="
        border-2
        border-red-500
        text-black
        hover:text-white
        font-bold py-2 px-4
        rounded
        transition-colors
        duration-300
        hover:bg-red-600
        shadow-md">Reset CV
        </button>
        <button type="button" class="
        border-2
        border-red-500
        text-black
        hover:text-white
        font-bold py-2 px-4
        rounded
        transition-colors
        duration-300
        hover:bg-red-600
        shadow-md">Clear CV
        </button>
      </div>
      <div class="text-xl font-bold mb-5">CV Language</div>
      <div class="flex gap-2 mb-5">
        <button v-for="(tab, index) in tabs"
                :key="index"
                @click="currentTab = tab"
                :class="{
          'bg-red-500': currentTab === tab,
          'text-white': currentTab === tab,
          'hover:bg-red-700': currentTab !== tab,
          'hover:text-white': currentTab !== tab,
          'border-red-500': currentTab !== tab,
          'bg-transparent': currentTab !== tab
        }"
                class="border-2
                border-red-500
                text-black
                py-2 px-4
                rounded
                hover:text-white
                transition-colors
                duration-300
                hover:bg-red-600
                focus:bg-red-600
                active:bg-white
                active:text-black">
          {{ tab }}
        </button>

      </div>
    </div>
    <div class="bg-gray-300 w-full md:w-2/3 p-4">Column 2</div>
  </div>
</template>
<script>
import {onMounted, ref} from 'vue'

export default {
  data() {
    return {
      currentTab: 'English',
      tabs: [
        'English',
        'Spanish',
        'Vietnamese',
        'Chinese',
        'Indonesian',
        'German',
        'French',
        'Arabic',
      ],
    }
  },

  mounted() {

  },

  methods: {},

  components: {},

  setup() {

    return {}
  },
}
</script>
<style>
@import "../style/index.scss";
</style>