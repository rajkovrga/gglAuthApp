import {useAuthStore} from "@/stores/auth";
import type {NavigationGuard} from "vue-router";
import jwtDecode from "jwt-decode";
import {DateTime} from "luxon";
import type {GoogleTokenData} from "@/models";

const authMiddleware: NavigationGuard = (_to, from, next) => {
    const { getState, setStore, removeStore } = useAuthStore();

    const localstorageData = localStorage.getItem('token') === null ? null : JSON.parse(localStorage.getItem('token')!);
    if(localstorageData !== null) {
        setStore(localstorageData.token, localstorageData.userData)

    }

    if(getState.token === '') {
        return next('/login');
    }

    const data = jwtDecode(getState.token) as GoogleTokenData;
    const expiry = DateTime.fromMillis(data.exp * 1000);
    const isExpired = DateTime.local().toMillis() > expiry.toMillis();

    if(!isExpired) {
        return next();
    }

    removeStore();
    localStorage.removeItem('token');

    return next('/login');
};

export default authMiddleware;