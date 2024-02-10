<template >
  <section class="flex flex-col mb-[150px]">
    <SectionHeader >
      <template v-slot:title>
        <span class="text-gray-40">Our</span> Services
      </template>
      <template v-slot:content>
        Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results.
      </template>
    </SectionHeader>

    <main class="grid grid-cols-2 gap-5 xl:gap-[30px] mt-[60px] xl:mt-20">
      <ServiceCard >
        <template v-slot:svg>
          <CodeSvg />
        </template>
        <template v-slot:title>
          Web Development
        </template>
        <template v-slot:content>
          Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a resounding success.
        </template>
      </ServiceCard>

      <ServiceCard >
        <template v-slot:svg>
          <PhoneSvg />
        </template>
        <template v-slot:title>
          Mobile App Development
        </template>
        <template v-slot:content>
          Embrace Mobility with Confidence Mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement. Whether it's iOS, Android, or cross-platform development, we ensure that your app delivers a seamless experience, leaving a lasting impression on your users.
        </template>
      </ServiceCard>

      <ServiceCard >
        <template v-slot:svg>
          <PointerSvg />
        </template>
        <template v-slot:title>
          Web Development
        </template>
        <template v-slot:content>
          Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a resounding success.
        </template>
      </ServiceCard>

      <ServiceCard >
        <template v-slot:svg>
          <LightningSvg />
        </template>
        <template v-slot:title>
          Digital Marketing
        </template>
        <template v-slot:content>
          Drive Your Business Forward In the vast digital landscape, standing out from the competition is crucial. Our digital marketing services help you rise above the noise and connect with your target audience effectively. From search engine optimization (SEO) to social media marketing and pay-per-click (PPC) campaigns, our data-driven strategies ensure that your message reaches the right people at the right time.
        </template>
      </ServiceCard>

    </main>
  </section>
</template>
<script setup>
import CodeSvg from '../assets/svgs/CodeSvg.vue'
import PointerSvg from '../assets/svgs/PointerSvg.vue'
import PhoneSvg from '../assets/svgs/PhoneSvg.vue'
import LightningSvg from '../assets/svgs/LightningSvg.vue'
import SectionHeader from './SectionHeader.vue'
import ServiceCard from './ServiceCard.vue'

</script>
<style >

</style>