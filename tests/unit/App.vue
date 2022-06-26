<template>
  <button @click="increment">Increment</button>
  <div v-if="count % 2 === 0">
    Count: {{ count }}. Count is even.
  </div>

  <div v-if="count % 2 !== 0">
    Count: {{ count }}. Count is odd.
  </div>
  <Fetcher/>
</template>

<script>
import {computed, inject} from "vue";
import {useStore} from 'vuex';
import Fetcher from "./Fetcher";

export default {
  name: "App.vue",
  components: {Fetcher},
  setup() {
    const store = inject('store'),
        count = computed(() => store.state.count)

    const increment = () => {
      store.commit('increment')
    }

    return {
      count,
      increment
    }
  }
}
</script>

<style scoped>

</style>