<template>
  <div :class="`relative w-full ${hovDivClasses({height})}`">
    <div :class="`absolute bg-gray-12 w-full h-[1px] ${hovDivClasses({offset})}`"></div>
  </div>
</template>

<script setup>
import { cva } from 'class-variance-authority'

const hovDivClasses = cva([],{
  variants: {
    offset: {
      '0': ['top-0'],
      '50': ['top-[50%]'],
    },
    height: {
      full: ['h-full'],
      '1': ['h-1px']
    }
  }
})
const props = defineProps({
  offset: String,
  height: String,
})
</script>