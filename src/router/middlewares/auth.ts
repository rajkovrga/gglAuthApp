import {useAuthStore} from "@/stores/auth";
import type {NavigationGuard} from "vue-router";


const authMiddleware: NavigationGuard = (_to, from, next) => {
    const { isAuth } = useAuthStore();
    if(isAuth) {
        next();
    }

    return next('/login');
};

export default authMiddleware;