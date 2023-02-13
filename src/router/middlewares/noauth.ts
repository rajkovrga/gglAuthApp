import type {NavigationGuard} from "vue-router";
import {useAuthStore} from "@/stores/auth";

const noAuthMiddleware: NavigationGuard = (_to, from, next) => {
    const { getState, setStore } = useAuthStore();
    const localstorageData = localStorage.getItem('token') === null ? null : JSON.parse(localStorage.getItem('token')!);
    if(localstorageData !== null) {
       setStore(localstorageData.token, localstorageData.userData)
    }

    if(getState.token !== '') {
        return next({name:'todo'});
    }

    return next();
};

export default noAuthMiddleware;