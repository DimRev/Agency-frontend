<template>
  <!-- Inside grid layout w.e. not a hero should get cols-start-2 -->
    <section class="relative grid grid-cols-lg-main lg:grid-cols-xl-main col-start-1 col-end-4">
      <div class="col-start-2">
        <Hero/>
      </div>
      <div class="abstract-design"><img src="../assets/imgs/Abstract Design.png" alt=""></div>
    </section>
  <section class="col-start-2">
    <ReasonsSection />
    <ServicesSection />
    <WorksSection/>
  </section>
  <TestimonialsSection class="col-start-1 col-end-4"/>
  <section class="col-start-2">
    <FAQSection/>
    <PartnersSection />
    <CTASection />
  </section>
</template>

<script setup>
import CTASection from '../components/CTASection.vue';
import FAQSection from '../components/FAQSection.vue';
import Hero from '../components/Hero.vue'
import PartnersSection from '../components/PartnersSection.vue';
import ReasonsSection from '../components/ReasonsSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue';
import WorksSection from '../components/WorksSection.vue';
</script>
<style scoped>
.abstract-design{
  position: absolute;
  top: 0;
  left: 0;
  rotate: -90deg;
  translate: 40% 0;
  scale: 2;
  z-index: -1;
}
</style>