import { readonly, reactive, watchEffect } from 'vue'

export default function useReadOnly() {
  const original = reactive({
    count: 0
  })

  const copy = readonly(original)

  watchEffect(() => {
    // 依赖追踪
    console.log(copy.count)
  })

  return { original, copy }
}
