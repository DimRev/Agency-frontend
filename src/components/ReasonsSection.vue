<template >
  <section class="flex flex-col gap-[100px] my-[150px]">

    <SectionHeader class="text-center">
      <template v-slot:title>
        Reasons to Choose DigitX for <br />
        <span class="text-gray-40">Your Digital Journey</span>
      </template>
      <template v-slot:content>
        Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer
        engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring
        lasting success.
      </template>
    </SectionHeader>

    <main class="grid max-md:grid-cols-1 md:grid-cols-[1fr_80px_1fr_80px_1fr] xl:grid-cols-[1fr_100px_1fr_100px_1fr] md:grid-rows-[1fr_80px_1fr] max-md:grid-rows-1 xl:grid-rows-[1fr_100px_1fr]">

      <ReasonCard href="/" class="">
        <template v-slot:svg>
          <StarsSvg class="svg" />
        </template>
        <template v-slot:header>
          Expertise That Drives Results
        </template>
        <template v-slot:content>
          Our team of seasoned professionals brings years of experience and expertise to the
          table.
        </template>
      </ReasonCard>

      <VerDiv class="max-md:hidden"/>
      <HorDiv offset="50" height="full" class="md:hidden py-10" />

      <ReasonCard href="/" class="">
        <template v-slot:svg>
          <LightBulbSvg class="svg" />
        </template>
        <template v-slot:header>
          Tailored Business Solutions
        </template>
        <template v-slot:content>
          We understand that every business is unique. That's why our solutions are customized.
        </template>
      </ReasonCard>

      <VerDiv class="max-md:hidden" />
      <HorDiv offset="50" height="full" class="md:hidden py-10" />

      <ReasonCard href="/" class="">
        <template v-slot:svg>
          <PointerSvg class="svg" />
        </template>
        <template v-slot:header>
          Cutting-Edge Web Design
        </template>
        <template v-slot:content>
          Leave a lasting impression on your audience with our top-notch web design services.
        </template>
      </ReasonCard>

      <HorDiv offset="50" height="full" class="max-md:hidden col-span-5" />
      <HorDiv offset="50" height="full" class="md:hidden py-10" />

      <ReasonCard href="/" class="">
        <template v-slot:svg>
          <PhoneSvg class="svg" />
        </template>
        <template v-slot:header>
          Mobile-First Approach
        </template>
        <template v-slot:content>
          In today's mobile-centric world, we prioritize mobile-first design to ensure your website.
        </template>
      </ReasonCard>

      <VerDiv class="max-md:hidden" />
      <HorDiv offset="50" height="full" class="md:hidden py-10" />

      <ReasonCard href="/" class="">
        <template v-slot:svg>
          <LightningSvg class="svg" />
        </template>
        <template v-slot:header>
          Marketing Strategies
        </template>
        <template v-slot:content>
          Our data-driven marketing strategies allow us to target the right audience with precision.
        </template>
      </ReasonCard>

      <VerDiv class="max-md:hidden" />
      <HorDiv offset="50" height="full" class="md:hidden py-10" />

      <ReasonCard href="/" class="">
        <template v-slot:svg>
          <BlocksSvg class="svg" />
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
import SectionHeader from './SectionHeader.vue'
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
<style scoped >
.svg{
  height: 36px;
  width: 36px;
  }
@media (min-width: 640px) {
  svg{
  }
}
@media (min-width: 768px) {
  svg{
    height: 40px;
    width: 56px;
  }
}
@media (min-width: 1024px) {
  svg{
    height: 40px;
    width: 56px;
  }
}
@media (min-width: 1280px) {
  svg{
    height: 44px;
    width: 44px;
  }
}
</style>