<template>
  <article :class="hovDivClasses({wrapper:type})">
    <div :class="hovDivClasses({modal:type})">
      <slot />
    </div>
  </article>
</template>

<script setup>
  import { cva } from 'class-variance-authority';

  const hovDivClasses = cva([],{
  variants: {
    wrapper: {
      service: ['card-wrapper-border-fade-down', 'rounded-xl'],
      work: ['card-wrapper-border-fade-down', 'rounded-[20px]'],
      'work-svg': ['card-wrapper-border-full', 'rounded-[20px]'],
      'testimonial': ['card-wrapper-border-full', 'rounded-[20px]','flex'],
      'partner': ['card-wrapper-border-fade-down', 'rounded-[20px]'],
      CTA: ['card-wrapper-border-fade-down', 'rounded-[20px]'],
      social: ['card-wrapper-border-fade-down', 'rounded-full'],
    },
    modal: {
      service: ['card-modal-top-gradient', 'flex', 'flex-col', 'items-center', 'justify-between', 'max-md:gap-6','md:gap-10', 'xl:gap-[50px]', 'px-20', 'pt-[120px]', 'pb-20', 'rounded-xl'],
      work: ['card-modal-top-right-gradient', 'rounded-[20px]', 'flex' ,'flex-col', 'max-md:gap-6','md:gap-10','xl:gap-[50px]','max-md:p-[20px]','md:p-10','xl:p-[50px]'],
      'work-svg':['card-modal-bottom-right-gradient', 'relative', 'flex', 'justify-center' ,'max-md:py-[50px]','md:py-[85px]','xl:py-[105px]', 'rounded-[20px]'],
      'testimonial':['card-modal-top-right-gradient', 'flex', 'flex-col', 'gap-6','xl:gap-[30px]', 'p-[30px]','xl:p-10', 'rounded-[20px]','flex-1'],
      'partner':['card-modal-top-right-gradient', 'rounded-[20px]', 'flex' ,'flex-col', 'gap-[60px]', 'px-6' ,'md:px-10', 'xl:px-[50px]',
      'pt-[50px]','md:pt-20' ,'xl:pt-[100px]','pb-6', 'md:pb-[60px]' ,'xl:pb-20'],
      CTA: ['card-modal-top-gradient', 'rounded-[20px]', 'flex' ,'flex-col', 'gap-10', 'p-10'],
      social: ['card-modal-top-gradient-lg', 'rounded-full', 'flex', 'p-5'],
    }
  }
})

const props = defineProps({
  type: String,
})
</script>

<style scoped>
  .card-wrapper-border-fade-down{
    padding: 1px;
    background: linear-gradient(to top, transparent 0%, transparent 5% , #262626 99%);
  }

  .card-wrapper-border-full{
    padding: 1px;
    background-color: #333333;
  }

  .card-modal-top-gradient{
    background: linear-gradient(to top, #0F0F0F 0%, #0F0F0F 85%, #1a1a1a 100%);
  }
  .card-modal-top-gradient-lg{
    background: linear-gradient(to top, #0F0F0F 0%, #0F0F0F 55%, #1a1a1a 100%);
  }
  .card-modal-top-right-gradient {
    background: linear-gradient(to top right, #0F0F0F 0%, #0F0F0F 55%, #1b1b1b 99%);
  }

  .card-modal-bottom-right-gradient {
    background: linear-gradient(to right bottom, #0F0F0F 0%, #0F0F0F 55%, #1b1b1b 99%);
  }
</style>