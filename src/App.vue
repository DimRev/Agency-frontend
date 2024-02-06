<template>
  <div class="grid grid-cols-[162px_1fr_162px] grid-rows-[auto_1fr] min-h-[100dvh]">
    <Header class="col-span-3" />
    <Home />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Home from './views/Home.vue'

</script>

<style scoped></style>
