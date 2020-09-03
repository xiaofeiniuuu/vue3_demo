<template>
  <h1>Watch</h1>
  <h1>reactive state: {{ state.count }}</h1>
  <button @click="add('state')">增加</button>
  <h1>ref state: {{ rState }}</h1>
  <button @click="add('rState')">增加</button>
</template>

<script>
import useWatch from './componentionApi'
export default {
  setup() {
    const { state, rState } = useWatch()
    function add(type) {
      if (type === 'state') {
        state.count++
        return
      }
      rState.value++
    }
    return { state, rState, add }
  }
}
</script>
