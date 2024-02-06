<template>
  <a v-if="type === 'ghost'" :href="href || '/'"
    class="px-6 py-4 rounded-full transition-colors duration-300 hover:bg-gray-10 cursor-pointer">
    <slot></slot>
  </a>

  <a v-else-if="type === 'full'" :href="href || '/'"
    class="px-6 py-[18px] bg-gray-10 rounded-full text-white border transition-colors duration-300 border-gray-15 hover:bg-white hover:text-gray-10 hover:border-transparent cursor-pointer">
    <slot></slot>
  </a>

  <a v-else-if="type === 'outline-w-img'" :href="href"
    class="group/link pl-[34px] py-[18px] pr-[18px] border border-gray-12 rounded-full transition-colors duration-300 hover:bg-white hover:text-gray-10 hover:border-transparent cursor-pointer flex items-center gap-[30px]">
    <slot></slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
  type: String,
})

</script>

<style></style>