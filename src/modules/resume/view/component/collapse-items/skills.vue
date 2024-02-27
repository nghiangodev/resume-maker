<template>
  <div class="form__group flex-col flex w-full pt-5">
    <span class="text-black-500 text-md ">🛠 Technical Skills</span>
    <div class="flex cursor-pointer gap-2 w-full py-5 items-center">
      <input id="first-name" class="form__control border-1 h-[40px] w-full my-5 shadow-md px-2" type="text" placeholder="Vui lòng nhập Technical Skills">
      <button
          class="border-1 shadow-md text-black hover:text-white h-[40px] bg-white font-bold py-2 px-4 w-1/8 rounded transition-colors duration-300 hover:bg-red-600 shadow-md flex flex-col justify-center"
          type="button">Add
      </button>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(tag, index) in tags" :key="index" class="bg-blue-500 text-white px-3 py-1 rounded flex items-center mr-2 mt-2">
        <span>{{ tag }}</span>
        <button @click="removeTag(index)" class="ml-2 focus:outline-none">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="form__group flex-col flex w-full pt-5">
    <span class="text-black-500 text-md ">🧸 Soft skills</span>
    <div class="flex cursor-pointer gap-2 w-full py-5 items-center">
      <input id="first-name" class="form__control border-1 h-[40px] w-full my-5 shadow-md px-2" placeholder="Vui lòng nhập Technical Skills" type="text">
      <button
          class="border-1 shadow-md text-black hover:text-white h-[40px] bg-white font-bold py-2 px-4 w-1/8 rounded transition-colors duration-300 hover:bg-red-600 shadow-md flex flex-col justify-center"
          type="button">Add
      </button>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(tag, index) in tags" :key="index" class="bg-blue-500 text-white px-3 py-1 rounded flex items-center mr-2 mt-2">
        <span>{{ tag }}</span>
        <button @click="removeTag(index)" class="ml-2 focus:outline-none">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="form__group flex-col flex w-full pt-5">
    <span class="text-black-500 text-md ">🌎 Languages</span>
    <div class="flex cursor-pointer gap-2 w-full py-5 items-center">
      <input id="first-name" class="form__control border-1 h-[40px] w-full my-5 shadow-md px-2" placeholder="Vui lòng nhập Technical Skills" type="text">
      <select  class="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm">
        <option value="" disabled>Select an item</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>

      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 12a1 1 0 01-.7-.29l-4-4a1 1 0 111.42-1.42L10 10.59l3.29-3.3a1 1 0 111.42 1.42l-4 4A1 1 0 0110 12z"/>
        </svg>
      </div>
      <button
          class="border-1 shadow-md text-black hover:text-white h-[40px] bg-white font-bold py-2 px-4 w-1/8 rounded transition-colors duration-300 hover:bg-red-600 shadow-md flex flex-col justify-center"
          type="button">Add
      </button>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(tag, index) in tags" :key="index" class="bg-blue-500 text-white px-3 py-1 rounded flex items-center mr-2 mt-2">
        <span>{{ tag }}</span>
        <button @click="removeTag(index)" class="ml-2 focus:outline-none">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Skills',

  data() {
    return {
      tags: ['Tag 1', 'Tag 2', 'Tag 3'] // Initial tags
    };
  },
  methods: {
    removeTag(index) {
      this.tags.splice(index, 1);
    }
  }
}
</script>
