<template>
  <article class="flex flex-col items-center justify-between md:gap-10 max-md:gap-[30px] xl:gap-[50px] text-center">
    <div class="flex justify-center">
      <div class="relative top-left-gradient xl:p-6 max-xl:p-4 border-gray-30 xl:border-[10px] max-xl:border-[6px] rounded-full overflow-hidden svg-wrapper">
        <slot name="svg" ></slot>
        <img src="../assets/imgs/Abstract Design.png" alt="" class="abstract">
      </div>
    </div>
    <div>
      <h3 class="mb-5 md:text-xl max-md:text-base xl:text-2xl">
        <slot name="header"></slot>
      </h3>
      <p class="text-gray-40">
        <slot name="content"></slot>
      </p>
    </div>
    <Link type="outline-w-img" :href="href">
    <span>Learn More</span>
    <IconPill type="arrow-right"  />
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

<style>
.abstract{
  position: absolute;
  top: 0;
  left: 0;
  translate: 0 300%;
  scale: 7;
  z-index: 10;
}

.top-left-gradient {
    background: linear-gradient(to top left, #0F0F0F 0%, #0F0F0F 55%, #333333 99%);
  }
</style>