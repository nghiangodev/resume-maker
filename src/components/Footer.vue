<template >
	 <footer class="footer">
    © {{ currentYear }} Made with ♥️ by Anthony using vue + tailwind
  </footer>
</template>
<script>
	export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      }
    },
  };
</script>
<style scoped>
footer {
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 67%;
}
</style>
