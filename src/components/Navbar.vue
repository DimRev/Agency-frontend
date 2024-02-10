<template >
  <nav class="flex items-center gap-2 xl:gap-1.5">
    <Link type="ghost" href="/"><span class="text-sm xl:text-lg">Home</span></Link>
    <Link type="ghost" href="/"><span class="text-sm xl:text-lg">Service</span></Link>
    <Link type="ghost" href="/"><span class="text-sm xl:text-lg">Projects</span></Link>
    <Link type="ghost" href="/"><span class="text-sm xl:text-lg">About Us</span></Link>
    <Link type="ghost" href="/"><span class="text-sm xl:text-lg">Contact Us</span></Link>
    <Link type="ghost" href="/" class="mr-[-24px]"><span class="text-sm xl:text-lg">Blog</span></Link>
  </nav>
</template>

<script setup>
import Link from './ui/Link.vue'
</script>
