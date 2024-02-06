<template >
  <section class="my-[150px] flex flex-col gap-[100px]">

    <header class="text-center">
      <h1 class="font-semibold text-[48px] mb-7">
        Reasons to Choose DigitX for <br />
        <span class="text-gray-40">Your Digital Journey</span>
      </h1>
      <p class="text-gray-40">
        Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer
        engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring
        lasting success.
      </p>
    </header>

    <main class="grid grid-cols-[1fr_80px_1fr_80px_1fr] grid-rows-[1fr_80px_1fr]">

      <ReasonCard href="/" class="col-start-1 row-start-1">
        <template v-slot:svg>
          <StarsSvg />
        </template>
        <template v-slot:header>
          Expertise That Drives Results
        </template>
        <template v-slot:content>
          Our team of seasoned professionals brings years of experience and expertise to the
          table.
        </template>
      </ReasonCard>

      <VerDiv />

      <ReasonCard href="/" class="col-start-3 row-start-1">
        <template v-slot:svg>
          <LightBulbSvg />
        </template>
        <template v-slot:header>
          Tailored Business Solutions
        </template>
        <template v-slot:content>
          We understand that every business is unique. That's why our solutions are customized.
        </template>
      </ReasonCard>

      <VerDiv />

      <ReasonCard href="/" class="col-start-5 row-start-1">
        <template v-slot:svg>
          <PointerSvg />
        </template>
        <template v-slot:header>
          Cutting-Edge Web Design
        </template>
        <template v-slot:content>
          Leave a lasting impression on your audience with our top-notch web design services.
        </template>
      </ReasonCard>

      <HorDiv class="col-start-1 col-span-5" />

      <ReasonCard href="/" class="col-start-1 row-start-3">
        <template v-slot:svg>
          <PhoneSvg />
        </template>
        <template v-slot:header>
          Mobile-First Approach
        </template>
        <template v-slot:content>
          In today's mobile-centric world, we prioritize mobile-first design to ensure your website.
        </template>
      </ReasonCard>

      <VerDiv />

      <ReasonCard href="/" class="col-start-3 row-start-3">
        <template v-slot:svg>
          <LightningSvg />
        </template>
        <template v-slot:header>
          Marketing Strategies
        </template>
        <template v-slot:content>
          Our data-driven marketing strategies allow us to target the right audience with precision.
        </template>
      </ReasonCard>

      <VerDiv />

      <ReasonCard href="/" class="col-start-5 row-start-3">
        <template v-slot:svg>
          <BlocksSvg />
        </template>
        <template v-slot:header>
          Search Engine Optimization
        </template>
        <template v-slot:content>
          (SEO) Mastery Boost your online visibility with our expert SEO techniques.
        </template>
      </ReasonCard>

    </main>
  </section>
</template>
<script setup>
import StarsSvg from '../assets/svgs/StarsSvg.vue'
import ReasonCard from './ReasonCard.vue'
import LightBulbSvg from '../assets/svgs/LightBulbSvg.vue'
import PointerSvg from '../assets/svgs/PointerSvg.vue'
import PhoneSvg from '../assets/svgs/PhoneSvg.vue'
import LightningSvg from '../assets/svgs/LightningSvg.vue'
import BlocksSvg from '../assets/svgs/BlocksSvg.vue'
import HorDiv from './ui/HorDiv.vue'
import VerDiv from './ui/VerDiv.vue'

</script>
<style ></style>