<template>
  <article class="flex flex-col items-center justify-between gap-[50px] text-center">
    <div class="flex justify-center">
      <div class="bg-gray-10 p-6 border-[10px] border-gray-30 rounded-full">
        <slot name="svg"></slot>
      </div>
    </div>
    <div>
      <h3 class="mb-5 text-2xl">
        <slot name="header"></slot>
      </h3>
      <p class="text-gray-40">
        <slot name="content"></slot>
      </p>
    </div>
    <Link type="outline-w-img" :href="href">
    <span>Learn More</span>
    <IconPill type="arrow-right" />
    </Link>
  </article>
</template>

<script setup>
import Link from './ui/Link.vue'
import IconPill from './ui/IconPill.vue'

const props = defineProps({
  href: String,
})
</script>
