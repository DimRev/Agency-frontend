<template>
  <div class="flex flex-col gap-6">
        <h3 class="font-semibold"><slot name="header"/></h3>
        <div class="flex flex-col gap-[14px] text-white-50">
          <slot name="content" />
        </div>
      </div>
</template>

<script setup>

</script>