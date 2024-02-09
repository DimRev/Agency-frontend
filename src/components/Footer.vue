<template>
  <footer class="mt-[150px] px-[162px]">
    <header class="flex items-center justify-between">
      <LogoSvg />

      <div class="flex items-center gap-5">
        <p>Follow Us On Social Media</p>
        <div class="flex items-center gap-[14px]">
          <a href="/">
            <Card type="social" >
              <LinkedinSocialSvg />
            </Card>
          </a>
          <a href="/">
            <Card type="social" >
              <InstagramSocialSvg />
            </Card>
          </a>
          <a href="/">
            <Card type="social" >
              <TwitterSocialSvg />
            </Card>
          </a>
        </div>
      </div>
    </header>
    <HorDiv offset="0" height="1" class="mt-[35px]" />
    <nav class="grid grid-cols-6 py-20">

      <FooterNavItem >
        <template v-slot:header>
          <a href="/">Home</a>
        </template>
        <template v-slot:content>
          <a href="/">Benefits</a>
          <a href="/">Our Testimonials</a>
          <a href="/">Partners</a>
        </template>
      </FooterNavItem>

      <FooterNavItem >
        <template v-slot:header>
          <a href="/">Services</a>
        </template>
        <template v-slot:content>
          <a href="/">Web Design</a>
          <a href="/">Website Development</a>
          <a href="/">App Development</a>
          <a href="/">Digital Marketing</a>
        </template>
      </FooterNavItem>
      <FooterNavItem >
        <template v-slot:header>
          <a href="/">Projects</a>
        </template>
        <template v-slot:content>
          <a href="/">ABC Tech Solutions</a>
          <a href="/">GreenEarth Eco Store</a>
          <a href="/">HealthTech Innovations</a>
          <a href="/">GlobalTech Solutions</a>
          <a href="/">TechGuru Inc.</a>
        </template>
      </FooterNavItem>
      <FooterNavItem >
        <template v-slot:header>
          <a href="/">About Us</a>
        </template>
        <template v-slot:content>
          <a href="/">Our Team</a>
          <a href="/">Achievements</a>
          <a href="/">Awards</a>
        </template>
      </FooterNavItem>
      <FooterNavItem >
        <template v-slot:header>
          <a href="/">Careers</a>
        </template>
        <template v-slot:content>
          <a href="/">Job Openings</a>
          <a href="/">Benefits & Perks</a>
          <a href="/">Employee Refral</a>
        </template>
      </FooterNavItem>
      <FooterNavItem >
        <template v-slot:header>
          <a href="/">Blogs</a>
        </template>
        <template v-slot:content>
          <a href="/">Our Blogs</a>
        </template>
      </FooterNavItem>

    </nav>
    <HorDiv offset="0" height="1"/>
    <footer class="flex justify-between py-[30px] text-gray-40">
      <div><p>@2024 DimRev. All Rights Reserved.</p></div>
      <div><p>Version 1.0</p></div>
      <div class="flex gap-5">
        <a href="/">Privacy Policy</a>
        <a href="/">Terms & Conditions</a>
        <a href="/">Cookie Policy</a>
      </div>
    </footer>
  </footer>
</template>

<script setup>
import LogoSvg from '../assets/svgs/LogoSvg.vue'
import LinkedinSocialSvg from '../assets/svgs/LinkedinSocialSvg.vue'
import Card from './ui/Card.vue'
import InstagramSocialSvg from '../assets/svgs/InstagramSocialSvg.vue'
import TwitterSocialSvg from '../assets/svgs/TwitterSocialSvg.vue'
import HorDiv from './ui/HorDiv.vue'
import FooterNavItem from './FooterNavItem.vue'

</script>