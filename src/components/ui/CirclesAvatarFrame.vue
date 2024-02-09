<template>
  <div :class="frameClass({wrapper:size})">
    <div :class="frameClass({modal:size})">
      <div :class="frameClass({wrapper:size})">
        <div :class="frameClass({modal:size})">
          <div :class="frameClass({wrapper:size})">
            <div :class="frameClass({modal:size})">
              <slot/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { cva } from 'class-variance-authority';
const frameClass = cva([],{
  variants: {
    wrapper: {
      lg:['svg-wrapper-lg'],
      md:['svg-wrapper-md'],
    },
    modal:{
      lg:['svg-modal-lg'],
      md:['svg-modal-md'],
    }
  }})
  const props = defineProps({
    size: String
  })
</script>

<style scoped>
  .svg-wrapper-lg{
    padding: 2px;
    border-radius: 50%;
    background: linear-gradient(to top, transparent 0%, transparent 5% , #333333 99%);
  }
  .svg-wrapper-md{
    padding: 2px;
    border-radius: 50%;
    background: linear-gradient(to top, transparent 0%, transparent 5% , #333333 99%);
  }
  .svg-modal-lg{
    background: linear-gradient(to top, #0F0F0F 0%, #0F0F0F 55%, #1b1b1b 99%);
    padding: 20px;
    border-radius: 50%;
  }
  .svg-modal-md{
    background: linear-gradient(to top, #0F0F0F 0%, #0F0F0F 55%, #1b1b1b 99%);
    padding: 14px;
    border-radius: 50%;
  }
</style>