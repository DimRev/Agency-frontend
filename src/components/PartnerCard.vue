<template>
  <Card type="partner" class="card">
    <div class="flex items-center justify-center gap-[14px] xl:gap-5">
      <div class="">
        <img class="abstract" src="../assets/imgs/Abstract Design.png" alt="">
        <CirclesAvatarFrame size="md">
          <DxSmall class="svg"/>
        </CirclesAvatarFrame>
      </div>
      <div class="">
        <PlusSvg class="plus-svg"/>
      </div>
      <div class="">
        <CirclesAvatarFrame size="md">
          <slot name="svg" />
        </CirclesAvatarFrame>
      </div>
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

<style scoped>
.card{
  position: relative;
  overflow: hidden;
}
.abstract{
  position: absolute;
  top: 0;
  left: 50%;
  width: 100px;
}
.svg{
    height: 26px;
    width: 26px;
  }
  .plus-svg{
    height: 30px;
    width: 30px;
  }
@media (min-width: 640px) {

}
/* max-md */
@media (max-width: 768px) {


}
/* md */
@media (min-width: 768px) {

}
/* lg */
@media (min-width: 1024px) {
}
/* xl */
@media (min-width: 1280px) {
  .svg{
    height: 34px;
    width: 34px;
  }
  .plus-svg{
    height: 40px;
    width: 40px;
  }
}
</style>