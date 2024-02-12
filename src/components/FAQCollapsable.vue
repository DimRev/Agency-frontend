<template>
    <article>
        <div class="flex md:gap-[14px] max-md:gap-6 xl:gap-5 md:p-[30px] max-md:p-6 xl:p-[34px]">
          <div class="flex flex-col md:gap-6 max-md:gap-[14px] xl:gap-[30px]">
            <h3 class="max-md:text-base md:text-[18px] xl:text-xl">How long does it take to complete a web development project?</h3>
            <p class="text-gray-40 max-md:text-sm md:text-base xl:text-[18px]">The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.</p>
          </div>
          <div class="flex items-center justify-center bg-gray-10 px-[16.67px] rounded-full h-[50px]">
            <MinusSvg/>
          </div>
        </div>
        <HorDiv offset="0" />
      </article>
</template>

<script setup>
import HorDiv from './ui/HorDiv.vue'
import MinusSvg from '../assets/svgs/MinusSvg.vue'
import PlusSvg from '../assets/svgs/PlusSvg.vue'
</script>