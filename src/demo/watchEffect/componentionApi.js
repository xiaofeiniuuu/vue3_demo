import { reactive, watchEffect } from 'vue'

export const useAlert = (count = 1) => {
  const state = reactive({
    count
  })

  // 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。
  // const stopEffect = watchEffect(() => {
  //   console.log(`count is ${state.count}`)
  // })

  // setTimeout(() => {
  //   state.count++
  // }, 100)

  // 当 watchEffect 在组件的 setup() 函数或生命周期钩子被调用时， 侦听器会被链接到该组件的生命周期，并在组件卸载时自动停止。
  // 清除副作用
  // 有时副作用函数会执行一些异步的副作用, 这些响应需要在其失效时清除（即完成之前状态已改变了）。所以侦听副作用传入的函数可以接收一个 onInvalidate 函数作入参, 用来注册清理失效时的回调。当以下情况发生时，这个失效回调会被触发:
  // 副作用即将重新执行时   侦听器被停止 (如果在 setup() 或 生命周期钩子函数中使用了 watchEffect, 则在卸载组件时)
  const stopEffect = watchEffect((onInvalidate) => {
    const token = setTimeout(() => {
      console.log(`count is ${state.count}`)
    }, 3000)
    console.log(token)
    onInvalidate(() => {
      console.log('被停止')
      // 取消之前的异步操作
      clearTimeout(token)
    })
  })

  return { state, stopEffect }
}

// stopEffect 停止侦听
