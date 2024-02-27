<template>
	<section class="">
		<main :page="this.$route.name" class="">
			<RouterView />
		</main>
	</section>
</template>
<script>
	export default {
	};
</script>
<style scoped></style>
