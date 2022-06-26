<template>
  <button @click="increment">Increment</button>
  <div v-if="count % 2 === 0">
    Count: {{ count }}. Count is even.
  </div>

  <div v-if="count % 2 !== 0">
    Count: {{ count }}. Count is odd.
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from 'vuex';

export default {
  name: "App.vue",
  setup() {
    const store = useStore(),
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