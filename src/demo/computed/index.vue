<template>
  <div style="height: 100%; width: 100%; position: relative;">
    <h1>Computed</h1>
    <h1>{{x}}-{{y}}</h1>
    <div :style="style" @click="handleClick" />
    <h1>{{count}}</h1>
    <h1>{{plusOne}}</h1>
    <button @click="handleChange">可变属性</button>
  </div>
</template>

<script>
import useMousePosition from './componentionApi'

export default {
  setup() {
    const { x, y, style, plusOne, count, update, isLister } = useMousePosition()

    function handleChange() {
      plusOne.value = plusOne.value - 1
    }

    function handleClick() {
      if (isLister.value) {
        isLister.value = false
        window.removeEventListener('mousemove', update)
        return
      }
      isLister.value = true
      window.addEventListener('mousemove', update)
    }

    return { x, y, style, handleChange, plusOne, count, handleClick }
  },
}
</script>
