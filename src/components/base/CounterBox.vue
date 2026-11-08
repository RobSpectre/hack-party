<template lang='pug'>
.hp-counter.rounded-lg.bg-blue.text-white
  .hp-counter-label.text-sm.uppercase.font-semibold {{ label }}
  .text-6xl.counter(:key='counter') {{ counter }}
  .text-sm.uppercase.font-semibold
     slot(name='footer')
</template>

<script>
export default {
  name: 'CounterBox',
  props: {
    counter: {
      type: Number,
      default: undefined
    },
    label: {
      type: String,
      default: 'Total'
    }
  }
}
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

.counter {
  font-family: 'Bungee', cursive;
}
</style>
