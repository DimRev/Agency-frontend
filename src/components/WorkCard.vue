<template>
  <Card type="work">
      <header class="">
        <div class="">
          <Card type="work-svg">
            <div class="svg-wrapper">
              <slot name="svg"/>
            </div>
            <Link href="/" type="outline" class="bottom-0 absolute translate-y-[50%]" img="with">View project details <ArrowRightSvg/></Link>
          </Card>
        </div>
      </header>
      <main class="flex flex-col gap-6">
        <h3 class="font-semibold text-2xl"> <slot name="title"/> </h3>
        <div class="flex justify-between"><h4><slot name="category" /></h4> <h4><slot name="date" /></h4></div>
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
</style>