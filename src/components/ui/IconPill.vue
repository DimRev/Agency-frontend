<template >
  <div v-if="type === 'arrow-right'"
    class="group-hover/link:bg-white-80 bg-gray-10 px-5 py-[10px] border border-transparent group-hover/link:border-white-75 rounded-full transition-colors duration-300">
    <ArrowRightSvg />
  </div>
</template>
<script setup>
import ArrowRightSvg from '../../assets/svgs/ArrowRightSvg.vue';

const props = defineProps({
  type: String,
})
</script>
