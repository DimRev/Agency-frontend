<template>
  <a :href="href" :class="linkClasses({type})">
    <slot/>
  </a>
</template>

<script setup>
import { cva } from 'class-variance-authority'

const linkClasses = cva(['duration-300','cursor-pointer','rounded-full','transition-colors'],{
  variants:{
    type: {
      ghost: ['px-6', 'py-4', 'hover:bg-gray-10'],
      full: ['px-6', 'py-[18px]', 'bg-gray-10', 'text-white', 'border', 'border-gray-15', 'hover:bg-white', 'hover:text-gray-10', 'hover:border-transparent'],
      'outline-w-img': ['group/link pl-[34px]', 'py-[18px]', 'pr-[18px]', 'border border-gray-12', 'hover:bg-white', 'hover:text-gray-10', 'hover:border-transparent', 'flex', 'items-center', 'gap-[30px]']
    }
  }
})

const props = defineProps({
  href: String,
  type: String,
})



</script>
