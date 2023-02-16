import {defineStore} from "pinia";
import type {GoogleTokenData, UserData} from "@/models";
import router from "@/router";

export const useAuthStore = defineStore('auth',  {
    state(){
        return {token: '' as string, user: {} as UserData}
    },
    getters: {
        getState: state => state
    },
    actions: {
        setStore(token: string, userData: UserData) {
            localStorage.setItem('token', JSON.stringify({
                token: token,
                userData: userData
            }));
            this.token = token;
            this.user = userData;
        },
        removeStore() {
            this.token = '';
            this.user = {} as UserData;
            localStorage.removeItem('token');
            router.push('/login');
        }
    },


});