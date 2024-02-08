<template>
  <article>
    <div class="bg-gray-20 wrapper-card">
      <div class="modal-card-top-right-gradient flex flex-col gap-[30px] p-10 rounded-[20px] h-[303px]">
        <div class="bg-gray-15-33 p-[14px] border border-gray-10 rounded-lg w-fit"><TwitterSvg /></div>
        <p>
          <slot name="content" />
        </p>
      </div>
    </div>
    <div class="translate-y-[-1px]">
      <CommentTringleSvg />
    </div>
    <div class="flex gap-[14px] mt-[21px]">
      <div><slot name="img" /></div>
      <div>
        <h4 class="text-xl"><slot name="user-name"/></h4>
        <p class="font-light text-gray-40"><slot name="user-title"/></p>
      </div>
    </div>
  </article>
</template>

<script setup>
  import CommentTringleSvg from '../assets/svgs/CommentTringleSvg.vue'
  import TwitterSvg from '../assets/svgs/TwitterSvg.vue'

  const props = defineProps({
    src: {type: String, required: true},
    alt: {type: String, required: true},
  })
</script>

<style scoped>
.modal-card-top-right-gradient {
    background: linear-gradient(to top right, #0F0F0F 0%, #0F0F0F 55%, #1b1b1b 99%);
  }
.wrapper-card{
  padding: 1px;
  border-radius: 20px;
}

.bg-gray-15-33{
  background: #26262633;
}
</style>
