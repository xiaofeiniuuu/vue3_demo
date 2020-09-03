import { ref, computed } from 'vue'

export const useCounter = (count = 1) => {
  const state = ref(count)

  const double = computed(() => state.value * 2)

  return { state, double }
}
