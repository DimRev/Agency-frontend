<template>
  <section class="grid grid-cols-2 gap-6">
    <div class="relative row-span-2 flex items-center ">
      <article class="flex flex-col gap-12">
        <div>
          <h1 class="mb-7 font-semibold text-[58px] leading-[1.3]">
            Digital Solutions <br />
            <span class="text-gray-40">
              That Drive Success
            </span>
          </h1>
          <p class="text-gray-40">
            At DigitX, we believe in the transformative power of digital solutions. Our team of experts is dedicated to
            helping businesses like yours thrive in the fast-paced digital landscape. From captivating web design to
            data-driven marketing strategies, we are committed to delivering results that exceed expectations.
          </p>
        </div>
        <div class="flex flex-col gap-5">
          <p class="text-xl">Unlock Your Digital Potential Today</p>
          <div class="flex gap-2.5">
            <Link type="full" href="/">Get Started</Link>
            <Link type="full" href="/">Free Consultation</Link>
          </div>
        </div>
      </article>
      <!-- <div class="abstract"> </div> -->
    </div>
    <div class="relative col-start-2 row-start-1 row-end-3 flex items-center justify-center">
      <img src="../assets/imgs/HeroImg.png" alt="" class="p-[19%]">
      <div class="glassed"></div>
    </div>
  </section>
</template>

<script setup>
import Link from './ui/Link.vue'
</script>

<style scoped>
.glassed {
  position: absolute;
  left: 0;
  bottom: 50%;
  translate: 0 100%;
  width: calc(100%);
  height: 50%;

  backdrop-filter: blur(12px);
}
</style>