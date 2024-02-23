<template>
	<section class="mx-5">
		<main :page="this.$route.name" class="">
			<RouterView />
		</main>
	</section>
	<Footer></Footer>
</template>
<script>
	import Footer from "@/components/Footer.vue";
	export default {
		components: {
			Footer,
		},
	};
</script>
<style scoped></style>
