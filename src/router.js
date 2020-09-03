import { reactive } from 'vue'

export default function useRouter() {
  console.log(document.location.hash)
  const route = reactive({
    hash: document.location.hash
  })

  window.addEventListener('hashchange', (v1, v2) => {
    route.hash = document.location.hash
  })

  return route
}
