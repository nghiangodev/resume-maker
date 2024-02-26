<template>
  <div class="flex gap-2 mb-5 flex-wrap">
    <button v-for="(tab, index) in tabs.levels"
            :key="index"
            @click="currentLangTab = tab.code"
            :class="{
          'bg-red-500': currentLangTab === tab.code,
          'text-white': currentLangTab === tab.code,
          'hover:bg-red-700': currentLangTab !== tab.code,
          'hover:text-white': currentLangTab !== tab.code,
          'border-red-500': currentLangTab !== tab.code,
          'bg-transparent': currentLangTab !== tab.code
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
      {{ tab.name }}
    </button>
  </div>
</template>
<script>
import levels from '@/modules/resume/datas/levels.json'

export default {
  name: 'TabLevels',

  data() {
    return {
      currentLangTab: 'in',
      tabs: levels,
    }
  },
}
</script>
<style scoped></style>