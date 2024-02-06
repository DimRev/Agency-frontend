<template>
  <!-- Inside grid layout w.e. not a hero should get cols-start-2 -->
  <Hero class="col-start-1 col-end-4" />
  <section class="col-start-2">
    <ReasonsSection />
    <ServicesSection />
  </section>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import ReasonsSection from '../components/ReasonsSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
</script>
<style ></style>