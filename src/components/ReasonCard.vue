<template>
  <article class="flex flex-col text-center gap-[50px] items-center justify-between">
    <div class="flex justify-center">
      <div class="p-6 bg-gray-10 rounded-full border-[10px] border-gray-30">
        <slot name="svg"></slot>
      </div>
    </div>
    <div>
      <h3 class="text-2xl mb-5">
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
