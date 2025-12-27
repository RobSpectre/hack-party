<template lang="pug">
section.h-full.w-full.bg-gray-900.text-white.p-4(:data-scene="name")
  .grid.grid-cols-5.gap-4.h-full
    // Column 1
    .col-span-1.flex.flex-col.gap-4.bg-gray-800.p-2.rounded
      slot(name="col1")
    
    // Column 2
    .col-span-1.flex.flex-col.gap-4.bg-gray-800.p-2.rounded
      slot(name="col2")

    // Column 3 (Center - Optional specific usage)
    .col-span-1.flex.flex-col.gap-4.bg-gray-800.p-2.rounded
      slot(name="col3")

    // Column 4
    .col-span-1.flex.flex-col.gap-4.bg-gray-800.p-2.rounded
      slot(name="col4")

    // Column 5
    .col-span-1.flex.flex-col.gap-4.bg-gray-800.p-2.rounded
      slot(name="col5")
</template>

<script>
export default {
  name: 'DnDScene',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* Ensure grid takes full height if section is flex container parent */
section {
  max-height: 100vh;
  overflow: hidden;
}
</style>
