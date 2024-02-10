<template>
  <a :href="href" :class="linkClasses({type,img})">
    <slot/>
  </a>
</template>

<script setup>
import { cva } from 'class-variance-authority'

//TODO: Reorganize Link classes to a more generic form
const linkClasses = cva(['group/link','duration-300','cursor-pointer','rounded-full','transition-colors'],{
  variants:{
    type: {
      ghost: ['xl:px-6', 'px-4', 'xl:py-4', 'py-3', 'hover:bg-gray-10'],
      full: ['px-6', 'py-[18px]', 'bg-gray-10', 'text-white', 'border', 'border-gray-15', 'hover:bg-white', 'hover:text-gray-10', 'hover:border-transparent'],
      'outline-w-img': [ 'xl:pl-[34px]', 'max-xl:pl-5', 'xl:py-[18px]', 'max-xl:py-[10px]', 'xl:pr-[18px]', 'max-xl:pr-[10px]', 'border border-gray-12', 'hover:bg-white', 'hover:text-gray-10', 'hover:border-transparent', 'flex', 'items-center', 'xl:gap-[30px]', 'max-xl:gap-5'],
      outline: ['pl-[34px]', 'py-[18px]', 'pr-[18px]', 'border-2 border-gray-12', 'hover:bg-white', 'hover:text-gray-10', 'hover:border-transparent']
    },
    img: {
      with: ['flex', 'items-center', 'gap-[6px]']
    }
  }
})

const props = defineProps({
  href: String,
  type: String,
  img: String,
})



</script>
