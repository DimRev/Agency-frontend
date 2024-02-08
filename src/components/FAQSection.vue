<template>
  <section class="mb-[120px]">
    <SectionHeader class="mb-[50px]">
      <template v-slot:title>
        <span class="text-gray-40 ">Frequently</span> Asked Questions
      </template>
      <template v-slot:content>
        Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions.
      </template>
    </SectionHeader>
    <form class="flex justify-center mb-[100px]">
      <div class="text-input">
        <input class="bg-gray-10 py-[18px] pr-6 rounded-r-full w-[376px] text-white outline-none placeholder-gray-40" type="text" placeholder="Search">
        <div class="text-input-svg-wrapper">
          <SearchSvg />
        </div>
      </div>
    </form>
    <FAQList />
  </section>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue'
import SearchSvg from '../assets/svgs/SearchSvg.vue'
import FAQList from './FAQList.vue'
</script>

<style scoped>
.text-input{
  position: relative;
  translate: 27px 0;

  input{
    border: 1px solid #333333;
    border-left-color: transparent;
    &:focus {
      border: 1px solid #4D4D4D;
      border-left-color: transparent;
      & + .text-input-svg-wrapper {
        border: 1px solid #4D4D4D;
        border-right-color: transparent;
      }
    }
  }
}
.text-input-svg-wrapper{
  border: 1px solid #333333;
  border-right-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  height: 100%;
  width: 54px;
  translate:-100% 0;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

