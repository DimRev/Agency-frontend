<template>
  <header class="text-center">
      <h1 class="max-md:row-start-2 mb-3 md:mb-4 xl:mb-7 font-semibold text-[38px] md:text-5xl max-md:text-center xl:text-[58px]">
        <slot name="title" />
      </h1>
      <p class="text-gray-40">
        <slot name="content" />
      </p>
    </header>
</template>