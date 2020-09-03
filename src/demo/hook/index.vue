<template>
  <h1>Hooks</h1>
  <h1>{{ count }}</h1>
  <button @click="add">增加</button>
</template>

<script>
import {
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  onUnmounted,
  ref
} from 'vue'
export default {
  setup() {
    const count = ref(1)
    function add() {
      count.value++
    }
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })

    return { count, add }
  }
}
</script>

// 与 2.x 版本生命周期相对应的组合式 API // beforeCreate -> 使用 setup()
//created -> 使用 setup() // beforeMount -> onBeforeMount // mounted ->
onMounted // beforeUpdate -> onBeforeUpdate // updated -> onUpdated //
beforeDestroy -> onBeforeUnmount // destroyed -> onUnmounted // errorCaptured ->
onErrorCaptured
