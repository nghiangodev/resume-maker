<template >
	 <footer class="footer">
    © {{ currentYear }} AnthonyDesign
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
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f1f1f1;
}
</style>
