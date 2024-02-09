<template>
  <section>
    <SectionHeader>
      <template v-slot:title>
        <span class="text-gray-40">Our</span> Partners and Clients
      </template>
      <template v-slot:content>
        We are grateful for the opportunity to work with esteemed partners and clients. Our strong relationships are a testament to our dedication and expertise in the digital realm.
      </template>
    </SectionHeader>

    <main class="grid grid-cols-3 gap-[20px]">
      <PartnerCard >
        <template v-slot:svg><Shape1LogoSvg/></template>
        <template v-slot:title>ABC Tech Solutions</template>
        <template v-slot:content>A leading technology firm that trusted DigitX to develop their responsive website, showcasing their cutting-edge products and services.</template>
      </PartnerCard>
      <PartnerCard >
        <template v-slot:svg><Shape2LogoSvg/></template>
        <template v-slot:title>GreenEarth Eco Store</template>
        <template v-slot:content>DigitX collaborated with GreenEarth Eco Store to create an engaging e-commerce platform that promotes sustainable living and eco-friendly products.</template>
      </PartnerCard>
      <PartnerCard >
        <template v-slot:svg><Shape3LogoSvg/></template>
        <template v-slot:title>HealthTech Innovations</template>
        <template v-slot:content>DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.</template>
      </PartnerCard>
      <PartnerCard >
        <template v-slot:svg><Shape4LogoSvg/></template>
        <template v-slot:title>GlobalTech Solutions</template>
        <template v-slot:content>GlobalTech Solutions partnered with DigitX for a website redesign, resulting in a modern interface that elevates their online presence.</template>
      </PartnerCard>
      <PartnerCard >
        <template v-slot:svg><Shape5LogoSvg/></template>
        <template v-slot:title>TechGuru Inc.</template>
        <template v-slot:content>DigitX's digital marketing strategies boosted TechGuru Inc.'s online visibility and customer engagement, driving significant business growth.</template>
      </PartnerCard>
      <PartnerCard >
        <template v-slot:svg><Shape6LogoSvg/></template>
        <template v-slot:title>ArtScape Gallery</template>
        <template v-slot:content>DigitX brought ArtScape Gallery's artistic vision to life with a visually stunning website, showcasing the work of talented artists.</template>
      </PartnerCard>
    </main>
  </section>
</template>

<script setup>
  import SectionHeader from './SectionHeader.vue'
  import PartnerCard from './PartnerCard.vue'
  import Shape1LogoSvg from '../assets/svgs/Shape1LogoSvg.vue'
  import Shape2LogoSvg from '../assets/svgs/Shape2LogoSvg.vue'
  import Shape3LogoSvg from '../assets/svgs/Shape3LogoSvg.vue'
  import Shape4LogoSvg from '../assets/svgs/Shape4LogoSvg.vue'
  import Shape5LogoSvg from '../assets/svgs/Shape5LogoSvg.vue'
  import Shape6LogoSvg from '../assets/svgs/Shape6LogoSvg.vue'
</script>