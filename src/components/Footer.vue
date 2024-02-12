<template>
  <footer class="grid max-md:grid-cols-mobile-main md:grid-cols-lg-main xl:grid-cols-xl-main mt-[150px]">
    <div class="col-start-2">
      <header class="flex items-center justify-between">
        <LogoSvg class="logo-svg"/>
        <div class="flex max-md:flex-col items-center gap-5">
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
      <nav class="grid grid-cols-6 max-md:grid-cols-2 py-20">
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
      <footer class="flex max-md:flex-col justify-between gap-[30px] py-[30px] text-center text-gray-40">
        <div><p>@2024 DimRev. All Rights Reserved.</p></div>
        <!-- <div></div> -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
          <p>Version 1.0</p>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Cookie Policy</a>
        </div>
      </footer>
    </div>
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

<style scoped>
  .logo-svg{
    width: 62px;
    height: 44px;
  }
  /* sm */
@media (min-width: 640px) {
}
/* max-md */
@media (max-width: 768px) {

}
/* md */
@media (min-width: 768px) {
  .logo-svg{
    width: 76px;
    height: 44px;
  }
}
/* lg */
@media (min-width: 1024px) {
}
/* xl */
@media (min-width: 1280px) {

}
</style>