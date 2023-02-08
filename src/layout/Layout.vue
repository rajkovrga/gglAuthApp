<script setup lang="ts">
import Footer from "@/layout/Footer.vue";
import Header from "@/layout/Header.vue";
</script>

<template>
  <div>
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>