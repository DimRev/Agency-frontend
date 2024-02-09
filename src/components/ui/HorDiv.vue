<template>
  <div class="relative w-full h-full">
    <div :class="hovDivClasses({offset})"></div>
  </div>
</template>

<script setup>
import { cva } from 'class-variance-authority'

const hovDivClasses = cva(['absolute', 'bg-gray-12', 'w-full' ,'h-[1px]'],{
  variants: {
    offset: {
      '0': ['top-0'],
      '50': ['top-[50%]'],
    }
  }
})
const props = defineProps({
  offset: String,
})
</script>