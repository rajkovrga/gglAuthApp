<script setup lang="ts">
import {useAuthStore} from "@/stores/auth";
const auth = useAuthStore();
</script>

<template>
  <div>
    <div class="flex items-center gap-x-6">
      <img class="h-16 w-16 rounded-full" :src="auth.user.imageUrl" alt="picture">
      <div>
        <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{{ auth.user.username }}</h3>
        <p class="text-sm font-semibold leading-6 text-indigo-600">{{ auth.user.email }}</p>
      </div>
    </div>
  </div>
</template>