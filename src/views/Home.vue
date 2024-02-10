<template>
  <!-- Inside grid layout w.e. not a hero should get cols-start-2 -->
    <section class="relative grid max-md:grid-cols-mobile-main md:grid-cols-lg-main xl:grid-cols-xl-main col-start-1 col-end-4 overflow-hidden">
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
  translate: -10% 0;
  scale: 2;
  z-index: -1;
  scale: 1;

@media (min-width: 640px) {
  scale: 1;
  translate: -10%;

}
@media (min-width: 768px) {

}
@media (min-width: 1024px) {
  scale: 1.5;
  translate:0;

}
@media (min-width: 1280px) {
  scale: 2;

}
}
</style>