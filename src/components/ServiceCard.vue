<template>
  <article class="card-wrapper">
    <div class="flex flex-col items-center justify-between gap-[50px] px-20 pt-[120px] pb-20 card card-modal">
      <div>
        <div class="svg-wrapper">
          <div class="svg-modal">
            <div class="svg-wrapper">
              <div class="svg-modal">
                <div class="svg-wrapper">
                  <div class="svg-modal">
                    <slot name="svg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center text-center">
        <h3 class="mb-5 font-semibold text-3xl"><slot name="title" /></h3>
        <p class="text-gray-40"><slot name="content"/></p>
      </div>
      <div>
        <Link type="full" img="with" href="/">Learn More <ArrowRightSvg/></Link>
      </div>
    </div>
  </article>
</template>

<script setup>
  import CodeSvg from '../assets/svgs/CodeSvg.vue'
  import ArrowRightSvg from '../assets/svgs/ArrowRightSvg.vue'
  import Link from './ui/Link.vue'
</script>

<style scoped>
  .svg-wrapper{
    padding: 2px;
    border-radius: 50%;
    background: linear-gradient(to top, transparent 0%, transparent 5% , #333333 99%);
  }
  .svg-modal{
    background: linear-gradient(to top, #0F0F0F 0%, #0F0F0F 55%, #1b1b1b 99%);
    padding: 20px;
    border-radius: 50%;
  }

  .card-wrapper{
    padding: 2px;
    border-radius: 12px;
    background: linear-gradient(to top, transparent 0%, transparent 5% , #262626 99%);
  }

  .card-modal{
    border-radius: 12px;
    background: linear-gradient(to top, #0F0F0F 0%, #0F0F0F 85%, #1a1a1a 100%);
  }
</style>