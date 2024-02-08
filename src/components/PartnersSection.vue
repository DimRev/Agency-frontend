<template>
  <section>
    <SectionHeader>
      <template v-slot:title>
        <span class="text-gray-40">Our</span> Partners and Clients
      </template>
      <template v-slot:content>
        We are grateful for the opportunity to work with esteemed partners and clients. Our strong relationships are a testament to our dedication and expertise in the digital realm.
      </template>
    </SectionHeader>

    <PartnerCard />
  </section>
</template>

<script setup>
  import SectionHeader from './SectionHeader.vue'
  import PartnerCard from './PartnerCard.vue';
</script>