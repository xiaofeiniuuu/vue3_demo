<template>
  <h1>Readonly</h1>
  <h1>original: {{original.count}}</h1>
  <button @click="add">修改</button>
  <h1>copy: {{copy.count}}</h1>
  <button @click="addCopy">修改</button>
</template>

<script>
import useReadOnly from './componentionApi'

export default {
  setup() {
    const { original, copy } = useReadOnly()

    function add() {
      // original 上的修改会触发 copy 上的侦听
      original.count++
    }

    function addCopy() {
      // 无法修改 copy 并会被警告
      copy.count++
    }

    return { original, copy, add, addCopy }
  },
}
</script>
