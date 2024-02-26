<template>
  <div>
    <div
        v-for="(item, index) in items"
        :key="index"
        @click="toggleAccordion(index)"
        class=" cursor-pointer pt-5"
    >
      <div class="flex items-center justify-between">
        <div class="text-black text-xl font-bold">{{ item.title }}</div>
        <svg
            class="w-6 h-6" :class="{'transform rotate-180': activeIndex === index}"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
          ></path>
        </svg>

      </div>
      <div v-show="activeIndex === index">
        <div v-if="index === 0" @click.stop>
          <persional_details></persional_details>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Persional_details from '@/modules/resume/view/component/collapse-items/persional_details.vue'

export default {
  name: "Accordion",
  components: {Persional_details},
  data() {
    return {
      activeIndex: null,
      items: [
        { title: "Persional Details" },
        { title: "Skills" },
        { title: "Experience" },
        { title: "Education" },
        { title: "Projects" },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
