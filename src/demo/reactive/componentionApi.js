import { reactive, computed } from 'vue'

export const useCounter = (count = 1) => {
  const state = reactive({
    count
  })

  const double = computed(() => state.count * 2)

  return { state, double }
}
