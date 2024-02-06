<template>
  <header class="text-center">
      <h1 class="mb-7 font-semibold text-[48px]">
        <slot name="title" />
      </h1>
      <p class="text-gray-40">
        <slot name="content" />
      </p>
    </header>
</template>