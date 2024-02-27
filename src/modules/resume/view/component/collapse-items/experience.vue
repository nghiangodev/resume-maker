<template>
  <div class="form__group col-span-full pt-5 flex justify-between items-center">
    <button @click="addExperience"
        class="border-1 shadow-md text-black w-full hover:text-white bg-white font-bold p-2
         rounded transition-colors duration-300 hover:bg-red-600 shadow-md flex flex-col justify-center"
        type="button">
      <div class="text-center w-full mx-auto">Add Your Experience <font-awesome-icon icon="plus"></font-awesome-icon> </div>
    </button>
  </div>
  <div v-html="dynamicSections"></div>

</template>
<script>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

export default {
  name: 'Experience',
  components: {FontAwesomeIcon},

  data() {
    return {
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
      experienceCount: 0
    }
  },

  computed: {
    dynamicSections() {
      // Generate the HTML for the dynamic sections based on the experience count
      let html = '';
      for (let i = 0; i < this.experienceCount; i++) {
        html += `
          <div>hihihihhi</div>
        `;
      }
      return html;
    }
  },

  methods: {
    removeTag(index) {
      this.tags.splice(index, 1)
    },

    addExperience() {
      this.experienceCount++;
    }
  },
}
</script>
