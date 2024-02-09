<template>
  <Card type="partner">
    <div class="flex items-center justify-center gap-5">
      <CirclesAvatarFrame size="md">
        <DxSmall />
      </CirclesAvatarFrame>
      <PlusSvg />
      <CirclesAvatarFrame size="md">
        <slot name="svg" />
      </CirclesAvatarFrame>
    </div>
    <div class="text-center">
      <h3 class="mb-5"><slot name="title"/></h3>
      <p class="text-gray-40"><slot name="content"/></p>
    </div>
  </Card>
</template>

<script setup>
import DxSmall from '../assets/svgs/DxSmall.vue';
import PlusSvg from '../assets/svgs/PlusSvg.vue';
import Card from './ui/Card.vue'
import CirclesAvatarFrame from './ui/CirclesAvatarFrame.vue';


</script>