<template>
  <section class="grid grid-cols-2 gap-6">
    <div class="row-span-2 pl-[162px] flex items-center relative">
      <article class="flex flex-col gap-12">
        <div>
          <h1 class="font-semibold text-[58px] leading-[1.3] mb-7">
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
      <div class="abstract"> </div>
    </div>
    <div class="pr-[162px] relative">
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
  width: calc(100% - 162px);
  height: 50%;

  backdrop-filter: blur(12px);
}

.abstract {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  translate: -50% -50%;
  rotate: 45deg;

  z-index: -1;

  background-color: transparent;
  opacity: 0.3;
  background-image: linear-gradient(135deg, #1A1A1A 25%, transparent 25%), linear-gradient(225deg, #1A1A1A 25%, transparent 25%), linear-gradient(45deg, #1A1A1A 25%, transparent 25%), linear-gradient(315deg, #1A1A1A 25%, transparent 25%);
  background-position: 24px 0, 24px 0, 0 0, 0 0;
  background-size: 24px 24px;
  background-repeat: repeat;

}
</style>