import { ref, reactive, watch } from 'vue'

export default function useWatch(count = 1, rcount = 1) {
  // watch监听reactive
  const state = reactive({
    count
  })
  watch(
    () => state.count,
    (newValue, oldValue) => {
      console.log('watchState', newValue, oldValue)
    }
  )

  // watch监听ref
  const rState = ref(rcount)
  watch(rState, (newValue, oldValue) => {
    console.log('watchRstate', newValue, oldValue)
  })

  // watch监听多个
  watch([state, rState], ([newfoo, newbar], [prevfoo, prevbar]) => {
    console.log(newfoo.count, newbar, prevfoo.count, prevbar)
  })

  return { state, rState }
}
