<template>
  <div class="flex gap-2 mb-5 flex-wrap">
    <button v-for="(tab, index) in tabs.colors"
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
import colors from '@/modules/resume/datas/colors.json'

export default {
  name: 'TabColors',

  data() {
    return {
      currentLangTab: 'bl',
      tabs: colors,
    }
  },
}
</script>
<style scoped></style>