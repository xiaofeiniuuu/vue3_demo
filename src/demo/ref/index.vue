<template>
  <h1>Ref</h1>
  <h1>{{state}} * 2={{double}}</h1>
  <button @click="add">增加</button>
</template>

<script>

import { useCounter } from './componentionApi'

export default {
  setup() {
    const { state, double } = useCounter()

    function add() {
      state.value++
    }

    return { state, double, add }
  }
}

</script>
