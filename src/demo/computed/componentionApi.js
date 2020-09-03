import { ref, onMounted, onUnmounted, computed } from 'vue'

export default function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  const count = ref(1)
  const isLister = ref(true)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  // 传入一个 getter 函数，返回一个默认不可手动修改的 ref 对象。
  const style = computed(() => {
    return `position: absolute; width: 100px;height: 100px; left: ${
      x.value - 50
    }px; top: ${y.value - 150}px; background-color: red`
  })

  // 传入一个拥有 get 和 set 函数的对象，创建一个可手动修改的计算状态。
  const plusOne = computed({
    get: () => count.value + 1,
    set: (val) => {
      count.value = val - 1
    }
  })

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y, style, plusOne, count, update, isLister }
}
