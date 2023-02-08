<script setup lang="ts">
import jwt from 'jsonwebtoken';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

window.handleLogin = (response: any) => {
  console.log(jwt.decode(response.credential))
}

</script>

<template>
  <div class="flex justify-center p-5">
    <div id="g_id_onload"
         :data-client_id="clientId"
         data-context="signin"
         data-ux_mode="popup"
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