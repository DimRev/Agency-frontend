<template >
  <div v-if="type === 'arrow-right'"
    class="group-hover/link:bg-white-80 bg-gray-10 max-xl:px-[14px] xl:px-5 xl:py-[10px] max-xl:py-[6px] border border-transparent group-hover/link:border-white-75 rounded-full duration-100">
    <ArrowRightSvg class="svg" />
  </div>
</template>
<script setup>
import ArrowRightSvg from '../../assets/svgs/ArrowRightSvg.vue';

const props = defineProps({
  type: String,
})
</script>

<style scoped>
.svg{
  width: 24px;
  height: 24px;

@media (min-width: 640px) {

}
@media (min-width: 768px) {

}
@media (min-width: 1024px) {

}
@media (min-width: 1280px) {
  svg{
  width: 28px;
  height: 28px;
  }
}
}
</style>