<template lang="pug">
  .switch
    label.ctrl
      input(type='checkbox' :checked='value' @change='updateValue')
      span.slider(:class='ctrlClass')
    label.label(v-if='label' :class='labelClass') {{ label }}

</template>
<script>
export default {
  name: 'ctrl-switch',
  props: ['label', 'value', 'square'],
  computed: {
    ctrlClass () {
      return (!this.square) ? 'round' : 'square'
    },
    labelClass () {
      return (this.value) ? '' : 'gray'
    }
  },
  methods: {
    updateValue (event) {
      const value = event.target.checked
      this.$emit('change', value)
    }
  }
}
</script>
<style lang="stylus">
  @import '../../lib/styl/vars.styl'

  $sw-width = 2em
  $sw-space = ($sw-width / 10)
  $sw-height = ($sw-width / 2)
  $sw-size = $sw-height - (2 * $sw-space)

  .switch
    display flex
    align-items center

    .ctrl
      display inline-block
      position relative
      width $sw-width
      max-width $sw-width
      height $sw-height
      margin 0 .5em 0 0
      padding 0

    .label
      margin-left .5em
      font-size .9em
      display inline
      margin 0
      padding 0

    input[type="checkbox"]
      display none
      border none

    .slider
      position absolute
      cursor pointer
      top 0
      left 0
      right 0
      bottom 0
      background-color gray
      transition 0.4s
      display inline
      box-shadow $inset-sh

    .slider:before
      position absolute
      content ''
      height $sw-size
      width @height
      left $sw-space
      bottom @left
      background-color white
      box-shadow $tip-sh
      transition 0.4s

    input:checked + .slider
      background-color $color

    input:focus + .slider
      box-shadow 0 0 1px $brand

    input:checked + .slider:before
      transform translateX($sw-width - $sw-size - $sw-space * 2)

    .slider.round
      border-radius $sw-height

    .slider.round:before
      border-radius 50%
</style>
