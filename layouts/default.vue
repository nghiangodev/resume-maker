<template>
  <main class="main-wrapper font-sans">
    <slot />
  </main>
</template>
<style lang="postcss" scoped>
@media screen and (min-width: 1024px) {
  .main-wrapper {
    @apply h-screen overflow-hidden;
  }
}
</style>
