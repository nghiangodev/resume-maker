const ChurchRoutes = [
    {
        path: "/",
        name: "Church",
        component: () => import("./view/Index.vue"),
        meta: {
            requiresAuth: false,
        },
    },

];

export default ChurchRoutes;
