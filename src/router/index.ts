import { createRouter, createWebHistory } from 'vue-router'
import Auth from "@/pages/auth/Auth.vue";
import Todo from "@/pages/todo/Todo.vue";
import authMiddleware from "@/router/middlewares/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Auth,
      meta: {
          title: "peraaa"
      }
    },
    {
      path: '/',
      name: 'todo',
      component: Todo,
      beforeEnter: authMiddleware
    }
  ],
})

router.beforeEach((to, from, next) => {
  var metaGoogle = document.createElement('meta');

  metaGoogle.content = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  document.head.appendChild(metaGoogle);

  next();
});
export default router;