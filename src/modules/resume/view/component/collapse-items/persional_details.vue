<template>
  <div class="form__group col-span-full pt-5">
    <span class="text-black-500 text-md ">📷 Profile picture</span>
    <div class="flex cursor-pointer gap-2  py-5">
      <label tabindex="0" for="profile-image-uploader"
             class="text-center border-1 text-black hover:text-white bg-white font-bold py-2 px-4 w-full rounded transition-colors duration-300 hover:bg-red-600 shadow-md">
        Upload profile image <input id="profile-image-uploader" type="file" accept="image/*" name="uploadProfileImage" class="hidden">
      </label>
      <button
          class="border-1 shadow-md text-black hover:text-white bg-white font-bold py-2 px-4 w-1/8 rounded transition-colors duration-300 hover:bg-red-600 shadow-md flex flex-col justify-center"
          type="button">Clear
      </button>
    </div>
    <div class="form__group col-span-full flex-col flex ">
      <label class="form__label" for="job-pos">💼 Job Title / Current Position</label>
      <input id="job-pos" class="form__control h-[40px] my-5 shadow-md border border-gray-300 transition duration-300 ease-in-out" type="text">
    </div>
    <div class="flex gap-2">
      <div class="form__group flex-col flex w-full">
        <label class="form__label" for="first-name">👤 First name</label>
        <input id="first-name" class="form__control border-1  h-[40px] my-5 shadow-md" type="text">
      </div>
      <div class="form__group flex-col flex w-full">
        <label class="form__label" for="first-name">👤 Last name</label>
        <input id="first-name" class="form__control border-1  h-[40px] my-5 shadow-md" type="text">
      </div>
    </div>
    <div class="form__group flex-col flex w-full">
      <label class="form__label" for="email">✉️ Email</label>
      <input id="email" class="form__control border-1  h-[40px] my-5 shadow-md" type="email">
    </div>
    <div class="flex gap-2">
      <div class="form__group flex-col flex w-full">
        <label class="form__label" for="first-name">📍 Location</label>
        <input id="first-name" class="form__control border-1 h-[40px] my-5 shadow-md" type="text">
      </div>
      <div class="form__group flex-col flex w-full">
        <label class="form__label" for="first-name">📱 Phone number</label>
        <input id="first-name" class="form__control border-1  h-[40px] my-5 shadow-md" type="text">
      </div>
    </div>
    <div class="form__group flex-col flex w-full">
      <label class="form__label" for="aboutme">🌟 About me</label>
      <textarea id="aboutme" class="form__control p-4 my-5" name="aboutme" cols="30" rows="2"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PersonalDetails',
}
</script>
