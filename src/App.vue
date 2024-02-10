<template>
  <div class="grid max-md:grid-cols-mobile-main md:grid-cols-lg-main xl:grid-cols-xl-main grid-rows-[auto_1fr] min-h-[100dvh]">
    <AppHeader class="col-span-3" />
    <Home />
    <AppFooter class="col-span-3"/>
  </div>
</template>

<script setup>
import AppHeader from './components/Header.vue'
import Home from './views/Home.vue'
import AppFooter from './components/Footer.vue'
</script>

<style scoped>

</style>
