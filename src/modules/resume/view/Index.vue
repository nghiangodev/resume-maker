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
      <tab-langueges></tab-langueges>
      <div class="text-xl font-bold mb-5">Your Level</div>
      <tab-levels></tab-levels>
      <div class="text-xl font-bold mb-5">Color Theme</div>
      <tab-colors></tab-colors>

    </div>
    <div class="bg-gray-300 w-full md:w-2/3 p-4">Column 2</div>
  </div>
</template>
<script>
import {onMounted, ref} from 'vue'
import TabLangueges from '@/modules/resume/view/component/TabLangueges.vue'
import TabLevels from '@/modules/resume/view/component/TabLevels.vue'
import TabColors from '@/modules/resume/view/component/TabColors.vue'

export default {

  mounted() {

  },

  methods: {},

  components: {TabColors, TabLevels, TabLangueges},

  setup() {

    return {}
  },
}
</script>
<style>
@import "../style/index.scss";
</style>