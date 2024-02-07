<template>
  <section class="mb-[120px]">

    <SectionHeader class="mb-20">
      <template v-slot:title>
        <span class="text-gray-40">Our</span> Works
      </template>
      <template v-slot:content>
        Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself.
      </template>
    </SectionHeader>

    <main class="grid grid-cols-2 gap-[50px]">
      <WorkCard >
        <template v-slot:svg >
          <Shape2Svg />
        </template>
        <template v-slot:title >
          Innovative E-commerce Platform
        </template>
        <template v-slot:category >
          Category: Web Development.
        </template>
        <template v-slot:date >
          January 2022
        </template>
        <template v-slot:content >
          Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.
        </template>
      </WorkCard>

      <WorkCard >
        <template v-slot:svg >
          <Shape3Svg />
        </template>
        <template v-slot:title >
          Mobile App for Enhanced Fitness
        </template>
        <template v-slot:category >
          Category: Mobile App Development.
        </template>
        <template v-slot:date >
          March 2022
        </template>
        <template v-slot:content >
          Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy an enjoyable experience.
        </template>
      </WorkCard>

      <WorkCard >
        <template v-slot:svg >
          <Shape1Svg />
        </template>
        <template v-slot:title >
          Modern Corporate Website
        </template>
        <template v-slot:category >
          Category: Web Design.
        </template>
        <template v-slot:date >
          April 2022
        </template>
        <template v-slot:content >
          Check out our sleek and modern corporate website that showcases the client's brand and services. Its responsive design ensures a consistent experience across devices.
        </template>
      </WorkCard>

      <WorkCard >
        <template v-slot:svg >
          <Shape4Svg />
        </template>
        <template v-slot:title >
          Digital Marketing Success Story
        </template>
        <template v-slot:category >
          Category: Digital Marketing.
        </template>
        <template v-slot:date >
          January 2022
        </template>
        <template v-slot:content >
          Discover how our data-driven digital marketing strategies boosted a client's online presence, resulting in a significant increase in website traffic and leads.
        </template>
      </WorkCard>

    </main>

  </section>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue'
import WorkCard from './WorkCard.vue'
import Shape1Svg from '../assets/svgs/Shape1Svg.vue'
import Shape2Svg from '../assets/svgs/Shape2Svg.vue'
import Shape3Svg from '../assets/svgs/Shape3Svg.vue'
import Shape4Svg from '../assets/svgs/Shape4Svg.vue'


</script>