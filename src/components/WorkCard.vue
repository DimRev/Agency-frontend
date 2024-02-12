<template>
  <Card type="work">
      <header class="relative md:mb-16 max-md:mb-11 xl:mb-[76px] ">
        <div class="">
          <Card type="work-svg" class="card">
            <div class="overflow-hidden svg-wrapper">
              <slot name="svg"/>
              <img class="abstract" src="../assets/imgs/Abstract Design.png" alt="">
            </div>
          </Card>
          <Link href="/" type="outline" class="bottom-0 left-1/2 z-10 absolute translate-x-[-50%] translate-y-[50%]" img="with">View project details <ArrowRightSvg/></Link>
        </div>
      </header>
      <main class="flex flex-col gap-6">
        <h3 class="font-semibold max-md:text-base md:text-xl xl:text-2xl"> <slot name="title"/> </h3>
        <div class="flex max-md:flex-col justify-between max-md:text-sm md:text-[16px] xl:text-base"><h4><slot name="category" /></h4> <h4><slot name="date" /></h4></div>
        <p class="text-gray-40"><slot name="content" /></p>
      </main>
    </Card>
</template>

<script setup>
import ArrowRightSvg from '../assets/svgs/ArrowRightSvg.vue'
import Link from './ui/Link.vue'
import Card from './ui/Card.vue'

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
</style>