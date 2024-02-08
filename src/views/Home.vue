<template>
  <!-- Inside grid layout w.e. not a hero should get cols-start-2 -->
  <Hero class="col-start-1 col-end-4" />
  <section class="col-start-2">
    <ReasonsSection />
    <ServicesSection />
    <WorksSection/>
  </section>
  <TestimonialsSection class="col-start-1 col-end-4"/>
  <section class="col-start-2">
    <FAQSection/>
    <PartnersSection />
  </section>
</template>

<script setup>
import FAQSection from '../components/FAQSection.vue';
import Hero from '../components/Hero.vue'
import PartnersSection from '../components/PartnersSection.vue';
import ReasonsSection from '../components/ReasonsSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue';
import WorksSection from '../components/WorksSection.vue';
</script>
<style ></style>