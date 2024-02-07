<template>
  <div class="wrapper-card">
    <article class="modal-card-top-left-gradient flex flex-col gap-10 p-10 rounded-[20px]">
      <header class="">
        <div class="">
          <div class="wrapper-img">
            <div class="relative modal-img-right-bottom-gradient flex justify-center py-[118px] rounded-[20px]">
              <div class="svg-wrapper">
                <slot name="svg"/>
              </div>
              <Link href="/" type="outline" class="bottom-0 absolute translate-y-[50%]" img="with">View project details <ArrowRightSvg/></Link>
            </div>
          </div>
        </div>
      </header>
      <main class="flex flex-col gap-6">
        <h3 class="font-semibold text-2xl"> <slot name="title"/> </h3>
        <div class="flex justify-between"><h4><slot name="category" /></h4> <h4><slot name="date" /></h4></div>
        <p class="text-gray-40"><slot name="content" /></p>
      </main>
    </article>
  </div>
</template>

<script setup>
import ArrowRightSvg from '../assets/svgs/ArrowRightSvg.vue';
import Link from './ui/Link.vue';

</script>

<style scoped>
  .modal-img-right-bottom-gradient {
    background: linear-gradient(to right bottom, #0F0F0F 0%, #0F0F0F 55%, #1b1b1b 99%);
  }
  .wrapper-img{
    padding: 1px;
    background-color: #1a1a1a;
    border-radius: 20px;
  }

  .modal-card-top-left-gradient {
    background: linear-gradient(to top right, #0F0F0F 0%, #0F0F0F 55%, #1b1b1b 99%);
  }

  .wrapper-card{
    padding: 1px;
    background: linear-gradient(to top, transparent 0%, transparent 5% , #333333 99%);
    border-radius: 20px;
  }
</style>