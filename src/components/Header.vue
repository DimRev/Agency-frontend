<template>
  <header class="grid grid-cols-lg-main lg:grid-cols-xl-main py-6 border-b border-gray-12">
    <div class="col-start-2 flex items-center justify-between">
      <div>
        <a href="/">
          <LogoSvg />
        </a>
      </div>
      <Navbar />
    </div>
  </header>
</template>
<script setup>
import Navbar from './Navbar.vue'
import LogoSvg from '../assets/svgs/LogoSvg.vue'

</script>
