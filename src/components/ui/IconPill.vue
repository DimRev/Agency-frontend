<template >
  <div v-if="type === 'arrow-right'"
    class="px-5 py-[10px] bg-gray-10 rounded-full border border-transparent transition-colors duration-300 group-hover/link:bg-white-80 group-hover/link:border-white-75">
    <ArrowRightSvg />
  </div>
</template>
<script setup>
import ArrowRightSvg from '../../assets/svgs/ArrowRightSvg.vue';

const props = defineProps({
  type: String,
})
</script>
