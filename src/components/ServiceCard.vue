<template>
  <Card type="service">
    <div>
      <CirclesAvatarFrame size="lg">
        <slot name="svg"/>
      </CirclesAvatarFrame>
    </div>
      <div class="flex flex-col items-center text-center">
        <h3 class="mb-5 font-semibold text-3xl">
          <slot name="title" />
        </h3>
        <p class="text-gray-40">
          <slot name="content"/>
        </p>
      </div>
      <div>
        <Link type="full" img="with" href="/">Learn More <ArrowRightSvg/></Link>
      </div>
    </Card>
</template>

<script setup>
import Card from './ui/Card.vue'
  import ArrowRightSvg from '../assets/svgs/ArrowRightSvg.vue'
  import Link from './ui/Link.vue'
import CirclesAvatarFrame from './ui/CirclesAvatarFrame.vue'
</script>

<style scoped>

</style>