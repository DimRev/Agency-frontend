<template>
  <Card type="CTA" class="relative">
    <SectionHeader class="mb-[60px]">
      <template v-slot:title><span class="max-md:text-2xl">Ready to Transform Your Digital Presence?</span></template>
      <template v-slot:content>
        <span class="md:block hidden">Take the first step towards digital success with DigitX by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we've got you covered. Let's embark on this transformative journey together.</span>
        <span class="md:hidden block">Take the first step towards digital success with DigitX by your side.</span>
      </template>
    </SectionHeader>

    <main class="flex flex-col gap-9 text-center">
      <h3 class="text-xl">Unlock Your Digital Potential Today</h3>
      <div class="flex justify-center gap-[10px]">
        <Link type="full" href="/">Get Started</Link>
        <Link type="full" href="/">Free Consultation</Link>
      </div>
    </main>

<!-- TODO Fix this area for page responsively -->

<div class="mt-[82px] px-[19%]">
      <img src="../assets/imgs/CTAImg.png" alt="DigitX Logo">
    </div>
    <div class="glassed"></div>
  </Card>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue';
import Card from './ui/Card.vue';
import Link from './ui/Link.vue';


</script>

<style scoped>
.glassed {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 19%;
  background-color: #00000011;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  backdrop-filter: blur(12px)
}
</style>