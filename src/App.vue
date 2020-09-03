<template>
  <button @click="changeRoute('#reactive')">reactive</button>
  <button @click="changeRoute('#ref')">ref</button>
  <button @click="changeRoute('#watchEffect')">watchEffect</button>
  <button @click="changeRoute('#computed')">computed</button>
  <button @click="changeRoute('#readonly')">readonly</button>
  <button @click="changeRoute('#watch')">watch</button>
  <button @click="changeRoute('#hook')">hook</button>
  <Reactive v-if="route.hash === '#reactive'" />
  <watch-effect v-if="route.hash === '#watchEffect'" />
  <Ref v-if="route.hash === '#ref'" />
  <Computed v-if="route.hash === '#computed'" />
  <Readonly v-if="route.hash === '#readonly'" />
  <Watch v-if="route.hash === '#watch'" />
  <Hook v-if="route.hash === '#hook'" />
</template>

<script>
import Reactive from './demo/reactive/index.vue'
import Ref from './demo/ref/index.vue'
import WatchEffect from './demo/watchEffect/index.vue'
import Computed from './demo/computed/index.vue'
import Readonly from './demo/readonly/index.vue'
import Watch from './demo/watch/index.vue'
import Hook from './demo/hook//index.vue'
import useRouter from './router'
import { useCounter } from './demo/reactive/componentionApi'

export default {
  name: 'App',
  components: {
    Reactive,
    Ref,
    WatchEffect,
    Computed,
    Readonly,
    Watch,
    Hook
  },
  data: () => ({
    route: useRouter()
  }),
  methods: {
    changeRoute(hash) {
      document.location.hash = hash
    }
  }
}
</script>
