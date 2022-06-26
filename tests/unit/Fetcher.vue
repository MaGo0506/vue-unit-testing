<template>
  <div>

  </div>
</template>

<script>
import {onMounted} from "vue";
import axios from "axios";

export default {
  name: "Fetcher",
  setup() {

    onMounted(() => {
      axios.get('/')
    })
  }
}
</script>

<style scoped>

</style>