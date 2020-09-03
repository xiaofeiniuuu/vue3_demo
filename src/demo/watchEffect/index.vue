<template>
  <h1>WatchEffect</h1>
  <div id="watchEffect"></div>
  <button @click="add">增加</button>
  <button @click="stop">关闭副作用</button>
</template>

<script>
import { useAlert } from './componentionApi'

export default {
  setup() {
    const { state, stopEffect } = useAlert()

    function add() {
      state.count++
    }

    function stop() {
      stopEffect()
    }

    return { state, add, stop }
  },
}
</script>
