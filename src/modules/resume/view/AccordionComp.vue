<template>
  <div>
    <div
        v-for="(item, index) in items"
        :key="index"
        @click="toggleAccordion(index)"
        class=" cursor-pointer pt-10"
    >
      <div class="flex items-center justify-between">
        <div class="text-black text-xl font-bold">{{ item.title }}</div>
        <svg
            class="w-6 h-6" :class="{'transform rotate-180': activeIndex.includes(index)}"
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
      <div v-show="activeIndex.includes(index)">
        <div v-if="index === 0" @click.stop>
          <persional_details></persional_details>
        </div>
        <div v-if="index === 1" @click.stop>
          <skills></skills>
        </div>
        <div v-if="index === 2" @click.stop>
          <social></social>
        </div>
        <div v-if="index === 3" @click.stop>
          <experience></experience>
        </div>
        <div v-if="index === 4" @click.stop>
          <projects></projects>
        </div>
        <div v-if="index === 5" @click.stop>
          <education></education>
        </div>
        <div v-if="index === 6" @click.stop>
          <activities></activities>
        </div>
        <div v-if="index === 7" @click.stop>
          <hobbies></hobbies>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Persional_details from '@/modules/resume/view/component/collapse-items/persional_details.vue'
import Skills from '@/modules/resume/view/component/collapse-items/skills.vue'
import Experience from '@/modules/resume/view/component/collapse-items/experience.vue'
import Social from '@/modules/resume/view/component/collapse-items/social.vue'
import Projects from '@/modules/resume/view/component/collapse-items/projects.vue'
import Education from '@/modules/resume/view/component/collapse-items/education.vue'
import Hobbies from '@/modules/resume/view/component/collapse-items/hobbies.vue'
import Activities from '@/modules/resume/view/component/collapse-items/activities.vue'

export default {
  name: "Accordion",
  components: {Activities, Hobbies, Education, Projects, Social, Experience, Skills, Persional_details},
  data() {
    return {
      activeIndex: [0],
      items: [
        { title: "Persional Details" },
        { title: "Skills" },
        { title: "Social" },
        { title: "Experience" },
        { title: "Projects" },
        { title: "Education" },
        { title: "Activities" },
        { title: "Hobbies" },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      if (this.activeIndex.includes(index)) {
        this.activeIndex = this.activeIndex.filter(i => i !== index);
      } else {
        this.activeIndex.push(index);
      }
    },
  },
};
</script>

<style>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
