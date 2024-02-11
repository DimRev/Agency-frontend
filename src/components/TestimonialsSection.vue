<template>
  <section class="grid max-md:grid-cols-mobile-main md:grid-cols-lg-main xl:grid-cols-xl-main mb-[120px]">

    <SectionHeader class="col-start-2 mb-20">
      <template v-slot:title>
        <span class="text-gray-40">Our</span> Testimonials
      </template>
      <template v-slot:content>
        Don't just take our word for it; hear what our satisfied clients have to say about their experience with DigitX. We take pride in building lasting relationships and delivering exceptional results.
      </template>
    </SectionHeader>

    <section class="max-md:grid md:col-span-3 max-md:col-start-2 md:col-start-1 flex gap-[30px]">

      <TestimonialCard >
        <template v-slot:content >
          DigitX turned our business around! Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
        </template>
        <template v-slot:img >
          <img src="../assets/imgs/SarahThompsonAvatar.png" alt="Sarah Thompson Avatar">
        </template>
        <template v-slot:user-name >
          Sarah Thompson
        </template>
        <template v-slot:user-title >
          CEO of BlueBloom Fashion
        </template>
      </TestimonialCard>

      <TestimonialCard>
        <template v-slot:content >
          Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.
        </template>
        <template v-slot:img >
          <img src="../assets/imgs/MarkRobertsAvatar.png" alt="Mark Roberts Avatar">
        </template>
        <template v-slot:user-name >
          Mark Roberts
        </template>
        <template v-slot:user-title >
          Founder of GreenEarth Eco Store
        </template>
      </TestimonialCard>

      <TestimonialCard >
        <template v-slot:content >
          The mobile app DigitX developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.
        </template>
        <template v-slot:img >
          <img src="../assets/imgs/LisaWilliamsAvatar.png" alt="Lisa Williams Avatar">
        </template>
        <template v-slot:user-name >
          Lisa Williams
        </template>
        <template v-slot:user-title >
          Head of Product at HealthTech Innovations
        </template>
      </TestimonialCard>

      <TestimonialCard>
        <template v-slot:content >
          DigitX transformed our outdated website into a modern, responsive platform. Their attention to detail and ability to understand our vision made the entire process smooth and hassle-free.
        </template>
        <template v-slot:img >
          <img src="../assets/imgs/MichaelJohnsonAvatar.png" alt="Michael Johnson Avatar">
        </template>
        <template v-slot:user-name >
          Michael Johnson
        </template>
        <template v-slot:user-title >
          Marketing Manager at GlobalTech Solutions.
        </template>
      </TestimonialCard>

    </section>

  </section>

</template>

<script setup>
import SectionHeader from './SectionHeader.vue'
import TestimonialCard from './TestimonialCard.vue'

</script>