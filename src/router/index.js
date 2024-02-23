import { createRouter, createWebHistory } from "vue-router";
import PageNotFound from "@/components/PageNotFound.vue";
import ChurchRoutes from '@/modules/resume/router.js'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		...ChurchRoutes,
		{
			path: "/:notFound",
			component: PageNotFound,
		},
	],
});

export default router;
