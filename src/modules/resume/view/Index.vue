<template>
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/3 p-4 bg-slate-100">
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
      <accordion></accordion>
      <div class="form__group col-span-full pt-5 flex justify-between items-center">
        <button  class="border-1 shadow-md text-black w-full hover:text-white bg-white font-bold p-2
         rounded transition-colors duration-300 hover:bg-red-600 shadow-md flex flex-col justify-center" type="button">
          <div class="text-center w-full mx-auto">Download your CV (PDF)
            <font-awesome-icon icon="download"></font-awesome-icon>
          </div>
        </button>
      </div>
    </div>
    <div class="bg-gray-300 w-full md:w-2/3 flex justify-center">
      <div class="section-resume flex py-5 w-1/2">
        <div class="flex gap-2 w-full  items-center h-[30px]">
          <hr class="border-1 border-dotted border-black hover:border-red-500 duration-500 w-full" />
          <span class="text-xs">1</span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import {onMounted, ref} from 'vue'
import TabLangueges from '@/modules/resume/view/component/tabs/TabLangueges.vue'
import TabLevels from '@/modules/resume/view/component/tabs/TabLevels.vue'
import TabColors from '@/modules/resume/view/component/tabs/TabColors.vue'
import Accordion from '@/modules/resume/view/AccordionComp.vue'
import Footer from '@/components/Footer.vue'

export default {

  mounted() {

  },

  methods: {},

  components: {Footer, Accordion, TabColors, TabLevels, TabLangueges},

  setup() {

    return {}
  },
}
</script>
<style>
@import "../style/index.scss";
</style>