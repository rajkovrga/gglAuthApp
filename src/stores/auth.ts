import {defineStore} from "pinia";
import type {UserData} from "@/models";
import jwt from "jsonwebtoken";

export const useAuthStore = defineStore('auth',  {
    state: () => ({token: '', user: {}}),
    getters: {
        getUserData: (state) => state.user,
        isAuth: (state) => {
            if(state.token === '')
                return false;
            else if(jwt.verify(state.token, ''))
                return true;


            return false;
        }
    },
    actions: {
        setStore(token: string, userData: UserData) {
            this.token = token;
            this.user = userData;
        },

        resetStore() {
            this.token = '';
            this.user = {};
        }
    }
});