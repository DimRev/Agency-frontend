<template>
  <header class="flex justify-between py-6 border-b border-gray-12 px-[162px]">
    <div>
      <a href="/">
        <LogoSvg />
      </a>
    </div>
    <Navbar />
  </header>
</template>
<script setup>
import Navbar from './Navbar.vue'
import LogoSvg from '../assets/svgs/LogoSvg.vue'

</script>
