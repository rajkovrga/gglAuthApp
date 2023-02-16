<script setup lang="ts">
import {useAuthStore} from "@/stores/auth";
import type {GoogleTokenData} from "@/models";
import jwtDecode from "jwt-decode";
import router from "@/router";
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const {setStore} = useAuthStore();

window.handleLogin = async (response: any) => {
  const data = jwtDecode(response.credential) as GoogleTokenData|null;

  if(data !== null) {
    setStore(response.credential.toString(), {
      email: data.email,
      username: data.name,
      imageUrl: data.picture
    });

    await router.push({ name: 'todo' })
  }
}
</script>

<template>
  <div class="flex justify-center p-5">
    <div id="g_id_onload"
         :data-client_id="clientId"
         data-context="signin"
         data-ux_mode="popup"
         data-nonce=""
         data-callback="handleLogin"
         data-auto_prompt="false">
    </div>

    <div class="g_id_signin"
         data-type="standard"
         data-shape="rectangular"
         data-theme="filled_blue"
         data-text="signin_with"
         data-size="large"
         data-logo_alignment="left">
    </div>
  </div>
</template>