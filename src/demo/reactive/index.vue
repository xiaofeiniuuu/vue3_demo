<template>
  <h1>Reactive</h1>
  <h1>{{state.count}} * 2={{double}}</h1>
  <button @click="add">增加</button>
</template>

<script>

import { useCounter } from './componentionApi'

export default {
  setup() {
    const { state, double } = useCounter()

    function add() {
      state.count++
    }

    return { state, double, add }
  }
}

</script>


// 接收一个普通对象然后返回该普通对象的响应式代理。等同于 2.x 的 Vue.observable()
// const obj = reactive({ count: 0 })
// 响应式转换是“深层的”：会影响对象内部所有嵌套的属性。基于 ES2015 的 Proxy 实现，返回的代理对象不等于原始对象。建议仅使用代理对象而避免依赖原始对象。