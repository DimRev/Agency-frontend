<template>
  <header class="flex justify-between px-[162px] py-6 border-b border-gray-12">
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
