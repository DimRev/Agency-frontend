<template>
  <article class="flex flex-col justify-between">
    <Card type="testimonial" class="flex-1">
      <div class="bg-gray-15-33 p-[14px] border border-gray-10 rounded-lg w-fit"><TwitterSvg /></div>
        <p>
          <slot name="content" />
        </p>
    </Card>
    <div class="translate-y-[-1px]">
      <CommentTringleSvg />
    </div>
    <div class="flex gap-[14px] mt-[21px]">
      <div><slot name="img" /></div>
      <div>
        <h4 class="max-md:text-[16px] md:text-[18px] xl:text-xl"><slot name="user-name"/></h4>
        <p class="font-light text-gray-40 max-md:text-sm md:text-base xl:text-[18px] "><slot name="user-title"/></p>
      </div>
    </div>
  </article>
</template>

<script setup>
import CommentTringleSvg from '../assets/svgs/CommentTringleSvg.vue'
import TwitterSvg from '../assets/svgs/TwitterSvg.vue'
import Card from './ui/Card.vue'

  const props = defineProps({
    src: {type: String, required: true},
    alt: {type: String, required: true},
  })
</script>

<style scoped>
.bg-gray-15-33{
  background: #26262633;
}
</style>
