import { createRouter, createWebHistory } from 'vue-router'
import Auth from "@/pages/auth/Auth.vue";
import Todo from "@/pages/todo/Todo.vue";
import authMiddleware from "@/router/middlewares/auth";
import noAuthMiddleware from "@/router/middlewares/noauth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Auth,
      beforeEnter: noAuthMiddleware
    },
    {
      path: '/',
      name: 'todo',
      component: Todo,
      beforeEnter: authMiddleware
    }
  ],
});


export default router;