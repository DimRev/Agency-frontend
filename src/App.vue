<template>
  <div class="grid grid-cols-[162px_1fr_162px] grid-rows-[auto_1fr] min-h-[100dvh]">
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
